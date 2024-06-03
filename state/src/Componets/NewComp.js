import React, { Component } from 'react'
import bellA from "./bell.jpg"
import bellB from "./bell1.jpg"

 class NewComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Subscribe to roshan",
         sub:"Subscribe",
         imageURL: bellA
      };
    }

    styles={
        fontStyle:"italic",
        color:"purple"
      };

      Buttonchange=()=>{
        this.setState({
            message:"Hit the bell icon to never miss an update",
            sub:"Subcribed"

      });
    };

    imageChange=()=>{
        this.setState({
            imageURL:bellB,
            message:"Thank You"
        });
    }

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p>
            <img style={{width:"30px",height:"30px"}} src={this.state.imageURL}
            onClick={this.imageChange}
            alt=""/>
        </p>
      </div>
    )
  }
}

export default NewComp;