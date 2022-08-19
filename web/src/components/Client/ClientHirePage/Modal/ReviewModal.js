import React from "react";
import './style.css'

const ReviewModal=({Worker})=>{
    console.log(Worker)
    let hideReviewModal=()=>{
        document.querySelector("#setNameModal").style.display="none";
    }
    const saveReview=()=>{
        let newName=document.querySelector("#ModalNameField").value;
        hideReviewModal()
    }
    return(
    <div class="ModalBody" id="setNameModal">
    <div class="ModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideReviewModal}/>
        </div>
        <div style={{display:"flex", margin:"auto"}}>
        <input placeholder={Worker?Worker:"Give a review"} id="ModalNameField" />
        <div className="Button" id="Usernamesavebutton" onClick={saveReview}>Save</div>
        </div>
    </div>
    </div>
    )
}
export default ReviewModal;