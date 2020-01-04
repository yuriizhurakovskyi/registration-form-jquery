var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log("\nStart page requested.\n");
    resp.send('<h1>Welcome!</h1>' + '<a href="http://localhost:3000/registration-form.html"' +
        ' style="text-decoration: none; font-size: 30px; color: #254e77"> 👉 Registration Form</a>');
});

server.get("/formGet", function (req, resp) {
    console.log("\nForm receipted by GET.\n");
    var obj = req.query;
    console.log(obj.lName += ".ValidatedByGET");
    console.log(obj.fName += ".ValidatedByGET");
    console.log(obj.age += ".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
	resp.send(obj);
});

server.post("/formPost", function (req, resp) {
    console.log("\nForm receipted by POST.\n");
    var obj = req.body;
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    resp.send(obj);
});

server.listen(3000);
