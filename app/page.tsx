import CB7Section from "./components/CB7section";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="bg-[#020B14] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <CB7Section/>
      <Footer/>
    </main>
  );
}