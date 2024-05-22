import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import PaymentModal from "./PaymentModal";
import { useSelector } from "react-redux";

const ShippingModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { addressData } = useSelector((store) => store.paymentReducer);
    return (
        <Box  >
            <Button pr={"6rem"} pl={"6rem"} onClick={onOpen}>PROCEED</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
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
                        {addressData.length === 0 ? <Box>No Saved Address </Box> : addressData.map((data, i) => {
                            return (
                                <Box key={i} >
                                    <p>{data.firstname} {data.lastname} </p>
                                    <p>{data.address} </p>
                                    <p>{data.city}, {data.country} </p>
                                    <p>{data.pincode} </p>
                                    <p>{data.phone} </p>
                                </Box>
                            )
                        })}
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