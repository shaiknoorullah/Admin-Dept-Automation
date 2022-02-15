import React, { useState } from "react";
import Top from "../img/top.svg";
import mbbg from "../img/mbbg.svg";
import { confirmOTP, sendOTP } from "./userAuth";
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
} from "@chakra-ui/react";
import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { CheckUsrPhnInDb, CheckUsrPhnInDbForSignin } from "./database";

export default function Login() {
  let [number, setNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState();
  const [userOTP, setUserOTP] = useState("");

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
    } else {
      console.log("You are not a user bitch! go signup");
      return;
    }
  };

  const handleOTPChange = (value) => {
    setUserOTP(value);
  };

  const handleOTPSubmit = () => {
    // console.log(confirmOTP(confirmResult, userOTP));
    confirmOTP(confirmResult, userOTP)
      ? setIsModalOpen(false)
      : console.log("hello");
  };

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
                <form onSubmit={handleSubmit}>
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
              </Box>
            </Stack>
          </Center>
        </Flex>
        {/*End Of Form*/}
      </Box>
    </div>
  );
}
