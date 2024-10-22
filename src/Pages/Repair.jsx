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
    form: "mb-8",
    select: "border border-2 border-attention w-full rounded-sm p-2",
    button:
      "bg-accent mt-4 text-sm px-4 text-white text-center p-2 m-auto rounded-sm shadow-md shadow-black/50 hover:shadow-inner hover:shadow-black/50 hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  // NAVIGATION
  const newPage = useNavigate("");
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [vehicleData, setVehicleData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setVehicleData(event.target.vehicle.value); // get form data
    newPage("/repairform"); // navigate to the repair form page
  };

  console.log(vehicleData);

  return (
    <div id="repair" className={styles.background}>
      <h1 className={styles.sectionTitle}>REPAIRS</h1>

      <p className={styles.text}>
        Professional repairs done right the first time, followed by ongoing care
        to keep your vehicle running smoothly. That&apos;s the experience our
        family proudly delivers, every single time.
      </p>

      <p className={styles.text}>
        Book your repair now with our service form below
      </p>

      {/* FORM */}
      <form id="vehicle-form" onSubmit={handleSubmit} className={styles.form}>
        <select name="vehicle" className={styles.select} required>
          <option value="Car">Car</option>
          <option value="Bike">Motorbike</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
          <option value="Other">Other</option>
        </select>
        <div className="flex justify-end">
          <button type="submit" className={styles.button} onClick={toTop}>
            Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default Repair;
