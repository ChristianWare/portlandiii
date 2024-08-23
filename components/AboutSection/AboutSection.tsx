import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Author from "../../public/images/author.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.miscContainer}>
              <svg
                width='0'
                height='0'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
              >
                <defs>
                  <filter id='goo'>
                    <feGaussianBlur
                      in='SourceGraphic'
                      stdDeviation='5'
                      result='blur'
                    />
                    <feColorMatrix
                      in='blur'
                      mode='matrix'
                      values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                      result='goo'
                    />
                    <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                  </filter>
                </defs>
              </svg>
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
            {/* <div className={styles.falseBtnContainer}>
              <FalseButton btnType='secondary' text='About us' />
            </div> */}
            <h2 className={`${styles.heading} h2v2`}>
              Who is
              <br />
              <span className={styles.span}> Chris Ware?</span>
            </h2>
            <p className={styles.text}>
              Fonts & Footers is a digital agency focusing on web design, web
              development, and SEO. We&apos;re experts at blending the latest
              technology with creative ideas for top-notch results. By working
              with us, you get personal care, support, and a website that boosts
              engagement and sales. We opperate out of sunny Phoenix, AZ.
            </p>
            <br />
            <p className={styles.text}>
              We use cutting-edge technology to craft websites that outperform
              those built on platforms like Wordpress, Wix, or Godaddy, which
              often rely on older, slower, and outdated technology. Our approach
              involves using pure HTML, CSS, and Javascript code, ensuring a
              sleek and efficient website.
            </p>
            <br />
            <p className={styles.text}>
              We use cutting-edge technology to craft websites that outperform
              those built on platforms like Wordpress, Wix, or Godaddy, which
              often rely on older, slower, and outdated technology. Our approach
              involves using pure HTML, CSS, and Javascript code, ensuring a
              sleek and efficient website.
            </p>
            {/* <p className={styles.authorDetails}>
              ~ Chris Ware, Founder & CEO ~
            </p> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default AboutSection;
