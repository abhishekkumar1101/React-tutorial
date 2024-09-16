import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                public_repos:"unknown"
            }
        };
    }
   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/abhishekkumar1101");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
        //console.log("mount");
        
    }
    render(){
        const{login,public_repos} =this.state.userInfo;
        

        return (
            <div className="user-div">
            <h2>name:{login}</h2>
            <h3>repos:{public_repos}</h3>
            <h4>Age:20</h4>
        </div>
        )
    } 
}
export default UserClass;