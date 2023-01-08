import React from "react";
import { GiLaptop } from "react-icons/gi";
import {
  footerAbout,
  footerData,
  footerFollowUs,
  footerServices,
} from "./data";
import styles from "./Footer.module.css";
import {
  FooterCopy,
  FooterLogo,
  FooterSection,
  FooterSocialLink,
  FooterTitle,
} from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <div className={styles.footer__container}>
        <div className={styles.footerTextContainer}>
          <FooterLogo href="#">
            DGS Softwares <GiLaptop />
          </FooterLogo>
          <p className={styles.footer_description}>
            Conectando facilidade e praticidade <br /> Para toda sua empresa!
          </p>
        </div>

        <div className={styles.footer_content}>
          {footerData?.map((value, i) => (
            <div key={i}>
              <FooterTitle>{value.title}</FooterTitle>
              <ul className={styles.footer_links}>
                {i === 0 &&
                  footerAbout?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className={styles.footer_link}>
                        {item.content}
                      </a>
                    </li>
                  ))}
                {i === 1 &&
                  footerServices?.map((item, index) => (
                    <li key={index}>
                      <a className={styles.footer_link}>{item.content}</a>
                    </li>
                  ))}
              </ul>
              <ul className={styles.footer_social}>
                {i === 2 &&
                  footerFollowUs?.map((item, index) => (
                    <div key={index} className={styles.footer_social_container}>
                      <FooterSocialLink
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.icon}
                      </FooterSocialLink>
                    </div>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer_info_container}>
        <FooterCopy>
          &#169; DGS Softwares 2023. Todos direitos reservados.
        </FooterCopy>
      </div>
    </FooterSection>
  );
};

export default Footer;
