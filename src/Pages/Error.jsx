// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const goBack = useNavigate(-1);

  return (
    <div id="error" className="pt-24 pb-32 text-center">
      <h2 className="py-6 text-xl text-accent"> ERROR</h2>
      <img src="/error.jpeg" alt="broken computer" className="w-3/5 mx-auto" />
      <p className="py-6">Oh no! There&apos;s been an error!</p>
      <p>
        Click{" "}
        <Link to={goBack} className="underline">
          here
        </Link>{" "}
        to go back to the previous page
      </p>
    </div>
  );
};

export default Error;
