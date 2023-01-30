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
          boxSize='400px'
          height={'400px'}
          _hover={{transform: 'scale(1.05)', }}
          src={'https://prepinsta.com/wp-content/uploads/2021/06/programmer.webp'}
        />

      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>
       
            <br />{' '}
    
            Hello 👋
          </Heading>
          <Heading lineHeight='tall'>
            <Highlight
              query={['Kaushik', 'Kumar']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
            >
              I'm Kaushik Kumar
            </Highlight>
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color={'grey.700'}>
          Knack of building application with frontend operations
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}>
          
           
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}></Stack>
            <Link href={'https://github.com/KAUSH101'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                // borderRadius='full'
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

