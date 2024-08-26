import Image from "next/image";
import styles from "./BlogCardii.module.css";
import { simpleBlogCard } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Button from "../Button/Button";
import Link from "next/link";

interface Props {
  data: simpleBlogCard;
}

const BlogCardii = ({ data }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src={urlFor(data.titleImage).url()}
          alt='image'
          fill
          className={styles.img}
        />
      </div>
      <Link href={data.currentSlug} className={styles.titleContainer}>
        <h3 className={styles.blogTitle}>{data?.title} </h3>
      </Link>
      <p className={styles.desc}>{data?.smallDescription}</p>
      <div className={styles.btnContainer}>
        <Button
          text='Read Article'
          href={`/blog/${data?.currentSlug}`}
          btnType='secondaryii'
          arrow
        />
        </div>
    </article>
  );
};
export default BlogCardii;
