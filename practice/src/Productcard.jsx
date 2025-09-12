function ProductCard({Pname,price,available}) {
    return (
        <>
            <h1 style={{color:"red"}}>Product Name : {Pname}</h1>
            <h2 style={{color:"blue"}}>Price : {price} $</h2>
            <h3 style={{color:"purple"}}>Available : {available?"In Stock":"out of Stock"}</h3>
        </>
    )
}

export default ProductCard