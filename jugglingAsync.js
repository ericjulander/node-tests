const [async, https, http] = [require("async"), require("https"), require("http")];

function getPageDataFromURL(url, callback) {
    var method = (/https\:/g.test(url)) ? https : http;
    method.get(url, (res) => {
        res.setEncoding("utf8")
        var body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        res.on("end", () => {
            callback(null, body);
        });

        res.on("error", (err) => {
            callback(err, null);
        });
    });
}

(function () {
    var urls = [].concat(process.argv).slice(2);
    async.map(urls, getPageDataFromURL, function (err, pageData) {
        if (err) {
            console.log(err);
            return;
        }

        pageData.forEach(dat => console.log(dat));
    });
})();