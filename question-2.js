// Question-2

const resolvedPromise= function(){
    
    return new Promise(function(resolve,reject){
        setTimeout(()=>{let success={'message':'delayed success!'}
        
        //console.log(success);
        resolve(success)
    },500);
   
    });
}



const rejectedPromise= function(){
    
    return new Promise(function(resolve,reject){
        
        setTimeout(()=>{let success={'message':'delayed success'}
        try{
            throw new Error(' Delayed exception!')
        }catch(e){
            //console.error(e);
            reject({'error': 'delayed exception!'});
        }
        
    },500);
   
    });
}

resolvedPromise().then((result)=>console.log(result)); // resolved Promise
rejectedPromise().catch(e=>console.log(e));  // rejected Promise