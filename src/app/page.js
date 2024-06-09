import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import SubNavbar from "./components/SubNavbar";
import OverFooter from "./components/OverFooter";
export default function Home() {
  return (
    <>
    <OverFooter/>
      <Navbar />
      <SubNavbar text="Pagina Inicial, navegue pelas nossas páginas" />
      <Carousel />
      <Footer />
        </>
  );
}