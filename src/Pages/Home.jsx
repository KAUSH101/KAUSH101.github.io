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
    <Box boxShadow={'2xl'} width={'95%'} margin={'auto'} id='homepage' >
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex flex={1} paddingTop={'50px'} justifyContent={'center'}>
        <Image
          alt={'Login Image'}
          // objectFit={'cover'}
          // borderRadius='full'
          boxSize='500px'
          margin="20px"
          height={'500px'}
          _hover={{transform: 'scale(1.05)', }}
          src={'https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966'}
        />

      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>
       
            <br />{' '}
    
            Hi 👋
          </Heading>
          <Heading lineHeight='tall'>
            <Highlight
              query={['Kaushik', 'Kumar']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'green',color:'white' }}
            >
              I'm Kaushik Kumar
            </Highlight>
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color={'grey.700'}>
          An Aspiring Full Stack MERN Developer
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'66px'} align={'center'}>
          
           
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'66px'} align={'center'}></Stack>
            <Link href={'https://github.com/KAUSH101'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
          
                boxSize='40px' leftIcon={<FaGithub size="30px" />}>  </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/kaushik-kumar-545149253/'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='linkedin' leftIcon={< FaLinkedin size="30px" />}>
              </Button>
            </Link>
            <Link href={'mailto:kaushikkumar7070@gmail.com'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='mail' leftIcon={< SiGmail size="30px" />}> </Button>
            </Link>
           
          </Stack>
        </Stack>
      </Flex>
    </Stack>

    </Box>
  );
}

