import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'



const LogoutMenu=({setMenuVis})=>{

    const naviagte=useNavigate()
    const [active_text,setActiveText]=useState("Active");
    let Active=()=>{
        if(active_text==="Active")
            setActiveText("Not Active")
        else
            setActiveText("Active")
    }
    let Logout=()=>{
        localStorage.clear();
        setMenuVis(false);
        naviagte('/')
    }


    return(
    <div id="lgm">
        <div class="logoutmenuitem" onClick={Logout}>
            Logout
        </div>
        <div class="logoutmenuitem" onClick={Active}>
            {active_text}
        </div>
    </div>
)
}
export default LogoutMenu;
