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
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`hello email :${formData.email} with pass ${formData.password}`);
    
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
