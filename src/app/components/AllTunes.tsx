'use client'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'
import Section from './Section'
// import * as mm from 'music-metadata/lib/core';
// import { parseFile } from 'music-metadata';  // music-metadata
//import { parseFile } from '../ ../lib/index.js';  // music-metadata
import { inspect } from 'util';
import * as mm from 'music-metadata-browser';

interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
    year: number;
  }

const AllTunes = () => {
    const { address, isConnected } = useAccount()
    const [mp3Tags, setMp3Tags] = useState<any[]>([])

    const musicMetadata = require('music-metadata-browser');

    (async () => {

        try {
            const response = await fetch('public/music/God.mp3');
            if (!response.ok) {
              throw new Error(`Failed to fetch file: ${response.statusText}`);
            }
            const blob = await response.blob();
            const metadata = await mm.parseBlob(blob);
            console.log(metadata.common); // Affiche les métadonnées communes
          } catch (error) {
            console.error('Error parsing file:', error);
          }
          
      }
    )();

    const allSongs = [
        { id: 1, title: 'Song A', artist: 'Artist A', album: 'Album A', year: 2020 },
        { id: 2, title: 'Song B', artist: 'Artist B', album: 'Album B', year: 2021 },
        { id: 3, title: 'Song C', artist: 'Artist C', album: 'Album C', year: 2022 },
      ];
      
      const mySongs = [
        { id: 1, title: 'Song X', artist: 'Artist X', album: 'Album X', year: 2018 },
        { id: 2, title: 'Song Y', artist: 'Artist Y', album: 'Album Y', year: 2019 },
      ];

      const [selectedSong, setSelectedSong] =  useState<Song | null>(null);

      const handleSongClick = (song: Song) => {
        setSelectedSong(song);
      };

      // 'public/music/God.mp3'
    return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="alltunes"
    >
      <div className="relative flex">
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">All Songs</h2>
          <ul>
            {allSongs.map((song) => (
              <li
                key={song.id}
                onClick={() => handleSongClick(song)}
                className="cursor-pointer mb-1 p-2 border-b"
              >
                {song.title}
              </li>
            ))}
          </ul>
        </div>
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
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">My Songs</h2>
          <ul>
            {mySongs.map((song) => (
              <li key={song.id} className="mb-1 p-2 border-b">
                {song.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
    )
}

export default AllTunes

