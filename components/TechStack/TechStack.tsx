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
      "A React framework that allows developers to build server-side rendered and statically generated web applications.",
  },
  {
    icon: <React width={50} height={50} className={styles.icon} />,
    name: "React",
    description:
      "A JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    icon: <HTML width={50} height={50} className={styles.icon} />,
    name: "HTML",
    description:
      "The standard markup language used to create web pages and applications.",
  },
  {
    icon: <CSS width={50} height={50} className={styles.icon} />,
    name: "CSS",
    description:
      "A style sheet language used to describe the presentation of a document written in HTML or XML.",
  },
  {
    icon: <Javascript width={50} height={50} className={styles.icon} />,
    name: "Javascript",
    description:
      "A programming language that enables dynamic interactions on websites, widely used for both client-side and server-side development.",
  },
  {
    icon: <MongoDB width={50} height={50} className={styles.icon} />,
    name: "Mongo DB",
    description:
      "A NoSQL database that uses a document-oriented data model, providing flexibility and scalability for handling large datasets.",
  },
  {
    icon: <Prisma width={50} height={50} className={styles.icon} />,
    name: "Prisma",
    description:
      "An ORM (Object-Relational Mapping) tool that simplifies database management by allowing developers to write queries in a type-safe and declarative manner.",
  },
  {
    icon: <Typescript width={50} height={50} className={styles.icon} />,
    name: "Typescript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript, providing static typing and better tooling for large-scale applications.",
  },
  {
    icon: <Vercel width={50} height={50} className={styles.icon} />,
    name: "Vercel",
    description:
      "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease, offering seamless integration with Next.js.",
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
      "A runtime environment that allows you to run JavaScript code on the server side, enabling the development of scalable and efficient web applications.",
  },
  {
    icon: <GoogleAnalytics width={50} height={50} className={styles.icon} />,
    name: "Google Analytics",
    description:
      "A web analytics service provided by Google that tracks and reports website traffic, offering insights into user behavior and marketing effectiveness.",
  },
  {
    icon: <Stripe width={50} height={50} className={styles.icon} />,
    name: "Stripe",
    description:
      "A payment processing platform that allows businesses to accept payments online, manage subscriptions, handle invoices, and perform other financial transactions securely and efficiently.",
  },
  {
    icon: <Strapi width={50} height={50} className={styles.icon} />,
    name: "Strapi",
    description:
      "An open-source headless CMS that enables developers to manage content and API endpoints for web applications, with a flexible, customizable architecture.",
  },
  {
    icon: <Sanity width={50} height={50} className={styles.icon} />,
    name: "Sanity",
    description:
      "A headless CMS that allows developers to create, manage, and deliver content across multiple platforms with real-time collaboration features.",
  },
  {
    icon: <Contentful width={50} height={50} className={styles.icon} />,
    name: "Contentful",
    description:
      "A headless CMS that empowers developers and content teams to manage content across various platforms, with flexible API-driven content delivery.",
  },
  {
    icon: <Docker width={50} height={50} className={styles.icon} />,
    name: "Docker",
    description:
      "A platform that enables developers to automate the deployment of applications inside lightweight, portable containers, ensuring consistency across development and production environments.",
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
              My development toolkit is centered around Next.js, a powerful
              React framework that enables the creation of high-performance,
              scalable web applications. I use TypeScript to ensure type safety
              and maintainable code, while MongoDB serves as my go-to database
              solution for handling complex data requirements. Additionally, I
              leverage tools like Git for version control and CI/CD pipelines to
              streamline deployment and ensure code quality.
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
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default TechStack;
