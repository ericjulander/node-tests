const DIRECTORY_FILTER = require("./read-directory-filter.js");
var path = process.argv[2];
var ext = process.argv[3];

DIRECTORY_FILTER(path, ext, function (err, dirs) {
    if (err) {
        console.log(err);
        return;
    }

    dirs.forEach(directory => {
        console.log(directory);
    });
});