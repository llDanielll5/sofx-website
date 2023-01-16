//@ts-nocheck
import Image from "next/legacy/image";
import React, { useState, useRef, useEffect } from "react";
import Paragraph from "../Paragraph";
import CodeImage from "../../../public/images/code.png";
import { SectionSubtitle } from "../Reusables/styles";
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
  AboutData,
  AboutImages,
  AboutImg,
  AboutOrbe,
  ArrowDownIcon,
  H2SectionTitle,
  StyledAbout,
} from "./styles";

export interface AboutItems {
  icon: any;
  index: number;
  title: string;
  description: string;
}

const AboutUs = () => {
  const accordionItemRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const accordionHeaderRef = useRef<HTMLDivElement>(null);
  const [aboutItemsHeight, setAboutItemsHeight] = useState<any[]>([0, 0, 0]);

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

      <AboutAccordionContent
        ref={aboutContentRef}
        id="content"
        dynamicHeight={aboutItemsHeight[props.index]}
      >
        <AboutAccordionDescription>
          {props.description}
        </AboutAccordionDescription>
      </AboutAccordionContent>
    </AboutAccordionItem>
  );
  return (
    <StyledAbout id="aboutus">
      <AboutContainer>
        <AboutImages>
          <AboutOrbe />

          <AboutImg>
            <Image alt={"Coding Image"} src={CodeImage} />
          </AboutImg>
        </AboutImages>

        <AboutContent>
          <AboutData>
            <SectionSubtitle>Sobre nós</SectionSubtitle>
            <H2SectionTitle>
              Nossos Valores<span>.</span>
            </H2SectionTitle>

            <Paragraph id="valueDescription">
              Procuramos trazer sempre a qualificação e solução para sua
              empresa!
            </Paragraph>
          </AboutData>

          <AboutAccordion ref={accordionItemRef}>
            {aboutData?.map((item, i) => (
              <AboutItems
                key={i}
                index={i}
                description={item?.description}
                title={item?.title}
                icon={item?.icon}
              />
            ))}
          </AboutAccordion>
        </AboutContent>
      </AboutContainer>
    </StyledAbout>
  );
};

export default AboutUs;
