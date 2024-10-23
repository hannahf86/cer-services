// ICONS
import { FaMobileAlt } from "react-icons/fa";

// RRD
import { Link } from "react-router-dom";

const About = () => {
  // STYLES
  const mobileStyles = {
    background: "flex flex-col  relative bg-white pt-28",
    titleContainer: "text-center ",
    title:
      "text-center text-5xl text-accent font-bold tracking-wider mb-8 lg:my-12",
    subtitle: "text-black font-bold text-lg my-4 pt-8 text-center mx-6",

    cTAContainer: "flex flex-col justify-center bg-white w-full px-6 py-6",
    cTATitle: "text-accent text-lg text-center",
    cTATag: "text-accent text-center mt-4 text-md font-light",
    buttonContainer: "flex justify-center my-4",
    button:
      "bg-accent font-bold text-sm text-white flex flex-col text-center p-2 w-5/6 m-auto rounded-sm shadow-md shadow-black/50 hover:shadow-inner hover:shadow-black/50 hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  return (
    <section id="about">
      {/* ------- MOBILE ------- */}
      <div className={mobileStyles.background}>
        <h1 className={mobileStyles.title}>About Us</h1>
        <p className="mx-8 text-base md:text-md md:mx-12 lg:mx-40 text-justify">
          Welcome to <strong className="text-accent">CER Services</strong>
          , a family-run vehicle repair service proudly serving York and the
          surrounding North Yorkshire area
          <br />
          <br />
          With years of experience under our belt, we’ve built a reputation for
          honesty, transparency, and efficiency. We believe in doing things the
          right way, and that means putting our customers first in everything we
          do. <br />
          <br />
          <img
            src="./happy.jpeg"
            className="px-8 py-4 mb-6 sm:py-2 sm:mb-6 sm:px-24 lg:px-12"
            alt="happy customer getting their keys back"
          />
          Whether it's a routine service or a complex repair, we ensure you're
          informed every step of the way—no surprises, no hidden costs. We
          always speak to our customers before any work is carried out, offering
          clear advice and competitive pricing. <br />
          <br />
        </p>
        <div className="lg:grid grid-cols-2">
          <p className="text-base mx-8 md:text-md md:mx-12 lg:ml-8 lg:mt-16 text-justify lg:pt-12">
            Your trust matters to us, and we're committed to getting you back on
            the road quickly and safely. For reliable, friendly service you can
            count on, come to Jim and Dougie at CER Services, where you’re
            always treated like family.
          </p>
          <img
            src="./repair.jpeg"
            className="px-8 py-6 sm:py-8 sm:px-32 lg:px-12"
            alt="technician repairing an engine"
          />
        </div>

        {/* CALL TO ACTION */}
        <div id="cTAContainer" className={mobileStyles.cTAContainer}>
          <h3 className={mobileStyles.cTATitle}>
            Call us for a quick quote on:
          </h3>
          <div className="flex text-accent justify-center items-center my-4">
            <FaMobileAlt size={25} className="mr-2" />
            <p className="font-bold text-accent text-lg">07359 741819</p>
          </div>
          <h3 className={mobileStyles.cTATag}>
            Or email us through our contact page
          </h3>
          <Link to="../contact" className={mobileStyles.buttonContainer}>
            <button className={mobileStyles.button}>Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
