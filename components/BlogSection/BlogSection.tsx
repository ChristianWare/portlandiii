"use client";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import { simpleBlogCard } from "@/lib/interface";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

interface BlogSectionProps {
  data: simpleBlogCard[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={`${styles.header} h2v3`}>My Blog</h2>
          </div>
          <div className={styles.bottom}>
            {data?.length > 0 &&
              data?.map((data: simpleBlogCard) => (
                <BlogCard data={data} key={data.title} />
              ))}
          </div>
          {pathname !== "/blog" && (
            <div className={styles.btnContainer}>
              <Button
                text='Read My Blog'
                href='/blog'
                btnType='primaryii'
                arrow
              />
            </div>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
