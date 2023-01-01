import { SlHome } from "react-icons/sl";
import { BsPersonBadge } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";

export const NavItems = [
  {
    title: "Home",
    icon: <SlHome style={{ fontSize: "1rem" }} />,
    path: "#home",
  },
  {
    title: "Sobre Nós",
    icon: <BsPersonBadge style={{ fontSize: "1rem" }} />,
    path: "#aboutus",
  },
  {
    title: "Orçamentos",
    icon: <GrMoney style={{ fontSize: "1rem" }} />,
    path: "#budgets",
  },
  {
    title: "Contatos",
    icon: <AiOutlinePhone style={{ fontSize: "1rem" }} />,
    path: "#contacts",
  },
];
