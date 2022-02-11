import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    HStack,
    ModalCloseButton,
    PinInput, PinInputField,
    Box,
    Button,
    Center,
    Flex
  } from '@chakra-ui/react'
function Otpmodal() {
  return <div>
        <Modal isOpen={true} >
        <ModalOverlay />
        <ModalContent >
        <ModalHeader py={'6'} >
            <Flex justifyContent={'center'}>
            Enter OTP
            </Flex>
        </ModalHeader>
        <Center>
        <HStack>
        <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        </PinInput>
        </HStack>
        </Center>
          
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
              <Center width={'md'}>
              <Button colorScheme='blue' mr={3} >
              Submit
            </Button>
              </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </div>;
}


export default Otpmodal;
