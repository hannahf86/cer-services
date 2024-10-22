// REACT ROUTER DOM
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUT
import RootNav from "./Layout/RootNav";

// PAGES
import Landing from "./Pages/Landing";
import Latest from "./Pages/Latest";
import Repair from "./Pages/Repair";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// COMPONENTS
import RepairForm from "./Components/RepairForm";

// ERROR HANDLING & HELPERS
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="repair" element={<Repair />} />
      <Route path="repairform" element={<RepairForm />} />
      <Route path="latest" element={<Latest />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
