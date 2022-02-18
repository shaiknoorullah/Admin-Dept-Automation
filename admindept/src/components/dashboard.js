import React from 'react'
import { Flex, Spacer,Image, Stack ,Text,FormControl,FormLabel,InputGroup, InputLeftAddon,Heading,InputModal,Modal,Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    HStack,
    ModalCloseButton,
    PinInput, PinInputField,
    Box,
    Button,
    Center,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    } from '@chakra-ui/react'
    import logo from '../img/logo 1.png'
    import avatar from '../img/avatar.png'
    import waiting from '../img/waiting.svg'
    import {ChevronDownIcon } from '@chakra-ui/icons'
    import {UsrSignOut} from '../components/userAuth'
    
export default function Dashboard() {

  return (
      
    <div>

        {/* Top Most Container Logo and User Info */}
        <Box>
            <Flex backgroundColor={'#2455D6'} align={'center'} color={'white'} fontWeight={'bold'} paddingX={'3rem'}>
                <Box>
                    <Image src={logo} width={'22rem'} padding={'0.6rem'}></Image>
                </Box>
                <Spacer></Spacer>
                <Box paddingRight={'0.5rem'}>
                    Welcome 
                </Box>
                <Box>
                    Abid
                </Box>
                <Box>
                    <Image src={avatar} width={'5.5rem'} padding={'1rem'}></Image>
                </Box>
                <Box>
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} backgroundColor={'white'} textColor={'#2455D6'}>
                Actions
                </MenuButton>
                <MenuList>
                <MenuItem textColor={'gray.500'}>Profile</MenuItem>
                <MenuItem color={'red.500'} onClick={UsrSignOut}>Sign out</MenuItem>
                </MenuList>
                </Menu>
                </Box>
            </Flex>
        </Box>
        {/* End Top Most Container Logo and User Info */}

        {/* Body BG and Container */}
        <Box backgroundColor={'#FAFBFF'} height={'90vh'}>

            {/* Student Dashboard and query Row */}
        <Box paddingY={'0.7rem'}>
            <Flex align={'center'}>
            <Box paddingLeft={'3.9rem'} fontWeight={'bold'} fontSize={'xl'} paddingY={'1rem'}>
                Student Dashboard
            </Box>
            <Spacer></Spacer>
            <Box>
                <Flex align={'center'}>
                    <Box paddingRight={'1.5rem'} color={'#7A7A7A'}>
                    Have a query?  Let’s create one here 
                    </Box>
                    <Box  paddingRight={'3.5rem'}>
                        <Button paddingX={'2rem'} paddingY={'1.5rem'} backgroundColor={'#2455D6'} color={'white'} _hover={{ bg:'blue.900' }}>
                         Create a Query
                        </Button>
                    </Box>
                </Flex>
            </Box>
            </Flex>
        </Box>

        {/* Tokens */}
        <Box paddingLeft={'3.9rem'}>
            <Flex>
                <Box>
                    {/* token container */}
                    <Flex>
                        {/* Current Token */}
                        <Box padding={'6rem'} backgroundColor={'white'} borderColor={'#E1EAFF'} borderWidth={'0.1rem'} borderRadius={'xl'} marginRight={'6rem'} maxWidth={'2xl'}>
                            <Box>
                                <Center color={'#A1A1A1'} fontSize={'1rem'}>
                                Current Token
                                </Center>
                            </Box>
                            <Box fontSize={'7xl'}>
                                <Center>
                                53
                                </Center>
                            </Box>
                        </Box>

                        {/* Your Token */}
                        <Box padding={'6rem'} backgroundColor={'white'} borderColor={'#E1EAFF'} borderWidth={'0.1rem'} borderRadius={'xl'} marginRight={'2rem'}>
                            <Box>
                                <Center color={'#A1A1A1'} fontSize={'1rem'}>
                                Your Token
                                </Center>
                            </Box>
                            <Box color={'#4473F0'} fontSize={'7xl'}>
                                <Center>
                                58
                                </Center>
                            </Box>
                        </Box>
                    </Flex>
                    <Box paddingTop={'1rem'} paddingLeft={'2rem'} backgroundColor={'white'} borderColor={'#E1EAFF'} borderWidth={'0.1rem'} borderRadius={'xl'} marginY={'2rem'} maxWidth={'2xl'}>
                        <Box>
                            Your Current Query
                        </Box>
                        <Spacer></Spacer>
                        <Box paddingY={'2rem'} fontSize={'xl'} fontWeight={'bold'}>
                            Need to pay college fees
                        </Box>
                    </Box>
                </Box>
                {/* Right Illustration */}
                <Spacer></Spacer>
                <Box paddingRight={'3rem'}>
                    <Image src={waiting}></Image>
                </Box>
            </Flex>
        </Box>
        </Box>
    </div>
  )
}