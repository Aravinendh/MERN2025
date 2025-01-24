import React from 'react';
class ReactLifecycleMethods extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    
    updateNum=()=>{
        return this.setState({number:this.state.number+1})
    }

    componentDidMount(){
        console.log("Comp mounted")
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.number !==this.state.number){
            console.log("Update comp",prevState.number,this.state.number)
        }
        setInterval(()=>{
            console.log("Inside updating")
        },5000)
    }
    componentWillUnmount(){
        console.log("Component Unmounted")
    }

    render(){
        console.log("Inside Render")
        return(
            <div>
                {console.log("Inside Return")}
                <h1>This is React Lifecycle Methods</h1>
                <h2>The state value is {this.state.number}</h2>
                <button onClick={this.updateNum}>+</button>
            </div>
        )
    }
}
export default ReactLifecycleMethods;