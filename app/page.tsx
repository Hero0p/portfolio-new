import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackgroundCanvas from "@/components/ui/BackgroundCanvas";
import ScrollImageHero from "@/components/ui/ScrollImageHero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <BackgroundCanvas />
      <Navbar />

      <div className="flex-1">
        <ScrollImageHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
