import { Box, Flex, Button, Text, Link as ChakraLink, Image, Link } from "@chakra-ui/react";
import PadiLogo from "../../images/Logo.png";
import 'typeface-poppins';
import { useState } from "react";

const Navbar: React.FC = () => {
    const apkDownloadUrl = "https://bit.ly/padi4life";
    const [showMessage, setShowMessage] = useState(false);

    // const handleClick = () => {
    //     setShowMessage(true);

    //     setTimeout(() => {
    //         window.location.href = apkDownloadUrl;
    //     }, 3000)

    // }
    return (
        <Flex
            as="nav"
            direction={"row"}
            justify={"space-between"}
            bg={"#ffffff"}
            px={["15px", "35px"]}
            w={"100vw"}
            shadow={"lg"}
            h={"64px"}
            align={"center"}
            fontFamily={'Poppins'}
            position={"fixed"}
            zIndex={10}
        >
            <Flex
                direction={"row"}
                justify={"space-between"}
                align={"center"}
                w={"330px"}
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
                <ChakraLink
                    display={["none", "flex"]}
                    href="/meet-the-team"
                    _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s" }}
                >
                    Meet the Team
                </ChakraLink>
            </Flex>
            <Link href="https://bit.ly/padi4lifemobile" isExternal>
                <Button
                    fontSize={["16px", ""]}
                    px={["30px", ""]}
                    bg={"#412D95"}
                    _hover={{ bg: "#000000", transition: "0.5s" }}
                    color={"#FFFFFF"}
                    // onClick={handleClick}
                >
                    Get the app
                </Button>
                {/* {showMessage && (
                        <Flex w={"100%"} h={"100%"}>
                            <Text fontSize={"30px"} color={"#808080"}> Redirecting...</Text>
                        </Flex>
                )} */}
            </Link>
        </Flex>
    );
};

export default Navbar;
