import React from "react";
import { CDN_URL } from "../utils/constants";
const RestCards = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines
        } = resData.info;

    return(
        
        <div className="ml-6 mb-3 p-4 w-[250px]  rounded-lg hover:bg-gray-100 shadow-lg cursor-pointer">
            <img className="rounded-lg"src={CDN_URL +cloudinaryImageId} />
            <h3 className="font-bold py-1">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            {/* <h5><span>deliveryTime __</span>{resData.info.sla.deliveryTime} mins</h5> */}
        </div>
    );
}

export const proRestcard = (RestCards) =>{
    return(props) =>{
        return(
            <div>
                <RestCards {...props}/>
            </div>
        );
    }
}


export default RestCards