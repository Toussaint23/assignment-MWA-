Array.prototype.even = function (){
                    let even1 = Array();
                    let context = this;
                    process.nextTick(function(){
                        for(let i = 0; i < context.length; i++){
                            if(context[i] %2 == 0)
                            even1.push(context[i]);
                        }
                        console.log(even1);
                    });
                }

Array.prototype.odd = function (){
    let odd1 = Array();
    let context = this;
    process.nextTick(function(){
        for(let i = 0; i < context.length; i++){
            if(context[i] %2 != 0)
            odd1.push(context[i]);
        }
        console.log(odd1);
    });
}
                  
console.log("start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("end");