import Category from "@/components/Category";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
// import Testing from "@/components/Testing";
import HotDeal from "@/components/HotDeal";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Category />
      <HotDeal />
      {/* <Testing /> */}
    </main>
  );
}
