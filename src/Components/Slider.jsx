// IMAGE GALLERY
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
  const images = [
    {
      original: "../Assets/Images/Slideshow/ss-01.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-01.webp",
    },
    {
      original: "../Assets/Images/Slideshow/ss-02.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-02.webp",
    },
    {
      original: "../Assets/Images/Slideshow/ss-03.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-03.webp",
    },
    {
      original: "../Assets/Images/Slideshow/ss-04.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-04.webp",
    },
    {
      original: "../Assets/Images/Slideshow/ss-05.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-05.webp",
    },
    {
      original: "../Assets/Images/Slideshow/ss-06.webp",
      thumbnail: "../Assets/Images/Thumbnails/tn-06.webp",
    },
  ];

  return <ImageGallery items={images} />;
};

export default Slider;
