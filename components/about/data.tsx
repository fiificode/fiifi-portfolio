import {
  Chrome,
  Figma,
  Framer,
  GithubIcon,
  Globe2,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import { TbBrandVscode } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Franklin Mensah",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+233-554-824341",
  },
  {
    icon: <MailIcon size={20} />,
    text: "fiificode@gmail.com",
  },
  {
    icon: <Globe2 size={20} />,
    text: "Accra-Ghana",
  },
];
export const workData = [
  {
    title: "work",
    data: [
      {
        company: "DOSH-OPIN Technologies",
        jobTitle: "Frontend Software Developer",
        years: "2023 - date",
      },
      {
        company: "DOSH-OPIN Technologies",
        jobTitle: "Project Intern",
        years: "2022 - 2023",
      },
      {
        company: "FiifiCode",
        jobTitle: "Freelancer",
        years: "2019 - 2022",
      },
    ],
  },
];
export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML,CSS,Javascript",
      },
      {
        name: "React,NextJs,TypeScript",
      },
      {
        name: "TailwindCss,Bootstrap",
      },
      {
        name: "Git,Github",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: <Chrome />,
      },
      {
        name: <Figma />,
      },
      {
        name: <Framer />,
      },
      {
        name: <TbBrandVscode />,
      },
      {
        name: <GithubIcon />,
      },
      {
        name: <SiAzuredevops />,
      },
    ],
  },
];
