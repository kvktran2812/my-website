import Image from "next/image";
import Profile from "@/components/profile";
import Timeline from "@/components/timeline";
import Project from "@/components/project";


export default function Home() {
  return (
    <main className="w-[100%] pb-24 m-auto">
      <Profile />
      <Timeline />
      <Project />
      {/* <Kaggle /> */}
    </main>
  );
}
