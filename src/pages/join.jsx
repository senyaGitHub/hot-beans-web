import React from "react";
import MyInput from "../components/UI/input/MyInput";
import classes from "./join.module.css"

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
                </form>
        </div>
    )
}

export default Join;