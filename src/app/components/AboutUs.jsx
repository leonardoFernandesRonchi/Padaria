import React from 'react';

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-[70vh] mb-8">
            <div className="flex-1 flex flex-col justify-center p-8 md:mb-8">
                <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
                <p className="text-base break-words">
                    Bem-vindo à nossa padaria! Somos uma equipe dedicada a trazer para você os melhores produtos de panificação, preparados com ingredientes de alta qualidade e muita paixão. Desde pães artesanais a deliciosos doces, cada item é feito com o cuidado e a atenção que você merece. Venha nos visitar e experimente o sabor da nossa tradição!
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center p-4">
                <img
                    src="/padaria.jpg"
                    alt="Padaria"
                    className="max-w-full max-h-full object-contain p-2 rounded-md"
                />
            </div>
        </div>
    );
};

export default AboutUs;