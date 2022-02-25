import React from "react";
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
} from "@chakra-ui/react";

export default function Query(props) {
  return (
    <div>
      <Modal isOpen={props.isOpen} size={"xl"}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalOverlay />
        <ModalContent>
          <Box>
            <Flex justify={"center"}>
              <Stack>
                <Flex justify={"center"}>
                  <Box mt={"8"}>
                    <ModalHeader>How Can We Help?</ModalHeader>
                  </Box>
                </Flex>
                <ModalBody>
                  <FormControl>
                    <Stack>
                      <Box mb={"4"}>
                        <Box mb={2} ml={2}>
                          <FormLabel fontSize={"lg"}>Purpose</FormLabel>
                        </Box>
                        <Select
                          placeholder="Select Purpose"
                          size={"lg"}
                          onChange={props.handlePurpose}
                        >
                          <option value="Document">Documents</option>
                          <option value="Fees">Fees</option>
                        </Select>
                      </Box>
                      <Box mb={"8"}>
                        <Box mb={2} ml={2}>
                          <FormLabel fontSize={"lg"}>Message</FormLabel>
                        </Box>
                        <Input
                          type={"text"}
                          value={props.message}
                          size={"lg"}
                          placeholder={"Enter your message here"}
                          onChange={props.handleChange}
                        />
                      </Box>
                    </Stack>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Box mt={"6"} mb={"8"}>
                    <HStack>
                      <Button
                        colorScheme="blue"
                        w={"60"}
                        onClick={props.handleSubmit}
                        type="submit"
                        mr={"2"}
                      >
                        Submit
                      </Button>
                      <Button
                        colorScheme="gray"
                        w={"40"}
                        onClick={props.onClose}
                        ml={"2"}
                      >
                        Cancel
                      </Button>
                    </HStack>
                  </Box>
                </ModalFooter>
              </Stack>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>

      {/* <Modal isOpen={props.isOpen} size={"lg"} closeOnOverlayClick={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Create a New Query</Flex>
          </ModalHeader>

          <ModalBody>
            <Center>
              <Flex flexDirection={"column"}>
                <FormControl pl={"14"}>
                  <Stack display={"block"}>
                    <Select
                      onChange={props.handleChange}
                      placeholder="Purpose"
                      marginBottom={"8"}
                      width={"sm"}
                    >
                      <option value="option1">Document/Scholarship</option>
                      <option value="option2">F Payment</option>
                    </Select>
                    <label>Messge</label>
                    <Input
                      onChange={props.handleChange}
                      placeholder="Enter Message"
                      size="md"
                      width={"sm"}
                      mb={"4"}
                    />
                    <Button
                      colorScheme="blue"
                      mr={10}
                      type="submit"
                      onClick={props.handleSubmit}
                    >
                      Submit
                    </Button>
                  </Stack>
                </FormControl>
              </Flex>
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
}
