// REACT ROUTER DOM
import { Link } from "react-router-dom";

// COMPONENTS
import ReviewCard from "../Components/ReviewCard";

// PAGES
// import Repair from "./Repair";
import Latest from "./Latest";
import Contact from "./Contact";

// ICONS
import { FaCheck, FaReceipt } from "react-icons/fa";

// IMAGES
import mobile from "../Assets/Background/mobile.png";
import xs from "../Assets/Background/xs.png";
import sm from "../Assets/Background/sm.png";
import md from "../Assets/Background/md.png";
import mdMid from "../Assets/Background/midMd.png";
import lg from "../Assets/Background/lg.png";
import xl from "../Assets/Background/xl.png";
import nhs from "../Assets/Logo/nhs-logo.png";
import xxl from "../Assets/Background/xxl.png";

const Landing = () => {
  const styles = {
    background: "pt-20 h-full w-full",

    headlineContainer: "absolute top-24 xl:left-32 lg:top-36 bg-transparent",
    headlineTitle:
      "text-accent text-xl sm:text-3xl xl:text-5xl text-left px-4 bg-transparent xs:px-8 sm:px-12",
    subtitle:
      "font-body text-white text-base sm:text-lg xl:text-2xl font-light text-left px-4 pb-2 bg-transparent xs:pt-4 xs:px-8 sm:px-12",
    listContainer: "flex-col px-4 mt-4 xs:px-8 xs:pt-2 sm:px-12",
    listItem:
      "font-headers font-bold flex justify-start items-center bg-transparent sm:text-base xl:text-lg text-white my-1 xs:my-2 sm:my-6 md:my-2",
    check: "text-green bg-transparent mr-2",
    button:
      "absolute right-0 xs:mt-2 xsSm:right-0 xsSm:mt-12 sm:px-8 sm:py-4 md:top-60 lg:hidden md:right-0 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm  hover:shadow-inner hover:shadow-black/50 hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
    buttonIcon: "mx-auto mb-1 font-outline-2",

    sectionTitle:
      "text-6xl text-right xl:mr-32 mt-12 mb-4 mx-6 text-accent font-bold font-outline-2",
  };

  return (
    <div id="landing" className={styles.background}>
      <div className=" w-screen">
        {/* BACKGROUND RESPONSIVE IMAGES */}
        <div id="background">
          <img
            src={mobile}
            alt="classic red pick up truck"
            className="block xs:hidden sm:hidden"
          />
          <img
            src={xs}
            alt="classic red pick up truck"
            className="hidden xs:block sm:hidden"
          />
          <img
            src={sm}
            alt="classic red pick up truck"
            className="hidden sm:block md:hidden"
          />
          <img
            src={md}
            alt="classic red pick up truck"
            className="hidden md:block mdMid:hidden"
          />
          <img
            src={mdMid}
            alt="classic red pick up truck"
            className="hidden mdMid:block lg:hidden"
          />
          <img
            src={lg}
            alt="classic red pick up truck"
            className="hidden lg:block xl:hidden"
          />
          <img
            src={xl}
            alt="classic red pick up truck"
            className="hidden xl:block 2xl:hidden"
          />
          <img
            src={xxl}
            alt="classic red pick up truck"
            className="hidden 2xl:block"
          />
        </div>

        {/* PAGE TITLE */}
        <div id="title" className={styles.headlineContainer}>
          <h2 className={styles.subtitle}>QUALITY VEHICLE SERVICES</h2>
          <h1 className={styles.headlineTitle}>
            Reliability & expertise <br />
            from our family to yours
          </h1>

          <ul className={styles.listContainer}>
            <li className={styles.listItem}>
              <div>
                <FaCheck className={styles.check} />
              </div>
              MoT Services
            </li>

            <li className={styles.listItem}>
              <div>
                <FaCheck className={styles.check} />
              </div>
              Wheel alignment
            </li>

            <li className={styles.listItem}>
              <div>
                <FaCheck className={styles.check} />
              </div>
              All vehicle types catered for
            </li>

            <li className={styles.listItem}>
              <div>
                <FaCheck className={styles.check} />
              </div>
              NHS discount available
            </li>
            <div>
              <img src={nhs} alt="NHS logo" className="px-6" />
            </div>
          </ul>

          {/* CALL TO ACTION */}
          <Link to="contact">
            <div className={styles.button}>
              <FaReceipt size={25} className={styles.buttonIcon} />
              Request a quote
            </div>
          </Link>
        </div>

        <div className="mx-12 my-20 lg:m-20 md:mx-12 md:my-20 xl:my-40">
          <h2 className="text-2xl text-accent mb-8 text-center">
            Welcome to CER Services,
            <br /> your trusted family-run vehicle repair service in York!{" "}
          </h2>
          <p className="text-base xl:text-center">
            With years of experience, we take pride in providing honest,
            transparent, and reliable care for your vehicle. <br /> <br />
            Our commitment to fair pricing and quality workmanship ensures you
            receive top-notch service every time. <br /> <br />
            Whether it's a routine check-up or a major repair, you can trust CER
            Services to keep you on the road with peace of mind. <br /> <br />
            We're here for you—and your car—every step of the way.
          </p>
        </div>

        {/* REVIEW CARD */}
        <h1 className={styles.sectionTitle}>REVIEWS</h1>
        <div className="p-6 md:mx-32 lg:mx-96">
          <ReviewCard />
        </div>
      </div>

      {/* REPAIR */}
      {/* <Repair /> */}

      {/* LATEST */}
      <Latest />

      {/* LATEST */}
      <Contact />
    </div>
  );
};

export default Landing;
