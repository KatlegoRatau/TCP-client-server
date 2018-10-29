var http= require("http");

fs = require("fs");


var myReadStream = fs.createReadStream(__dirname + "/filedata.txt", 'utf8');

var myWritableStream = fs.createWriteStream(__dirname + "/writedata.txt");

myReadStream.pipe(myWritableStream)


// on("data", chunk => {

//     console.log("Data Received");
//     //console.log(chunk);
//     myWritableStream.write(chunk);

// })