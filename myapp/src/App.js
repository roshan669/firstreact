
import React from "react";
import ClassProps from "./ClassProps";
import Functionprops from "./Functionalprop";
 
class App extends React.Component{
  render(){
    return(
      <div>
        <ClassProps name="learner 1" place="Place x">
          <p>Child Component</p>
          </ClassProps>
        <ClassProps name="learner 2" place="Place y">
          <button>Click</button>
        </ClassProps>
        <ClassProps name="learner 3"place="Place z"/>

        <Functionprops name="learner 4" place="Place A"/>{" "}
      </div>
    );
  }
}
export default App;
