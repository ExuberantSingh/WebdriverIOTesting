const convertRs =(dollar)=>{
    if(typeof dollar=='number'){
        return dollar*72
    }else {
        throw Error('Amount Need to be in Number')
    }



}

try {
    const myValue = convertRs(5) 
    console.log(myValue)
} catch (error) {
    console.log(error);
}

console.log("Try Catch Works Properly");