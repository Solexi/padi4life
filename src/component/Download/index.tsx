import { Box, Flex, Heading, Icon, Text, Image } from "@chakra-ui/react"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import download from "../../images/download.png"
import features from "../../images/features.png"

const Download: React.FC = () => {
    return (
        <Box
            display={"flex"}
            flexDir={"row"}
            w={"80%"}
            h={"400px"}
            mx={"10%"}
            bgImage={download}
            zIndex={8}
            borderRadius={"3xl"}
            px={"50px"}
            overflow={"clip"}
            justifyContent={"space-between"}
        >
            <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                py={"5%"}
                w={"40%"}
            >
                <Heading
                    fontSize={"44px"}
                    fontWeight={600}
                    color={"#FFFFFF"}
                    mb={"20px"}
                >
                    Download the App
                </Heading>
                <Text
                    fontSize={"22px"}
                    fontWeight={500}
                    color={"#808080"}
                    textAlign={"center"}
                >
                    Connect with your friends, manage your money, get small loans when you need them. Download now to get started.
                </Text>
                <Flex
                    dir="row"
                    gap={"25px"}
                    mt={"30px"}
                >
                    <Flex
                        as="button"
                        display={"flex"}
                        flexDir={"row"}
                        px={"30px"}
                        w={"201px"}
                        h={"58px"}
                        bg={"#FFFFFF"}
                        align={"center"}
                        borderRadius={"xl"}
                    >
                        <Icon
                            as={FaApple}
                            w={"30px"}
                            h={"30px"}
                            color={"#1E1446"}
                        />
                        <Text
                            color={"#1E1446"}
                            fontSize={"22.5px"}
                            fontWeight={500}
                        >
                            App Store
                        </Text>
                    </Flex>
                    <Flex
                        as="button"
                        display={"flex"}
                        flexDir={"row"}
                        px={"15px"}
                        w={"201px"}
                        h={"58px"}
                        bg={"#FFFFFF"}
                        align={"center"}
                        borderRadius={"xl"}
                    >
                        <Icon
                            as={FaGooglePlay}
                            w={"25px"}
                            h={"25px"}
                            color={"#1E1446"}
                            mr={"3px"}
                        />
                        <Text
                            color={"#1E1446"}
                            fontSize={"22.5px"}
                            fontWeight={500}
                        >
                            Google Play
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            <Flex
                w={"400px"}
                // h={"300px"}
                mt={"60px"}
                justifyContent={"center"}
            >
                <Image
                    src={features}
                    w={"400px"}
                    h={"614px"}
                    // objectFit={"cover"}
                    borderRadius={"3xl"}
                />
            </Flex>
        </Box>
    )
}

export default Download