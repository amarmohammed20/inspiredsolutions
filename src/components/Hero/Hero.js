import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My World!
      </SectionTitle>
      <SectionText> 
        Looking to bring others on my Journey of Technology, Understanding and even more investment into the future. 
      </SectionText>
      <Button onClick={() => console.log("Download CV")}>CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;