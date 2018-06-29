var dns = require('dns');
const{promisify} = require('util');

//call back
dns.resolve4('www.mum.edu', function (err, addresses) {
    if (err) throw err;
    console.log('MUM Addresses(CallBack) : ' + JSON.stringify(addresses));
});


//promise
const ip = promisify(dns.resolve4);
ip('www.mum.edu')
    .then((adr)=> {console.log('MUM Addresses(Promise) : ' + JSON.stringify(adr))})
    .catch((err) => {console.log(err)});

//async/await
async function getIp(){
    try{
        let adr = await ip('www.mum.edu');
        console.log('MUM Addresses(Async/await) : ' + JSON.stringify(adr))
    }
    catch(err){
        console.log(err);
    }
}

getIp();