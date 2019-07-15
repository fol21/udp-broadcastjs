const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const message = Buffer.from('pong');
const client = dgram.createSocket('udp4');




server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    client.send(message, rinfo.port, rinfo.address, (err) => {
        client.close();
    });
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// server listening 0.0.0.0:41234