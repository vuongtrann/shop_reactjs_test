import React,{Component} from "react";

class Option extends Component{
    render(){
        console.log(this.props)
return (
    <>
    <option value={this.props.id}>{this.props.name}</option>
    </>
);
    }
}
export default Option;