import Navbar from '../components/Navbar';
import OverFooter from '../components/OverFooter';
import SubNavbar from '../components/SubNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const MyApp = () => {
  return (
    <div>
      <OverFooter/>
      <Navbar />
      <SubNavbar text="Contato"/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default MyApp;
