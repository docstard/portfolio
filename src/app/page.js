
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Service from "@/components/Service";
import "@/styles/home.css";


export default function Home() {
  return (
   <>
      <Header />
      <Hero />
      <Service />
      <Project />
      <About />
      <Contact />
      <Footer />
   </>
    
  );
}
