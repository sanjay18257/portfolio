import { GitHub } from "@material-ui/icons";
import allImages from "../assets";

const { Project1, Project2, Project3, Project4, } =
  allImages;

export const ProjectsList = [
  // {
  //   name: "On Going....",
  //   image: Project5,
  //   skills: [""],
  //   link: [
  //     {
  //       url: "",
  //       icon: <GitHub />,
  //     },
  //   ],
  // },
  // {
  //   name: "On Going....",
  //   image: Project6,
  //   skills: ["On Going...."],
  //   link: [
  //     {
  //       url: "On Going....",
  //       icon: <GitHub />,
  //     },
  //   ],
  // },
  {
    name: "Carzspot-Car Service Website",
    image: Project1,
    skills: ["Reactjs","JavaScript", "HTML", "CSS"],
    link: [
      {
        url: "https://github.com/sanjay18257/carzspot-main",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Student Management System",
    image: Project2,
    skills: ["ReactJs", "JavaScript", "Html","Css"],
    link: [
      {
        url: "https://github.com/sanjay18257/Student-management-System-React",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Digital Marketing Application",
    image: Project3,
    skills: ["ReactJs", "Redux", "SpringBoot", "RestApi","MySql"],
    link: [
      {
        url: "https://github.com/sanjay18257/APP-DEVELOPMENT",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Yoga Course Selling Platform",
    image: Project4,
    skills: ["ReactJs", "Vite", "Spring boot" , "MySQL",],
    link: [
      {
        url: "https://github.com/sanjay18257/Advance-Application-Development",
        icon: <GitHub />,
      },
    ],
  },
];
