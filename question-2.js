// Question-2

const delayedPromise= function(){
    
    return new Promise(function(resolve,rejecte){
        setTimeout(()=>{let success={'message':'delayed success'}
        
        //console.log(success);
        resolve(success)
    },500);
   
    });
}

delayedPromise().then((result)=>console.log(result));