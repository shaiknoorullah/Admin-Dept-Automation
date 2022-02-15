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
    },
  })
  const toastIdRef = React.useRef()

  function otpToast() {
    toastIdRef.current = toast({ title: 'OTP Sent', description: 'OTP sent',status:'success'})
  }
  function errorToast() {
    toastIdRef.current = toast({ title: 'Error',description: 'You are already a user, please Sign in',status:'error', })
  }
  
  function otpError() {
    toastIdRef.current = toast({ title: 'OTP wrong',description: 'OTP Mismatched',status:'error', })
  }

  function signupSuccessful() {
    toastIdRef.current = toast({ title: 'Signup Successful',description: 'You are a user now, Sign in and rock',status:'success', })
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

  return (
    <div>
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
                Signup
              </Heading>
              <Text fontSize="md" pb={"10"}>
                Create your account here
              </Text>
              <Box>
                <form onSubmit={handleSubmit}>
                  <FormControl size={"md"} width={"md"} isRequired>
                    <FormLabel htmlFor="tel">Student Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter Your Full Name"
                      errorBorderColor="crimson"
                      id="name"
                      mb={"20px"}
                      onChange={handleChange("studentName")}
                      value={studentName}
                    />
                    <FormLabel htmlFor="tel">Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" />
                      <Input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        errorBorderColor="crimson"
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
                      id="rollno"
                      onChange={handleChange("rollNo")}
                      value={rollNo}
                    />
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
              </Box>
            </Stack>
          </Center>
        </Flex>
        {/*End Of Form*/}
      </Box>
    </div>
  );
}
