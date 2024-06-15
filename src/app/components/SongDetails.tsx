// SongDetails.tsx
import React from 'react';

interface Song {
  title: string;
  artist: string;
  album: string;
  year: number;
  // Ajoutez d'autres propriétés si nécessaire
}

interface SongDetailsProps {
  selectedSong: Song | null;
}

const SongDetails: React.FC<SongDetailsProps> = ({ selectedSong }) => {
  return (
    <div className="w-1/3 p-4 border-l border-r">
      {selectedSong ? (
        <div>
          <h2 className="font-bold text-lg mb-2">Song Details</h2>
          <p><strong>Title:</strong> {selectedSong.title}</p>
          <p><strong>Artist:</strong> {selectedSong.artist}</p>
          <p><strong>Album:</strong> {selectedSong.album}</p>
          <p><strong>Year:</strong> {selectedSong.year}</p>
        </div>
      ) : (
        <p>Select a song to see details</p>
      )}
    </div>
  );
};

export default SongDetails;
