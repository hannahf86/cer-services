// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

const Repair = () => {
  const styles = {
    background: "h-full w-full px-6",
    sectionTitle:
      "text-6xl text-left mt-20 mb-2 text-accent font-bold font-outline-2",
    sectionSubtitle: "text-md text-left mb-4 text-black/80",
    text: "font-light text-justify mb-4",
    form: "mb-20",
    select: "border border-2 border-attention w-full rounded-sm p-2",
    button:
      "absolute right-6 mt-4 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  const [formData, setFormData] = useState({});
  const newPage = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const vehicleData = {
      ...formData,
    };

    newPage("/repairform");
  };

  const handleInput = (event) => {
    const { vehicle } = event;
    const { name, value } = vehicle;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="repairs" className={styles.background}>
      <h1 className={styles.sectionTitle}>REPAIRS</h1>
      <h2 className={styles.sectionSubtitle}>Get a quote before you commit</h2>

      <p className={styles.text}>
        Professional repairs done right the first time, followed by ongoing care
        to keep your vehicle running smoothly. That&apos;s the experience our
        family proudly delivers, every single time.
      </p>

      <p className={styles.text}>
        Book your repair now with our service form below
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <select onChange={handleInput} name="vehicle" className={styles.select}>
          <option default value="select">
            Select
          </option>
          <option value="car">Car</option>
          <option value="bike">Motorbike</option>
          <option value="van">Van</option>
          <option value="truck">Truck</option>
          <option value="truck">Other</option>
        </select>
        <button type="submit" className={styles.button}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Repair;
