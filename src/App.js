import axios from "axios"
import Table from "./components/Table";
import Modal from "./components/Modal";
import './App.css';

import {useState,useEffect} from "react"

function App() {
  const [state, setstate] = useState({
    name : "",
    email : "",
    contact : "",
    address : ""
  });

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then(res=>{
      setstate(res.data)
    })
   
  }, []);

// console.log(state)
  return (
    <>
        
        <Modal Data = {state}/>
        <Table Data = {state}/>
    </>
  );
}

export default App;
