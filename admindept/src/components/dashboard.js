import React, { useState, useEffect } from "react";
import {
  Flex,
  Spacer,
  Image,
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import logo from "../img/logo 1.png";
import avatar from "../img/avatar.png";
import waiting from "../img/waiting.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { UsrSignOut } from "../fuctions/userAuth";
import Query from "./query";
import { createUserQuery, getUsrData, getUsrQuery } from "../fuctions/database";
import QueryList from "./querylist";

export default function Dashboard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  // const [isQueryCreated, setIsQueryCreated] = useState(false);
  //   console.log(message, "message");

  let usrPhone = props.user.phoneNumber;

  const [userQuery, setUserQuery] = useState([]);
  // const

  useEffect(() => {
    getUsrData(usrPhone).then((data) => {
      setStudentName(data.studentname.stringValue);
      //   console.log(userData.studentname)
    });
    getUsrQuery(usrPhone).then((queries) => {
      // setIsQueryCreated(true);
      // console.log(queries);
      setUserQuery(queries);
    });
  }, []);

  const openQuery = () => {
    setIsModalOpen(true);
    console.log("creating query");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handlePurpose = (e) => {
    e.preventDefault();
    setPurpose(e.target.value);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserQuery(purpose, message, usrPhone).then(() => {
      setIsModalOpen(false);
      // setIsQueryCreated(true);
    });
    getUsrQuery(usrPhone).then((queries) => {
      // setIsQueryCreated(true);
      // console.log(queries);
      setUserQuery(queries);
    });
  };

  return (
    <div>
      {/* Top Most Container Logo and User Info */}
      <Query
        isOpen={isModalOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onClose={onClose}
        message={message}
        handlePurpose={handlePurpose}
      />
      <Box>
        <Flex
          backgroundColor={"#2455D6"}
          align={"center"}
          color={"white"}
          fontWeight={"bold"}
          paddingX={"3rem"}
        >
          <Box>
            <Image src={logo} width={"22rem"} padding={"0.6rem"}></Image>
          </Box>
          <Spacer></Spacer>
          <Box paddingRight={"0.5rem"}>Welcome</Box>
          <Box>{studentName}</Box>
          <Box>
            <Image src={avatar} width={"5.5rem"} padding={"1rem"}></Image>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor={"white"}
                textColor={"#2455D6"}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem textColor={"gray.500"}>Profile</MenuItem>
                <MenuItem color={"red.500"} onClick={UsrSignOut}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      {/* End Top Most Container Logo and User Info */}

      {/* Body BG and Container */}
      <Box backgroundColor={"#FAFBFF"} height={"90vh"}>
        {/* Student Dashboard and query Row */}
        <Box paddingY={"0.7rem"}>
          <Flex align={"center"}>
            <Box
              paddingLeft={"3.9rem"}
              fontWeight={"bold"}
              fontSize={"xl"}
              paddingY={"1rem"}
            >
              Student Dashboard
            </Box>
            <Spacer></Spacer>
            <Box>
              <Flex align={"center"}>
                <Box paddingRight={"1.5rem"} color={"#7A7A7A"}>
                  Have a query? Let’s create one here
                </Box>
                <Box paddingRight={"3.5rem"}>
                  <Button
                    paddingX={"2rem"}
                    paddingY={"1.5rem"}
                    backgroundColor={"#2455D6"}
                    color={"white"}
                    _hover={{ bg: "blue.900" }}
                    onClick={openQuery}
                  >
                    Create a Query
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Tokens */}
        <Box paddingLeft={"3.9rem"}>
          <Flex>
            <Box>
              {/* token container */}
              <Flex>
                {/* Current Token */}
                <Box
                  padding={"6rem"}
                  backgroundColor={"white"}
                  borderColor={"#E1EAFF"}
                  borderWidth={"0.1rem"}
                  borderRadius={"xl"}
                  marginRight={"6rem"}
                  maxWidth={"2xl"}
                >
                  <Box>
                    <Center color={"#A1A1A1"} fontSize={"1rem"}>
                      Current Token
                    </Center>
                  </Box>
                  <Box fontSize={"7xl"}>
                    <Center>53</Center>
                  </Box>
                </Box>

                {/* Your Token */}
                <Box
                  padding={"6rem"}
                  backgroundColor={"white"}
                  borderColor={"#E1EAFF"}
                  borderWidth={"0.1rem"}
                  borderRadius={"xl"}
                  marginRight={"2rem"}
                >
                  <Box>
                    <Center color={"#A1A1A1"} fontSize={"1rem"}>
                      Your Token
                    </Center>
                  </Box>
                  <Box color={"#4473F0"} fontSize={"7xl"}>
                    <Center>58</Center>
                  </Box>
                </Box>
              </Flex>
              <Box>{userQuery && <QueryList queries={userQuery} />}</Box>
            </Box>
            {/* Right Illustration */}
            <Spacer></Spacer>
            <Box paddingRight={"3rem"}>
              <Image src={waiting}></Image>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
