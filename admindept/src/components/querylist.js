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
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function QueryList({ queries }) {
  return (
    <Box>
      {queries.map((query, index) => (
        <Box
          padding={"1rem"}
          px={"1.25rem"}
          backgroundColor={"white"}
          borderColor={"#E1EAFF"}
          borderWidth={"0.1rem"}
          borderRadius={"xl"}
          marginY={"2rem"}
          maxWidth={"2xl"}
          key={index}
        >
          <Box fontFamily={"roboto"}>
            <HStack spacing={"2rem"}>
              <Box w={"22.5rem"}>
                <Stack spacing={"0.25rem"}>
                  <Box alignItems={"left"} mb={"0.5rem"}>
                    <Box fontSize={"xl"} fontWeight={"bold"}>
                      {query.Purpose.stringValue}
                    </Box>
                  </Box>
                  <Box>
                    <Box fontSize={"lg"} fontWeight={"semibold"}>
                      Message
                    </Box>
                    <Box fontSize={"md"}>{query.Message.stringValue}</Box>
                  </Box>
                </Stack>
              </Box>
              <Box w={"15rem"} h={"2"}>
                <Flex justify={"right"}>
                  <Stack
                    spacing={"0.5rem"}
                    textAlign={"right"}
                    justify={"stretch"}
                  >
                    <Box fontWeight={"bold"}>
                      {query.timestamp.timestampValue}
                    </Box>
                    <Box fontWeight={"bold"} color={"red.500"}>
                      Pending
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            </HStack>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
