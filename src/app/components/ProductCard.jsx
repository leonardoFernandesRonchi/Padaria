"use client"
// components/ProductCard.js

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Notification from './Notification'; // Importe o componente de notificação

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false); // Estado para controlar a exibição da notificação

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowNotification(true); // Mostrar notificação ao adicionar ao carrinho
    setTimeout(() => setShowNotification(false), 600); // Esconder após 2 segundos
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="w-full h-48 overflow-hidden relative">
        <Image
          src={product.imagem}
          alt={product.nome}
          layout="responsive"
          width={500}
          height={200}
          sizes="100vw"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.nome}</div>
        <p className="text-gray-700 text-base">R$ {product.valor.toFixed(2)}</p>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="mt-2 w-20"
        />
      </div>
      <div className="px-6 pt-4 pb-2">
        <button 
          onClick={handleAddToCart} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar ao Carrinho
        </button>
      </div>
      {showNotification && <Notification message="Produto adicionado ao carrinho!" />}
    </div>
  );
};

export default ProductCard;

