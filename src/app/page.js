import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        {/* Aqui vai o conteúdo da sua página */}
        <h1>Bem-vindo à minha página inicial!</h1>
        <p>Esta é a página inicial do meu site.</p>
      </div>
      <Footer />
    </>
  );
}
