import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  color?: string;
}

const Logo = ({ color = "" }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[color]}`}>
      Chris Ware&apos;s Portfolio
    </Link>
  );
};
export default Logo;
