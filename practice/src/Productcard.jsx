
import "./Greeting.css"

function ProductCard({Pname,price,available}) {
    const color=available?"stock":"not"

    return (
        <div className={"product-card"+" "+ color}>
            {/* <img src="./catmeme.png" alt="" srcset="" /> */}
            <h1>Product Name : {Pname}</h1>
            <h2>Price : {price} $</h2>
            <h3>Available : {available?"In Stock":"out of Stock"}</h3>
        </div>
    )
}

export default ProductCard