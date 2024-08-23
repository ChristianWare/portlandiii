import LayoutWrapper from "../LayoutWrapper";
import styles from "./GoodSection.module.css";
import Arrow2 from "../../public/icons/arrow2.svg";
import Cart from "../../public/icons/cart.svg";
import Business from "../../public/icons/business.svg";
import Booking from "../../public/icons/booking.svg";
import Link from "next/link";

const services = [
  {
    id: 82,
    processName: "",
    processDescription: "",
    icon: null,
    href: "",
  },
  {
    id: 85,
    processName: "Full-stack Development",
    processDescription:
      "Secure, easy-to-use online stores optimized for conversions and sales growth.",
    icon: <Cart className={styles.icon2} />,
    href: "/services/ecommerce-stores",
  },
  {
    id: 86,
    processName: "Search Engine Optimization",
    processDescription:
      "Optimize your online presence and attract more visitors.",
    icon: <Business className={styles.icon2} />,
    href: "services/business-websites",
  },
  {
    id: 87,
    processName: "Ui/Ux Design",
    processDescription:
      "Innovative web applications to streamline your business operations.",
    icon: <Booking className={styles.icon2} />,
    href: "/services/booking-platforms",
  },
  {
    id: 83,
    processName: "ADA Website Accessibility",
    processDescription:
      "Tailored websites that reflect your unique brand identity.",
    icon: <Arrow2 className={styles.icon2} />,
    href: "/services",
  },
] as const;

const GoodSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              What I&apos;m{" "}
              <span className='span' style={{ textDecoration: "underline" }}>
                good
              </span>{" "}
              at{" "}
            </h2>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
              <Link
                href={x.href}
                key={x.id}
                className={styles.processContainer}
              >
                <>
                  <div className={styles.processTop}>
                    {x.processName.length >= 1 && <>{x.icon}</>}
                  </div>
                  <div className={styles.processBottom}>
                    {x.processName.length >= 1 && (
                      <h3 className={styles.processName}>{x.processName}</h3>
                    )}

                    <p className={styles.processDescription}>
                      {x.processDescription}
                    </p>
                  </div>
                </>
              </Link>
            ))}
          </div>
        </div>
        {/* <Features /> */}
      </LayoutWrapper>
    </section>
  );
};
export default GoodSection;
