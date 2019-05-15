const fs = require('fs');

// read directory with the applied filter
module.exports = function (path, ext, callback) {

    fs.readdir(path, function (err, dirs) {
        if (err) {
            callback(err);
            return;
        };

        dirs = dirs.filter(function (item) {
            //console.log(item, new RegExp("./" + ext).test(item));
            return new RegExp("\." + ext).test(item);
        });

        callback(null, dirs);

    });
}
module.exports