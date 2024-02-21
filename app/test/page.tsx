import Image from "next/image";
import Profile from "@/components/profile";
import About from "@/components/about";
import ExperiencePage from "@/components/experience";

export default function Home() {
  return (
    <main className="h-[3000px] w-[70%] py-24 text-center items-center justify-center m-auto">
      <>This is the body</>
      <Profile />
      <About />
      <ExperiencePage />
    </main>
  );
}