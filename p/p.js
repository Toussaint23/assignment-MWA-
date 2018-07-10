Array.prototype.even = function (){
                    let even1 = Array();
                    Promise.resolve(this)
                    .then((obj)=>{obj.forEach((element)=>{if(element % 2 == 0) even1.push(element);})})
					.then(()=>console.log(even1))
					.catch((err)=>console.log(err));
                }

Array.prototype.odd = function (){
    let odd1 = Array();

    Promise.resolve(this)
    .then((obj)=>{obj.forEach((element)=>{if(element % 2 != 0) odd1.push(element)})})
    .then(()=>console.log(odd1))
    .catch((err)=>console.error(err));
}
                  
console.log("start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("end");
