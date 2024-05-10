import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import PaymentModal from "./PaymentModal";

const ShippingModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box mt={"2rem"}>
            <Button pr={"6rem"} pl={"6rem"} onClick={onOpen}>Proceed</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='pinkAlpha.300'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent m={"auto"} >
                    <ModalHeader m={"auto"}> Shipping Info </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        Shipping Details will be shown Here
                    </ModalBody>
                    <ModalFooter m={"auto"} gap={"2rem"}>
                        <PaymentModal />
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ShippingModal;