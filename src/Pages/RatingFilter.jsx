import { Box, Button, Stack, useRadio, useRadioGroup } from "@chakra-ui/react"


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label' w="100%">
            <input {...input} />
            <Box
                {...checkbox}
                direction='column'
                cursor='pointer'
                borderWidth='2px'
                borderRadius='md'
                boxShadow='md'
                m="auto"
                _checked={{
                    bg: 'green',
                    color: 'white',
                    borderColor: 'black',
                }}
                py={1.5}
            >
                {props.children}
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function RatingFilter({ ratingvalue, setRatingvalue }) {

    const options = ['0 - 1', '1.1 - 2.0', '2.1 - 3.0', '3.1 - 4.0', '4.1 - 5.0']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'ratingfilter',
        defaultValue: '',
        onChange: console.log,
    })

    const group = getRootProps()

    return (
        <Stack {...group} align="center" my={"10px"} mx={"20px"}>
            {
                options.map((options) => {
                    const radio = getRadioProps({ value: options })
                    return (
                        <RadioCard
                            key={options}
                            {...radio}
                            isChecked={radio.value === ratingvalue}
                            onChange={() => setRatingvalue(options)}
                        >
                            {options}
                        </RadioCard>
                    )
                })
            }
            < Button size='md'
                height='35px'
                width='200px'
                border='2px'
                borderColor='green.500'
                bg='orangered'
                marginTop="5px"
                onClick={() => setRatingvalue("")}
            > CLEAR ALL </Button >
        </Stack >
    )
}

export default RatingFilter;