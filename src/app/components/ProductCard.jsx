import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="w-full h-48 overflow-hidden relative"> {/* Container with fixed height */}
        <Image
          src={product.imagem}
          alt={product.nome}
          layout="responsive"
          width={500} // Original dimensions
          height={200} // Original dimensions
          sizes="100vw"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.nome}</div>
        <p className="text-gray-700 text-base">R$ {product.valor.toFixed(2)}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

