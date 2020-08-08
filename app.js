const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { input } = req.query;

  res.send(tsvJSON(input));
});

function tsvJSON(tsv) {
  var lines = tsv.split("\n");

  var result = [];

  var headers = lines[0].split("\t");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split("\t");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
