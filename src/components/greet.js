import React from "react";

// function greet(){
//     return <h1>function Component</h1>
// }

 const greet=(props)=>{
 return (
     <div>
    <h1>Nice to meet {props.name} age {props.id}</h1>
    {props.children}
    </div>
    )
}

export default greet;