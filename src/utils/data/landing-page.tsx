import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TvIcon from "@mui/icons-material/Tv";
import DevicesIcon from "@mui/icons-material/Devices";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import InventoryIcon from "@mui/icons-material/Inventory";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export const headerMenu = [
  { href: "/#about-us", title: "Sobre Nós" },
  { href: "/#services", title: "Nossos Serviços" },
  { href: "/#works", title: "Trabalhos" },
  { href: "/#contact", title: "Contato" },
];

export const cardAboutUs = [
  { title: "Fácil Atualização", img: "/images/about-us/about-1.png" },
  { title: "Manutenção Garantida", img: "/images/about-us/about-2.png" },
  { title: "Entregas Rápidas", img: "/images/about-us/about-3.png" },
];

export const allServices = [
  { icon: <TvIcon color="primary" />, title: "Sistemas Web" },
  { icon: <WhatsAppIcon color="primary" />, title: "Whatsapp Bot" },
  { icon: <DevicesIcon color="primary" />, title: "Criaçao de Site" },
  { icon: <InventoryIcon color="primary" />, title: "Landing Pages" },
  { icon: <SmartphoneIcon color="primary" />, title: "Aplicativos Mobile" },
  { icon: <AutoFixHighIcon color="primary" />, title: "Design UI e UX" },
  { icon: <SmartToyIcon color="primary" />, title: "Aplicações com AI" },
  { icon: <VideogameAssetIcon color="primary" />, title: "Jogos" },
];

export const allWorks = [
  {
    href: "https://preeset.com",
    title: "Preeset | Website/Sistema",
    img: "images/portfolio/preeset.png",
  },
  {
    href: "https://bijuteria.vercel.app",
    title: "Accessory Company | E-Commerce Model",
    img: "images/portfolio/bijuteria.png",
  },
  {
    href: "https://travel-landing-page-model.vercel.app/",
    title: "Viagens | Website Model",
    img: "images/portfolio/travel.png",
  },
];
