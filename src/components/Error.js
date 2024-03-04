import { useRouteError } from "react-router-dom";

import React from "react";
const Error = () =>{
    const err = useRouteError();

    return(
        <div>
            <h1>OOP's</h1>
            <h2>SomeThing went Worng.........!</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}
export default Error