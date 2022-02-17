import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Image,
  Box,
  Button,
  Center,
  Stack,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Heading,
  Input,
  useToast
} from "@chakra-ui/react";
import logowhite from '../img/logo 1.png'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  ModalCloseButton,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { validation } from "./validate";
import { confirmOTP, sendOTP } from "./userAuth";
import Otpmodal from "./otpmodal";
import { createUserDocument, CheckUsrPhnInDb } from "./database";
import Top from "../img/top.svg";
import mbbg from "../img/mbbg.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState();
  const [userOTP, setUserOTP] = useState("");

  let [userData, setUserData] = useState({
    studentName: "",
    mobile: "",
    email: "",
    rollNo: "",
  });

  let { studentName, mobile, email, rollNo } = userData;
  mobile = "+91" + mobile;

  const handleChange = (name) => (event) => {
    setUserData({ ...userData, [name]: event.target.value });
  };

  // for toast
  const toast = useToast({
    position: 'top-right',
    containerStyle: {
      width: '200px',
      maxWidth: '100%',
      isClosable: true,
    },
  })
  const toastIdRef = React.useRef()

  function otpToast() {
    toastIdRef.current = toast({ title: 'OTP Sent', description: 'OTP sent',status:'success',isClosable: true})
  }
  function errorToast() {
    toastIdRef.current = toast({ title: 'Error',description: 'You are already a user, please Sign in',status:'error', isClosable: true,})
  }
  
  function otpError() {
    toastIdRef.current = toast({ title: 'OTP wrong',description: 'OTP Mismatched',status:'error', isClosable: true,})
  }

  function signupSuccessful() {
    toastIdRef.current = toast({ title: 'Signup Successful',description: 'You are a user now, Sign in and rock',status:'success',isClosable: true, })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if number exists in DB
    let Check = await CheckUsrPhnInDb(mobile, rollNo);
    if (Check === true) {
      // authenticate phone number
      otpToast()
      let signInReturn = await sendOTP(mobile);
      setConfirmResult(signInReturn);
      setIsModalOpen(true);
    } else if (Check === false) {
      setIsModalOpen(false);
      errorToast()

    }
  };

  const handleOTPChange = (value) => {
    setUserOTP(value);
  };

  const handleOTPSubmit = async () => {
    // console.log(confirmOTP(confirmResult, userOTP));
    let result = await confirmOTP(confirmResult, userOTP);
    if (result) {
      setIsModalOpen(false);
      signupSuccessful()
      createUserDocument(studentName, mobile, email, rollNo);
    } else {
      otpError()
    }
  };
// Rendering from here
  return (
    <div>
      <Box>
        <Otpmodal position={'absolute'}
          isOpen={isModalOpen}
          handleOTPChange={handleOTPChange}
          handleOTPSubmit={handleOTPSubmit}
        />
        {/*Left SVG and BG */}
        <Flex>
          <Center bg={"#2455D6"} width={"100vw"} height={"100vh"} position={['absolute','absolute','absolute','relative']}  display={['none','none','none','flex']}>
            <Image src={Top} px={"20"}></Image>
          </Center>
          <Stack display={'flex'}>
            <Image src={logowhite} px={"10"} py={'20.5'} position={'absolute'} display={['flex','flex','flex','none']} ></Image>
          </Stack>
          {/*Form Area */}
          <Center height={"100vh"} width={'100vw'} px={['10','20','20']} bg={['#2455D6','#2455D6','#2455D6','transparent']}>
            <Stack color={['white','white','white','black']}>
              <Heading as="h1" size="xl" >
                Signup
              </Heading>
              <Text fontSize="md" pb={"10"}>
                Create your account here
              </Text>
              <Box>
                <form onSubmit={handleSubmit} onChange={validation}>
                  <FormControl maxWidth={['sm','sm','md']} isRequired color={['white','white','white','black']}>
                    <FormLabel htmlFor="tel" >Student Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter Your Full Name"
                      errorBorderColor="crimson"
                      _placeholder={{ color: ['#9BB5F5','#9BB5F5','#9BB5F5','#B7B7B7' ]}}
                      id="name"
                      mb={"20px"}
                      onChange={handleChange("studentName")}
                      value={studentName}
                    />
                    <FormLabel htmlFor="tel">Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" color={['black','black','black','black']}/>
                      <Input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        errorBorderColor="crimson"
                        _placeholder={{ color: ['#9BB5F5','#9BB5F5','#9BB5F5','#B7B7B7' ]}}
                        id="mobile"
                        mb={"20px"}
                        onChange={handleChange("mobile")}
                        // value={mobile}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="tel">Email</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter Your E-mail"
                      _placeholder={{ color: ['#9BB5F5','#9BB5F5','#9BB5F5','#B7B7B7' ]}}
                      errorBorderColor="crimson"
                      id="email"
                      mb={"20px"}
                      onChange={handleChange("email")}
                      value={email}
                    />
                    <FormLabel htmlFor="tel">Roll No</FormLabel>
                    <Input
                      placeholder="Enter Your Full Roll No."
                      errorBorderColor="crimson"
                      _placeholder={{ color: ['#9BB5F5','#9BB5F5','#9BB5F5','#B7B7B7' ]}}
                      id="rollno"
                      onChange={handleChange("rollNo")}
                      value={rollNo}
                    />
                    <Button
                      type="Submit"
                      width={['sm','sm','md']}
                      my={"5"}
                      bg={['white','white','white',"#2455D6"]}
                      color={["#2455D6","#2455D6","#2455D6","white"]}
                      _hover={{ bg: "blue.900" }}
                      id={"recaptcha-container"}
                      onChange={validation}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </form>
                <Box display={'flex'} justifyContent={'center'}>
                  <Text textColor={['#DCE6FF','#DCE6FF','#DCE6FF','black']}> Already a User?</Text> <Link to="/" ><Text textColor={['white','white','white','blue']}>&nbsp;Sign In</Text></Link>
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
