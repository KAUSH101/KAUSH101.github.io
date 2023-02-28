import { Box, Button, Card, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiCss3, SiCypress, SiExpress, SiFirebase, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'

const Skills = () => {
  
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}} id="skills">
      <Heading marginBottom={'20px'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>SKILLS</Heading>
      <Heading color={'#d08768'} fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} _hover={{transform: 'scale(1.05)', }}>TECH-STACK</Heading>
      <Flex flexDirection="column" justifyContent="space-around" >
          
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#d08768 */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:4, sm:6, md:8, lg:10}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}}><SiHtml5/><Text fontSize="10px">HTML</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiCss3/><Text fontSize="10px">CSS3</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiJavascript/><Text fontSize="10px">JavaScript</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiReact/><Text fontSize="10px">React</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiRedux/><Text fontSize="10px">Redux</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiChakraui/><Text fontSize="10px">Chakra-UI</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiNextdotjs/><Text fontSize="10px">Next.js</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiTypescript/><Text fontSize="10px">TypeScript</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiNodedotjs/><Text fontSize="10px">Node.js</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiExpress/><Text fontSize="10px">Express</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiMongodb/><Text fontSize="10px">MongoDB</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} > <img src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" style={{background:"white"}} alt="" /><Text fontSize="10px">Mongoose</Text></Button>
        </SimpleGrid>
      </Flex>

      <Heading color={'#d08768'} fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} _hover={{transform: 'scale(1.05)', }}>TOOLS</Heading>
      <Flex flexDirection="column" justifyContent="space-around" >
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:4, sm:6, md:8, lg:10}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiGit/><Text fontSize="10px">Git</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiGithub/><Text fontSize="10px">GitHub</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiVisualstudiocode/><Text fontSize="10px">VS Code</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><FaNpm/><Text fontSize="10px">npm</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiPostman/><Text fontSize="10px">Postman</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiCypress/><Text fontSize="10px">Cypress</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiJest/><Text fontSize="10px">Jest</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiFirebase/><Text fontSize="10px">Firebase</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiNetlify/><Text fontSize="10px">Netlify</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiVercel/><Text fontSize="10px">Vercel</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} ><SiHeroku/><Text fontSize="10px">Heroku</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"60px", sm:"70px", md:"80px"}} h={{base:"50px", sm:"60px", md:"70px"}} > <img src="https://render.com/favicon.ico" alt="" /><Text fontSize="10px">Render</Text></Button>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      </Flex>
    </Box>
  )
}

export default Skills