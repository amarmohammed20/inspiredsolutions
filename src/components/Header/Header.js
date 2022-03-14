import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { HiOutlineAcademicCap } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, NavLinks } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <HiOutlineAcademicCap size="3rem" /> <Span>Amar Mohammed</Span>
        </a>
      </Link>
    </Div1>
    <Div2> 
      <NavLinks> 
        <Link href="#projects">
          <NavLink>Projects</NavLink> 
        </Link>
      </NavLinks>
      <NavLinks> 
        <Link href="#technologies">
          <NavLink>Technologies</NavLink> 
        </Link>
      </NavLinks>
      <NavLinks> 
        <Link href="#seo">
          <NavLink>SEO</NavLink> 
        </Link>
      </NavLinks>
      <NavLinks> 
        <Link href="#about">
          <NavLink>About</NavLink> 
        </Link>
      </NavLinks>
      <NavLinks> 
        <Link href="#crypto">
          <NavLink>Crypto</NavLink> 
        </Link>
      </NavLinks>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/amarmohammed20" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="linkedin.com/in/amar-mohammed-4a185b55" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/AmarMohammed89" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
