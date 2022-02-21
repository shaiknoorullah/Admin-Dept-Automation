import React, { useState } from "react";
import Top from "../img/top.svg";
import { confirmOTP, sendOTP } from "../fuctions/userAuth";
import { validation } from "../fuctions/validate";
import Otpmodal from "./otpmodal.js";
import logowhite from "../img/logo 1.png";
import {
  Flex,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Heading,
  Input,
  Box,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import { CheckUsrPhnInDbForSignin } from "../fuctions/database";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Login() {
  let [number, setNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState();
  const [userOTP, setUserOTP] = useState("");
  const { dispatch } = useAuthContext();
  const [isUser, setIsUser] = useState({});

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
    let User = await confirmOTP(confirmResult, userOTP);
    // if user Exists, only then close the otp modal and dispatch the action for login
    // More about this in AuthContext.js
    if (User) {
      setIsUser(User);
      setIsModalOpen(false);
      otpcorrectToast();
      dispatch({ type: "LOGIN", payload: User });
    }
  };

  // for toast
  const toast = useToast({
    position: "top-right",
    containerStyle: {
      width: "200px",
      maxWidth: "100%",
    },
  });
  const toastIdRef = React.useRef();

  function otpToast() {
    toastIdRef.current = toast({
      title: "OTP Sent",
      description: "OTP sent",
      status: "success",
      isClosable: true,
    });
  }

  function errorToast() {
    toastIdRef.current = toast({
      title: "Error",
      description: "You are not a User, Please Signup first",
      status: "error",
      isClosable: true,
    });
  }

  function otpcorrectToast() {
    toastIdRef.current = toast({
      title: "OTP Correct",
      description: "OTP Matched",
      status: "success",
      isClosable: true,
    });
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
          <Center
            bg={"#2455D6"}
            width={"100vw"}
            height={"100vh"}
            position={["absolute", "absolute", "absolute", "relative"]}
            display={["none", "none", "none", "flex"]}
          >
            <Image src={Top} px={"20"}></Image>
          </Center>
          <Stack display={"flex"}>
            <Image
              src={logowhite}
              px={"10"}
              py={"20.5"}
              position={"absolute"}
              display={["flex", "flex", "flex", "none"]}
            ></Image>
          </Stack>
          {/*Form Area */}
          <Center
            height={"100vh"}
            px={"20"}
            width={"100vw"}
            px={["10", "20", "20"]}
            bg={["#2455D6", "#2455D6", "#2455D6", "transparent"]}
          >
            <Stack color={["white", "white", "white", "black"]}>
              <Heading as="h1" size="xl">
                Login
              </Heading>
              <Text fontSize="md" pb={"10"}>
                A Mobile number here and an OTP there. Eazee-Peezee
              </Text>
              <Box>
                <form onSubmit={handleSubmit} onChange={validation}>
                  <FormControl
                    maxWidth={["sm", "sm", "md"]}
                    color={["white", "white", "white", "black"]}
                  >
                    <FormLabel htmlFor="tel">Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon
                        children="+91"
                        color={["black", "black", "black", "black"]}
                      />
                      <Input
                        type="tel"
                        placeholder="Enter Your phone number"
                        errorBorderColor="crimson"
                        _placeholder={{
                          color: ["#9BB5F5", "#9BB5F5", "#9BB5F5", "#B7B7B7"],
                        }}
                        id="mobile"
                        onChange={handleChange}
                        // value={number}
                        isInvalid={false}
                      />
                    </InputGroup>
                    <Button
                      type="Submit"
                      width={["sm", "sm", "md"]}
                      backgroundColor={["white", "white", "white", "#2455D6"]}
                      color={["#2455D6", "#2455D6", "#2455D6", "white"]}
                      my={"5"}
                      bg={"#2455D6"}
                      _hover={{ bg: ["blue.900"] }}
                      id={"recaptcha-container"}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </form>
                <Box display={"flex"} justifyContent={"center"}>
                  <Text textColor={["#DCE6FF", "#DCE6FF", "#DCE6FF", "black"]}>
                    {" "}
                    Not a User?
                  </Text>{" "}
                  <Link to="/signup">
                    <Text textColor={["white", "white", "white", "blue"]}>
                      &nbsp;Sign Up
                    </Text>
                  </Link>
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
