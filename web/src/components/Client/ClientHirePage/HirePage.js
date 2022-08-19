import React, { useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"
import ReviewModal from "./Modal/ReviewModal";

 const SearchResultt=()=>{
    const [workers, setWorkers]=useState([
        {name:"Tithi Saha", service:"Shopping", service_status:"Running", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Arnob", service:"Shopping", service_status:"Waiting", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Tithi", service:"Painting", service_status:"Ended", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Tithi", service:"Painting", service_status:"Ended", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ]);
    const [worker,setWorker]=useState(null)

    let endWork=(worker)=>{
        alert("End work for "+worker.name)
    }
    let deleteWorker=(worker)=>{
        alert("Delete "+worker.name)
    }
    
    const removeWorker=(name)=>{
        setWorkers(workers.filter(worker=>!(worker.name===name)))
    }


    let viewProfile=(e,worker)=>{
        let isClickInsideHireButton = false;
        let isClickOnDeleteImg = false;
        const Buttons = document.querySelectorAll(".endbutton");
        const Images = document.querySelectorAll(".deleteimg");
        Buttons.forEach(button => button.contains(e.target) ? isClickInsideHireButton = true:null)
        Images.forEach(Image => Image.contains(e.target) ? isClickOnDeleteImg = true:null)
        if(isClickInsideHireButton || isClickOnDeleteImg)
            return;
        alert("Visiting profile of "+worker.name)
    }

    let showReviewModal=()=>{document.querySelector("#setNameModal").style.display="block"}

    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="clientshiretxt">My Hires</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={worker.profile_pic} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/>
                            <font class="servicetxt">{worker.service}</font>
                            <font class="statustxt">{worker.service_status}</font>
                        </div>
                        {
                            (worker.service_status) === "Running" ? <button class="endbutton" onClick={()=>{setWorker(worker);showReviewModal()}}>End Now</button> : null
                            
                        }
                        {
                            (worker.service_status) === "Waiting" ? <img src="./pics_icons/delete.png" class="deleteimg" onClick={() => {deleteWorker(worker); removeWorker(worker.name)}}/> : null
                        }
                        
                    </div>
                )}
            </div>
            <Footer/>
            <ReviewModal Worker={worker}/>
        </div>
    )
 }
 export default SearchResultt;

 