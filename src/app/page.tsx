import Support from "@/Components/Home/Support";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import ProblemStatement from "@/Components/Home/ProblemStatement";
import PersonasSection from "@/Components/Home/Persona";

export default function Home() {
  return (
    <>
      <Hero />
      <PersonasSection/>
      <ProblemStatement />
      <Features />
      <Support />
    </>
  );
}
