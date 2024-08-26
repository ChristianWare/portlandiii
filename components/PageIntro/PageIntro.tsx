"use client";

import ArrowCluster from "../ArrowCluster/ArrowCluster";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Button from "../Button/Button";

interface Props {
  h1Color?: string;
  h1OutlineColor?: string;
  text: string;
  copy?: string;
  copyColor?: string;
  span?: string;
  orientation?: string;
  src?: StaticImageData;
  notFound?: string;
  bgColor?: string;
}

const PageIntro = ({
  h1Color = "",
  h1OutlineColor = "",
  text,
  copy,
  copyColor = "",
  span,
  orientation = "",
  src,
  notFound,
  bgColor = "",
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        {src && (
          <>
            <div className={styles.imgOverlay}></div>
            <Image
              src={src}
              alt='image'
              fill
              className={styles.img}
              priority
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
              quality={100}
            />
          </>
        )}
        <LayoutWrapper>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`${styles.content} ${styles[orientation]}`}
          >
            <h1 className={`${styles.heading} ${styles[h1Color]}`}>
              {text}
              <span className={`${styles.span} ${styles[h1OutlineColor]}`}>
                {" "}
                <br /> {span}
              </span>
            </h1>
            <p className={`${styles.copy} ${styles[copyColor]}`}>{copy}</p>
            {notFound && (
              <div className={styles.btnContainer}>
                <Button text='Home' href='/' btnType='secondary' arrow />
                <Button
                  text='contact'
                  href='/contact'
                  btnType='primaryii'
                  arrow
                />
              </div>
            )}
          </motion.div>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default PageIntro;
