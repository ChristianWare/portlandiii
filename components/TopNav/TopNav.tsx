import styles from "./TopNav.module.css";
import Link from "next/link";
import Insta from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Github from "../../public/icons/icons/github.svg";
import Logo from "../Logo/Logo";

const TopNav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/in/christian-ware/'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://github.com/ChristianWare'
            target='_blank'
            aria-label='Facebook'
            className={styles.detail}
          >
            <Github className={styles.icon} width={12} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
