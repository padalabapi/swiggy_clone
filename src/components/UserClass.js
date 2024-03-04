import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userinfo : {
                Login : "dummy",
                location : "default",

            }
        }
        
    }
    async componentDidMount(){
        const data = await fetch("http://api.github.com/users/padalabapi");
        const json = await data.json();

        this.setState({
            userinfo: json,
        });

        console.log(json);

    }
    render(){
        const {Login , location} = this.state.userinfo;
        console.log(Login)
 
        
        return(
            <div className="user-card">
            <h2>Name : {Login}</h2>
            <h2>Location : {location}</h2>
            <h2>Contact : padalabapi433@gmail.com</h2>
            

        </div>
        )

    }
}

export default UserClass