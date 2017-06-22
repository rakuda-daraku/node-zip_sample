var fs = require('fs');
var path = require('path');

var zip = new require('node-zip')();

zip.file('file1.txt', fs.readFileSync(path.join(__dirname, 'file1.txt')));
zip.file('file2.txt', fs.readFileSync(path.join(__dirname, 'file2.txt')));

var data = zip.generate({ base64:false, compression: 'DEFLATE' });

fs.writeFileSync('test.zip', data, 'binary');
