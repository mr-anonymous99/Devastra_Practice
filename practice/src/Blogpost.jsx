
const Blogpost = (post) => {
  return (
    <div>
        <p>Author :{post.authour}</p>
        <p>Title : {post.title}</p>
        <p>Description : {post.description}</p>
    </div>
  )
}

export default Blogpost