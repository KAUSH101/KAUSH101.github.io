import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image, Button, Link,Flex,SimpleGrid
} from '@chakra-ui/react';

import appletv from '../logo/appletv.PNG'
import fashioncartt from '../logo/fashioncartt.PNG'
import bharatmart from '../logo/bharatmart.PNG'
import shoeland from '../logo/shoeland.png'
import { SiChakraui, SiCss3, SiCypress, SiExpress, SiFirebase, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'

const Project = () => {
  return (
    <Box id='projectpage' boxShadow={'2xl'} width={'100%'} margin={'auto'}>
    <Heading  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>PROJECTS</Heading> <br /><br />    
      <Center    gap={'20px'}  >
      <Stack direction={{ base: 'column', md: 'row' }}>   
      <Box width={{ base: '100%', md: '50%', lg: '50%' }}   justifyContent={'space-around'}  >
      <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'520px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}
              >
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${appletv})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={"250px"}
                  width={"100%"}
                  objectFit={'cover'}
                  src={appletv}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Apple TV
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                 Apple tv is an online streaming platform where we can watch TV.
                </Text>
                {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack : HTML | CSS | JavaScript
                </Text> */}
                {/* //---------------------------------- */}
                
                <Flex  columns={{base:2, sm:4, md:6, lg:8}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}}><SiHtml5/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>HTML</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiCss3/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>CSS3</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiJavascript/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>JavaScript</Text></Button>
          
        </Flex>
        
                {/* //---------------------------------- */}


                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/KAUSH101/giant-price-1637'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://timely-begonia-b9c2bc.netlify.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
        
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'520px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${fashioncartt})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={"250px"}
                  width={"100%"}
                  objectFit={'cover'}
                  src={fashioncartt}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Fashion Cart
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                This is a online shopping website (clone of mytheresa.com) Which deals
                with clothes, shoes and accessories
                </Text>
                {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript | React |Chakara
                </Text> */}
                               <Flex  columns={{base:2, sm:4, md:6, lg:8}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}}><SiHtml5/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>HTML</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiCss3/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>CSS3</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiJavascript/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>JavaScript</Text></Button>
  
          
        </Flex>
      

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/sayshark75/My_Fashion_Cart'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://my-fashion-cart.netlify.app/index.html'} target="_blank" >
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
          </Box>  
          <Box width={{ base: '100%', md: '50%', lg: '50%' }}   justifyContent={'space-around'} >
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
            height={'520px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${bharatmart
                  })`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={250}
                  width={"100%"}
                  objectFit={'cover'}
                  src={bharatmart}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                 Bharat Mart
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                  Bharat mart is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal.
                </Text>
                {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript | React | Typescript
                </Text> */}
                               <Flex  columns={{base:2, sm:4, md:6, lg:8}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}}><SiHtml5/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>HTML</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiCss3/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>CSS3</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiJavascript/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>JavaScript</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiReact/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>React</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiTypescript/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>Typescript</Text></Button>
          
        </Flex>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/KAUSH101/BharatMart-india-mart-clone-'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://bharatmart-one.vercel.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'520px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${shoeland
                  })`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={250}
                  width={"100%"}
                  objectFit={'cover'}
                  src={shoeland}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                 Shoe Land
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                Shoe-Land is an online shopping website which deals with footwears.
                </Text>
                {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: NodeJS | Express | MongoDB | React | Chakra-UI
                </Text> */}
                                        <Flex  columns={{base:2, sm:4, md:6, lg:8}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="100%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}}><SiNodedotjs/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>NodeJS</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="100%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiExpress/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>Express</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="100%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiMongodb/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>MongoDB</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="100%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiReact/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}}>React</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="100%" borderColor="" color='#d08768' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"30px", sm:"40px", md:"50px"}} ><SiChakraui/><Text fontSize={{base:"7px", sm:"7px", md:"10px"}} >Chakra-UI</Text></Button>
  
          
        </Flex>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/KAUSH101/Shoe-Land_famousfootwear.com_clone'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://shoe-land-hub.vercel.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center></Box>   
      
    
     
     
      
       
        
        
         
        </Stack>
       
      </Center>
    </Box>
  )
}

export default Project
