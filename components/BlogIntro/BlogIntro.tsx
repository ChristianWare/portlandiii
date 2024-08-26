import Image from "next/image";
// import ArrowCluster from "../ArrowCluster/ArrowCluster";
import styles from "./BlogIntro.module.css";
import { urlFor } from "@/lib/sanity";
import Author from "../../public/images/author.png";

interface BlogIntroProps {
  text: string;
  desc: string;
  src: any;
  date: string;
}

const BlogIntro: React.FC<BlogIntroProps> = ({ text, desc, src, date }) => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{text}</h1>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.authorDate}>
            <div className={styles.left}>
              <Image
                src={Author}
                alt='Author'
                width={60}
                height={60}
                className={styles.author}
              />
            </div>
            <div className={styles.right}>
              <p className={styles.authName}>Chris Ware</p>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={urlFor(src).url()}
              alt='image'
              fill
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </section>
  );
};
export default BlogIntro;
