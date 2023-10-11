import http from 'http';

function serveStatic(res, content, contentType, responseCode){
  if(!responseCode) responseCode = 200;

  res.writeHead(responseCode, {'Content-Type': contentType});
  res.end(content);
}

http.createServer(function(req,res){
  console.log('createServer got request')
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      const homeContent = '<h1>Welcome to the Home Page!</h1><p>This is a custom home page content.</p>';
      serveStatic(res, homeContent, 'text/html');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Welcome to the about me page! My name is Bryan Gomez and I am an iOS Developer with 2 years of experience. I like to hike, gym, and hang out with my friends on my free time!');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404: Page not found.');
  }
}).listen(process.env.PORT || 3001);
console.log('after createServer');
