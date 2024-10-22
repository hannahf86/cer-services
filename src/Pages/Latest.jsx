// COMPONENTS
import Slider from "../Components/Slider";

const Latest = () => {
  const styles = {
    background: "h-full w-full px-6 xs:px-8 sm:px-12",
    sectionTitle:
      "text-6xl text-right pt-20 mb-8 text-accent font-bold font-outline-2",
  };

  return (
    <div id="latest" className={styles.background}>
      <h1 className={styles.sectionTitle}>Latest</h1>
      <p className="pb-4 text-base">
        Its always busy here at CER Services. Take a look below for our latest
        news.
      </p>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Latest;
