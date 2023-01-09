const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    let sum = 0
    for (let i = 0; i < 1000; i ++) {
        sum = sum + i
    }
    res.end(`Hello world counting ${sum}`);
});
server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});