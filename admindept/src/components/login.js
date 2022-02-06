import React from 'react';
import { Box, Button, Center, Stack ,Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import {FormControl,FormLabel,FormErrorMessage,FormHelperText,InputGroup, InputLeftAddon,Heading} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Top from '../img/top.svg'
import {validation} from './validate'
import mbbg from '../img/mbbg.svg'
import {onSignInSubmit,getOtpFromUserInput} from './auth'
export default function login() {
 
  return <div>
    {/*Wrapper Full */}

    <Box >
      <Flex >
      <Center bg={'#2455D6'} width={'100vh'} height= {'100vh'}>
        <Image src={Top} px={'20'}></Image>
      </Center>
      <Center height= {'100vh'} px={'20'}>
        <Stack>
        <Heading as='h1' size='xl'>
        Login
        </Heading>
        <Text fontSize='md' pb={'10'}>A Mobile number here and an OTP there. Eazee-Peezee</Text>
      <Box>
        
        <FormControl>
      <FormLabel htmlFor='tel'>Phone Number</FormLabel>
      <InputGroup size={'md'} width={'md'}>
      <InputLeftAddon children='+91' />
      <Input type='tel' placeholder='Enter Your phone number' errorBorderColor='crimson' id='mobile'/>
      </InputGroup>
      <Button width={'md'} my={'5'} bg={'#2455D6'} color={'white'} _hover={{ bg:'blue.900' }} id={'recaptcha-container'}>Submit</Button>
      </FormControl>
      </Box>
      </Stack>
      </Center>
      </Flex>

    </Box>
  </div>;

}


