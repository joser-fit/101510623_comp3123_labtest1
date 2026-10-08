
// Question-1

const lowerCaseWords= (arr)=>{

    return new Promise(function(resolve,reject){
        if (!Array.isArray(arr)){
            reject(Error('Error: The Entry is not an Array'))
        }
        
        const hasStr= arr.some(element => typeof element==='string') 
        
        if(hasStr){
           const strArray=arr.filter(elemente =>{
            return typeof elemente === 'string'})
            .map(elem=> elem.toLowerCase());;
             resolve(strArray);
        }
        else{
            reject(' The Array has no string')
        }
        
       

 });
}


const mixedArray=['PIZZA',10,true,29,false,'WINGS'];
// const mixedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // for checking if arry is only a number.
const promise=lowerCaseWords(mixedArray);
promise.then(function(data){
    console.log(data)
}).catch(err=> console.log(err))

