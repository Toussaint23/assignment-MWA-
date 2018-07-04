const {from} = require('rxjs');
const util =  require('util');
const promosify = util.promisify;
const mongodb = require('mongodb');
const myClient = mongodb.MongoClient;
const myConnect = promosify(myClient.connect);
const url = 'mongodb://localhost:27017/';

class Connection{
    constructor(){
        this.setDb(); 
    }

    setDb(){
        from(myConnect(url))
        .subscribe(
            (obj)=>{
                if(obj != null){
                    this.connect = obj;
                    this.db = obj.db('assignment');
                    console.log("Connection DB is ok!");
                }
                else{
                    console.log("Connection DB is failed!");
                    this.db = {};
                }
            }
        );
    }
}

module.exports = new Connection();


/* // Connection URL
function connection(){
    let myDB;
    myConnect(url)
    .then((obj)=>{
        console.log('Connection sucsessfull');
        myDB = obj.db('assignment');
        return myDB;
    })
    .catch(()=>console.error('there is an error'));

    return myDB;
} */


