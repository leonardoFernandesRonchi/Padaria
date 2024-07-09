"use client"
// pages/CartPage.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';  // Importe seu componente Footer aqui
import OverFooter from '../components/OverFooter';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.valor * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <OverFooter />
      <Navbar /> {/* Renderiza a navbar */}
      <SubNavbar text="Carrinho" /> {/* Renderiza a subnavbar */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-center my-8">Carrinho</h1>
        {cart.length === 0 ? (
          <p className="text-center">Seu carrinho está vazio. <Link href="/encomendas">Voltar para encomendas</Link></p>
        ) : (
          <div className="w-full max-w-2xl mx-auto">
            {cart.map(item => (
              <div key={item.product.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-2">
                    <Image
                      src={item.product.imagem}
                      alt={item.product.nome}
                      layout="responsive"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{item.product.nome}</h2>
                    <p className="text-gray-700">R$ {item.product.valor.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <h2 className="text-2xl font-bold">Total: R$ {getTotalPrice()}</h2>
            </div>
          </div>
        )}
      </div>
      
      <Footer /> {/* Renderiza o componente Footer no final da página */}
    </div>
  );
};

export default CartPage;
