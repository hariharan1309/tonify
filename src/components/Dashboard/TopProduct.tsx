'use client'
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  sold: number;
  imageUrl: string;
}

const TopProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Apple Watch', sold:20,imageUrl: 'https://img.freepik.com/free-vector/smartwatch-front-side_23-2147498802.jpg?t=st=1718123666~exp=1718127266~hmac=b1ea7b8f96247899b0380b6876bd6d84dcb5df06327cbc70394ec12b76790bfb&w=740' },
    { id: 2, name: 'iMac 27"', sold: 15, imageUrl: 'https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1718123588~exp=1718127188~hmac=225ffbf17dd91d393d1c92f6872be0c82004e3721f67c0e70926e5b6d5035167&w=740' },
    { id: 3, name: 'iPhone 12', sold:8, imageUrl: 'https://img.freepik.com/free-vector/black-smartphone_23-2147700235.jpg?t=st=1718123714~exp=1718127314~hmac=ec1189b5bda1e7d75d34975b5a6b5b12cb59a7fbf983928ba5a076b972338508&w=740' },
    { id: 4, name: 'iPhone 12', sold:8, imageUrl: 'https://img.freepik.com/free-vector/black-smartphone_23-2147700235.jpg?t=st=1718123714~exp=1718127314~hmac=ec1189b5bda1e7d75d34975b5a6b5b12cb59a7fbf983928ba5a076b972338508&w=740' },
    { id: 5, name: 'iPhone 12', sold:8, imageUrl: 'https://img.freepik.com/free-vector/black-smartphone_23-2147700235.jpg?t=st=1718123714~exp=1718127314~hmac=ec1189b5bda1e7d75d34975b5a6b5b12cb59a7fbf983928ba5a076b972338508&w=740' },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const handleRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };
  return (
    <div className="max-w-md relative overflow-x-auto shadow-md sm:rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-white bg-blue-500 text-xl font-semibold  shadow-lg dark:bg-blue-400 dark:hover:bg-blue-500 flex flex-1 p-4">
          <svg className="w-6 h-6 text-white inline-block mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
          </svg>
            <span>Top selling products</span>
        </thead>
        <tbody>
          {products.map(product => (
            <ul key={product.id} className="bg-white group border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-50 cursor-pointer dark:hover:bg-gray-600 flex flex-row flex-nowrap justify-between">
              <li className="p-2">
                <img src={product.imageUrl} 
              className="w-16 h-16 aspect-square rounded-md shadow-lg transition-transform duration-200 ease-in-out transform group-hover:scale-105"
              alt={product.name} />
              </li>
              <li className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{product.name}</li>
              <li className="px-8 py-4 font-semibold text-blue-500 dark:text-blue-400 dark:text-400">
                    {product.sold}
              </li>
            </ul>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProduct;
