import React from "react";
import styles from "./Contact.module.css";
import ContactImage from "../../../public/images/contact.jpg";
import {
  ContactButton,
  ContactContainer,
  ContactDescription,
  ContactImg,
  ContactSection,
  SubtitleContact,
  TitleContact,
} from "./styles";
import { contactData } from "./data";
import Link from "next/link";

interface ContactCardProps {
  icon: any;
  title: string;
  subtitle: string;
}

const Contact = () => {
  const msg = `Olá!! 
Gostaria de receber um orçamento para a criação de uma aplicação para minha empresa!
Como funciona?`;
  const ContactCard = (props: ContactCardProps) => {
    return (
      <div className={styles.contact__card_box}>
        <div className={styles.contact__card_info}>
          {props.icon}
          <div>
            <h3 className={styles.contact__card_title}>{props.title}</h3>
            <p className={styles.contact__card_description}>{props.subtitle}</p>
          </div>
        </div>

        <Link
          href={`https://api.whatsapp.com/send?phone=5561991538781&text=${encodeURIComponent(
            msg
          )}`}
          target="_blank"
          passHref
        >
          <ContactButton>Conversar!</ContactButton>
        </Link>
      </div>
    );
  };
  return (
    <ContactSection id="contacts">
      <ContactContainer>
        <div className={styles.contact__images}>
          <div className={styles.contact__orbe}>
            <div className={styles.contact_img}>
              <ContactImg
                src={ContactImage}
                alt="Contact us"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className={styles.contact__content}>
          <div className={styles.contact__data}>
            <SubtitleContact>Contate-nos</SubtitleContact>
            <TitleContact>
              Facilitamos orçamentos <span>.</span>
            </TitleContact>

            <ContactDescription>
              Necessita de alguma solução para sua empresa? Alguma tecnologia
              para acelerar nas suas vendas? Entre em contato agora e faça o
              orçamento do que necessita!
            </ContactDescription>
          </div>

          <div className={styles.contact__card}>
            {contactData?.map((item, i) => (
              <ContactCard
                key={i}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
