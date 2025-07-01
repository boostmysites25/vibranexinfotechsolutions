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
import DemoButton from "./components/common/DemoButton";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/website/Layout"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AIServices = lazy(() => import("./pages/AIServices"));
const ARVRDevelopment = lazy(() => import("./pages/ARVRDevelopment"));
const IoTDevelopment = lazy(() => import("./pages/IoTDevelopment"));

// Import the new landing page components
const WebLandingPage = lazy(() => import("./pages/landingpages/WebLandingPage"));
const AppLandingPage = lazy(() => import("./pages/landingpages/AppLandingPage"));
const AILandingPage = lazy(() => import("./pages/landingpages/AILandingPage"));
const ARVRLandingPage = lazy(() => import("./pages/landingpages/ARVRLandingPage"));
const IoTLandingPage = lazy(() => import("./pages/landingpages/IoTLandingPage"));

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
          <DemoButton />
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="services" element={<OurServices />} />
              <Route path="services/ai-development" element={<AIServices />} />
              <Route path="services/arvr-development" element={<ARVRDevelopment />} />
              <Route path="services/iot-development" element={<IoTDevelopment />} />
              <Route path="services/:page" element={<ServiceDetails />} />
              <Route path="contact-us" element={<ContactUs />} />
              {/* These routes are now handled in the LandingPageLayout section */}
            </Route>
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/" element={<LandingPageLayout />}>
              <Route
                path="web-development"
                element={<WebLandingPage />}
              />
              <Route
                path="app-development"
                element={<AppLandingPage />}
              />
              <Route
                path="ai-services"
                element={<AILandingPage />}
              />
              <Route
                path="ar-vr-development"
                element={<ARVRLandingPage />}
              />
              <Route
                path="iot-development"
                element={<IoTLandingPage />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SpinnerContextProvider>
  );
}

export default App;
