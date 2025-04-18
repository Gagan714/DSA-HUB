import React,{useEffect,useState} from 'react';
function App(){
  const[backEndMessage,setBackEndMessage]=useState("");
 useEffect(()=>{
  fetch("http://localhost:8080/api/test")
  .then(Response=>Response.text())
  .then(data=>setBackEndMessage(data))
  .catch(error=>console.error("error loading from backend",error));
 },[])
 return(
  <div>
    <h3>DSA-HUB frontend</h3>
    <h3>backend says</h3>
    <h3>{backEndMessage}</h3>
  </div>
 )
}
export default App