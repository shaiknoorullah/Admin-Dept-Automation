import React, { useState } from "react";
import Top from "../img/top.svg";
import mbbg from "../img/mbbg.svg";
import { confirmOTP, sendOTP } from "./userAuth";
import { Navigate } from 'react-router-dom';
import { validation } from "./validate";
import Otpmodal from "./otpmodal.js";
import {
  Flex,
  Spacer,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Heading,
  InputModal,
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  ModalCloseButton,
  PinInput,
  PinInputField,
  Box,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { CheckUsrPhnInDb, CheckUsrPhnInDbForSignin } from "./database";
import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'


export default function Login() {
  let [number, setNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState();
  const [userOTP, setUserOTP] = useState("");
  const { dispatch } = useAuthContext()
  const [isUser, setIsUser] = useState({})
  

  const handleChange = (event) => {
    setNumber("+91" + event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if number exists in DB
    const check = await CheckUsrPhnInDbForSignin(number);
    console.log(check);
    if (check === false) {
      // authenticate phone number
      let signInReturn = await sendOTP(number);
      setConfirmResult(signInReturn);
      setIsModalOpen(true);

      otpToast();
    } else {
      errorToast();
      return;
    }
  };

  const handleOTPChange = (value) => {
    setUserOTP(value);
  };


  const handleOTPSubmit = async () => {
    // console.log(confirmOTP(confirmResult, userOTP));
   let User = await confirmOTP(confirmResult, userOTP)
    console.log(User)
   if(User){
    setIsUser(User)
    setIsModalOpen(false)
    otpcorrectToast(); 
    dispatch({type: 'LOGIN', payload: User})


  };
  }

  
  
  
  // for toast
  const toast = useToast({
    position: 'top-right',
    containerStyle: {
      width: '200px',
      maxWidth: '100%',
    },
  })
  const toastIdRef = React.useRef()

  function otpToast() {
    toastIdRef.current = toast({ title: 'OTP Sent', description: 'OTP sent',status:'success'})
  }

  function errorToast() {
    toastIdRef.current = toast({ title: 'Error',description: 'You are not a User, Please Signup first',status:'error', })
  }

  function otpcorrectToast() {
    toastIdRef.current = toast({ title: 'OTP Correct',description: 'OTP Matched',status:'success', })
  }


  
  return (
    <div>
      {/*Wrapper Full */}
      <Box>
        <Otpmodal
          isOpen={isModalOpen}
          handleOTPChange={handleOTPChange}
          handleOTPSubmit={handleOTPSubmit}
        />
        {/*Left SVG and BG */}
        <Flex>
          <Center bg={"#2455D6"} width={"100vh"} height={"100vh"}>
            <Image src={Top} px={"20"}></Image>
          </Center>

          {/*Form Area */}
          <Center height={"100vh"} px={"20"}>
            <Stack>
              <Heading as="h1" size="xl">
                Login
              </Heading>
              <Text fontSize="md" pb={"10"}>
                A Mobile number here and an OTP there. Eazee-Peezee
              </Text>
              <Box>
                <form onSubmit={handleSubmit} onChange={validation}>
                  <FormControl>
                    <FormLabel htmlFor="tel">Phone Number</FormLabel>
                    <InputGroup size={"md"} width={"md"}>
                      <InputLeftAddon children="+91" />
                      <Input
                        type="tel"
                        placeholder="Enter Your phone number"
                        errorBorderColor="crimson"
                        id="mobile"
                        onChange={handleChange}
                        // value={number}
                        isInvalid={false}
                      />
                    </InputGroup>
                    <Button
                      type="Submit"
                      width={"md"}
                      my={"5"}
                      bg={"#2455D6"}
                      color={"white"}
                      _hover={{ bg: "blue.900" }}
                      id={"recaptcha-container"}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </form>
                <Box display={'flex'} justifyContent={'center'}>
                  Not a User? Signup
                  {/* <Link to="/signup" >Sign Up</Link> */}
                </Box>
              </Box>
            </Stack>
          </Center>
        </Flex>
        {/*End Of Form*/}
      </Box>
    </div>
  );
}
