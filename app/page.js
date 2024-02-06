import { MAIN } from "./_ui/styles/uiContainers";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import ShopNow from "./components/ShopNow";
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
    </main>
  );
}
