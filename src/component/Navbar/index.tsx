import { Box, Flex, Spacer, Button, useColorMode, Link as ChakraLink, Image, LinkOverlay } from "@chakra-ui/react";
import PadiLogo from "../../images/Logo.png";
import 'typeface-poppins';
// import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            as="nav"
            direction={"row"}
            justify={"space-between"}
            bg={"#ffffff"}
            px={"35px"}
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
                    _hover={{ textDecoration: "none"}}
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
                    href="/meet-the-team"
                    _hover={{ textDecoration: "none", borderBottom: "0.5px solid #897BDC", transition: "0.5s"}}
                >
                    Meet the Team
                </ChakraLink>
            </Flex>
            <Button
                bg={"#412D95"}
                _hover={{ bg: "#000000",transition: "0.5s"}}
            >
                Get the app
            </Button>
        </Flex>
        // <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4}>
        //     <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        //         <Box>
        //             <Link href="/">
        //                 <Button variant="ghost">Home</Button>
        //             </Link>
        //             <Link href="/about">
        //                 <Button variant="ghost">About</Button>
        //             </Link>
        //         </Box>
        //         <Spacer />
        //         <Box>
        //             <Button onClick={toggleColorMode}>
        //                 Toggle {colorMode === "light" ? "Dark" : "Light"}
        //             </Button>
        //         </Box>
        //     </Flex>
        // </Box>
    );
};

export default Navbar;
