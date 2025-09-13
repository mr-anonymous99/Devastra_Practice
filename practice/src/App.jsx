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

  
  const handleClicked = (name) => {
    console.log("you clicked a button");
    alert(`ohh ${name} you clicked a button !!!`)
  }
  const handleIncrement = () => {
    setCount((k) => (k + 1))
  }
  //by deafault every input field returns a object.target.value and object.target.name
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.name + e.target.value);
  }

  const handleSubmit = (e) => {
    // console.log(e);

    //this can make the browser not to refresh after the submit
    e.preventDefault()
    alert("form submitted !!")
  }
  return (
    <div >
      <p>i am a button</p>
      <button onClick={() => (handleClicked("vinay"))}>Click me</button>
      <form action="/post" onSubmit={handleSubmit}>
        {/* <input type="text" name="my name" placeholder="type your name" /> */}
        {/* <input type="text" name="my name" onChange={handleChange} placeholder="type your name" /> */}
        <input type="password" name="passowrd" placeholder="enter your password" />
        <input type="email" name="email" placeholder="enter your email" />
        <button type="submit" >Submit</button>
      </form>

      <h1>count : {count}</h1>
      <button onClick={() => count < 10 ? setCount(count + 1) : alert("you cant increament greater than 10")}>increment</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : alert("cannot decrement <0 "))}>decrement</button>
    </div>
  )
}

export default App
