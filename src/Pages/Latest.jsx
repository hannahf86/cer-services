// COMPONENTS
import Slider from "../Components/Slider";

const Latest = () => {
  const styles = {
    background: "pt-20 h-full w-full",
    button:
      "absolute right-4 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
    buttonIcon: "mx-auto mb-1 font-outline-2",
    sectionTitle:
      "text-6xl text-right pt-20 mb-4 mx-6 text-accent font-bold font-outline-2",
  };

  return (
    <div id="latest">
      <h1 className={styles.sectionTitle}>Latest</h1>
      <p className="px-6">
        Its always busy here at CER Services. Take a look below for our latest
        news.
      </p>
      <div className="p-6">
        <Slider />
      </div>
    </div>
  );
};

export default Latest;
