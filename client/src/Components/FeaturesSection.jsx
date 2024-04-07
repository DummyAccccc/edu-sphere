import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm w-full sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto shadow-md rounded-lg overflow-hidden bg-slate-200">
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'Description for card 1 ',
    },
    {
      title: 'Card 2',
      description: 'Description for card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for card 3',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
