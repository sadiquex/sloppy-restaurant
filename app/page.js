import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/navigation/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Partners from "./components/partners/Partners";
import Reservation from "./components/reservation/Reservation";
import Reviews from "./components/reviews/Reviews";
import ShopNow from "./components/shop-now/ShopNow";
import Team from "./components/team/Team";
import Navbar from "./components/navigation/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <ShopNow />
      <Menu />
      <Reservation />
      <Gallery />
      <Reviews />
      <Team />
      <Blog />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
