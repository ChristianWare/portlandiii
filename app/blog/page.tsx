import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../public/images/house24.png";
import BlogSection from "@/components/BlogSection/BlogSection";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import { Metadata } from "next";

async function getData() {
  const query = `
    *[_type == 'blog'][0...3] | order(_createdAt desc) {
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

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro text='Insights from' src={Img} copy='' span='My blog' orientation="center" />
      <BlogSection data={data} />
    </>
  );
}
