import Image from "next/image";
import { Navbar } from "./navbar/page";
import FirstSection from "./first-setion/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
    </div>
  );
}
