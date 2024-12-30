//import Image from "next/image";
//import ACounter from "@/components/ACounter";
//import AUseRef from "@/components/AUseRef";
//import BCounter from "@/components/BCounter";
import Counter from "@/components/Counter"
import UserProfile from "@/components/UserProfile"

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-4">
     {/*  <BCounter /> */}
   {/*    <AUseRef />
      <ACounter /> */}
       <Counter />
       <UserProfile />
    </div>
  );
}
