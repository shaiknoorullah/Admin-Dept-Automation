import React from "react";
import {
<<<<<<< HEAD
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
=======
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
    Stack
  } from "@chakra-ui/react";


>>>>>>> 1fab867ec1a55dfb8802219e5ca790afd9f6cd02

export default function Query(props) {
  return (
    <div>
<<<<<<< HEAD
      <Modal isOpen={props.isOpen} size={"lg"}>
=======
        <Modal isOpen={props.isOpen} size={'lg'} closeOnOverlayClick={true}>
>>>>>>> 1fab867ec1a55dfb8802219e5ca790afd9f6cd02
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Create a New Query</Flex>
          </ModalHeader>

          <ModalBody>
            <Center>
<<<<<<< HEAD
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
=======
              <Flex flexDirection={'column'}>
                  <FormControl onSubmit={props.handleSubmit} pl={'14'}>

                <Select onChange={props.handleChange} placeholder='Purpose' marginBottom={'8'} width={'sm'}>
                    <option value='option1'>Document/Scholarship</option>
                    <option value='option2'>Fee Payment</option>
                    </Select>
                    <Stack display={'block'}>
                    <label>Message</label>
                    </Stack>
                    <Input onChange={props.handleChange} placeholder='Enter Message' size='md' width={'sm'} mb={'4'}/>
                    <ModalFooter>
                        <Center width={"md"}>
                        <Button colorScheme="blue" mr={3} >
                            Submit
                        </Button>
                        </Center>
                    </ModalFooter>
                  </FormControl>
>>>>>>> 1fab867ec1a55dfb8802219e5ca790afd9f6cd02
              </Flex>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
