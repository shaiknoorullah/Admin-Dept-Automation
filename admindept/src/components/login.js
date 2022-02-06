import React from 'react';
import { Flex, Spacer,Image, Box, Button, Center, Stack ,Text,FormControl,FormLabel,InputGroup, InputLeftAddon,Heading,Input} from '@chakra-ui/react'
import Top from '../img/top.svg'
import {validation} from './validate'
import mbbg from '../img/mbbg.svg'
import {onSignInSubmit,getOtpFromUserInput} from './auth'
import Otpmodal from './otpmodal.js';
export default function login() {
 
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
      <form onSubmit={onSignInSubmit}>
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
    <Otpmodal></Otpmodal>
  </div>;
}



