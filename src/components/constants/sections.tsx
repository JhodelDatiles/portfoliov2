import {type SectionConfig} from "../interface/constantSectionsInterface"

// Strongly type the global static configurations
export const SECTIONS: SectionConfig[] = [
  { id: "hero", label: "home", tip: "hero" },
  { id: "stack", label: "Stack", tip: "Tech stack" },
  { id: "experience", label: "Experience", tip: "Past work experiences" },
  { id: "projects", label: "Projects", tip: "Good stuff" },
  { id: "contacts", label: "Contacts", tip: "Become associates?" },
];

// Type the custom global event dispatcher
export const setGlobalActiveSection = (id: string): void => {
  const event = new CustomEvent<string>("activeSectionChange", { detail: id });
  window.dispatchEvent(event);
};
