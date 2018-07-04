const express = require('express');
const route = express.Router();
const crypto = require('crypto');



route.route('/')
.get((req, res, next)=>{
    req.db.collection('homework7').findOne({}, (err, doc)=>{
        if (err) throw err;
        let key = crypto.createDecipher('aes256', 'asaadsaad');
        let message = key.update(doc.message,'hex','utf8');
        console.log(message);
        res.send(message);
       req.connect.close();
    });

    console.dir("call find one");
})

module.exports.router = route;


/* // Connection URL
function connection(){
    myConnect(url)
    .then((obj)=>{
        console.log('Connection sucsessfull');
        myDB = obj.db('assignment');
    })
    .catch(()=>console.error('there is an error'));
}
 */


//app.listen('9999', ()=>console.log('Listening port 9999'));

/* function connect (){
    myClient.connect('mongodb://localhost:27017/',function(err, client){
        if(err) throw err;
        const db = client.db('assignment');

        db.collection('homework7').findOne({}, (err, doc)=>{
            if (err) throw err;
            let key = crypto.createDecipher('aes256', 'asaadsaad');
            let message = key.update(doc.message,'hex','utf8');
            console.log(message);
           // res.send(message);
            client.close();
        });

        console.dir("call find one");

        });
}

connect(); */