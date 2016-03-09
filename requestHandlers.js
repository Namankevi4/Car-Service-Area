var url = require("url");

function index(req, res) {
  res.writeHead(200);
  if (url.parse(req.url, true).query.id !== undefined)
   res.end("index " + url.parse(req.url, true).query.id);
   res.end ("index");
}

function about(req, res) {
  res.writeHead(200);
  res.end("Klokov and Namankevich");
}

exports.index = index;
exports.about = about;
