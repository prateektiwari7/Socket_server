
const
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8001");



ioClient.on('prateek', function (data) {
    console.log(data);
     ioClient.emit('my-Prateek', 'PrateekTiwariq',function(con,con1){

        console.log(con);
        console.log(con1);
     });



    
 });


 




