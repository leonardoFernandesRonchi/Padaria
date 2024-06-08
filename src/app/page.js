import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import SubNavbar from "./components/subNavbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar text="Pagina Inicial, navegue pelas nossas páginas" />
      <Carousel />
      <Footer />
        </>
  );
}