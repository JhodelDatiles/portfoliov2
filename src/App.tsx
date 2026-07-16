import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StackSection from "./components/StackSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactsSection from "./components/ContactsSection";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
      <Navbar />
      {/* pt-32 (top padding) gives the starting navbar space to breathe */}
      <main className="px-20 border-blue-400">
        <HeroSection />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <ScrollToTop/>
    </div>
  );
};

export default App;
