const dgram = require('dgram');
const message = Buffer.from('ping');
const client = dgram.createSocket('udp4');


const server = dgram.createSocket('udp4');

const nmap = require('node-nmap');

nmap.nmapLocation = "nmap"; //default 
 
//    Accepts array or comma separated string of NMAP acceptable hosts 
var quickscan = new nmap.QuickScan('192.168.2.27');
 
quickscan.on('complete', function(data){
  console.log(data);
});
 
quickscan.on('error', function(error){
  console.log(error);
});
 
quickscan.startScan();


// //Server
// server.on('error', (err) => {
//     console.log(`server error:\n${err.stack}`);
//     server.close();
// });

// server.on('message', (msg, rinfo) => {
//     console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });

// server.on('listening', () => {
//     const address = server.address();
//     console.log(`server listening ${address.address}:${address.port}`);
// });

// server.bind(41233);
// // server listening 0.0.0.0:41233

// //Client
// client.send(message, 41234, '192.168.2.27', (err) => {
//   client.close();
// });