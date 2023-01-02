import Image from "next/legacy/image";
import React from "react";
import Paragraph from "../Paragraph";
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
  title: string;
  description: string;
}

const AboutUs = () => {
  const AboutItems = (props: AboutItems) => (
    <AboutAccordionItem>
      <AboutAccordionHeader>
        {props.icon}
        <AboutAccordionTitle>{props.title}</AboutAccordionTitle>
        <AboutAccordionArrow>
          <ArrowDownIcon />
        </AboutAccordionArrow>
      </AboutAccordionHeader>

      <AboutAccordionContent>
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
            <Image alt={""} />
          </AboutImg>

          <AboutContent>
            <AboutData>
              <SectionSubtitle></SectionSubtitle>
              <H2SectionTitle>
                <span></span>
              </H2SectionTitle>

              <Paragraph id="valueDescription"></Paragraph>
            </AboutData>

            <AboutAccordion>
              {aboutData?.map((item, i) => (
                <AboutItems
                  key={i}
                  description={item?.description}
                  title={item?.title}
                  icon={item?.icon}
                />
              ))}
            </AboutAccordion>
          </AboutContent>
        </AboutImages>
      </AboutContainer>
    </StyledAbout>
  );
};

export default AboutUs;
