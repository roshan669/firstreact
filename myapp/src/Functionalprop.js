import React from "react";

function Functionprops(props){
    return(
       <div><h3>This is functional Component</h3>,
        <h3>Hello {props.name} from {props.place}! Welcome to myworld</h3>
        </div> 
    )
}

export default Functionprops;