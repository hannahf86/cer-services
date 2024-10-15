const RepairForm = () => {
  const styles = {
    background: "h-full w-full px-6 pt-24",
    sectionTitle:
      "text-6xl text-left mt-20 mb-2 text-accent font-bold font-outline-2",
    text: "font-light text-justify mb-4",
    form: "mb-20",
    select: "border border-2 border-attention w-full rounded-sm p-2",
    button:
      "absolute right-6 mt-4 bg-accent text-sm text-white flex flex-col text-center p-2 rounded-sm border border-2 border-attention hover:text-black hover:outline outline-2 outline-offset-4 outline-accent",
  };

  return (
    <div id="repair-form" className={styles.background}>
      <h1 className={styles.sectionTitle}>REPAIRS</h1>

      <p className={styles.text}>How can we help?</p>
    </div>
  );
};

export default RepairForm;
