import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useSelector,useDispatch} from  'react-redux';
import isLoggedReducers from "./reducers/isLogged";
import {increment, decremernt ,reset} from './action';


function App() {
const counter = useSelector(state => state.counter)
const isLogged = useSelector(state => state.isLogged)  
const dispatch = useDispatch();
return (
    <div className="App">
      <h1> Current counter is {counter}</h1>
   
    <button onClick ={()=> dispatch(increment())} > +  </button>
    <button onClick ={()=> dispatch(decremernt())} > -  </button>
    <button onClick={() =>dispatch(reset())  }>  Reset </button>

    {isLogged ?   <h1>you are logged in  </h1> :''   }
    
    </div>
  );
}

export default App;
