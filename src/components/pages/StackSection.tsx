import StackRightCol from "../StackSectionCompo/StackRightCol";
import StackLeftCol from "../StackSectionCompo/StackLeftCol";

const ProjectsSection = () => {
  return (
    <section
      id="stack"
      className="w-full min-h-screen bg-slate-100 dark:bg-[#020617] text-neutral-900 dark:text-white p-6 md:p-12 lg:p-20 flex flex-col justify-center transition-colors duration-300 select-none"
    >
      {/* Container: Balanced 2-Column Responsive Layout */}
      <div className="mt-10 max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
        <StackLeftCol />
        <StackRightCol />
      </div>
    </section>
  );
};

export default ProjectsSection;
