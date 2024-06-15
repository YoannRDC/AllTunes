'use client'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'
import Section from './Section'
import TransactionButton from './TransactionButton';
// import * as mm from 'music-metadata/lib/core';
// import { parseFile } from 'music-metadata';  // music-metadata
//import { parseFile } from '../ ../lib/index.js';  // music-metadata
import { inspect } from 'util';
import * as mm from 'music-metadata-browser';

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SongsList from './SongsList'
import SongDetails from './SongDetails'
import MyItemsList from './SongsList'


interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
    year: number;
  }

  interface Album {
    id: number;
    title: string;
    artist: string;
    year: number;
  }

  interface Artist {
    id: number;
    title: string;
    artist: string;
  }

const AllTunes = () => {
    // 'public/music/God.mp3'
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

    
    {/* *********** My Songs **********/} 
    const allSongs = [
    { id: 1, title: 'Song A', artist: 'Artist A', album: 'Album A', year: 2020 },
    { id: 2, title: 'Song B', artist: 'Artist B', album: 'Album B', year: 2021 },
    { id: 3, title: 'Song C', artist: 'Artist C', album: 'Album C', year: 2022 },
    ];
    
    const initialMySongs: Song[] | (() => Song[]) = [];

    const [selectedSong, setSelectedSong] =  useState<Song | null>(null);
    const [mySongs, setMySongs] = useState<Song[]>(initialMySongs);

    const handleSongClick = (song: Song) => {
    setSelectedSong(song);
    };

    const handleBuySong = (song: Song) => {
    if (!mySongs.find(s => s.id === song.id)) {
        setMySongs([...mySongs, song]);
    }
    };

      
    {/* *********** My Albums **********/} 
    const allAlbums = [
    { id: 1, title: 'Album A', artist: 'Artist A', album: 'Album A', year: 2020 },
    { id: 2, title: 'Album B', artist: 'Artist B', album: 'Album B', year: 2021 },
    { id: 3, title: 'Album C', artist: 'Artist C', album: 'Album C', year: 2022 },
    ];
    
    const initialMyAlbums: Album[] | (() => Album[]) = [];

    const [selectedAlbum, setSelectedAlbum] =  useState<Album | null>(null);
    const [myAlbums, setMyAlbums] = useState<Album[]>(initialMyAlbums);

    const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    };

    const handleBuyAlbum = (album: Album) => {
    if (!myAlbums.find(s => s.id === album.id)) {
        setMyAlbums([...myAlbums, album]);
    }
    };

    {/* *********** My Artist **********/} 
    const allArtists = [
    { id: 1, title: 'Artist A', artist: 'Artist A', album: 'Artist A', year: 2020 },
    { id: 2, title: 'Artist B', artist: 'Artist B', album: 'Artist B', year: 2021 },
    { id: 3, title: 'Artist C', artist: 'Artist C', album: 'Artist C', year: 2022 },
    ];
    
    const initialMyArtists: Artist[] | (() => Artist[]) = [];

    const [selectedArtist, setSelectedArtist] =  useState<Artist | null>(null);
    const [myArtists, setMyArtists] = useState<Artist[]>(initialMyArtists);

    const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    };

    const handleBuyArtist = (artist: Artist) => {
    if (!myArtists.find(s => s.id === artist.id)) {
        setMyArtists([...myArtists, artist]);
    }
    };

    return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="alltunes"
    >

<Tabs>
      <TabList>
        <Tab>My Songs</Tab>
        <Tab>My Albums</Tab>
        <Tab>My Artists</Tab>
      </TabList>

        {/* *********** My Songs **********/} 
      <TabPanel>
      <div className="relative flex">
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">All Songs</h2>
          <ul>
            {allSongs.map((song) => (
              <li
                key={song.id}
                className="flex justify-between items-center mb-1 p-2 border-b"
              >
                <span onClick={() => handleSongClick(song)} className="cursor-pointer">
                  {song.title}
                </span>
                <button
                  onClick={() => handleBuySong(song)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Buy
                </button>
                <TransactionButton />
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
      </TabPanel>


        {/* *********** My Albums **********/} 
        <TabPanel>
      <div className="relative flex">
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">All Albums</h2>
          <ul>
            {allAlbums.map((album) => (
              <li
                key={album.id}
                className="flex justify-between items-center mb-1 p-2 border-b"
              >
                <span onClick={() => handleAlbumClick(album)} className="cursor-pointer">
                  {album.title}
                </span>
                <button
                  onClick={() => handleBuyAlbum(album)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Buy
                </button>
                <TransactionButton />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 p-4 border-l border-r">
          {selectedAlbum ? (
            <div>
              <h2 className="font-bold text-lg mb-2">Album Details</h2>
              <p><strong>Title:</strong> {selectedAlbum.title}</p>
              <p><strong>Artist:</strong> {selectedAlbum.artist}</p>
              <p><strong>Year:</strong> {selectedAlbum.year}</p>
            </div>
          ) : (
            <p>Select a Album to see details</p>
          )}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">My Albums</h2>
          <ul>
            {myAlbums.map((album) => (
              <li key={album.id} className="mb-1 p-2 border-b">
                {album.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </TabPanel>

        {/* *********** My Artists **********/} 
        <TabPanel>
      <div className="relative flex">
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">All Artists</h2>
          <ul>
            {allArtists.map((artist) => (
              <li
                key={artist.id}
                className="flex justify-between items-center mb-1 p-2 border-b"
              >
                <span onClick={() => handleArtistClick(artist)} className="cursor-pointer">
                  {artist.title}
                </span>
                <button
                  onClick={() => handleBuyArtist(artist)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Buy
                </button>
                <TransactionButton />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 p-4 border-l border-r">
          {selectedArtist ? (
            <div>
              <h2 className="font-bold text-lg mb-2">Artist Details</h2>
              <p><strong>Name:</strong> {selectedArtist.title}</p>
            </div>
          ) : (
            <p>Select a Artist to see details</p>
          )}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="font-bold text-lg mb-2">My Artists</h2>
          <ul>
            {myArtists.map((artist) => (
              <li key={artist.id} className="mb-1 p-2 border-b">
                {artist.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </TabPanel>

    </Tabs>
    

{/*     <div className="relative flex">
      <SongsList
        title="All Songs"
        items={allSongs}
        onItemClick={handleSongClick}
        onBuyClick={handleBuySong}
      />
      <SongDetails selectedSong={selectedSong} />
      <MyItemsList title="My Songs" items={mySongs} onItemClick={function (item: Song): void {
                    throw new Error('Function not implemented.')
                } } onBuyClick={function (item: Song): void {
                    throw new Error('Function not implemented.')
                } } />
    </div> */}

    </Section>
    )
}

export default AllTunes

