var express = require('express');
var app = express();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var fs = require('fs');
app.use(express.static(__dirname));

var port = process.env.PORT || 8081;

app.post('/contacts/assets',multipartyMiddleware,(req, res) => {
  fs.readFile(req.files.file.path, function (err, data) {
    console.log('DATA: ',data)

    // set the correct path for the file not the temporary one from the API:
    let filePath = "./assets/images/" + req.files.file.name.split(' ').join('');

    // copy the data from the req.files.file.path and paste it to file.path
    fs.writeFile(filePath, data, function (err) {
      if (err) {
        return console.warn(err);
      }
      console.log("The file: " + req.files.file.name + " was saved to " + filePath);
    });
  });
  res.end()
})

app.listen(port);
console.log('Use port ' + port + ' to connect to this server');

exports = module.exports = app;
