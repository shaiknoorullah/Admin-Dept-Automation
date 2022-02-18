import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  PinInput,
  PinInputField,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";

function Otpmodal(prop) {
  return (
    <div>
      <Modal isOpen={prop.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Enter OTP</Flex>
          </ModalHeader>

          <ModalBody>
            <Center>
              <HStack>
                <PinInput onChange={prop.handleOTPChange}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Center width={"md"}>
              <Button colorScheme="blue" mr={3} onClick={prop.handleOTPSubmit}>
                Submit
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Otpmodal;
