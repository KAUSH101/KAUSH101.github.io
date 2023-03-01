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

export default function About() {
  const handleClick = () => {
    window.open("https://drive.google.com/uc?export=download&id=1r0ObwvMf1Qv_yDmZtgBaPqRV1fR9XsyQ", "_blank");
  };
  return (
    <Box boxShadow={'2xl'} width={'100%'} margin={'auto'}>
    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>ABOUT</Heading>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} id='aboutpage' >
      <Flex p={8} flex={1} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
         
            <br />{' '}
            <br />
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} lineHeight={'25px'} >
            Passionate Full Stack Web Developer with a focus on the MERN stack, knowledge of data structures and algorithms, and aspirational Frontend Web Developer who is curious about new opportunities in challenging environments.
            
            </Text>{' '}
          </Heading>
        
          <Stack direction={{ base: 'column', md: 'column' }} spacing={4} justifyContent={'center'}>
          {/* FW21_0849-Kaushik-Kumar-Resume.pdf */}
          {/* <Link smooth  target="_blank" href="https://drive.google.com/file/d/1r0ObwvMf1Qv_yDmZtgBaPqRV1fR9XsyQ/view?usp=sharing" > */}
            
            <a target="_blank" href="https://drive.google.com/file/d/1r0ObwvMf1Qv_yDmZtgBaPqRV1fR9XsyQ/view?usp=sharing" onClick={handleClick}>
            <Button
              // rounded={'full'}
              bg={'#d08768'}
             
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '', transform: 'scale(1.05)'}}
              borderRadius='full' 
              >
               Download Resume
            </Button>
            </a>
            {/* </Link> */}
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
          height={'380px'}
          width={'350px'}
          alt={'Login Image'}
          objectFit={'cover'}
          _hover={{transform: 'scale(1.05)', }}
          src={logo}
        />
      </Flex>   
    </Stack>
    <Heading marginBottom={'10px'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>Days I Code</Heading>
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