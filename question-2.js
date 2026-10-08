// Question-2

const resolvedPromise= function(){
    
    return new Promise(function(resolve,rejecte){
        setTimeout(()=>{let success={'message':'delayed success'}
        
        //console.log(success);
        resolve(success)
    },500);
   
    });
}

resolvedPromise().then((result)=>console.log(result));