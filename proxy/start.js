const proxy = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 8080 : 7000;

const server = proxy.listen(port, () => {console.log(`Running Soundcloud Proxy on ${port}`)});

let killServer = () => {
  server.close();
};

module.exports = server;