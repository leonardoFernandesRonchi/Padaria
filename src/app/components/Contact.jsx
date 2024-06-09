import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2 text-lg" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            <span>1234 Fictional St, Imaginary City, 56789</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2 text-lg" />
            <span>email@fakemail.com</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col">
            <label className="mb-2">
              Nome
              <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" />
            </label>
            <label className="mb-2">
              Email
              <input type="email" className="w-full p-2 border border-gray-300 rounded mb-4" />
            </label>
            <label className="mb-2">
              Assunto
              <textarea className="w-full p-2 border border-gray-300 rounded mb-4 h-32"></textarea>
            </label>
            <div className="flex justify-center mb-4">
              
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
