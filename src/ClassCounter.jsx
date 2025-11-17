import './ClassCounter.css';
import React, {Component} from "react";
class ClassCounter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    render(){
        return(
            <div className="class_counter_div"> 
                <h2>Class Component</h2>
                <h1 className="count"> {this.state.count}</h1>
                <div className="buttons">
                    <button onClick={()=>this.setState({count: this.state.count + 1})}>+</button>
                    <button onClick={()=>{
                        if(this.state.count > 0) {
                            this.setState({count: this.state.count - 1});
                        }
                    }}>-</button>
                </div>
                <button className="reset-btn" onClick={()=>this.setState({count: 0})}>Reset</button>
            </div>
        )
    }
}
export default ClassCounter;