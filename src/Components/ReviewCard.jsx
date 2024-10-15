// DATA
import reviewData from "./ReviewData";

// REACT SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ICONS
import { HiMiniStar } from "react-icons/hi2";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewCard = () => {
  const styles = {
    cardContainer:
      "bg-white border border-4 border-accent rounded-md w-4/5 m-auto my-2 p-2",
    headline:
      "text-center font-bold text-accent text-lg lg:text-sm md:text-base font-outline-1",
    review: "text-center text-black text-md px-4",
    name: "text-accent text-base text-right font-bold mt-6 px-6",
  };

  // slider
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div id="review-card">
      <Slider {...settings}>
        {reviewData?.map((review) => (
          <div key={review.id} className={styles.cardContainer}>
            <div className="flex justify-center mt-4 mb-2 mx-4 ">
              <FaQuoteLeft className="mr-2 text-accent stroke-1 stroke-attention " />
              <h2 className={styles.headline}>{review.headline}</h2>
              <FaQuoteRight className="ml-2 text-accent stroke-1 stroke-attention" />
            </div>
            <div className="flex justify-between px-20 mb-4">
              <HiMiniStar size={25} className="text-star" />
              <HiMiniStar size={25} className="text-star" />
              <HiMiniStar size={25} className="text-star" />
              <HiMiniStar size={25} className="text-star" />
              <HiMiniStar size={25} className="text-star" />
            </div>
            <div>
              <h4 className={styles.review}>&quot;{review.review}&quot;</h4>
            </div>

            <p className={styles.name}>{review.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCard;
