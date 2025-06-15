import App from "@/App";
import AboutUs from "@/page/AboutUs";
import ContactUs from "@/page/ContactUs";
import Home from "@/page/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </>
  )
);

export { router };
