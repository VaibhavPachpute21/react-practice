import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:"Welcome Visitor",
            name:"Vaibhav"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thanks for click",
            name:"Amit"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message} {this.state.name}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
                
            </div>
        )
    }
}

export default Message;