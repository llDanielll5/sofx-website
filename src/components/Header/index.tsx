//@ts-nocheck
import React, { useCallback, useEffect, useRef } from "react";
import { GiLaptop } from "react-icons/gi";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import { PagesType } from "../Main";
import { NavItems } from "./data";
import {
  NavButton,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
  NavMenu,
  StyledHeader,
  StyledNav,
} from "./styles";

interface HeaderProps {
  activePage: PagesType;
  onChangeActivePage: (e: any) => void;
}

const Header = (props: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const currentScroll = useGetScrollPosition();
  const scrollHeader = useCallback(() => {
    const header = headerRef?.current;
    if (currentScroll >= 50) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  }, [currentScroll]);

  const getActiveScroll = useCallback(() => {
    const sections = document.querySelectorAll("div[id]");
    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((item, index) => {
        const sectionHeight = item?.offsetHeight;
        const sectionTop = item?.offsetTop - 58;
        const sectionId = item?.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navRef?.current
            ?.querySelector("a[href*=" + sectionId + "]")
            ?.classList.add("active-link");
        } else {
          navRef?.current
            ?.querySelector("a[href*=" + sectionId + "]")
            ?.classList.remove("active-link");
        }
      });
    }
    scrollActive();
  }, []);

  useEffect(() => {
    getActiveScroll();
  }, [currentScroll]);

  return (
    <StyledHeader ref={headerRef}>
      <StyledNav>
        <NavLogo href="/" id="NavLogo">
          SOFX Soluções Digitais <GiLaptop />
        </NavLogo>

        <NavMenu ref={navRef}>
          <NavList>
            {NavItems?.map((item, index) => (
              <NavItem key={index}>
                <NavLink
                  href={item?.path}
                  onClick={() => props.onChangeActivePage(item?.path)}
                >
                  {item?.icon}
                  <span>{item?.title}</span>
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavMenu>
        <NavButton>Subscribe</NavButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
