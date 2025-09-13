import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Ness",
    desc: "Site vitrine pour la plateforme \"Ness'\", plateforme qui connecte des utilisateurs autour d'une idée.",
    img: "/static/projects/ness.png",
    github: "https://github.com/jewaner",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 1,
    title: "Virgule",
    desc: "livraison de délicieuses recettes et ingrédients nécessaires à domicile toutes les semaines.",
    img: "/static/projects/virgule.png",
    github: "https://github.com/jewaner",
    tags: ["Symfony", "ReactJS", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Dom-shoot",
    desc: "Reservation de scéance de tir airsoft, marquez un maximum de points.",
    img: "/static/projects/dom-shoot.png",
    github: "https://github.com/jewaner",
    tags: ["Laravel", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Ojocho",
    desc: "Website de recherche d'emploi",
    img: "/static/projects/ojocho.png",
    tags: ["Symfony", "ReactJS", "API", "Javascript", "CSS"],
  },

];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects