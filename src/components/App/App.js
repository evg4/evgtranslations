import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import ServicesAndSpecialisms from "../ServicesAndSpecialisms/ServicesAndSpecialisms";
import HowIWork from "../HowIWork/HowIWork";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/services-and-specialisms"
        element={<ServicesAndSpecialisms />}
      />
      <Route path="/how-i-work" element={<HowIWork />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
