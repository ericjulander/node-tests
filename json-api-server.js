const [http, fs, url] = [require("http"), require("fs"), require('url')];

const port = process.argv[2];
let server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    var URL = (url.parse(request.url, true));

    var paths = {
        "/api/parsetime": parseTime,
        "/api/unixtime": parseUnixTime
    }

    var apiResponse = paths[URL.pathname](URL.search) || "Wha???";

    response.end(JSON.stringify(apiResponse));

    function parseTime(queryString) {

        var itemToParse = (queryString.split("=")[1]);
        var date = new Date(itemToParse);

        return {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };

    }

    function parseUnixTime(queryString) {
        var itemToParse = (queryString.split("=")[1]);
        var date = Date.parse(itemToParse);
        return {
            "unixtime": date
        };

    }
});

server.listen(port);