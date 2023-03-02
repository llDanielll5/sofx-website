//@ts-nocheck
import { AboutItems } from ".";
import { MedalIcon, ShieldIcon, StarIcon } from "./styles";

export const aboutData: AboutItems[] = [
  {
    title: "Praticidade e agilidade para sua empresa!",
    description:
      "Softwares pensados para a sua necessidade! Garantindo mais celeridade no seu dia-a-dia e mais controle geral de sua empresa!",
    icon: <ShieldIcon className="accordion-icon" />,
  },
  {
    title: "Capacitação completa em Projetos!",
    description:
      "Criamos a sua solução do começo ao fim, utilizando das melhores práticas e métodos ágeis, para trazer o resultado no tempo desejado.",
    icon: <StarIcon className="accordion-icon" />,
  },
  {
    title: "Garantia e Manutenção!",
    description:
      "Todos nossos serviços possuem garantia de qualidade e manutenção.",
    icon: <MedalIcon className="accordion-icon" />,
  },
];
