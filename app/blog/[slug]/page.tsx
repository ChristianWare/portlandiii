import { fullBlog, simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import BlogContent from "@/components/BlogContent/BlogContent";
import { Metadata } from "next";

async function getData(slug: string) {
  const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage,
            smallDescription,
            publishedAt
        }[0]`;

  const data = await client.fetch(query);
  return data;
}

async function getDataii() {
  const query = `
    *[_type == 'blog'][0...3] | order(_createdAt desc) {
      title,
      smallDescription,
      publishedAt,
      "currentSlug": slug.current,
      titleImage
    }`;

  const dataii = await client.fetch(query);

  return dataii;
}

export const revalidate = 10;

export async function generateStaticParams() {
  const query = `*[_type == 'blog'] { 'slug': slug.current }`;
  const slugs = await client.fetch(query);
  const paths = slugs.map((slug: { slug: string }) => ({
    params: { slug: slug.slug },
  }));
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: fullBlog = await getData(params.slug);
  const imageUrl = urlFor(data.titleImage).url();

  return {
    title: data.title,
    description: data.smallDescription,
    openGraph: {
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  const dataii: simpleBlogCard[] = await getDataii();

  return <BlogContent data={data} dataii={dataii} />;
}
