import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

const PaymentModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button colorScheme="green" onClick={onOpen}>Proceed for Payment</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='pinkAlpha.300'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent m={"auto"} >
                    <ModalHeader m={"auto"}> Payment Details </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Shipping Details will be shown Here
                    </ModalBody>
                    <ModalFooter m={"auto"} gap={"2rem"}>
                        <Button colorScheme='green' >Pay</Button>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default PaymentModal;