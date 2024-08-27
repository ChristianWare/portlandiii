import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Author from "../../public/images/author.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={styles.bgColor} id='about'>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.miscContainer}>
              <div className={styles.imgContainer}>
                <Image
                  src={Author}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={`${styles.heading} h2v2`}>
              Who is
              <br />
              <span className={styles.span}> Chris Ware?</span>
            </h2>
            <br />
            <p className={styles.text}>
              I am skilled in both front-end and back-end development, and I
              have the ability to create comprehensive web applications from
              start to finish. My tools of choice are Next.js/React.
            </p>
            <br />
            <p className={styles.text}>
              I optimize web applications for speed, performance and SEO. They
              all have fast load times and an optimal performance across various
              devices and network conditions.
            </p>
            <br />
            <p className={styles.text}>
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project. While websites have to
              make good impressions on their visitors, they should also motivate
              them to action. This is what I aim to accomplish in all of my
              projects.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default AboutSection;
