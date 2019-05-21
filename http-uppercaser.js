const [http, fs, map] = [require("http"), require("fs"), require('through2-map')];

const port = process.argv[2];
let server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);