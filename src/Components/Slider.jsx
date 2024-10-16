// IMAGE GALLERY
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
  const images = [
    {
      original: "/ss-01.webp",
      thumbnail: "/tn-01.webp",
    },
    {
      original: "/ss-02.webp",
      thumbnail: "/tn-02.webp",
    },
    {
      original: "/ss-03.webp",
      thumbnail: "/tn-03.webp",
    },
    {
      original: "/ss-04.webp",
      thumbnail: "/tn-04.webp",
    },
    {
      original: "/ss-05.webp",
      thumbnail: "/tn-05.webp",
    },
    {
      original: "/ss-06.webp",
      thumbnail: "/tn-06.webp",
    },
  ];

  return <ImageGallery items={images} />;
};

export default Slider;
