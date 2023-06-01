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
          I am a versatile developer with a passion for solving complex problems and creating efficient and scalable web applications.
        </SectionText>
        <Button onClick={props.handleClick}>More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;