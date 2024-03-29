import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import HotDeal from "@/components/HotDeal";
import Top7 from "@/components/Top7";
import Tv from "@/components/Tv";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Category />
      <HotDeal />
      <Tv />
      <Top7 />
      <Footer />
    </div>
  );
}
