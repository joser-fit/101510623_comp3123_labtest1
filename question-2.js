// Question-2

const resolvedPromise= function(){
    
    return new Promise(function(resolved,rejected){
        setTimeout(()=>{let success={'message':'delayed success'}
        console.log(success)
    },500);

    });
}