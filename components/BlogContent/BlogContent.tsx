import { fullBlog, simpleBlogCard } from "@/lib/interface";
import BlogIntro from "../BlogIntro/BlogIntro";
import styles from "./BlogContent.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import LayoutWrapper from "../LayoutWrapper";
import BlogCardii from "../BlogCardii/BlogCardii";
import Button from "../Button/Button";

interface BlogContentProps {
  data: fullBlog;
  dataii: simpleBlogCard[];
}

const BlogContent: React.FC<BlogContentProps> = ({ data, dataii }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <BlogIntro
              text={data.title}
              desc={data.smallDescription}
              src={data.titleImage}
              date={new Date(data?.publishedAt).toDateString()}
            />
          </div>
          <div className={styles.z}>
            <div className={styles.left}>
              <PortableText
                value={data.content}
                components={myPortableTextComponents}
              />
            </div>
            <div className={styles.right}>
              <span>Other Posts</span>
              <div className={styles.rightContent}>
                {dataii?.length > 0 &&
                  dataii?.map((data: simpleBlogCard) => (
                    <BlogCardii data={data} key={data.title} />
                  ))}
              </div>
              <div className={styles.btnContainer}>
                <Button
                  href='/blogs'
                  btnType='primaryii'
                  text='All Blog Posts'
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogContent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className={styles.imgContainer}>
        <Image
          src={urlForImage(value).url()}
          alt='post'
          fill
          className={styles.img}
        />
      </div>
    ),
  },
};
