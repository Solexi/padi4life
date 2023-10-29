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
                textAlign={["center", "left"]}
                flexDir={["column", "row"]}
                gap={[10, ""]}
                justify={"space-between"}
                mt={"-100px"}
                mb={"20px"}
                mx={["25%", "5%"]}
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
                            href="/"
                            _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                        >
                            Products
                        </ChakraLink>
                        <ChakraLink
                            href="/"
                            _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                        >
                            Support
                        </ChakraLink>
                        <ChakraLink
                            href="/"
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
                        _hover={{ textDecoration: "none", color: "#897BDC", transition: "0.2s" }}
                    >
                        Help Docs $ FAQs
                    </ChakraLink>
                </Flex>
                <ChakraLink
                    mx={"16%"}
                    color={"#FFFFFF"}
                    display={["flex", "none"]}
                    fontWeight={600}
                    fontSize={"18px"}
                    href="/meet-the-team"
                    _hover={{ textDecoration: "none", color: "#897BDC", transition: "0.2s" }}
                >
                    Meet the Team
                </ChakraLink>
            </Flex>
            <Divider w={"90%"} mx={"5%"} h={"20px"} />
            <Flex
                textAlign={["center", "left"]}
                flexDir={["column", "row"]}
                justify={"space-between"}
                mx={["5%"]}
                mt={"20px"}
                mb={"10px"}
                gap={[10, ""]}
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
                    align={"center"}
                    flexDir={["column", "row"]}
                    gap={"6px"}
                >
                    <Text color={"#FFFFFF"}>Follow us: </Text>
                    <Icon as={FaFacebook} color={"#FFFFFF"} w={"20px"} h={"20px"} />
                    <Icon as={FaTwitter} color={"#FFFFFF"} w={"20px"} h={"20px"} />
                    <Icon as={FaInstagram} color={"#FFFFFF"} w={"20px"} h={"20px"} />
                    <Icon as={FaLinkedin} color={"#FFFFFF"} w={"20px"} h={"20px"} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer;