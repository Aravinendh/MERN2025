// async function asAw(){
//     setTimeout(
//         ()=>{
//             return("Inside TineOut");
//         },5000)
//     //return "This is async/await example"
// }
// asAw().then(function(output){
//     console.log(output)
// })
// console.log(asAw)

//instagram example
commentpost=async()=>{
    return new Promise((commentpost)=>
    {
setTimeout(()=>
{
  commentpost("commenting the post")  
},5000);
    });
};
async function likecode(){
    return new Promise((linkingpost)=>
    {
setTimeout(()=>
{
  linkingpost("liking the post")  
},5000)
    })
}
async function Createpost()
{
    var post=new Promise((cPost)=>
    {
        setTimeout(()=>{
cPost("Post created succesffuly")
    },5000)
    })
    var [post,like,comment]=Promise.all[post,likecode(),commentpost()]
    console.log(await post)
    console.log(await like)
    console.log(await comment)
}
Createpost()