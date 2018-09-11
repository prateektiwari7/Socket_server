const
    io = require("socket.io"),
    server = io.listen(8001);

let
    sequenceNumberByClient = new Map();


server.on("connection", (socket) => {

   var temp="data dir";
   
    socket.emit('prateek', { hello: 'Miner' });
    socket.on('my-Prateek', function (data,callback) {

     
     if(data=='PrateekTiwari')   
     callback(true,'ram');
     else
     callback(false,'sham');
    });
  

    

    console.info(`Client connected [id=${socket.id}]`);
    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});










