import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".catalyst");

    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        element.isIntersecting && element.target.classList.add("show");
      });
    });

    sections.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      
      <Header />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <Footer />
    </>
  )
}

export default App
