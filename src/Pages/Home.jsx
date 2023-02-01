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
          src={'https://64.media.tumblr.com/2d0af9c90d1b1107313cc20bda01548a/tumblr_outwxnanpp1u79o2lo1_1280.gifv'}
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

