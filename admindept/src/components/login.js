import React,{useState} from 'react';
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
  } from '@chakra-ui/react'
import Top from '../img/top.svg'
import {validation} from './validate'
import mbbg from '../img/mbbg.svg'
import {onSignInSubmit,getOtpFromUserInput} from './auth'
import Otpmodal from './otpmodal.js';
export default function Login() {
  const [modalState, SetModalState] = useState(false)
  return <div>
    {/*Wrapper Full */}
    <Box >

       {/*Left SVG and BG */}
      <Flex >
      <Center bg={'#2455D6'} width={'100vh'} height= {'100vh'}>
        <Image src={Top} px={'20'}></Image>
      </Center>

      {/*Form Area */}
      <Center height= {'100vh'} px={'20'}>
        <Stack>
        <Heading as='h1' size='xl'>
        Login
        </Heading>
        <Text fontSize='md' pb={'10'}>A Mobile number here and an OTP there. Eazee-Peezee</Text>
      <Box>
      <form onSubmit={(e)=>{onSignInSubmit(e,()=>{SetModalState(true)})}}>
      <FormControl>
      <FormLabel htmlFor='tel'>Phone Number</FormLabel>
      <InputGroup size={'md'} width={'md'}>
      <InputLeftAddon children='+91' />
      <Input type='tel' placeholder='Enter Your phone number' errorBorderColor='crimson' id='mobile' onChange={validation} isInvalid={false}/>
      </InputGroup>
      <Button type='Submit' width={'md'} my={'5'} bg={'#2455D6'} color={'white'} _hover={{ bg:'blue.900' }} id={'recaptcha-container'}>Submit</Button>
      </FormControl>
      </form>
      </Box>
      </Stack>
      </Center>
      </Flex>
      {/*End Of Form*/}
    </Box>
    <Modal isOpen={modalState} >
        <ModalOverlay />
        <ModalContent >
        <ModalHeader py={'6'} >
            <Flex justifyContent={'center'}>
            Enter OTP
            </Flex>
        </ModalHeader>
        <Center>
        <HStack>
        <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        </PinInput>
        </HStack>
        </Center>
          
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
              <Center width={'md'}>
              <Button colorScheme='blue' mr={3} >
              Submit
            </Button>
              </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </div>;
  
}



