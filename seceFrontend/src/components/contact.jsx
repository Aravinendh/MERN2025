import { useState } from "react";
const Contact = () =>{
    var [num,setNum]=useState(0);
    return (
        <div>
            <h2>
                Welcome to conatct page
            </h2>
            <h3>
                
                This is State eg
            </h3>
            <h4>
                Counter: {num}
            </h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    );
};
export default Contact;