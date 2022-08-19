import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import "./style.css"
 const SignUpAsClient=()=>{
    return(
        <div id="container">
            <TitleBar page="clientPage"/>
            <div id="signUp">
                <div id="signuptxt">Sign Up</div>
                <input type="name" class="signupinput" id="name" placeholder="Name"/>
                <input class="signupinput" id="email" placeholder="Email"/>
                <input class="signupinput" id="mobile" placeholder="Mobile Number"/>
                <input class="signupinput" id="address" placeholder="Address"/>
                <input class="signupinput" id="city" placeholder="City"/>
                <input type="password" class="signupinput" id="password" placeholder="password"/>
                <div id="signupbutton">Sign Up</div>
                <div id="alreadyhaveaccount">Already have an account?<font id="logIn">Log In</font></div>
                </div>
            <Footer/>
        </div>
    )
 }
 export default SignUpAsClient;
 