import React from 'react';

function CookingItems ({ cookingItems }) {
  return (
    <div className="mt-32">
      <div className="text-2xl font-bold mb-8 text-center">
        <h2>Cooking</h2>
      </div>
      <div className="flex justify-center">
        {cookingItems?.map((item, index) => (
          <div key={index} className="flex flex-col mr-8 w-1/3 items-center text-center">
            <img className="w-full h-auto" src={item.image} alt="Cooking" />
            <div className="text-lg font-bold mt-4">{item.name}</div>
            <div className="text-sm text-gray-400 mt-2">{item.date}</div>
            <div className="text-base mt-2">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CookingItems;
