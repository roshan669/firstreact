import React, { Component } from 'react'
import Purecomp from './purecomp';
import RegComp from './RegComp';

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Simpilearn"
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Simplilearn"
            });
        },3000);
    }
  render() {
    console.log("Parent component render")

    return (
      <div>I'm the parent
        <RegComp name={this.state.name}/>
        <Purecomp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp