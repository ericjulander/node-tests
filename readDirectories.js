const fs = require('fs');
var path = process.argv[2];
var ext = "\." + process.argv[3];
fs.readdir(path, function (err, dirs) {
    dirs = dirs.filter(function (item) {
        return new RegExp(ext).test(item);
    });

    dirs.forEach(function (dir) {
        console.log(dir);
    });

});