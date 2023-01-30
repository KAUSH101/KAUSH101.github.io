import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image, Button, Link
} from '@chakra-ui/react';

import appletv from '../logo/appletv.PNG'
import fashioncartt from '../logo/fashioncartt.PNG'
import bharatmart from '../logo/bharatmart.PNG'


const Project = () => {
  return (
    <Box id='projectpage' boxShadow={'2xl'} width={'95%'} margin={'auto'}>
    <Heading  fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{transform: 'scale(1.05)', }}>PROJECTS</Heading> <br /><br />    
      <Center    gap={'20px'}  >
      <Stack  direction={{ base: 'column', md: 'row' }}>        
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'400px'}
              height={'480px'}
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
                  height={250}
                  width={350}
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
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack : HTML | CSS | JavaScript
                </Text>

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
              maxW={'400px'}
              height={'480px'}
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
                  height={250}
                  width={350}
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
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript | React |Chakara
                </Text>

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
                  <Link href={'https://incredible-begonia-aec486.netlify.app/index.html'} target="_blank" >
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
              maxW={'400px'}
              height={'480px'}
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
                  width={350}
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
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript | React | Typescript
                </Text>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/vicky-ops/aquatic-beef-7375'} target="_blank">
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
                  <Link href={'https://63ce3165cf78ab1476a88a14--glittery-paletas-178038.netlify.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
         
        </Stack>
      </Center>
    </Box>
  )
}

export default Project
