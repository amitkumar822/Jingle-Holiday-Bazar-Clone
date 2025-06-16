import App from "@/App";
import PayNow from "@/components/PayNow";
import PlacesPackages from "@/components/PlacesPackages";
import AboutUs from "@/page/AboutUs";
import ContactUs from "@/page/ContactUs";
import DomesticTravel from "@/page/DomesticTravel";
import Home from "@/page/home/Home";
import InternationalTravelPage from "@/page/InternationalTravelPage";
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
        <Route path="/domestic-travel" element={<DomesticTravel />} />
        <Route path="/international-travel" element={<InternationalTravelPage />} />
        <Route path="/places-packages" element={<PlacesPackages />} />
        <Route path="/pay-now" element={<PayNow />} />
      </Route>
    </>
  )
);

export { router };
