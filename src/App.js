import  React, { useState } from "react";
import Boot from "./companet/Boot";
import './companet/boot.css'




export default function App() {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.log(val.target.value);
  }
  return (

<div className="App">

<div className="div">
<input type="text"  onChange={getData}   /> <br/> 
<button onClick={() => setPrint(true)}  className="btn btn-primary">Print</button>
{
  print?
  <h1>{data}</h1>
  :null
}

<Boot/>
</div>
</div>

  )
}



