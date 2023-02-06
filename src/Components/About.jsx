import logo from '../logo/pic.jpg'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,Link , Box
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import Calender from './Calender';

export default function SplitScreen() {
  return (
    <Box boxShadow={'2xl'} width={'95%'} margin={'auto'}>
    <Heading fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{transform: 'scale(1.05)', }}>ABOUT</Heading>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} id='aboutpage' >
      <Flex p={8} flex={1} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
         
            <br />{' '}
            <br />
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'blue.400'} lineHeight={'25px'} >
             I am a Full Stack Web Developer, passionate about building digital products that improve everyday experience for people. 
            
            </Text>{' '}
          </Heading>
        
          <Stack direction={{ base: 'column', md: 'column' }} spacing={4} justifyContent={'center'}>
          <Link href="Kaushik-Kumar-Resume (1).pdf" smooth 
              download={'Kaushik-Kumar-Resume (1).pdf'} textDecoration='null'
            >   
            <Button
              // rounded={'full'}
              bg={'green'}
             
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF', transform: 'scale(1.05)'}}
              borderRadius='full'
              >
               Download Resume
            </Button>
            </Link>
            <Button
              rounded={'full'}
              // bg={'blue.400'}
              // color={'white'}
              _hover={{
                bg: 'black.300',
              }}
              leftIcon={<MdEmail size="30px" />}
            >
              kaushikkumar7070@gmail.com
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent={'center'}>
        <Image
          height={'350px'}
          width={'350px'}
          alt={'Login Image'}
          objectFit={'cover'}
          _hover={{transform: 'scale(1.05)', }}
          src={logo}
        />
      </Flex>   
    </Stack>
    <Heading color="green" margin="20px" >Days I Code</Heading>
    <Calender/>
    
    <Stack>
    <Text style={{margin:"5px"}} align="center"><Image style={{height:"220px",width:"100%"}}  align="center" src="https://github-readme-stats.vercel.app/api?username=KAUSH101&show_icons=true&locale=en" alt="KAUSH101" /></Text>
    <Text style={{margin:"5px"}} align="center"><Image style={{height:"220px",width:"100%"}} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=KAUSH101&" alt="KAUSH101" /></Text>
  
    
<Text style={{margin:"5px"}}  align="center"><Image style={{height:"220px",width:"100%"}}  align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=KAUSH101&show_icons=true&locale=en&layout=compact" alt="KAUSH101" /></Text>
</Stack>

    <br />
    <br />
    </Box>
  );
}