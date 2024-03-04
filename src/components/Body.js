import React, {  useEffect,useState } from "react";
import RestCards from "./RestCards";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () =>{

    const [resList1 , setresList1] = useState(resList);

    useEffect( ()=>{
        fetchdata();
    },[]);


    const fetchdata = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        // console.log(json);
        // (json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    
    if(resList1 === 0){
        return <Shimmer/>
    }
    return(
        <div className=" ">

<div className="flex">
            <div >
                <button onClick={() =>{
                    const filterresList1 = resList1.filter(
                    (res) => res.info.avgRating >= 4.3);
                    setresList1(filterresList1)
                    }
                }
                className="px-4 m-4 rounded  bg-gray-50 hover:active:bg-green-300">Top rated restaurant</button>
            </div>
            <div className="input-ser">
                <input placeholder="search" type="text" className="border broder solid black mx-6 rounded-md"/>
                <button className="px-4 my-4 rounded  bg-gray-100 hover:active:bg-green-300">Search</button>
            </div>
            </div>
        <div className="flex flex-wrap ml-9">
            {
                resList1.map((rest) => <RestCards key={rest.info.id} resData = {rest}/>)
            }

        </div>
        </div>
    );
 


    
}




export default Body