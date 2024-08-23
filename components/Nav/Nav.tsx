"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import TopNav from "../TopNav/TopNav";
import { usePathname } from "next/navigation";
import Arrow from "../../public/icons/arrow.svg";
import Logo from "../Logo/Logo";

const navItems = [
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Faq's",
    href: "/faqs",
  },
  {
    text: "Blog",
    href: "/blog",
  },

  {
    text: "Contact",
    href: "/contact",
  },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : `${styles.navMenu} ${styles.active}`
            }
            onClick={openMenu}
          >
            {/* <div className={styles.mobileLogo}>
              <Logo color='green' />
            </div> */}
            <div className={styles.navBox}>
              <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                <Link href='/'>
                  {pathname === "/" ? (
                    <>
                      <Arrow className={styles.icon} />
                      Home
                    </>
                  ) : (
                    "Home"
                  )}
                </Link>
              </li>
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className={styles.navItem}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={navItem.href}>
                    {pathname.includes(navItem.href) && (
                      <>
                        <Arrow className={styles.icon} />
                        {navItem.text}
                      </>
                    )}
                    {!pathname.includes(navItem.href) && navItem.text}{" "}
                  </Link>
                </li>
              ))}
            </div>
          </ul>

          {/* <div className={styles.btnContainer}>
            <Button
              href='/contact/#schedule'
              text='Schedule a call'
              btnType='primaryNav'
            />
          </div> */}
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </nav>
      </header>
    </>
  );
}
export default Nav;
