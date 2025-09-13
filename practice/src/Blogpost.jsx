
const Blogpost = (post) => {
    // console.log(post);
    
  return (
    <div className="product-card">
        <h1>Author :{post.authour}</h1>
        <h3>Title : {post.title}</h3>
        <h4>Description : {post.description}</h4>
    </div>
  )
}

export default Blogpost