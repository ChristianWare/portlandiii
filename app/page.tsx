import AboutSection from "@/components/AboutSection/AboutSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Faqs from "@/components/Faqs/Faqs";
import GoodSection from "@/components/Good/GoodSection";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import WorkSection from "@/components/WorkSection/WorkSection";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      publishedAt,
      "currentSlug": slug.current,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 10;

export default async function HomPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main>
      <Hero />
      <AboutSection />
      <Projects />
      <TechStack />
      <Process />
      <WorkSection />
      <Faqs />
      <BlogSection data={data} />
    </main>
  );
}
