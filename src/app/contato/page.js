import Navbar from '../components/Navbar';
import OverFooter from "../components/overFooter";
import SubNavbar from '../components/SubNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const MyApp = () => {
  return (
    <div>
      <OverFooter/>
      <Navbar />
      <SubNavbar text="Sobre Nós"/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default MyApp;
