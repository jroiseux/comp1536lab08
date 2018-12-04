
const lists = require('./js/data');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./html/index.html', "utf8");
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);

    res.send(dom.serialize());
});

// creating virtual paths for css, js, and img
app.use('/js', express.static('./js'))
app.use('/css', express.static('./css'))

// creating get for animal data lists
app.get('/get-animal-lists', function (req, res) {

    let formatOfResponse = req.query['format'];
    let dataList = null;

    // Determining which gallery to put up
    if (formatOfResponse == 'see-dogs') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getDogList();
        res.send(dataList);

    } else if (formatOfResponse == 'see-cats') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getCatList();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format! (Dog/Cat Lists)'});
    }

    // Determining whose favourite treat list to get
    let treatResponse = req.query['format'];
    let treatList = null;
    if (treatResponse == 'show-treats-1') {

        res.setHeader('Content-Type', 'application/json');
        treatList = lists.getIvyTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-2') {

        res.setHeader('Content-Type', 'application/json');
        treatList = lists.getAryaTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-3') {

        res.setHeader('Content-Type', 'application/json');
        treatList = lists.getGaryTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-4') {

        res.setHeader('Content-Type', 'application/json');
        treatList = lists.getRufusTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-5') {

        res.setHeader('Content-Type', 'text/html');
        treatList = lists.getLilyTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-6') {

        res.setHeader('Content-Type', 'text/html');
        treatList = lists.getHugoTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-7') {

        res.setHeader('Content-Type', 'text/html');
        treatList = lists.getSimbaTreats();
        res.send(treatList);

    } else if (treatResponse == 'show-treats-8') {

        res.setHeader('Content-Type', 'text/html');
        treatList = lists.getMiloTreats();
        res.send(treatList);

    } else {
        res.send({msg: 'Wrong format!'});
        console.log('not loading!');
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// for page not found (i.e., 404)
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Error 404: Nothing here.</p></body></html>");
})

// RUN SERVER 
let port = 4200;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})