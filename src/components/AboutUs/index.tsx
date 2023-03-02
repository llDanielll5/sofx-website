//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import Paragraph from "../Paragraph";
import { aboutData } from "./data";
import {
  AboutAccordion,
  AboutAccordionArrow,
  AboutAccordionContent,
  AboutAccordionDescription,
  AboutAccordionHeader,
  AboutAccordionItem,
  AboutAccordionTitle,
  AboutContainer,
  AboutContent,
  ArrowDownIcon,
  FadeInContainerText,
  PortfolioAnchor,
  StyledAbout,
} from "./styles";
import TextFadeIn, { FadeInText } from "../TextFadeIn";
import Button from "../Button";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";

export interface AboutItems {
  icon: any;
  index: number;
  title: string;
  description: string;
}

const AboutUs = () => {
  const currentScroll = useGetScrollPosition();
  const textFadeRef = useRef<HTMLDivElement>(null);
  const aboutButtonRef = useRef<HTMLElement>(null);
  const accordionItemRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const accordionHeaderRef = useRef<HTMLDivElement>(null);
  const [aboutItemsHeight, setAboutItemsHeight] = useState<any[]>([0, 0, 0]);
  const textStyleRef = textFadeRef?.current?.style;
  const accordionStyle = accordionItemRef?.current?.style;
  const buttonStyleRef = aboutButtonRef?.current?.style;

  const toggleAboutItem = (index: number) => {
    if (aboutItemsHeight[index] === 0) {
      setAboutItemsHeight((previous) => {
        const clone = [...previous];
        for (let i = 0; i < clone.length; i++) {
          clone[i] = 0;
        }
        clone[index] = "auto";

        return clone;
      });
    } else {
      setAboutItemsHeight((previous) => {
        const clone = [...previous];
        clone[index] = 0;
        return clone;
      });
    }
  };

  const fadeInPage = () => {
    textStyleRef?.setProperty("left", "80%");
    accordionStyle?.setProperty("opacity", "1");
    buttonStyleRef?.setProperty("opacity", "1");
  };
  const fadeOutPage = () => {
    textStyleRef?.setProperty("left", "0");
    accordionStyle?.setProperty("opacity", "0");
    buttonStyleRef?.setProperty("opacity", "0");
  };

  useEffect(() => {
    if (currentScroll > 200) fadeInPage();
    else fadeOutPage();
  }, [currentScroll]);

  const AboutItems = (props: AboutItems) => (
    <AboutAccordionItem
      id="items"
      dynamicHeight={aboutItemsHeight[props.index]}
    >
      <AboutAccordionHeader
        ref={accordionHeaderRef}
        id="header"
        onClick={() => toggleAboutItem(props.index)}
      >
        {props.icon}
        <AboutAccordionTitle>{props.title}</AboutAccordionTitle>
        <AboutAccordionArrow>
          <ArrowDownIcon dynamicHeight={aboutItemsHeight[props.index]} />
        </AboutAccordionArrow>
      </AboutAccordionHeader>

      <AboutAccordionContent dynamicHeight={aboutItemsHeight[props.index]}>
        <AboutAccordionDescription>
          {props.description}
        </AboutAccordionDescription>
      </AboutAccordionContent>
    </AboutAccordionItem>
  );
  return (
    <StyledAbout id={"aboutus"}>
      <AboutContainer>
        <AboutContent>
          <FadeInContainerText>
            <TextFadeIn content="Sobre Nós" backColor={"white"} />
            <FadeInText ref={textFadeRef} backColor={"white"} />
          </FadeInContainerText>

          <AboutAccordionContent ref={accordionItemRef} id="content">
            <AboutAccordionDescription>
              Os serviços digitais como sites, aplicativos e sistemas são
              essenciais para empresas que desejam expandir sua presença online
              e melhorar sua eficiência operacional. A automação desses
              processos oferece inúmeras vantagens, como a redução de erros
              humanos, aumento da produtividade, economia de tempo e redução de
              custos. <br />
              <br /> Além disso, a presença digital é uma necessidade básica nos
              dias de hoje. Empresas que não investem em serviços digitais estão
              perdendo oportunidades valiosas de se conectar com seus clientes e
              aumentar sua base de clientes. <br />
              <br />
              Pensando nisso nós procuramos oferecer o melhor serviço e
              atendimento, para oferecer o melhor sistema e adequação digital
              para sua empresa.
            </AboutAccordionDescription>
          </AboutAccordionContent>
        </AboutContent>
        <PortfolioAnchor href="/projects" ref={aboutButtonRef}>
          Conheça nosso Portfólio
        </PortfolioAnchor>
      </AboutContainer>
    </StyledAbout>
  );
};

export default AboutUs;
