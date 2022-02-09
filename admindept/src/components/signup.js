import React from 'react';
import { Flex, Spacer,Image, Box, Button, Center, Stack ,Text,FormControl,FormLabel,InputGroup, InputLeftAddon,Heading,Input} from '@chakra-ui/react'
import Top from '../img/top.svg'
import {validation} from './validate'
import mbbg from '../img/mbbg.svg'
import {onSignInSubmit,getOtpFromUserInput} from './auth'

export default function signup() {
  return <div>
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
     Signup
 </Heading>
 <Text fontSize='md' pb={'10'}>Create your account here</Text>
<Box>
<form onSubmit={onSignInSubmit}>
<FormControl size={'md'} width={'md'} isRequired>
<FormLabel htmlFor='tel'>Student Name</FormLabel>
<Input type='text' placeholder='Enter Your Full Name' errorBorderColor='crimson' id='name' mb={'20px'}/>
<FormLabel htmlFor='tel'>Phone Number</FormLabel>
<InputGroup>
<InputLeftAddon children='+91' />
<Input type='text' placeholder='Enter Your Phone Number' errorBorderColor='crimson' id='mobile'  mb={'20px'}/>
</InputGroup>
<FormLabel htmlFor='tel'>Email</FormLabel>
<Input type='text' placeholder='Enter Your E-mail' errorBorderColor='crimson' id='email' mb={'20px'}/>
<FormLabel htmlFor='tel'>Roll No</FormLabel>
<Input placeholder='Enter Your Full Roll No.' errorBorderColor='crimson' id='rollno' />
<Button type='Submit' width={'md'} my={'5'} bg={'#2455D6'} color={'white'} _hover={{ bg:'blue.900' }} id={'recaptcha-container'}>Submit</Button>
</FormControl>
</form>
</Box>
</Stack>
</Center>
</Flex>
{/*End Of Form*/}
</Box>
  </div>;
}
