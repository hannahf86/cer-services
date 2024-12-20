// ICONS
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

// RRD
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    background:
      "bg-accent bottom-0 py-8 grid grid-cols-2 px-1 md:px-24 lg:px-40 pb-20 sm:pb-0",

    leftCol:
      "ml-6 md:ml-12 flex flex-col col-start-1 col-span-2 sm:col-span-1 self-center",
    socials: "flex flex-col mt-4",
    icon: "my-2 text-white",

    rightCol:
      "mx-6 mt-6 col-start-1 row-start-2 flex justify-between col-span-2 text-center sm:col-start-2 sm:row-start-1 sm:flex-col sm:ml-0 sm:text-right sm:self-center sm:mr-6 sm:mt-0 md:mr-12",
    link: "text-white my-1 hover:bg-orange hover:text-black py-1 px-1",

    bottomRow: "col-start-1 col-end-3 flex justify-center mt-6",
    webTextContainer:
      "col-start-1 col-end-3 mt-2 flex justify-center flex-wrap",
    webText: "text-white text-center flex flex-wrap justify-center pb-8",
  };

  return (
    <div id="footer" className={styles.background}>
      {/* LEFT COL */}
      <div className={styles.leftCol}>
        <div className={styles.socials}>
          <div className="flex items-center">
            <FaMobileScreen size={28} className={styles.icon} />{" "}
            <p className="ml-2 text-white">07984 517561</p>
          </div>

          <div className="flex items-center">
            <IoIosMail size={28} className={styles.icon} />{" "}
            <p className="ml-2 text-white">hello@cerservices-york.com</p>
          </div>
          {/* 
          <a href="">
            <div className="flex items-center">
              <RiInstagramFill size={28} className={styles.icon} />{" "}
              <p className="ml-2 text-white">/CER_Services</p>
            </div>
          </a> */}

          <a href="https://www.facebook.com/profile.php?id=100062304444848">
            <div className="flex items-center">
              <RiFacebookBoxFill size={28} className={styles.icon} />{" "}
              <p className="ml-2 text-white">CER Services</p>
            </div>
            {/* <div className="flex items-center">
              <p className=" text-white mb-4">___________________</p>
            </div> */}
          </a>
        </div>
      </div>

      {/* RIGHT COL */}
      <div className={styles.rightCol}>
        {/* <small className="text-white text-sm tracking-widest underline">
          WEBSITE PAGES
        </small> */}
        <Link to="/" className={styles.link}>
          Home
        </Link>

        <Link to="about" className={styles.link}>
          About
        </Link>
        <Link to="contact" className={styles.link}>
          Contact
        </Link>
      </div>

      {/* BOTTOM COL */}
      <div className={styles.bottomRow}>
        <small className="text-white tracking-widest">SITEMAP</small>
      </div>
      <div className={styles.webTextContainer}>
        <small className={styles.webText}>
          Website designed & built by{"  "}
          <a
            href="https://www.jorvikweb.dev/"
            target="_blank"
            className="text-white font-bold">
            {" "}
            Jorvik Web Dev
          </a>{" "}
          <FaRegCopyright size={10} color="white" className="mx-1 my-1" />
        </small>
      </div>
    </div>
  );
};

export default Footer;
