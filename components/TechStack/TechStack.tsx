"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./TechStack.module.css";
import NextJS from "../../public/icons/next.svg";
import NextAuth from "../../public/icons/nextAuth.svg";
import Node from "../../public/icons/node.svg";
import Stripe from "../../public/icons/stripe.svg";
import Vercel from "../../public/icons/vercel.svg";
import GoogleAnalytics from "../../public/icons/googleAnalytics.svg";
import React from "../../public/icons/react.svg";
import HTML from "../../public/icons/html.svg";
import CSS from "../../public/icons/icons/css.svg";
import Javascript from "../../public/icons/javascriptii.svg";
import MongoDB from "../../public/icons/mongodb.svg";
import Prisma from "../../public/icons/prisma.svg";
import Typescript from "../../public/icons/typescriptii.svg";
import Strapi from "../../public/icons/strapi.svg";
import Sanity from "../../public/icons/sanity.svg";
import Contentful from "../../public/icons/contentful.svg";
import Docker from "../../public/icons/docker.svg";

const TechStack = () => {
  const data = [
    {
      icon: <NextJS width={50} height={50} className={styles.icon} />,
      name: "Next Js",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <React width={50} height={50} className={styles.icon} />,
      name: "React",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <HTML width={50} height={50} className={styles.icon} />,
      name: "HTML",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <CSS width={50} height={50} className={styles.icon} />,
      name: "CSS",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <Javascript width={50} height={50} className={styles.icon} />,
      name: "Javascript",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <MongoDB width={50} height={50} className={styles.icon} />,
      name: "Mongo DB",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <Prisma width={50} height={50} className={styles.icon} />,
      name: "Prisma",
      description:
        "A framework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <Typescript width={50} height={50} className={styles.icon} />,
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
      icon: <Strapi width={50} height={50} className={styles.icon} />,
      name: "Strapi",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Sanity width={50} height={50} className={styles.icon} />,
      name: "Sanity",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Contentful width={50} height={50} className={styles.icon} />,
      name: "Contentful",
      description:
        "Payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
    },
    {
      icon: <Docker width={50} height={50} className={styles.icon} />,
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
