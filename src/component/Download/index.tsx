import { Box, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import download from "../../images/download.png"
import features from "../../images/features.png"
import "typeface-poppins"

const Download: React.FC = () => {
    return (
        <Flex
            display={"flex"}
            flexDir={["column", "row"]}
            w={"80%"}
            h={["800px", "400px"]}
            mx={["10%"]}
            bgImage={download}
            zIndex={8}
            borderRadius={"3xl"}
            px={["", "", "20px", "50px"]}
            overflow={"clip"}
            justifyContent={"space-between"}
            align={["center", ""]}
        >
            <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                py={["5%", "2%", "2%", "5%"]}
                w={["90%", "50%", "60%", "40%"]}
            >
                <Heading
                    fontFamily={"Poppins"}
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["40px", "28px", "28px", "45px"]}
                    fontWeight={[600, 700, 700, 600]}
                    color={"#FFFFFF"}
                    mb={"20px"}
                >
                    Download the App
                </Heading>
                <Text
                    fontSize={["21px", "17px", "17px", "22px"]}
                    fontWeight={500}
                    color={"#808080"}
                    textAlign={["center", "center", "center", "left"]}
                >
                    Connect with your friends, manage your money, get small loans when you need them. Download now to get started.
                </Text>
                <Flex
                    flexDir={["column", "column", "row", "row"]}
                    gap={"25px"}
                    mt={"30px"}
                >
                    <Link href="https://bit.ly/padi4life" isExternal>
                        <Flex
                            as="button"
                            display={"flex"}
                            flexDir={"row"}
                            px={["30px", "15px", "15px", "30px"]}
                            w={["201px", "150px", "150px", "201px"]}
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
                                fontSize={["22.5px", "18px", "18px", "22.5px"]}
                                fontWeight={500}
                            >
                                App Store
                            </Text>
                        </Flex>
                    </Link>
                    <Link href="https://bit.ly/padi4life" isExternal>
                        <Flex
                            as="button"
                            display={"flex"}
                            flexDir={"row"}
                            px={["30px", "15px", "15px", "10px"]}
                            w={["201px", "150px", "150px", "201px"]}
                            h={"58px"}
                            bg={"#FFFFFF"}
                            justify={"center"}
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
                                fontSize={["22.5px", "17px", "17px", "22px"]}
                                fontWeight={500}
                            >
                                Google Play
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
            </Box>
            <Flex
                w={["320px", "400px"]}
                mt={["40px", "200px", "200px", "350px"]}
                justifyContent={"center"}
            >
                <Image
                    src={features}
                    w={"400px"}
                    h={["614px", "500px", "500px", "614px"]}
                    borderRadius={"3xl"}
                />
            </Flex>
        </Flex>
    )
}

export default Download