var fs = require('fs');
var path = require('path');

fs.readFile('test.zip', 'binary', function(err, data){
  var zip = new require('node-zip')(data, {base64: false, checkCRC32: true});

  for(var i in zip.files) {
    for(var j in zip.files[i]) {
      if (j == '_data') {
        // 展開後のファイルのテキストの内容を表示
        console.log(zip.files[i][j]);
      }
    }
  }
});






