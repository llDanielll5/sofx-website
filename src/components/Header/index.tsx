import React from "react";
import { GiLaptop } from "react-icons/gi";
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
  return (
    <StyledHeader>
      <StyledNav>
        <NavLogo href="#">
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
