import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
