"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./WorkSection.module.css";
import Gaii from "../../public/icons/gaii.svg";
import Edit from "../../public/icons/edit.svg";
import Hosting from "../../public/icons/cloud.svg";
import Listing from "../../public/icons/listing.svg";
import Design from "../../public/icons/design.svg";
import Clock from "../../public/icons/clock.svg";

const WorkSection = () => {
  const data = [
    {
      icon: <Hosting width={30} height={30} className={styles.icon} />,
      title: "Freelance Developer",
      company: "Self",
      description:
        "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
    },
    {
      icon: <Edit width={30} height={30} className={styles.icon} />,
      title: "Contract Web Developer",
      company: "KNI",
      description:
        "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
    },
    {
      icon: <Clock width={30} height={30} className={styles.icon} />,
      title: "Contract Software Engineer",
      company: "Joyus App",
      description:
        "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
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
        "We design and develop each website we build with pure code to ensure that your website is fast and ranks high on google serch results.",
    },
    {
      icon: <Listing width={30} height={30} className={styles.icon} />,
      title: "Contract Frontend Developer",
      company: "Fandem",
      description:
        "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
    },
    {
      icon: <Gaii width={30} height={30} className={styles.icon} />,
      title: "401k Specialist",
      company: "ADT",
      description:
        "We will set up your plausible analytics account so that you dont have to. Focus on your business, and we will take care of the technical stuff.",
    },
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
              {/* <h5 className={styles.dates}>January 2020 - Present</h5> */}
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default WorkSection;
