import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubNavbar from "../components/SubNavbar";
import AboutUs from "../components/AboutUs";
export default function sobreNos() {
  return (
    <>
      <Navbar />
      <SubNavbar text="Sobre Nós"/>
      <AboutUs />
      <Footer />
        </>
  );
}