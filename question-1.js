
// Question-1

const lowerCaseWords= (arr)=>{

    return new Promise(function(resolve,reject){
        if (!Array.isArray(arr)){
            reject(Error('The Entry is not an Array'))
        }
        
        const strArray=arr.filter(elemente =>{
            return typeof elemente === 'string'
        });

        console.log(strArray)
        const lowerCaseStr=strArray.map(elem=> elem.toLowerCase());
        console.log(lowerCaseStr)

 });
}


const mixedArray=['PIZZA',10,true,29,false,'WINGS'];
lowerCaseWords(mixedArray);

