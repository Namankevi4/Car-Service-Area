var http = require("http");
var url = require("url");
var Server = http.Server();
function start(route, handle) {
  function onRequest(req, res) {
    var pathname =  url.parse(req.url).pathname;
    console.log(url.parse(req.url, true));
    route(handle, pathname, req, res);
}
  Server.on('request', onRequest);
  Server.listen(8888);
  console.log("Server has started.");
}

exports.start = start;