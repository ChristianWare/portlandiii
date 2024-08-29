import Project1 from "../public/images/elite.png";
import Project2 from "../public/images/nier.png";
import Project3 from "../public/images/tacolove5.jpg";
import Project4 from "../public/images/weko.jpg";

export const projects = [
  {
    src: Project3,
    title: "Taco Bell Redegin",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    techStack: [
      {
        title: "Next.JS",
      },
      {
        title: "Sanity.io",
      },
      {
        title: "CSS Modules",
      },
      {
        title: "Nodemailer",
      },
    ],

    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Project1,
    title: "Elite Retreat Rentals",
    description:
      "Elite Retreat Rentals is a Phoenix, AZ based company that provides lodging services to travelers at an affordable price. This full stack project was built with an admin panel that allows the owner to create, update and delete properties. Each property listing shows details and images, and gives users the ability to book in advance with a fully functional booking engine. Stripe payment gateway was added, allowing users can pay in advance with any major credit card.",

    techStack: [
      {
        title: "Next.JS",
      },
      {
        title: "Mongo DB",
      },
      {
        title: "Redux",
      },
      {
        title: "Stripe",
      },
    ],

    href: "https://www.eliteretreatrentals.com/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  {
    src: Project4,
    title: "AZ Golf Whisperer",
    description:
      "Golf Guise/AZ Golf Whisperer is a front end project for a client of mine who sells Golf Stay-and-Play packages. The site showcases the details of each package offered, which golf courses they are partnered with, as well as information on golf club rentals. This was built with Next.Js, styled with CSS Modules and Nodemailer was used for the contact form for email notifications.",
    techStack: [
      {
        title: "Next.JS",
      },
      {
        title: "CSS Modules",
      },
      {
        title: "React Hook Form",
      },
      {
        title: "Node Mailer",
      },
    ],
    href: "https://golf-guise.vercel.app/",
    github: "https://github.com/ChristianWare/golf-guise",
  },
  {
    src: Project2,
    title: "Nier Transportaion",
    description:
      "Nier Transportation is a luxury black car driving service based in Phoenix, AZ, specializing in airport transfers, and long distance drives. Users have the ability to communicate witht the owner via a fully functional contact form that sends messages directly to the owners email address. The blog was built using Makrkdown nadn MDX.",
    techStack: [
      {
        title: "Next.JS",
      },
      {
        title: "CSS Modules",
      },
      {
        title: "React Hook Form",
      },
      {
        title: "Node Mailer",
      },
    ],

    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "What is your experience with Next.js?",
    answer:
      "I have been working with Next.js since version 10 was available with the pages router. Now I build all my projects with the latest verion 14, which utilizes the app router.",
  },
  {
    id: 36.1,
    question: "Can you explain your role in previous Next.js projects?",
    answer:
      "I have contributed to many Next.js projects, both large and small. I have desiged components, implemented server-side rendering, optimized performance, and integrated APIs.",
  },
  {
    id: 36.2,
    question: "What technologies do you use alongside Next.js?",
    answer:
      "I am proficient in other technologies such as React, Node.js, MongoDB, GraphQL, and many more.",
  },
  {
    id: 36.3,
    question: "How do you handle state management in Next.js applications?",
    answer:
      "Depending on the project/situation, I use the built in React features useState and useEffect. But if the state needs to be accessible accross the entire app, then I'll use libraries like Redux or Zustand. Sometimes I'll use the built in Context API.",
  },
  {
    id: 36.4,
    question: "Have you worked with Next.js for SEO optimization?",
    answer:
      "Yes, I have optimized many Next.js applications for SEO by implementing dynamic routing, meta tags, and structured data to improve search engine visibility.",
  },
] as const;

export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/#home",
  },
  {
    id: 6,
    heading: "About",
    href: "#about",
  },
  {
    id: 11,
    heading: "Projects",
    href: "#projects",
  },
  {
    id: 16,
    heading: "FAQ",
    href: "#faq",
  },
] as const;
