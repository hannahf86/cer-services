// REACT
import { useRef, useState } from "react";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

// ICONS
import { FaMobileScreen } from "react-icons/fa6";

const Contact = () => {
  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_hp57nnb", "template_03kyed8", formRef.current, {
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

  // STYLES
  const mobileStyles = {
    background: "flex flex-col relative bg-white pt-28",
    titleContainer: "",
    title: "text-center text-5xl text-accent font-bold tracking-wider mb-8",
    tagline: "text-black my-4 text-center mx-6 text-base",
    form: "p-4 w-full md:w-4/6 m-auto mt-4 flex flex-col justify-center mb-20",
    input: "py-2 pl-4 border-2 border-attention rounded-sm mx-auto mb-4 w-5/6 ",
    message:
      "py-3 pl-3 border-2 border-attention h-32 rounded-md mx-auto mb-4 h-28 w-5/6",
    button:
      "bg-accent text-sm text-white flex flex-col text-center p-2 w-5/6 m-auto rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  return (
    <div id="contact">
      {/* MOBILE */}
      <section className={mobileStyles.background}>
        {/* TITLE */}
        <div className={mobileStyles.titleContainer}>
          <h2 className={mobileStyles.title}>Contact</h2>

          {/* EMERGENCY SECTION */}
          <div className="bg-accent px-6 py-8">
            <h2 className="text-black text-xl text-center">
              For emergencies, contact Jim & Dougie directly on:
            </h2>
            <div className="flex justify-center items-center text-white py-6">
              <FaMobileScreen size={28} className="mr-2" />
              <h1 className="text-4xl text-center">07984 517561</h1>
            </div>
            <h3 className="text-right text-base">
              We&apos;ll be with you ASAP!
            </h3>
          </div>

          <p className={mobileStyles.tagline}>
            For everything else, fill out our form below and we&apos;ll be in
            touch ASAP.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className={mobileStyles.form} ref={formRef}>
          <input
            type="text"
            name="user_name"
            aria-label="name input"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className={mobileStyles.input}
            required
          />
          <input
            type="email"
            name="user_email"
            aria-label="email input"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={mobileStyles.input}
            required
          />
          <input
            type="text"
            name="message"
            aria-label="phone number input"
            value={name}
            placeholder="Phone number"
            onChange={(e) => setName(e.target.value)}
            className={mobileStyles.input}
            required
          />
          <textarea
            type="text"
            aria-label="message input"
            name="message"
            value={message}
            placeholder="Please detail your requirements"
            onChange={(e) => setMessage(e.target.value)}
            className={mobileStyles.message}
            required
          />
          <button className={mobileStyles.button}>Send Email</button>
          <Toaster />
        </form>
      </section>
    </div>
  );
};

export default Contact;
