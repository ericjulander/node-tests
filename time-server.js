const [net, strftime] = [require("net"), require("strftime")];

function getCurrentTime() {
    return strftime('%Y-%m-%d %H:%M\n')
}

var server = net.createServer(function (connection) {
    connection.write(getCurrentTime());
    connection.end();
})

server.listen(process.argv[2]);