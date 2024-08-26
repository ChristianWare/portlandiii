"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./WorkSection.module.css";
import Gaii from "../../public/icons/gaii.svg";
import Edit from "../../public/icons/edit.svg";
import Hosting from "../../public/icons/cloud.svg";
import Listing from "../../public/icons/listing.svg";
import Design from "../../public/icons/design.svg";
import Clock from "../../public/icons/clock.svg";
import Resume from "../../public/icons/icons/resume.svg";
import Button from "../Button/Button";

const WorkSection = () => {
  const data = [
    {
      icon: <Hosting width={30} height={30} className={styles.icon} />,
      title: "Freelance Developer",
      company: "Self",
      description:
        "Build modern and responsive websites using Next.js, and React. Proficient in designing and implementing custom solutions tailored to client needs, with a focus on delivering high-performance and SEO-friendly web experiences.",
    },
    {
      icon: <Edit width={30} height={30} className={styles.icon} />,
      title: "Contract Web Developer",
      company: "KNI",
      description:
        "Helped to build and maintain the following websites: https://aspiriant.com/, https://www.bolt.com/, https://www.rippling.com/",
    },
    {
      icon: <Clock width={30} height={30} className={styles.icon} />,
      title: "Contract Software Engineer",
      company: "Joyus App",
      description:
        "2 month contract to help migrate the front end from Angular and Nest.js to Next.js. Worked with backend developers to integrate their api to the front end.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Design width={30} height={30} className={styles.icon} />,
      title: "Software Engineer",
      company: "Mentorworks",
      description:
        "Maintained current company income share agreement platform with the JavaScript, Node, React, and Python tech stack. Company went out of business.",
    },
    {
      icon: <Listing width={30} height={30} className={styles.icon} />,
      title: "Contract Frontend Developer",
      company: "Fandem",
      description:
        "Helped to build the following NFT based websites: probablynothing.io, thebattlebunnies.io/, photosynthesis.io/",
    },
    {
      icon: <Resume width={30} height={30} className={styles.icon} />,
      title: "Resume",
      company: "",
      description: "",
      btn: "Download My Resume",
    },
    // {
    //   icon: <Gaii width={30} height={30} className={styles.icon} />,
    //   title: "401k Specialist",
    //   company: "ADT",
    //   description:
    //     "We will set up your plausible analytics account so that you dont have to. Focus on your business, and we will take care of the technical stuff.",
    // },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={`${styles.heading} h2v3`}>
            <span className={styles.em}>Work History </span>
          </h2>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <h4 className={styles.company}>{x.company}</h4>
              <p className={styles.desc}>{x.description}</p>
              {x.btn && (
                <div className={styles.btnContainer}>
                  <Button href='/' btnType='tertairy' text={x.btn} />
                </div>
              )}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default WorkSection;
