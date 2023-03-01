import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text, Link,
  Highlight, Box
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
// import { MdEmail ,MdOutgoingMail } from 'react-icons/md';

export default function Home() {
  
  return (
  // <Center>
    <Box boxShadow={'2xl'} width={'100%'} margin={'auto'} id='homepage' >
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex flex={1} paddingTop={'50px'} justifyContent={'center'}>
        <Image
          alt={'Login Image'}
          // objectFit={'cover'}
          // borderRadius='full'
          boxSize={'auto'}
          margin={"20px"}
          
          height={'auto'}
          _hover={{transform: 'scale(1.05)', }}
          src={'https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966'}
        />

      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>
       
            <br />{' '}
    
            Hi 👋
          </Heading>
          <Heading size={"md"} lineHeight='tall'>
            <Highlight
              query={['Kaushik', 'Kumar']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: '#d08768',color:'white',fontSize:'md' }}
            >
              I'm Kaushik Kumar
            </Highlight>
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color={'grey.700'}>
          A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
          <Flex spacing={4} justifyContent={'center'} align={'center'}>
          
           
          
            <Link target="_blank" href={'https://github.com/KAUSH101'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
          
                boxSize='40px' leftIcon={<FaGithub size="30px" />}>  </Button>
            </Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/kaushik-kumar-545149253/'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='linkedin' leftIcon={< FaLinkedin size="30px" />}>
              </Button>
            </Link>
            <Link target="_blank" href={'mailto:kaushikkumar7070@gmail.com'}>
              <Button
                variant="ghost"
                size="lg"
                
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='mail' leftIcon={< SiGmail size="30px" />}> </Button>
            </Link>
           
          </Flex>
        </Stack>
      </Flex>
    </Stack>

    </Box>
  );
}

