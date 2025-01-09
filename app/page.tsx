import Image from "next/image";
import Profile from "@/components/profile";
import Kaggle from "@/components/kaggle";
import Timeline from "@/components/timeline";


export default function Home() {
  return (
    <main className="w-[100%] pb-24 m-auto">
      <Profile />
      <Timeline />
      <Kaggle />
    </main>
  );
}
