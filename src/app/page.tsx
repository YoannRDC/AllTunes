import GetArtists from "./components/artist/GetArtists";
import Header from "./components/Header"

export default function Home() { 
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="p-6 mt-20">
        <GetArtists />
      </div>
    </div>
  );
}
