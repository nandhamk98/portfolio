import "./App.css";
import { useState } from "react";
import { IntroductionComp } from "./components/IntroductionComp";
import { TechStackComp } from "./components/TechStackComp";
import { ProjectComp } from "./components/ProjectComp";
import { ProfessionalComp } from "./components/ProfessionalComp";
import { NavBarComp } from "./components/NavBarComp";
import { AboutComp } from "./components/AboutComp";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      {/* <div className="nav">
        <a href="#introductionComp" className="nav-item">
          intro
        </a>
        <a href="#techStackComp" className="nav-item">
          tech
        </a>
        <a href="#projectComp" className="nav-item">
          Projects
        </a>
        <a href="#professionalComp" className="nav-item">
          professional Experience
        </a>
      </div> */}
      <NavBarComp />
      <IntroductionComp />
      <AboutComp />
      <ProjectComp />
      <TechStackComp />
      <ProfessionalComp />
      <Contact />
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const YOUR_SERVICE_ID = "service_irqfaqs";
  const YOUR_TEMPLATE_ID = "template_rzo9jtw";
  const YOUR_USER_ID = "aGb_Yh8bfLMu4WlzP";
  const template_params = {
    full_name: name,
    email: email,
    message: msg,
  };
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, template_params, YOUR_USER_ID)
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-main-container" id="contact">
      <div className="contact-header">Contact Details:</div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="alignbetween">
            <div className="alignDetailLeft">
              <span>Address: </span>
              <br />
              130A , Rajiv gandhi Nagar,<br></br>
              Sowripalyam, <br></br>
              Coimbatore -641028
            </div>
          </div>
          <div className="alignbetween">
            <div className="alignDetailLeft">
              <span>Phone: </span>
              9698412358
            </div>
          </div>
          <div className="alignbetween" sx={{ textAlign: "left" }}>
            <div className="alignDetailLeft">
              <span>E-mail: </span>
              nandhakumar@gmail.com
            </div>
          </div>
        </div>
        <div className="send-message">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              required
              placeholder="Please enter name"
              className="contact-input"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            <input
              type="email"
              required
              placeholder="Please enter email"
              className="contact-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <textarea
              type="text"
              required
              placeholder="Please enter Message..."
              className="contact-input"
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <br />
            <Button
              variant="outlined"
              className="product-cart"
              color="primary"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
