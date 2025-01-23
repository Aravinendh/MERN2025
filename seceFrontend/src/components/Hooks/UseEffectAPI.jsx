import { useState } from "react"
import axios from 'axios'
const UseEffect =()=>{
    var [posts,setPost]=useState([])
    useEffect(()=>{
        var response=axios
            .get("https://jsonplaceholer.typicode.com/posts/")
            .then((res)=>{
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err)=>console.log(err))
        console.log(response)
    },[])
    return(
        <div>
            This page is meant for useEffect with API.
        </div>
    )
}
export default UseEffect;