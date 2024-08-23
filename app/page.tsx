import AboutSection from "@/components/AboutSection/AboutSection";
import Faqs from "@/components/Faqs/Faqs";
import GoodSection from "@/components/Good/GoodSection";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import WorkSection from "@/components/WorkSection/WorkSection";

export default function HomPage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Projects />
      <TechStack />
      {/* <GoodSection /> */}
      <WorkSection />
      <Faqs />
    </main>
  );
}
