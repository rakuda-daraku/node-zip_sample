var fs = require('fs');
var path = require('path');

fs.readFile('test.zip', 'binary', function(err, data){
  var zip = new require('node-zip')(data, {base64: false, checkCRC32: true});

  for(var i in zip.files) {
    // console.log(zip.files[i]);
    for(var j in zip.files[i]) {
      if (j == '_data') {
        console.log(zip.files[i][j]);
      }
    }
  }
});






