import { useState, useEffect } from "react";
const ListItems =({func})=>{
    var[numbers,setNumbers]=useState([])
    useEffect(()=>{
        setNumbers(func(1000)); 
        console.log(numbers);
    },[func])
    return(
        <div>
            <h3>This number list is as follows according to the number present in input box</h3>
            {numbers.map((number,index)=>{
                return <h4 key={index}>{number}</h4>;
})}
        </div>
    )
}
export default ListItems;