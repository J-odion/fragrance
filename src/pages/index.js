import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Product";
import Footer from "@/components/footer";
import Popular from "@/components/Popular";
import Overview from "@/components/overview";
import Ourclients from "@/components/Ourclient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-dark-blue text-dark-blue">
      <Header/>
      <Hero/>
      <Features/>
      <Popular />
      <Overview />
      <Products/>
      <Ourclients />
      
    </div>
  );
}
