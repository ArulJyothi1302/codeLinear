import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="bg-[#020B14] text-white overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}