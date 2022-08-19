import React from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const SearchResult=()=>{
     let service="Shopping"
     let location="Sylhet"
     let workers=[
         {name:"Tithi Saha",charge:24,profile_pic:"./pics_icons/profilepic.jpg",email:"tithi@gmailcom"},
         {name:"Tithi Saha",charge:24,profile_pic:"./pics_icons/profilepic.jpg",email:"tithi@gmailcom"},
         {name:"Tithi Saha",charge:24,profile_pic:"./pics_icons/profilepic.jpg",email:"tithi@gmailcom"}
        ]

    let hire=(worker)=>{
        alert("Hiring "+worker.name)
    }
    let viewProfile=(e,worker)=>{
        let isClickInsideHireButton = false;
        const Buttons = document.querySelectorAll(".hirebutton");
        Buttons.forEach(button=>button.contains(e.target)?isClickInsideHireButton=true:null)
        if(isClickInsideHireButton)
            return;
        alert("Visiting profile of "+worker.name)
    }
    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="searchpagehiretxt">Search Results</div>
                <div id="searchstatetxt">{service} in {location}</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={worker.profile_pic} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/><font id="servicetxt">{worker.charge}TK/hr</font>
                         </div>
                         <button class="hirebutton" onClick={()=>{hire(worker)}}>Hire Now</button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default SearchResult;
