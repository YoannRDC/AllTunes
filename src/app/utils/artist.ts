// DescriptionPreimage: is the solidity equivalent type for the 
//      description stored on the artist profile. 
//      Description stored on-chain is only a preimage (here it's a Hash on 32 bytes) 
//      to permit to validate integrity with off-chain description. 
//      This is an Optional value.
//
// verification: struct is unused and will only equal to false.

import { IArtist } from "./artistVault";


export const getArtists = async (): Promise<IArtist[]> => {
    console.log("artist.ts:getArtists", artistsData)
    return artistsData
}


export const getArtist = async (address: `0x${string}`): Promise<void | IArtist> => {   
    return getArtists()
        .then((artists) => {
            const _artist = artists.find((artist) => artist.address === address);
            // console.log('Artist : ', _artist)
            return artists.find((artist) => artist.address === address);
        })
}

export const getGenres = async (): Promise<string[]> => {
    return genresData
}


const genresData: string[] = [
    'pop', 'rock', 'dance', 'hiphop', 'tripop', 'techno', 'metal',
    'synth wave', 'world music'
]

// Asset is a song
interface IAsset {
    address: `0x${string}`
    title: string
    length: string
    album?: string
    yearRelease?: number
    trackNumber?: number
    genre?: string
    image?: string // IPFS link ?
}
const assetsData: IAsset[] = [
    {
        address: "0xE4192BF486AeA10422eE097BC2Cf8c28597B9F11",
        title: "Nightcall",
        length: "4:16",
        album: "Nightcall",
        yearRelease: 2010,
        trackNumber: 1,
        genre: "SynthWave",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    },
    {
        address: "0xE4192BF486AeA10422eE097BC2Cf8c28597B9F11",
        title: "Odd Look",
        length: "4:13",
        album: "Nightcall",
        yearRelease: 2010,
        trackNumber: 2,
        genre: "SynthWave",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    },
    {
        address: "0x5a1C4Fb0AE5470B0a502b9395ff30E7292947c11",
        title: "The Beautiful People",
        length: "3:38",
        album: "",
        yearRelease: 1996,
        trackNumber: 2,
        genre: "Metal",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    },
    {
        address: "0xe3617a1E56F66067674d16919670D7546CA81705",
        title: "Smooth Criminal",
        length: "4:17",
        album: "Bad",
        yearRelease: 1987,
        trackNumber: 10,
        genre: "Pop",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    },
    {
        address: "0xe3617a1E56F66067674d16919670D7546CA81705",
        title: "Come As You Are",
        length: "3:38",
        album: "Nevermind",
        yearRelease: 1991,
        trackNumber: 3,
        genre: "Metal",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    },
    {
        address: "0xE4192BF486AeA10422eE097BC2Cf8c28597B9F11",
        title: "Goodnight Moon",
        length: "4:04",
        album: "I Oughtta Give You A Shot In The Head For Making Me Live In This Dump",
        yearRelease: 1999,
        trackNumber: 7,
        genre: "Alternative country",
        image: "/34a7ac6c-f719-420c-9bd9-c4df7fab9917.png",
    }
]



const artistsData: IArtist[] = [
    {
        address: "0xE4192BF486AeA10422eE097BC2Cf8c28597B9F11",
        name: "Artist ABC",
        alias: "Alias 123",
        image: "/0bee0946-22ce-4b3c-9d48-0e85669e4083.png",
        description: "lorem ipsum dolor sit amet, consectetur",
        genres: [0,3,4,6],
        assets: [0, 1, 5],
        contracts: ["0x1", "0x2", "0x3"],
    },
    {
        address: "0x5a1C4Fb0AE5470B0a502b9395ff30E7292947c11",
        name: "Artist OPQ",
        alias: "Alias 456",
        image: "/2632ca48-2b94-4b37-8996-04de78b01640.png",
        description: "Irure aute nisi incididunt culpa amet sit non sit proident.",
        genres: [1,2],
        assets: [2],
        contracts: ["0x4", "0x5", "0x6"],
    },
    {
        address: "0xe3617a1E56F66067674d16919670D7546CA81705",
        name: "Artist XYZ",
        alias: "Alias 789",
        image: "/6306e280-b415-498a-a9a8-94fcff0b1797.png",
        description: "Excepteur sunt magna sunt tempor occaecat aliqua ut commodo labore irure sunt dolor occaecat ipsum.",
        genres: [5, 7, 8],
        assets: [3, 4],
        contracts: ["0x7", "0x8", "0x9"],
    },
]
