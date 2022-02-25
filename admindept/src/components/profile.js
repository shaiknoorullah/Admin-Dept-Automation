import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  Button,
  Flex,
  Select,
  FormControl,
  Stack,
  Box,
  FormLabel,
  HStack,
  useDisclosure,
  Icon,
  Avatar,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useAuthContext } from "../hooks/useAuthContext";
import { getUsrData } from "../fuctions/database";

export default function Profile(props) {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState({});
  const [shouldRender, setShouldRender] = useState(false);
  const userPhone = user.phoneNumber;

  useEffect(() => {
    getUsrData(userPhone).then((data) => {
      setUserData(data);
      setShouldRender(true);
    });
  }, []);

  console.log(userPhone);
  console.log(userData);
  return (
    shouldRender && (
      <Modal
        isOpen={props.isOpen}
        size={"xl"}
        onOverlayClick={props.isClosed}
        size={"2xl"}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>
            <Flex justify={"right"}>
              <Box
                bgColor={"gray.200"}
                border={"4px"}
                borderColor={"gray.300"}
                borderRadius={"lg"}
                onClick={props.isClosed}
              >
                <CloseIcon size={"sm"} m={"2"} />
              </Box>
            </Flex>
            <Flex justify={"center"}>
              <Avatar src={props.avatar} size={"xl"}></Avatar>
            </Flex>
          </ModalHeader>
          <ModalBody textColor={"gray.600"} fontWeight={"semibold"}>
            <Box m={"3"}>
              <Flex justify={"center"}>
                <Stack spacing={"2"} textAlign={"center"}>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Name
                    </Box>{" "}
                    <Box fontSize={"20"}>
                      {userData.studentname.stringValue}
                    </Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Phone
                    </Box>{" "}
                    <Box fontSize={"20"}>{userData.phone.stringValue}</Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Email
                    </Box>{" "}
                    <Box fontSize={"20"}>{userData.email.stringValue}</Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Roll Number
                    </Box>{" "}
                    <Box fontSize={"20"}>{userData.roll_no.stringValue}</Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Branch
                    </Box>{" "}
                    <Box fontSize={"20"}>{userData.Branch.stringValue}</Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Year Of Admission
                    </Box>{" "}
                    <Box fontSize={"20"}>
                      {"20" + userData.YearOfAdmission.stringValue}
                    </Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Current Year
                    </Box>{" "}
                    <Box fontSize={"20"}>
                      {userData.CurrentYear.stringValue}
                    </Box>
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      fontSize={"20"}
                      textColor={"blue.300"}
                      fontWeight={"bold"}
                    >
                      Class Roll Number
                    </Box>{" "}
                    <Box fontSize={"20"}>
                      {userData.ClassRollNo.stringValue}
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      my={"5"}
                      mb={"7"}
                      px={"40"}
                      colorScheme={"blue"}
                      size={"lg"}
                      fontSize={"lg"}
                      onClick={props.isClosed}
                    >
                      Close
                    </Button>
                    {/* <Box>Hello</Box> */}
                  </Box>
                </Stack>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  );
}
