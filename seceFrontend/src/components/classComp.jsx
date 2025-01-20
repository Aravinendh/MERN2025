    import React from "react"
    class ClassComponent extends React.Component{
        render(){
            return(
                <div>
                    <h1>This is a class example</h1>
                </div>
            )
        }
    }

    const Gallery=(props)=>{

            return(
                <div>
                    <p>Inside the gallery</p>
                    <h3>Welcome to {props.page} page</h3>
                    <img src="data:image/png;base64,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" alt="oops..." />
                    <h3>Viewing {props.image}</h3>
                    
                </div>
            )
    }

    export {ClassComponent,Gallery}