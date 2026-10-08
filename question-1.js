
// Question-1

const lowerCaseWords= (arr)=>{

    return new Promise(function(resolve,reject){
        if (!Array.isArray(arr)){
            reject(Error('Error: The Entry is not an Array'))
        }
        
        const hasStr= arr.some(element => typeof element==='string')
        if(hasStr){

        }
        
        
        //const lowerCaseStr=strArray.map(elem=> elem.toLowerCase());
        //console.log(strArray)
        //console.log(lowerCaseStr)
        resolve(strArray)

 });
}


//const mixedArray=['PIZZA',10,true,29,false,'WINGS'];
const mixedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const promise=lowerCaseWords(mixedArray);
promise.then(function(data){
    console.log(data)
}).catch(err=> console.log(err))

