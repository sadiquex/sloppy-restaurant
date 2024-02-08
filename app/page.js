import { MAIN } from "./_ui/styles/uiContainers";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Partners from "./components/Partners";
import Reservation from "./components/Reservation";
import Reviews from "./components/Reviews";
import ShopNow from "./components/ShopNow";
import Team from "./components/Team";
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
