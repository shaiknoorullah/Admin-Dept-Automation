import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Select,
  InputGroup,
  Icon,
} from "@chakra-ui/react";

export default function QueryModal(prop) {
  return (
    <div>
      <Modal isOpen={prop.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={"6"}>
            <Flex justifyContent={"center"}>Create Query</Flex>
          </ModalHeader>

          <ModalBody>
            <Stack spacing={5}>
              <FormControl>
                <InputGroup>
                  <Select
                    placeholder="Select a field"
                    as="i"
                    onChange={prop.handleInputChange}
                    required={true}
                  >
                    <option value={prop.Fees}>Fees</option>
                    <option value={prop.Documents}>
                      Collect/Submit documents
                    </option>
                  </Select>
                </InputGroup>
                <FormLabel htmlFor="text">Write a message here</FormLabel>
                <Input
                  id="message"
                  type="text"
                  value={prop.input}
                  onChange={prop.handleInputChange}
                  required={true}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Center width={"lg"}>
              <Button
                children={<Icon name="AddIcon" />}
                colorScheme="blue"
                mr={3}
                onClick={prop.handleQuerySubmit}
              >
                Create a Query
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
