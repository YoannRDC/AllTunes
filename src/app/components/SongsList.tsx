// SongsList.tsx
import React from 'react';
import TransactionButton from './TransactionButton';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  // Ajoutez d'autres propriétés si nécessaire
}

interface SongsListProps {
  title: string;
  items: Song[];
  onItemClick: (item: Song) => void;
  onBuyClick: (item: Song) => void;
}

const SongsList: React.FC<SongsListProps> = ({ title, items, onItemClick, onBuyClick }) => {
  return (
    <div className="w-1/3 p-4">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-1 p-2 border-b">
            <span onClick={() => onItemClick(item)} className="cursor-pointer">
              {item.title}
            </span>
            <button
              onClick={() => onBuyClick(item)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Buy
            </button>
            <TransactionButton />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
