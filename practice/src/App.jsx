import { useState } from "react";

import Profile from "./Profile.jsx"
import ProductCard from "./Productcard"
import Greeting from "./Greeting";
import Idcard from "./Idcard";
import Blogpost from "./Blogpost"
import "./Greeting.css"
function App() {

  const [count, setCount] = useState(0)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })


  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleEmail=(e)=>{
    // setEmail((mail)=>(email=e.target.value))
    setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
    console.log("email is " + e.target.value);
    // setPassword((pass)=>(password=))
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    // console.log(e);
    //this can make the browser not to refresh after the submit
    e.preventDefault()
    console.log(`email :${formData.email} \nPassword : ${formData.password}`); 
    alert("form submitted !!")
  }
  
  return (
    <div >
      <p>i am a button</p>
      <form onSubmit={handleSubmit}>
        <input type="password" name="password" onChange={handleChange} placeholder="enter your password" />
        <input type="email" name="email"  onChange={handleChange}placeholder="enter your email" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default App
