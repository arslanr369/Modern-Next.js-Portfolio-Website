export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern Next.js Portfolio Website",
    des: "Built with Next.js, Three.js, Framer Motion, and TailwindCSS. Demonstrates a modern portfolio with 3D elements and animations.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/arslanr369/Modern-Next.js-Portfolio-Website",
  },
  {
    id: 2,
    title: "Modern UI/UX SaaS Website",
    des: "A SaaS landing page built with React.js and Tailwind CSS, following mobile-first principles.",
    img: "/p2.svg",
    iconLists: ["/react.svg", "/tail.svg"],
    link: "https://github.com/arslanr369/Modern-UI-UX-SaaS-Website",
  },
  {
    id: 3,
    title: "PDF to High-Quality Images",
    des: "Python application converting PDF files to high-quality JPEGs using PyMuPDF.",
    img: "/p3.svg",
    iconLists: ["/python.svg"],
    link: "https://github.com/arslanr369/pdf2hd-images",
  },
  {
    id: 4,
    title: "3D Portfolio Website",
    des: "3D portfolio website using React and Three.js.",
    img: "/p4.svg",
    iconLists: ["/react.svg", "/three.svg"],
    link: "https://github.com/arslanr369/3d-portfolio-website",
  },
  {
    id: 5,
    title: "TrendTrove E-commerce",
    des: "A seamless e-commerce platform showcasing modern shopping experiences.",
    img: "/p5.svg",
    iconLists: ["/react.svg", "/html.svg"],
    link: "https://github.com/arslanr369/TrendTrove-Ecommerce",
  },
  {
    id: 6,
    title: "Flask Background Remover",
    des: "Flask web application to remove image backgrounds using Rembg.",
    img: "/p6.svg",
    iconLists: ["/flask.svg"],
    link: "https://github.com/arslanr369/FlaskBGRemover",
  },
  {
    id: 7,
    title: "React e-Plant Shopping",
    des: "E-commerce React app for IBM full-stack developer course.",
    img: "/p7.svg",
    iconLists: ["/react.svg", "/redux.svg"],
    link: "https://github.com/arslanr369/React-e-plantShopping",
  },
  {
    id: 8,
    title: "Email Extractor GUI",
    des: "Python application to extract email addresses from text using Tkinter GUI.",
    img: "/p8.svg",
    iconLists: ["/python.svg"],
    link: "https://github.com/arslanr369/Email-Extractor-GUI",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Arslan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Arslan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Arslan is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
