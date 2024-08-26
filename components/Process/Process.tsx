import LayoutWrapper from "../LayoutWrapper";
import styles from "./Process.module.css";

const data = [
  {
    id: 1,
    feature: "Discovery & Planning",
    desc: "I begin each project by thoroughly understanding the goals, target audience, and technical requirements. This phase involves research, brainstorming, and setting a solid foundation for the project's success.",
  },
  {
    id: 2,
    feature: "Design & Prototyping",
    desc: "I create detailed wireframes and prototypes that align with the project’s objectives. Through iterative design, I ensure the final product is both functional and visually appealing.",
  },
  {
    id: 3,
    feature: "Development & Integration",
    desc: "With the design finalized, I move into development, leveraging modern technologies like Next.js and TypeScript. I focus on writing clean, efficient code and seamlessly integrating any necessary third-party services.",
  },
  {
    id: 4,
    feature: "Testing & Launch",
    desc: "Before deployment, I conduct extensive testing to guarantee optimal performance and reliability. Once the project meets all standards, I launch it and continue to monitor and optimize as needed.",
  },
];


const Process = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2 className={styles.heading}>My Process </h2>
          </div>
          <div className={styles.topRight}></div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <span className={styles.index}>{x.id}</span>
              <div>
                <h3 className={styles.feature}>{x.feature}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Process;
