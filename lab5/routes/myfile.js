var express = require('express');
var router = express.Router();
var axios = require('axios');
const{from} = require('rxjs');

/* My Get Users listening*/
/*
//using promise 
router.get('/',(req, res, next)=>{
    axios.get('http://jsonplaceholder.typicode.com/users/')
    .then((response)=>{res.send(response.data);})
    .catch((err)=>{console.error(err);
    });
});
 */


/* //using observable
router.get('/',(req, res, next)=>{
    let data = axios.get('http://jsonplaceholder.typicode.com/users/');
    from(data).subscribe((response)=>res.send(response.data));

}); */


/* //using async await
async function asyncAwait(req, res, next){
    try{
        let result = await axios.get('http://jsonplaceholder.typicode.com/users/');
        res.send(result.data);
    }
    catch(err){
        console.error(err);
        
    }
}

router.get('/', (req, res, next)=>{
    asyncAwait(req, res, next);
});
 */

/* // GET request for remote image
router.get('/', (req, res, next)=>{

    axios({
        method:'get',
        url:'http://jsonplaceholder.typicode.com/users/',
        responseType:'json'
    })
    .then(function(response) {
        res.send(response.data);
    });

}); */


/* // GET request for remote image
router.get('/', (req, res, next)=>{
    let value = axios({
        method:'get',
        url:'http://jsonplaceholder.typicode.com/users/',
        responseType:'json'
    });

    from(value).subscribe(function(response) {res.send(response.data);});

});
 */

 async function myAsyncFunction(res){
     try{
        let value =  await axios({
            method:'get',
            url:'http://jsonplaceholder.typicode.com/users/',
            responseType:'json'
        });

        res.send(value.data);

     }catch(err){
         console.error(err);
     }

 }

 router.get('/', (req, res, next)=>{
    myAsyncFunction(res);
 });



module.exports = router;