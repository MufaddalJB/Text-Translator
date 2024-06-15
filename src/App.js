import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import { useState } from "react";

function App() {

  const [mode, setMode]= useState("light")
  const handleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor =  '#042743';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor =  '#FFFFFF';
    }
  }
  return (
    <>
      <Navbar mode = {mode} handleMode={handleMode}/>
      <TextContainer mode = {mode}></TextContainer>
    </>
  );
}

export default App;
