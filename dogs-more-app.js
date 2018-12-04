
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
app.use('/js', express.static('./js'));
app.use('/css', express.static('./css'));
app.use('/img', express.static('./img'));

// creating get for animal data lists
app.get('/get-animal-lists', function (req, res) {

    let formatOfResponse = req.query['format'];
    let dataList = null;

    // Determining which gallery to put up
    if (formatOfResponse == 'see-dogs') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getDogs();
        res.send(dataList);

    } else if (formatOfResponse == 'see-cats') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getCatList();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format! (Dog/Cat Lists)'});
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
