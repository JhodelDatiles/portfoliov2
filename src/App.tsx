import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/HeroSection";
import StackSection from "./components/pages/StackSection";
import ExperienceSection from "./components/pages/ExperienceSection";
import ProjectsSection from "./components/pages/ProjectsSection";
import ContactsSection from "./components/pages/ContactsSection";
import ScrollToTop from "./components/ScrollToTop";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  return (
    <div className="text-black bg-blue-100 flex flex-col min-h-screen bg-base-100 text-base-content">
      <Navbar/>
      <ScrollIndicator/>
      {/* pt-32 (top padding) gives the starting navbar space to breathe */}
      <main className=" border-blue-100">
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
