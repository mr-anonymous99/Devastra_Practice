function Profile() {

    const name="vinay"
  const age=19
  const hirable=false
    return (
        <div>
            <p>hello {name}</p>
            <p>my age :{age}</p>
            <p> Hirable: {hirable? "yeah is hirable" : "no he is not hirable"}</p>
        </div>
    )
}

export default Profile