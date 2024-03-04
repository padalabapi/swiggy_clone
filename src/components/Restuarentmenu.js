import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
const Restuarentmenu = () => {

    // const [resinfo , setresinfo] = useState(null);

    useEffect( ()=>{
        fetchMenu()
    },[]);
    
    const fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
            const json = await data.json();
            console.log(json);
            // setresinfo(json?.data);
    }
  return resinfo === null? (<Shimmer/>)
  :(
    <div>
      <h1>This is resturant Menu.................!</h1>
      {/* <h1>{cards[4]?.card?.id}</h1> */}
    </div>
  )
}

export default Restuarentmenu
