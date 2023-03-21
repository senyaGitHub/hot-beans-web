import React from "react";
import MyInput from "../components/UI/input/MyInput";
import classes from "./join.module.css"
import logo from "../logo/logo.png"

const Join = () =>{
    return (
        <div className={classes.Join}>
                <h1>Join our super company!</h1>
                <form>
                    <p>First Name</p>
                    <MyInput/>
                    <p>Second Name</p>
                    <MyInput/>
                    <p>Email</p>
                    <MyInput/>
                    <p>Phone</p>
                    <MyInput/>
                    <button>Apply</button>
                </form>
                <div id='img'>
                <img src={logo} alt="logo of hot-beans-web"/>
                </div>
        </div>
    )
}

export default Join;