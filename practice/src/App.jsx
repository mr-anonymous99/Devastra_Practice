import Profile from "./Profile.jsx"
import ProductCard from "./Productcard"
import Greeting from "./Greeting";
import Idcard from "./Idcard";
import Blogpost from "./Blogpost"
import "./Greeting.css"
function App() {
    const ProductName = "Banana";
    const Price = 500;
    const IsAvalable = true;
    const notavailable=false

    const obj1={
      name:"Drakamora",
      course:"B-tech",
      dob:"12/7/2025",
      roll_no:"23VV1A0518",
      blood_group:"O +ve",
      place:"north America",
      img:"./meme2.png"
    }
    const obj2={
      name:"Batman",
      course:"B-tech",
      dob:"12/9/2025",
      roll_no:"23VV1A0548",
      blood_group:"O -ve",
      place:"Gotham Foundations",
      img:"./meme3.jpg"
    }

    //Array of objects Declaration cause all of the data coming form the server is in the form of an Array of objects

    const product=[{
      Productname:"banana",
      price:100,
      isAvailable:true
    },{
      Productname:"Apple",
      price:1000,
      isAvailable:false
    },{
      Productname:"kiwi",
      price:190,
      isAvailable:false
    },{
      Productname:"pomogranate",
      price:200,
      isAvailable:true
    }]

    const Blog=[{
      id:1,
      authour:"Vemana",
      title:"A Coward",
      description:"A poem goes like medipandu chudu melimai undu pttavippi chudu purugulundu"
    },{
      id:2,
      authour:"Trump",
      title:"A tariff tragedy",
      description:"yeah this book tell about the tariff exports based on the trump politics"
    },{
      id:3,
      authour:"Charlie",
      title:"A brave soldier",
      description:"an inspiring story about the charlie who fought against the LGBTQ and feminism in America !!"
    }]
  
  return (
    <div>
      {/* <Profile/> */}
      {/* <ProductCard Pname="Banana" price={Price} available={IsAvalable}/>
      <ProductCard Pname="AratiPandu" price="1000" available={notavailable}/> */}
      
      {/* <Idcard object={obj1}/> */}
      {/* <Idcard object={obj2}/> */}


      {/* this is done all thwe way at last using maps */}
       {/* {product.map((p)=>(
        <ProductCard Pname={p.Productname} Price={p.price} available={p.isAvailable}/>
       ))} */}

       {/* {
        Blog.map((b)=>(
          //the addition od id is due to telling that on newly adding the previous will not be reloaded  again
          <Blogpost key={b.id} authour={b.authour} title={b.title} description={b.description}/>
        ))
       } */}



       
    </div>
  )
}

export default App
