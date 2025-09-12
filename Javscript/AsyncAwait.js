const sampleDate=async()=>{
    try {
        let responce=await fetch("https://www.google.com")
    console.log(responce);
    } catch (error) {
     console.log(error);
    }
}

sampleDate()