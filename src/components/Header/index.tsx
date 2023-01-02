import React, { useCallback, useEffect, useRef, useState } from "react";
import { GiLaptop } from "react-icons/gi";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
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

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const currentScroll = useGetScrollPosition();
  const scrollHeader = useCallback(() => {
    const header = headerRef?.current;
    if (currentScroll >= 50) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  }, [currentScroll]);

  useEffect(() => {
    scrollHeader();
  }, [currentScroll]);

  return (
    <StyledHeader ref={headerRef}>
      <StyledNav>
        <NavLogo href="#" id="NavLogo">
          DGS Softwares <GiLaptop />
        </NavLogo>

        <NavMenu>
          <NavList>
            {NavItems?.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={item?.path}>
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
