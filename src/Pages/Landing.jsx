// REACT ROUTER DOM
import { Link } from "react-router-dom";

// COMPONENTS
import ReviewCard from "../Components/ReviewCard";

// PAGES
import Repair from "./Repair";
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

const Landing = () => {
  const styles = {
    background: "pt-20 h-full w-full",

    headlineContainer: "absolute top-24 bg-transparent",
    headlineTitle: "text-accent text-2xl text-left px-4 bg-transparent",
    subtitle:
      "font-body text-white text-base font-light text-left px-4 pb-2 bg-transparent",
    listContainer: "flex-col px-6 mt-4 ",
    listItem:
      "font-headers font-bold flex justify-start items-center bg-transparent text-white my-1",
    check: "text-green bg-transparent mr-2",
    button:
      "absolute right-4 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
    buttonIcon: "mx-auto mb-1 font-outline-2",

    sectionTitle:
      "text-6xl text-right mt-12 mb-4 mx-6 text-accent font-bold font-outline-2",
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
            className="hidden sm:block"
          />
          <img
            src={md}
            alt="classic red pick up truck"
            className="hidden md:block"
          />
          <img
            src={mdMid}
            alt="classic red pick up truck"
            className="hidden mdMid:block"
          />
          <img
            src={lg}
            alt="classic red pick up truck"
            className="hidden lg:block"
          />
          <img
            src={xl}
            alt="classic red pick up truck"
            className="hidden xl:block"
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

        {/* REVIEW CARD */}
        <h1 className={styles.sectionTitle}>REVIEWS</h1>
        <div className="p-6">
          <ReviewCard />
        </div>
      </div>

      {/* REPAIR */}
      <Repair />

      {/* LATEST */}
      <Latest />

      {/* LATEST */}
      <Contact />
    </div>
  );
};

export default Landing;
