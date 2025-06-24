import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import { LoadingSpinner } from "./components/website/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/website/SpinnerContext";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPageLayout from "./components/landingpage/Layout";
import { Toaster } from "react-hot-toast";
import WhatsappIcon from "./components/common/WhatsappIcon";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/website/Layout"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AIServices = lazy(() => import("./pages/AIServices"));
const ARVRDevelopment = lazy(() => import("./pages/ARVRDevelopment"));

AOS.init({
  once: true,
  duration: 700,
  offset: -200,
});

function App() {
  return (
    <SpinnerContextProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <LoadingSpinnerContext />
          <ScrollToTop />
          <WhatsappIcon />
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="services" element={<OurServices />} />
              <Route path="services/:page" element={<ServiceDetails />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="ai-services" element={<AIServices />} />
              <Route path="ar-vr-development" element={<ARVRDevelopment />} />
            </Route>
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/" element={<LandingPageLayout />}>
              <Route
                path="web-development"
                element={<LandingPage page="web" />}
              />
              <Route
                path="app-development"
                element={<LandingPage page="app" />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SpinnerContextProvider>
  );
}

export default App;
