const [http, fs] = [require("http"), require("fs")];

const port = process.argv[2];
const file2Serve = process.argv[3];
let server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(file2Serve, "utf8");
    readStream.pipe(response);
});

server.listen(port);