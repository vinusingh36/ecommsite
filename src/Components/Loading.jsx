import { Box, Heading, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";


const Loading = () => {
    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"} gap={"40px"} >
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <Stack>
                    <Skeleton height='80px' />
                </Stack>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>

        </Box >
    )
}

export default Loading;