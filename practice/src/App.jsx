import Profile from "./Profile.jsx"
import ProductCard from "./Productcard"
function App() {
    const ProductName = "Banana";
    const Price = 500;
    const IsAvalable = true;
  
  return (
    <>
      
      {/* <Profile/> */}
      <ProductCard Pname={ProductName} price={Price} available={IsAvalable}/>
    </>
  )
}

export default App
