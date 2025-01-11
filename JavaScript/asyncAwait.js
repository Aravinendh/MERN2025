async function asAw(){
    setTimeout(
        ()=>{
            return("Inside TineOut");
        },5000)
    //return "This is async/await example"
}
asAw().then(function(output){
    console.log(output)
})
console.log(asAw)