import React from 'react'
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
    Select 
  } from "@chakra-ui/react";



export default function Query() {
  return (
    <div>
        <Modal isOpen={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Create a New Query</Flex>
          </ModalHeader>

          <ModalBody>
            <Center>
              <Flex flexDirection={'column'}>
              <Select placeholder='Select option' marginBottom={'8'} width={'sm'}>
                <option value='option1'>Document/Scholarship</option>
                <option value='option2'>Fee Payment</option>
                </Select>
                <label>Message (Optional) </label>
                <Input placeholder='Enter Message Options' size='md' />
              </Flex>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Center width={"md"}>
              <Button colorScheme="blue" mr={3}>
                Submit
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
