
// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from "./components/functionalcomp";
import {ClassComp,ClassComp1} from "./components/classComp";
import Click from "./components/Click";
import Counter from "./components/Counter";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div>
   <h1>Hello world!!</h1>
   <h1>this is about components</h1>
   <FunctionalComp/>
   <ClassComp />
   <ClassComp1/>
   <Click/>
   <Counter/>
   <ParentComp/>
   

   </div>
  );
}

export default App;
