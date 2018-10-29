const net = require('net');
const server = net.createServer();
server.listen(4200);
server.on('connection', socket => {
  console.log('Connected');
  

    let hasFound = false;
    socket.on("data",data =>{
        console.log(data.toString());
     
        for(let i = 0; i< data.toString().length; i++)
        {
          

          if(data.toString().charAt(i)=='/' && data.toString().charAt(i+1)=='>' )
          {
             
             //console.log(data.toString()[i].charAt(0));
             //console.log(data.toString()[i+1].charAt(0));
             let msg = data.toString().substring(0,i + 2);
             socket.write(msg);
             
             socket.destroy();

          }

          

        }

         
          //console.log(Buffer.from(data));
         //socket.write(Buffer.from(data));



         //chunk = data.toString().split(" ");
         //console.log(chunk);

    });

  
});