import React from "react";
import MyInput from "../components/UI/input/MyInput";
import classes from  "./join.module.css";
import logo from "../logo/logo.png"

const Join = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p>Join our super company!</p>
            </div>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <div className={classes.formRow}>
                        <label className={classes.formLabel}>First Name</label>
                        <MyInput />
                    </div>
                    <div className={classes.formRow}>
                        <label className={classes.formLabel}>Second Name</label>
                        <MyInput />
                    </div>
                    <div className={classes.formRow}>
                        <label className={classes.formLabel}>Email</label>
                        <MyInput />
                    </div>
                    <div className={classes.formRow}>
                        <label className={classes.formLabel}>Phone</label>
                        <MyInput />
                    </div>
                    <button className={classes.formButton}>Apply</button>
                </form>
                <div className={classes.imageContainer}>
                    <img src={logo} alt="logo of hot-beans-web" className={classes.image}/>
                </div>
            </div>
        </div>
    )
}

export default Join;