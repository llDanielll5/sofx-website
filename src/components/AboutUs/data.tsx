import { AboutItems } from ".";
import { MedalIcon, ShieldIcon, StarIcon } from "./styles";

export const aboutData: AboutItems[] = [
  {
    title: "Softwares Robustos e seguros!",
    description:
      "Nossas aplicações são criadas pensando sempre na segurança dos dados do cliente, e sempre com a melhor performance possível, para atender melhor toda a sua empresa!",
    icon: <ShieldIcon />,
  },
  {
    title: "Capacitação completa em Projetos!",
    description:
      "Criamos a sua solução do começo ao fim, desde a preparação UI e UX, até a finalização da entrega de todo seu software necessário.",
    icon: <StarIcon />,
  },
  {
    title: "Garantia e Manutenção!",
    description:
      "Todos nossos serviços possuem garantia de qualidade e manutenção por períodos longínquos, dependendo da necessidade do cliente.",
    icon: <MedalIcon />,
  },
];
