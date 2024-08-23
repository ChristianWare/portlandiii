"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Payment from "../../public/icons/payment.svg";
import SEO from "../../public/icons/seo.svg";
import Design from "../../public/icons/designii.svg";
import Integration from "../../public/icons/integration.svg";
import Multiple from "../../public/icons/multiple.svg";
import Analytics from "../../public/icons/analytics.svg";
import Image from "next/image";
import Project1 from "../../public/images/elite.png";
import Project2 from "../../public/images/nier.png";
import Project3 from "../../public/images/taco.jpg";
import { projects } from "@/lib/data";

const Projects = () => {
  const ecommerceFeatures = [
    {
      src: Project1,
      title: "Platform Integration",
      description:
        "We integrate with leading e-commerce platforms like Shopify, WooCommerce, and Magento, ensuring your online store has the functionality and flexibility required to succeed in a competitive market.",
      techStack: [
        {
          title: "Platform Expertise",
        },
        {
          title: "Custom Solutions",
        },
        {
          title: "Third-Party Integrations",
        },
        {
          title: "Automated Email Notifications",
        },
      ],
    },
    {
      src: Project2,
      title: "Custom Website Design",
      description:
        "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience. Our designs are crafted to captivate your audience and provide an engaging user experience.",
      techStack: [
        {
          title: "Unique Design",
        },
        {
          title: "User-Centered Approach",
        },
        {
          title: "Responsive Layouts",
        },
        {
          title: "Fast Loading Speeds",
        },
      ],
    },
    {
      src: Project3,
      title: "Search Engine Optimization (SEO)",
      description:
        "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results, driving organic traffic to your site.",
      techStack: [
        {
          title: "On-Page SEO",
        },
        {
          title: "Keyword Research",
        },
        {
          title: "Performance Monitoring",
        },
        {
          title: "Link Building",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={`${styles.heading} h2v2`}>Projects </h2>
        <div className={styles.dataContainer}>
          {projects.map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  {/* <div className={styles.iconContainer}>{x.icon}</div> */}
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='' fill className={styles.img} />
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  <span className={styles.span}>Tech Stack:</span>
                  <ul className={styles.box}>
                    {x.techStack.map((y, index) => (
                      <li key={index}>
                        <h4 className={styles.reasonnTitle}>{y.title}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
