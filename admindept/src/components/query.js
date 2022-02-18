import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  ModalCloseButton,
  Input,
  Box,
  Button,
  Center,
  Flex,
  Select,
  FormControl,
} from "@chakra-ui/react";

export default function Query(props) {
  return (
    <div>
      <Modal isOpen={props.isOpen} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Create a New Query</Flex>
          </ModalHeader>

          <ModalBody>
            <Center>
              <Flex flexDirection={"column"}>
                <FormControl pl={"14"}>
                  <Select
                    onChange={props.handleChange}
                    placeholder="Purpose"
                    marginBottom={"8"}
                    width={"sm"}
                  >
                    <option value="option1">Document</option>
                    <option value="option2">Fee Payment</option>
                  </Select>
                  <label>Message</label>
                  <Input
                    onChange={props.handleChange}
                    placeholder="Enter Message"
                    size="md"
                    width={"sm"}
                    mb={"4"}
                  />
                  <ModalFooter>
                    <Center width={"md"}>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={props.handleSubmit}
                      >
                        Submit
                      </Button>
                    </Center>
                  </ModalFooter>
                </FormControl>
              </Flex>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
