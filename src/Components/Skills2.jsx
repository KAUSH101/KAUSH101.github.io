import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  TechSkillsFlexTopMain,
  TechSkillsGrid,
  TechSkillsHeading1,
  TechSkillsHeading2,
  TechSkillsIconsStyle,
  TechSkillsInGridFlex,
  TechSkillsText,
} from "../Themes/Dark/TechnicalSkillsStyles";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";
// import { ScrollContext } from "../Contexts/ScrollContext";
import { ScrollContext } from "../Context/ScrollContext";
import { useContext } from "react";
import { MyThemeContext } from "../Context/themeContext";
import { LTechSkillsFlexTopMain, LTechSkillsHeading1, LTechSkillsHeading2, LTechSkillsInGridFlex, LTechSkillsText } from "../Themes/Light/TechnicalSkillsStyles";

const TechnicalSkills = () => {
  const { theme } = useContext(MyThemeContext);
  const { SkillsRef } = useContext(ScrollContext);

  return (
    <Flex ref={SkillsRef} {...(theme ? TechSkillsFlexTopMain : LTechSkillsFlexTopMain)}>
      <Flex>
        <Heading style={{color:"white"}} {...(theme ? TechSkillsHeading1 : LTechSkillsHeading1)}>Technical Skills</Heading>
        
      </Flex>
      <SimpleGrid {...TechSkillsGrid}>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiHtml5 {...TechSkillsIconsStyle} color={"#FF7400"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>HTML5</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiCss3 {...TechSkillsIconsStyle} color={"#008BFF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>CSS3</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiJavascript {...TechSkillsIconsStyle} color={"#FFFB00"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>JavaScript</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiReact {...TechSkillsIconsStyle} color={"#00B2FF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>React</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiTypescript {...TechSkillsIconsStyle} color={"#0070FF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Typescript</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiNodedotjs {...TechSkillsIconsStyle} color={"#1F9A28"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Node</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiExpress {...TechSkillsIconsStyle} color={"#ffffff"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Express</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiMongodb {...TechSkillsIconsStyle} color={"#0DAB09"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>MongoDB</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiChakraui {...TechSkillsIconsStyle} color={"#00E5DE"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Chakra UI</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiMaterialui {...TechSkillsIconsStyle} color={"#006CE5"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Material UI</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiBootstrap {...TechSkillsIconsStyle} color={"#8700FF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Bootstrap</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiNetlify {...TechSkillsIconsStyle} color={"#00C5FF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Netlify</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiVercel {...TechSkillsIconsStyle} color={"#ffffff"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Vercel</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiGithub {...TechSkillsIconsStyle} color={"#ffffff"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>GitHub</Text>
        </Flex>
        <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
          <SiVisualstudiocode {...TechSkillsIconsStyle} color={"#0093FF"} />
          <Text {...(theme ? TechSkillsText : LTechSkillsText)}>VS Code</Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default TechnicalSkills;