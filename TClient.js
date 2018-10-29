const net = require('net');
const client = new net.Socket();
const port = 4200;
const host = '127.0.0.1';

client.connect(port, host, function() {
    console.log('Connected');
    //client.write("Hello From Client " + client.address().address);
    client.write(`.<?xml version="1.0" encoding="ISO-8859-1"?>
    <login COOKIE="ussdgw" NODE_ID="MTNMENU_F02" PASSWORD="mtnm3nu123" RMT_SYS="uxml@ussdgw" USER="MTNMENU_F02"/>..`);


    client.on("data", data=> {

         console.log(data.toString());
0
    })
});