var fs = require('fs');
var zlib = require('zlib');
var gzlib = zlib.createGzip();
var guzlib = zlib.createGunzip();

//zipCode
var readable = fs.createReadStream(__dirname + '/fileSource.txt');
var compressed = fs.createWriteStream(__dirname + '/fileDestination.txt.gz');
readable.pipe(gzlib).pipe(compressed);

/*
//UnzipCode uncomment to do it
var readable2 = fs.createReadStream(__dirname + '/fileDestination.txt.gz');
var uncompressed = fs.createWriteStream(__dirname + '/fileDestination.txt');
readable2.pipe(guzlib).pipe(uncompressed);
*/