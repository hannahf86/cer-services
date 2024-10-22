/* eslint-disable */

// REACT
import { useRef, useState } from "react";

// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

// DATA
import vehicleData from "../Pages/Repair";

const RepairForm = ({ vehicleData }) => {
  const styles = {
    background: "h-full w-full px-6 pt-24",
    sectionTitle:
      "text-6xl text-left mb-2 text-accent font-bold font-outline-2",
    sectionSubtitle: "text-md text-accent col-start-1 ",
    text: "font-light text-justify mb-4",
    input:
      "py-2 pl-4 border-2 border-attention rounded-sm mx-auto mb-4 w-full ",
    messageArea: "h-40 border-2 border-attention rounded-sm mb-4 p-4",
    button:
      "bg-accent mt-4 text-sm px-4 text-white text-center p-2 m-auto rounded-sm shadow-md shadow-black/50 hover:shadow-inner hover:shadow-black/50 hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  // NAVIGATION
  const goBack = useNavigate();

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");

    emailjs
      .sendForm("service_sy7jxem", "template_mze54hh", formRef.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
          console.log("Success!");
        },
        (error) => {
          toast.error(`Oh no! There's been an error!`);
          console.log("Error!", error.message);
        },
      );
  };

  return (
    <div id="repair-form" className={styles.background}>
      <h1 className={styles.sectionTitle}>REPAIRS</h1>
      <p className={styles.text}>How can we help you?</p>

      {/* FORM */}
      <form onSubmit={sendEmail} className="flex flex-col mb-8">
        <div className="grid grid-cols-2 items-center justify-center mb-4">
          <h4 className={styles.sectionSubtitle}>Vehicle Type</h4>
          <p className="col-start-1 row-start-2 text-black font-bold">Car</p>
          <Link
            to={goBack("/#repair")}
            onClick={toTop}
            className="col-start-2 row-start-2 text-right">
            <small className="underline text-black/50 ">Change </small>
          </Link>
        </div>
        <input
          type="text"
          name="user_name"
          aria-label="name input"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="user_email"
          aria-label="email input"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="user_number"
          aria-label="phone number input"
          value={mobile}
          placeholder="Phone number"
          onChange={(e) => setMobile(e.target.value)}
          className={styles.input}
          required
        />

        <textarea
          type="text"
          aria-label="message input"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageArea}
          placeholder="Please describe your problem"
          required
        />
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default RepairForm;
