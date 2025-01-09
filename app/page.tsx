import Image from "next/image";
import Profile from "@/components/profile";
import Timeline from "@/components/timeline";
import Project from "@/components/project";
import DeepLearning from "@/components/deepLearningConcepts";
import Publication from "@/components/publication";


export default function Home() {
  return (
    <main className="w-[100%] pb-24 m-auto">
      <Profile />
      <Timeline />
      <Project />
      <DeepLearning />
      <Publication />
      {/* <Kaggle /> */}
    </main>
  );
}
