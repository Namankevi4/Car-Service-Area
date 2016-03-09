function route(handle, pathname, req, res) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](req, res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
}

exports.route = route;