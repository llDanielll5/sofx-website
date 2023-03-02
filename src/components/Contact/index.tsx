import React, { useRef, useEffect } from "react";
import styles from "./Contact.module.css";
import {
  ContactButton,
  ContactContainer,
  ContactDescription,
  ContactSection,
} from "./styles";
import TextFadeIn, { FadeInText } from "../TextFadeIn";
import { FadeInContainerText } from "../AboutUs/styles";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import { COLORS } from "../../constants/cssVariables";

const Contact = () => {
  const currentScroll = useGetScrollPosition();
  const textFadeRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const textStyleRef = textFadeRef?.current?.style;
  const descriptionStyleRef = descriptionRef?.current?.style;
  const buttonStyleRef = buttonRef?.current?.style;

  const msg = `Olá!! 
  Gostaria de receber um orçamento para a criação de uma aplicação para minha empresa!
  Como funciona?`;
  const zapHref = `https://api.whatsapp.com/send?phone=5561984455304&text=${encodeURIComponent(
    msg
  )}`;

  const fadeInPage = () => {
    textStyleRef?.setProperty("left", "80%");
    descriptionStyleRef?.setProperty("opacity", "1");
    buttonStyleRef?.setProperty("opacity", "1");
  };
  const fadeOutPage = () => {
    textStyleRef?.setProperty("left", "0");
    descriptionStyleRef?.setProperty("opacity", "0");
    buttonStyleRef?.setProperty("opacity", "0");
  };

  useEffect(() => {
    if (currentScroll > 850) fadeInPage();
    else fadeOutPage();
  }, [currentScroll]);
  return (
    <ContactSection>
      <ContactContainer>
        <div className={styles.contact__content}>
          <div className={styles.contact__data}>
            <FadeInContainerText>
              <TextFadeIn content="Contate-nos" backColor="white" />
              <FadeInText
                ref={textFadeRef}
                backColor={COLORS.firstColorLighten}
              />
            </FadeInContainerText>

            <ContactDescription ref={descriptionRef}>
              Necessita de alguma solução para sua empresa? Alguma tecnologia
              para acelerar nas suas vendas? Entre em contato agora e faça o
              orçamento do que necessita!
            </ContactDescription>
          </div>
        </div>
        <div
          ref={buttonRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "1.8s",
            overflowX: "hidden",
          }}
        >
          <ContactButton href={zapHref} target={"_blank"} rel="noreferrer">
            Entrar em contato!
          </ContactButton>
        </div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
