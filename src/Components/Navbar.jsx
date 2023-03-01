import logo from '../logo/logo.png'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,  useColorMode,
  Center, Heading, Highlight
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HashLink } from 'react-router-hash-link';

const Links = ['Home', 'About' ,'Skills', 'Projects', 'Contact', 'Resume'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{position:'fixed', width:'100%',zIndex:"5"}} 
    display={{ base: 'none', lg: 'flex' }}
    >
      <Box width={"100%"}  bg={useColorModeValue('gray.300', 'gray.900')}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          marginLeft={'5px'}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading marginLeft={'5px'} as='h2' size={{base:"md",sm:"lg"}} paddingRight={'20px'} color={'#d08768'} ><Highlight query='' styles={{ px: '1', py: '1', bg: 'green', rounded: 'full', color:'blue.400' }}>KAUSHIK KUMAR</Highlight> </Heading>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', lg: 'flex' }}
              gap={'30px'} 
            
              >
            
             
            <HashLink to={'#aboutpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>About</Heading></HashLink>
            <HashLink to={'#skills'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Skills</Heading></HashLink>
            <HashLink to={'#projectpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Projects</Heading></HashLink>
            <HashLink to={'#contactpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Contact</Heading></HashLink>
            <Link href={'https://drive.google.com/file/d/1r0ObwvMf1Qv_yDmZtgBaPqRV1fR9XsyQ/view?usp=sharing'} smooth  target="_blank" ><Heading as='h4' size={'md'} color={'white'}><Highlight query='Resume' styles={{ px: '2', py: '2', bg: '#d08768', rounded: 'full',color:"white"}}>Resume</Highlight></Heading></Link>
         
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu gap={2}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                //  height={'200px'} width={'200px'}
                marginRight={'5px'}
                  size={'sm'}
                  src={logo}
                />
              </MenuButton>
         
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {}
    </div>
  );
}