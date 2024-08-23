import Image from "next/image";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";
import Img1 from "../../public/images/house17.png";
import Img2 from "../../public/images/aboutHouse.png";

const data = [
  {
    title: "User-Friendly Interfaces",
    src: Img1,
    detail: "24/7 Support",
  },
  {
    title: "Optimized E-commerce Platforms",
    detail: "Unlimted Edits",
    src: Img2,
  },
];

const CallToAction = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={`${styles.heading}`}>
            Ready to <span className={styles.em}>transform</span> your{" "}
            <span className={styles.em2}>online presence?</span>
          </h2>
          <p className={styles.topCopy}>
            Boost your online sales with secure, user-friendly, and scalable
            e-commerce websites.
          </p>
          <div className={styles.btnContainer}>
            <Button
              text='See All Services'
              href='/services'
              btnType='primary'
              arrow
            />
            <Button
              text='Contact Us'
              href='/contact'
              btnType='secondary'
              arrow
            />
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
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
                      <feComposite
                        in='SourceGraphic'
                        in2='goo'
                        operator='atop'
                      />
                    </filter>
                  </defs>
                </svg>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className={styles.img}
                  />
                  <div className={styles.info}>
                    {/* {x.icon} */}
                    <p className={styles.detail}>~ {x.detail} ~</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default CallToAction;
