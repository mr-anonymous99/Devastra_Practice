
const Idcard = ({object}) => {
  return (
    <div className='product-card'>
        <img src={object.img}alt="" />
        <h1>Name : {object.name} </h1>
        <h2>Price : {object.course} </h2>
        <h3>DOB : {object.dob} </h3>
        <h3>ROLL_NO : {object.roll_no} </h3>
        <h3>Blood_Group: {object.blood_group} </h3>
        <h3>Location : {object.place}</h3>
    </div>
  )
}

export default Idcard