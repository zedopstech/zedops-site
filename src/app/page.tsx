import CtoSection from "@/Components/CtoSection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Home/Header";
import Hero from "@/Components/Home/Hero";
import ProblemStatement from "@/Components/ProblemStatement";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemStatement />
      <Features />
      <CtoSection />
      <Footer />
    </>
  );
}
