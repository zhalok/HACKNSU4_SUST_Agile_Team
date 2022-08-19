import React, { useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css";

const WorkerRequestPage = () => {
  const [clients, setClients] = useState([
    {
      name: "Parabat Express",
      service: "Class: S_chair",
      service_status: "Running",
    },
    {
      name: "Jayantika Express",
      service: "Class: S_chair",
      service_status: "Waiting",
      profile_pic: "./pics_icons/profilepic.jpg",
      email: "tithi@gmailcom",
    },
    {
      name: "Sundarban Express",
      service: "S_chair",
      service_status: "Cancelled",
      profile_pic: "./pics_icons/profilepic.jpg",
      email: "tithi@gmailcom",
    },
  ]);

  let accept = (client) => {
    alert("Buy a ticket of " + client.name);
  };
  let decline = (client) => {
    alert("Request for a ticket " + client.name);
  };

  const removeAfterAcceptOrDecline = (name) => {
    setClients(clients.filter((client) => client.name !== name));
  };

  let viewProfile = (e, client) => {
    let isClickInsideAcceptButton = false;
    let isClickInsideDeclineButton = false;
    const AcceptButtons = document.querySelectorAll(".acceptbutton");
    const DeclineButtons = document.querySelectorAll(".declinebutton");

    AcceptButtons.forEach((acceptbutton) =>
      acceptbutton.contains(e.target)
        ? (isClickInsideAcceptButton = true)
        : null
    );
    DeclineButtons.forEach((declinebutton) =>
      declinebutton.contains(e.target)
        ? (isClickInsideDeclineButton = true)
        : null
    );
    if (isClickInsideAcceptButton || isClickInsideDeclineButton) return;
    alert("View profile of " + client.name);
  };

  return (
    <div>
      <TitleBar page="clientPage" />
      <div id="request">
        <div id="requestpagetxt">Available Trains</div>
        {clients.map((client) => (
          <div
            className="rectangle"
            onClick={(e) => {
              viewProfile(e, client);
            }}
          >
            <div class="rectxt">
              {client.name} <br />
              <font class="servicetxt">{client.service}</font>
            </div>
            <button
              class="acceptbutton"
              onClick={() => {
                fetch(
                  " https://5576-37-111-214-100.in.ngrok.io/payment/initialize-payment",
                  {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      total_amount: 100,
                      currency: "BDT",
                      cus_name: "Zhalok",
                      cus_email: "rahmanzhalok@gmail.com",
                      cus_phone: "01716922067",
                      cus_add1: "Akhalia",
                      cus_city: "Sylhet",
                      multi_card_name: "bkash",
                      num_of_item: 1,
                      ticket_id: "Parabat 1A",
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    window.location.replace(data.GatewayPageURL);
                  })
                  .catch((e) => console.log(e));
              }}
            >
              Buy
            </button>
            <button
              class="declinebutton"
              onClick={() => {
                decline(client);
                removeAfterAcceptOrDecline(client.name);
              }}
            >
              Request
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default WorkerRequestPage;
