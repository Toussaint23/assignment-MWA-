const os = require('os');
const {from} = require('rxjs');

function checkSystem(){
   return new Promise(
       (resolve, reject)=>{
        let cpus = os.cpus().length;
        let memory = os.totalmem()*1e-9;
        console.log('Checking your system...');
        
        if(cpus < 2) reject('Processor is not supported');
        else if(memory < 4) reject('This app need at least 4GB of RAM');
        else resolve('System is checked succesfully');
       }
   );
}

//promises
async function myPromiseForChecking(){
    try{
        let result = await checkSystem();
        console.log(result);
    }catch(err){
        console.error(err);
    }

}
myPromiseForChecking();


//promises2
checkSystem().then((data) => console.log(data)).catch((err) => console.log(err));


//observable
from(checkSystem()).subscribe((result)=>console.log(result));

