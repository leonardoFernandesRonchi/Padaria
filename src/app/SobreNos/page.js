import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubNavbar from "../components/SubNavbar";
import AboutUs from "../components/AboutUs";
import OverFooter from "../components/overFooter";
export default function sobreNos() {
  return (
    <>
    <OverFooter/>
      <Navbar />
      <SubNavbar text="Sobre Nós"/>
      <AboutUs />
      <Footer />
        </>
  );
}