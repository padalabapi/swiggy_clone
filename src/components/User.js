import React from "react";
const User = (props) => {

    return(
        <div className="user-card">
            <h2>Name : {props.nam}</h2>
            <h2>Location : Pithapuram</h2>
            <h2>Contact : padalabapi433@gmail.com</h2>
        </div>
    );
};

export default User