import Image from "next/image";
import Profile from "@/components/profile";
import About from "@/components/about";
import ExperiencePage from "@/components/experience";
import ProjectPage from "@/components/project";
import SkillPage from "@/components/skill";
import EducationPage from "@/components/education";
import OpenSource from "@/components/open_source";


export default function Home() {
  return (
    <main className="w-[70%] pb-24 m-auto">
      <Profile />
      <EducationPage  />
      <ExperiencePage />
      <OpenSource />
      <ProjectPage />
      <SkillPage />
    </main>
  );
}
