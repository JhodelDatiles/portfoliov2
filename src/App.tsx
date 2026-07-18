import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/HeroSection";
import StackSection from "./components/pages/StackSection";
import ExperienceSection from "./components/pages/ExperienceSection";
import ProjectsSection from "./components/pages/ProjectsSection";
import ContactsSection from "./components/pages/ContactsSection";
import ScrollToTop from "./components/ScrollAnimations/ScrollToTop";
import ScrollIndicator from "./components/ScrollAnimations/ScrollIndicator";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="text-black bg-blue-100 flex flex-col min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Toaster />
      <ScrollIndicator />
      {/* pt-32 (top padding) gives the starting navbar space to breathe */}
      <main className=" border-blue-100">
        <HeroSection />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;
