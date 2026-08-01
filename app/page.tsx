import Navbar from "@/components/navbar";

import Home from "@/components/home";
import Stats from "@/components/stats";
import About from "@/components/about";
import TechStack from "@/components/techstack";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import ResearchCertificates from "@/components/ResearchCertificates";
import Footer from "@/components/footer";


function Divider() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
      <div className="h-px bg-slate-200" />
    </div>
  );
}


export default function Page() {
  return (
    <>
      <Navbar />

      <Home />

      <Stats />

      <About />

      <Divider />

      <TechStack />

      <Divider />

      <Experience />

      <Divider />

      <Projects />

      <Divider />

      <ResearchCertificates />

      <Footer />
    </>
  );
}