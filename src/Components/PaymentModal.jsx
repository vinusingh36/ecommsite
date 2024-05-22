import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import Transaction from "./Transaction";
import { useSelector } from "react-redux";


const PaymentModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const { addressData } = useSelector((store) => store.paymentReducer);



    return (
        <Box>
            {
                addressData.length === 0 ? "" : <Button colorScheme="green" onClick={onOpen}>Proceed for Payment</Button>
            }
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
                        <Transaction onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default PaymentModal;