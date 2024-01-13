const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route to handle POST requests and convert 'id' to integer
server.post('/:resource', (req, res, next) => {
  // Convert 'id' to integer
  req.body.id = parseInt(req.body.id);
  // Continue to JSON Server router
  next();
});

server.use(router);

const PORT = 3003; // You can choose any available port
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

