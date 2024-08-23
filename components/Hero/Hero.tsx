"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import img from "../../../public/images/house10.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.content}
        >
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Hello World!' />
            </div>
            <h1 className={styles.heading}>
              I build <span className={styles.em}>interactive</span> <br /> and{" "}
              <span className={styles.em}> immersive </span>
              websites
            </h1>
            <p className={styles.copy}>
              Next.js Developer Specializing in High-Performance Web
              Applications
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='View My Work'
                href='/#projects'
                btnType='primaryii'
              />
              <Button
                text='Get In Touch'
                href='/services'
                btnType='secondary'
              />
            </div>
          </div>
          <div className={styles.right}>
            <ShuffleHero />
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
