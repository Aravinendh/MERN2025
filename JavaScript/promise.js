// function promiseEg(flag)
// {
//     return new Promise(function(resolve,reject)
//     {
// resolve("this is a promise example")
// if(flag===1)
// {
//     resolve("this is a promise resolve example")
// }
// else if(flag===0)
// {
//     reject("this is promise reject example")
// }
//     })
// }
// promiseEg(1).then((res)=>
// {
// console.log(res)
// }).catch((rej)=>
// {
// console.log(rej)
// })

//promise -location finder example
//pass 2 things -melbourne,2000
// locationFinder("Melbourne",2000)
// locationFinder=(location,time)=>{
//      new Promise((locFound,locNotfound)=>{
//         if(isLocationValid(location,time))
// {
//      locFound(location,"Foundin",time,"secs")
// }
// else{
//     return locNotfound(location,"NotFound in",time,"secs")
// }
//     })
// }
// function isLocationValid(loc,time)
// {
//     location="Melbourne"
//     t=2000
//     if(loc===location && time<=t)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }
// locationFinder("Melbourne",2000).then((res)=>
// {
//     console.log(res)
// }).catch(err)
// {
//     console.log(err)
// }
