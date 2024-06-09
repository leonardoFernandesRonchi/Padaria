import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#C5E1E4] p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contato */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contato</h2>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>(00) 1234-5678</span>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>1234 Fictional St, Imaginary City, 56789</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>email@fakemail.com</span>
          </div>
        </div>
        {/* Horário de funcionamento */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Horário de Funcionamento</h2>
          <div className="flex items-center mb-2">
            <FaClock className="mr-2" />
            <span>Segunda à Sexta: 6h00 - 22h30</span>
          </div>
          <div className="flex items-center mb-2">
            <FaClock className="mr-2" />
            <span>Sábado e Domingo: 6h30 - 22h00</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>Feriados: 6h30 - 22h00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

