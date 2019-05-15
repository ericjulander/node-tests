const [https, http] = [require("https"), require("http")];

function getPageDataFromURL(url, callback) {
    var method = (/https\:/g.test(url)) ? https : http;
    method.get(url, (res) => {
        res.setEncoding("utf8")
        var body = "";
        res.on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
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
    var url = process.argv[2];
    getPageDataFromURL(url, () => {});
})();