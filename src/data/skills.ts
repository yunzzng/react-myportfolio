import photoshopIcon from "/icons/skill/photoshop.png";
import illustratorIcon from "/icons/skill/illustrator.png";
import indesignIcon from "/icons/skill/indesign.png";
import figmaIcon from "/icons/skill/figma.png";
import adobeXdIcon from "/icons/skill/adobexd.png";
import htmlIcon from "/icons/skill/html.png";
import cssIcon from "/icons/skill/css.png";
import javascriptIcon from "/icons/skill/javascript.png";
import typescriptIcon from "/icons/skill/typescript.png";
import reactIcon from "/icons/skill/react.png";
import nodejsIcon from "/icons/skill/node.png";
import expressIcon from "/icons/skill/expressjs.png";
import dockerIcon from "/icons/skill/docker.png";
import githubIcon from "/icons/skill/github.png";
import viewIcon from "/icons/skill/vuejs.png";

export type Skill = {
  name: string;
  percentage: number;
  icon: string;
};

const skills: Skill[] = [
  { name: "Photoshop", percentage: 100, icon: photoshopIcon },
  { name: "Illustrator", percentage: 100, icon: illustratorIcon },
  { name: "Indesign", percentage: 100, icon: indesignIcon },
  { name: "Figma", percentage: 100, icon: figmaIcon },
  { name: "Adobe XD", percentage: 100, icon: adobeXdIcon },
  { name: "HTML", percentage: 100, icon: htmlIcon },
  { name: "CSS", percentage: 90, icon: cssIcon },
  { name: "JavaScript", percentage: 80, icon: javascriptIcon },
  { name: "TypeScript", percentage: 70, icon: typescriptIcon },
  { name: "React", percentage: 80, icon: reactIcon },
  { name: "Node.js", percentage: 80, icon: nodejsIcon },
  { name: "Express", percentage: 80, icon: expressIcon },
  { name: "Docker", percentage: 30, icon: dockerIcon },
  { name: "Github", percentage: 90, icon: githubIcon },
  { name: "View", percentage: 90, icon: viewIcon },
];

export default skills;