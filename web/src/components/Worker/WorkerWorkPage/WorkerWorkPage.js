import React from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const WorkerWorkPage=()=>{
    let workers=[
        {name:"Tithi Saha", service:"Shopping", service_status:"Running", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Arnob", service:"Shopping", service_status:"Ended", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Tithi", service:"Painting", service_status:"Declined", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ]

    let viewProfile=(e,worker)=>{
        alert("Visiting profile of "+worker.name)
    }

    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="hiretxt">My Services</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={worker.profile_pic} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/>
                            <font class="servicetxt">{worker.service}</font>
                            
                        </div>
                        {
                            (worker.service_status) === "Running" ? <button class="runningbutton" >Running</button> :<button class="endedbutton" >Ended</button>
                        }
                        
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default WorkerWorkPage;

 