// pages/encomendas.js
import Navbar from '../components/Navbar';
import OverFooter from '../components/OverFooter';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Head from 'next/head';

const products = [
    {
        "id": 1,
        "nome": "Pão Francês (4 unidades)",
        "valor": 4.78,
        "imagem": "/paofrances.jpg"
    },
    {
        "id": 2,
        "nome": "Bolo de Chocolate (300 gramas)",
        "valor": 9.99,
        "imagem": "/bolochocolate.jpg"
    },
    {
        "id": 3,
        "nome": "Coxinha de Frango (unidade)",
        "valor": 5.50,
        "imagem": "/coxinha.jpg"
    },
    {
        "id": 4,
        "nome": "Pão de Queijo (6 unidades)",
        "valor": 7.80,
        "imagem": "/paodequeijo.jpg"
    },
    {
        "id": 5,
        "nome": "Croissant de Presunto e Queijo",
        "valor": 8.90,
        "imagem": "/croissant.webp"
    },
    {
        "id": 6,
        "nome": "Baguete Integral (unidade)",
        "valor": 6.50,
        "imagem": "/baguete.jpg"
    },
    {
        "id": 7,
        "nome": "Biscoito Doce (100 gramas)",
        "valor": 3.30,
        "imagem": "/biscoito.jpg"
    },
    {
        "id": 8,
        "nome": "Rosquinha (Unidade)",
        "valor": 6.00,
        "imagem": "/donuts2.jpg"
    },
    {
        "id": 10,
        "nome": "Bolo da casa (500 gramas)",
        "valor": 12.50,
        "imagem": "/bolo.jpg"
    }
];

export default function Encomendas() {
    return (
      <>
        <Head>
          <title>Padaria - Encomendas</title>
          <meta name="description" content="Faça suas encomendas na nossa padaria" />
        </Head>
        <OverFooter />
        <Navbar />
        <SubNavbar text="Encomendas" />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center my-8">Produtos da Padaria</h1>
          <div className="container mx-auto px-4 flex flex-wrap justify-center align-content-start">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>


        </div>
        <Footer />
      </>
    );
}
