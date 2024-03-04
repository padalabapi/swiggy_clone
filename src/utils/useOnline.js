import { useEffect, useState } from "react";

const useOnline = () =>{

    const [onlinestatus,setonlinestatus] = useState(true);

    useEffect( () =>{
        window.addEventListener("offline", () =>{
            setonlinestatus(false);
        })
        window.addEventListener("online", () =>{
            setonlinestatus(true);
        })
    },[]);


    return onlinestatus;
}

export default useOnline