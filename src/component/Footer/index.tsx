import { Box, Flex, Link as ChakraLink, Image, Text, Divider, Icon } from "@chakra-ui/react";
import Download from "../Download";
import PadiLogo from "../../images/Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Flex
            bg={"#2c2c3b"}
            flexDir={"column"}
        >
            <Box
                position={"relative"}
                top={"-150px"}
            >
                <Download />
            </Box>
            <Flex
                flexDir={"row"}
                justify={"space-between"}
                mt={"-100px"}
                mb={"20px"}
                mx={"5%"}
            >
                <Flex
                    flexDir={"column"}
                >
                    <ChakraLink
                        href="/"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"row"}
                        >
                            <Image
                                src={PadiLogo}
                                w={"40px"}
                                h={"40px"}
                                mr={"7px"}
                            />
                            <Box
                                bgClip="text"
                                bgGradient={'linear(to-b, #412D95, #955FAECC)'}
                                fontSize="24px"
                                fontWeight={700}
                            >
                                Padi4Life
                            </Box>
                        </Box>
                    </ChakraLink>
                    <Flex
                        flexDir={"row"}
                        gap={"10px"}
                        my={"10px"}
                        color={"#FFFFFF"}
                    >
                        <ChakraLink
                            href="/meet-the-team"
                            _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                        >
                            Products
                        </ChakraLink>
                        <ChakraLink
                            href="/meet-the-team"
                            _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                        >
                            Support
                        </ChakraLink>
                        <ChakraLink
                            href="/meet-the-team"
                            _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                        >
                            Terms
                        </ChakraLink>
                    </Flex>
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Text
                        fontSize={"18px"}
                        color={"#FFFFFF"}
                        fontWeight={600}
                    >
                        How Can We Help
                    </Text>
                    <ChakraLink
                        href="/"
                        my={"10px"}
                        color={"#FFFFFF"}
                        _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                    >
                        Help Docs $ FAQs
                    </ChakraLink>
                </Flex>
            </Flex>
            <Divider w={"90%"} mx={"5%"} h={"20px"} />
            <Flex
                flexDir={"row"}
                justify={"space-between"}
                mx={"5%"}
                mt={"20px"}
                mb={"10px"}
            >
                <Flex
                    flexDir={"column"}
                    w={"350px"}
                >
                    <Text
                        fontSize={"14px"}
                        color={"#FFFFFF"}
                        mb={"5px"}
                    >
                        © 2023 Padi4Life. All rights reserved.
                    </Text>
                    <Text
                        fontSize={"14px"}
                        color={"#FFFFFF"}
                    >
                        Hi-Tech Innovation
                    </Text>
                </Flex>
                <Flex
                    flexDir={"row"}
                    gap={"6px"}
                >
                    <Text color={"#FFFFFF"}>Follow us: </Text>
                    <Icon as={FaFacebook} color= {"#FFFFFF"} w={"20px"} h={"20px"}/>
                    <Icon as={FaTwitter} color= {"#FFFFFF"} w={"20px"} h={"20px"}/>
                    <Icon as={FaInstagram} color= {"#FFFFFF"} w={"20px"} h={"20px"}/>
                    <Icon as={FaLinkedin} color= {"#FFFFFF"} w={"20px"} h={"20px"}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer;