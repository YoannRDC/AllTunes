// MyItemsList.tsx
import React from 'react';

interface Item {
  id: number;
  title: string;
  // Ajoutez d'autres propriétés si nécessaire
}

interface MyItemsListProps {
  title: string;
  items: Item[];
}

const MyItemsList: React.FC<MyItemsListProps> = ({ title, items }) => {
  return (
    <div className="w-1/3 p-4">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-1 p-2 border-b">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyItemsList;
