"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./TechStack.module.css";
import NextJS from "../../public/icons/next.svg";
import NextAuth from "../../public/icons/nextAuth.svg";
import Node from "../../public/icons/node.svg";
import Stripe from "../../public/icons/stripe.svg";
import Vercel from "../../public/icons/vercel.svg";
import GoogleAnalytics from "../../public/icons/googleAnalytics.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const TechStack = () => {
  const data = [
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Next Js",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "React",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "HTML",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "CSS",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Javascript",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Mongo DB",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Prisma",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Typescript",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <Vercel width={50} height={50} className={styles.icon} />,
      name: "Vercel",
      description:
        "Cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
    {
      icon: <NextAuth width={50} height={50} className={styles.icon} />,
      name: "Next Auth",
      description:
        "Authentication library for Next.js applications, offering various authentication strategies like OAuth, JWT, and others with easy integration and configuration.",
    },
    {
      icon: <Node width={50} height={50} className={styles.icon} />,
      name: "Node",
      description:
        "Runtime environment that allows you to run JavaScript code on the server side, enabling the development of scalable and efficient web applications.",
    },
    {
      icon: <GoogleAnalytics width={50} height={50} className={styles.icon} />,
      name: "Google Analytics",
      description:
        "Web analytics service provided by Google that tracks and reports website traffic, providing insights into user behavior, audience demographics, and the effectiveness of marketing campaigns.",
    },
    {
      icon: <Stripe width={50} height={50} className={styles.icon} />,
      name: "Stripe",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Stripe width={50} height={50} className={styles.icon} />,
      name: "Strapi",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Stripe width={50} height={50} className={styles.icon} />,
      name: "SAnity",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Stripe width={50} height={50} className={styles.icon} />,
      name: "Contentful",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Stripe width={50} height={50} className={styles.icon} />,
      name: "Docker",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
  ] as const;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {/* <FalseButton text='Our Technical Stack' btnType='primary' /> */}
            <h2 className={`${styles.heading} h2v2`}>
              <span className={styles.em1}>My Tech Stack:</span> <br />
              What I use to build the{" "}
              <span className={styles.em2}>perfect website</span>
            </h2>
            <p className={styles.copy}>
              We use cutting-edge technology to craft websites that outperform
              those built on platforms like Wordpress, Wix, or Godaddy, which
              often rely on older, slower, and outdated technology. Our approach
              involves using pure HTML, CSS, and Javascript code, ensuring a
              sleek and efficient website.
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div
                // variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                // initial='hidden'
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                key={index}
                className={styles.box}
              >
                {x.icon}
                <h3>{x.name}</h3>
                {/* <p className={styles.desc}>{x.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default TechStack;
