import { render } from '@testing-library/react';
import React from 'react';
import react from 'react'
class color extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"red",
        }
    }
    changecolor =()=>{
        this.setState({color:'blue'})
    }

render(){
    return(
        <>
        <div>my color{this.state} </div>
       <div><button onClick={this.changecolor}></button></div> 
       </>
    )
}
}
export default color