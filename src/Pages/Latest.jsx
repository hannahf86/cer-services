// REACT SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// IMAGES
import cer1 from "../Assets/Images/cer-01.jpg";
import cer2 from "../Assets/Images/cer-02.jpg";
import cer3 from "../Assets/Images/cer-03.jpg";
import cer4 from "../Assets/Images/cer-04.jpg";
import cer5 from "../Assets/Images/cer-05.jpg";
import cer6 from "../Assets/Images/cer-06.jpg";
import cer7 from "../Assets/Images/cer-07.jpg";

const Latest = () => {
  const styles = {
    background: "pt-20 h-full w-full",

    button:
      "absolute right-4 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
    buttonIcon: "mx-auto mb-1 font-outline-2",

    sectionTitle:
      "text-6xl text-right mt-12 mb-4 mx-6 text-accent font-bold font-outline-2",
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div id="latest">
      <h1 className={styles.sectionTitle}>Latest News</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={cer1} />
          </div>
          <div>
            <img src={cer2} />
          </div>
          <div>
            <img src={cer3} />
          </div>
          <div>
            <img src={cer4} />
          </div>
          <div>
            <img src={cer5} />
          </div>
          <div>
            <img src={cer6} />
          </div>
          <div>
            <img src={cer7} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Latest;
