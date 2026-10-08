
// Question-1

const lowerCaseWords= (arr)=>{

    return new Promise(function(resolve,reject){
        if (!Array.isArray(arr)){
            reject(Error('The Entry is not an Array'))
        }
        
        const strArray=arr.filter(elemente =>{
            return typeof elemente === 'string'
        }).map(elem=> elem.toLowerCase());;

        
        //const lowerCaseStr=strArray.map(elem=> elem.toLowerCase());
        //console.log(strArray)
        //console.log(lowerCaseStr)
        resolve(strArray)

 });
}


const mixedArray=['PIZZA',10,true,29,false,'WINGS'];
const promise=lowerCaseWords(mixedArray);
promise.then(function(data){
    console.log(data)
})

