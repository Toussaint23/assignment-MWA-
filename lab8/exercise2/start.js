const server = require('./app/api.js');
const port = 9089;
server.listen(port, ()=>console.log(`Server listening to the port ${port}...`));