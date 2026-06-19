import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Services from "./components/services/Service.jsx";
import Banner from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import ImageSlider from "./components/imageslider/index.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";


import "./App.css";

function App() {
  return (
    <>
      <section className="navbar__section">
        <Navbar />
        <Hero />
      </section>

      <main>
        <Services />
        <Banner />
        <About />
        <ImageSlider />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
