
const lists = require('data');
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

// creating virtual paths for css and js
app.use('/js', express.static('js'))
app.use('/css', express.static('css'))

// creating get for data lists
app.get('/get-list', function (req, res) {

    let formatOfResponse = req.query['format'];
    let dataList = null;

    if (formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if (formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
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