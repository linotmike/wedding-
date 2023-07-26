import React from "react";
import "./style.css"
import { useState } from "react";
import API from "../../utils/Api";

export default function AuthForm(props){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (e) => {
        if(e.target.name === "username"){
            setUsername(e.target.value)
        } else if(e.target.name === "email"){
            setEmail(e.target.value)
        } else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit = (e) => {
            e.preventDefault()
            if(props.usage === "login" ){
                API.login({
                    username: username,
                    password: password
                }).then(data=>{
                    console.log(data);
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    return(
        <main className="AuthForm" >
            <h1>{props.usage}</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" value={username} onChange={handleChange} placeholder="username"/>
                {props.usage === "signup"? <input placeholder="email" value={email} onChange={handleChange} type="email"/>:null}
                <input name="password" placeholder="password" value={password} onChange={handleChange} type="password"/>
                {props.usage === "signup" ? <button> signup</button> : <button> login</button>}
                {/* <button> login/signup</button> */}

            </form>

        </main>
   

 
    )
}

