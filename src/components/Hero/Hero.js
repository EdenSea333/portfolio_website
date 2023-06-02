import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          As a full-stack senior developer, I specialize in web app development using a wide range of technology.
        </SectionText>
        <Button onClick={props.handleClick}>More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;