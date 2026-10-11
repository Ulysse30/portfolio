import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import CategoryNav from "./components/CategoryNav";
import About from "./components/About";
import Experience from "./components/Experience";
import FeaturedCallout from "./components/FeaturedCallout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <CategoryNav />
        <About />
        <Experience />
        <FeaturedCallout />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
