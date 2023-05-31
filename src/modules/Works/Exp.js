import dockerIcon from "../../assets/dockerIcon.png";
import reactIcon from "../../assets/reactIcon.svg";
import threeIcon from "../../assets/threeIcon.png";

export const experiences = [
  {
    title: "DevOps",
    company_name: "Docker mock project",
    icon: dockerIcon,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      "Deployed a mock React app using Docker and Docker Compose to package and distribute application along with its dependencies across different environments.",
      "Created a Dockerfile to build a Docker image. I used the Docker CLI to build an image from the Dockerfile.",
      "With the Docker image successfully built, I then 'Docker Compose' to define and manage the infrastructure for running my application.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Showcase project",
    icon: reactIcon,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Developed a CRUD application using React, incorporating a range of key concepts like Hooks, Redux, and the Context API and other major concepts.",
      "By utilizing these concepts, along with the power of various React libraries, such as Material-UI for styling, I was able to create an application that demonstrates my proficiency in building scalable, state-driven, and visually appealing React applications.",
    ],
  },
  {
    title: "Three.js",
    company_name: "This portfolio",
    icon: threeIcon,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "The portfolio I developed showcases my handling of React, as well as my ability to incorporate libraries like three.js with react-threejs, framer motion, and tailwind CSS.",
      "The integration of fluid visuals, smooth animations, and a functional email service allows for an decent user experience.",
      "Throughout the development process, I made use of React concepts to build a robust codebase.",
    ],
  },
];
