import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Restcard = () => {
    const [userData , setData] = useState;

    useEffect(()=>{
        axios.get("https://api.thecatapi.com/v1/images/search/?limit=10")
        .then((response=>{
            console.log(response);
            setData(response.data);
        }))
    },[]);

  return (
    <div>
      {userData.map((data =>{
        return(
            <h3>{data.url}</h3>
        )
      }))}
    </div>
  )
}

export default Restcard
