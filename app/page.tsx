import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Stats from "@/components/stats";
import About from "@/components/about";
import TechStack from "@/components/techstack";


export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <About />
      <TechStack />



      <main className="pt-20">
        {/* Section lainnya */}
      </main>
    </>
  );
}