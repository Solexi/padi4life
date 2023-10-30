import { Box, Flex, Heading, Text, Grid, GridItem, Image, Icon, Link } from "@chakra-ui/react";
import Navbar from "../../component/Navbar";
import ayanfe from "../../images/ayanfe.jpg";
import "typeface-poppins";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../../component/Footer";

const Meet: React.FC = () => {
    return (
        <Flex
            flexDir={"column"}
            w={["100vw", "100%"]}
            fontFamily={"Poppins"}
        >
            <Box
                w={"100vw"}
                mb={"80px"}
            >
                <Navbar />
            </Box>
            <Flex
                px={"3%"}
                flexDir={"column"}
            >
                <Heading
                    fontSize={["22px","28px"]}
                    color={"#412D95"}
                    fontFamily={"Poppins"}
                    my={"20px"}
                >
                    Hi-Tech Innovation Team
                </Heading>
                <Text
                    fontSize={["16px",""]}
                    mb={"10px"}
                >
                    Meet the brains behind
                    <span style={{ color: "#412D95", fontWeight: 600 }}> Padi4Life </span>
                </Text>
                <Flex
                    flexDir={"column"}
                    align={"center"}
                >
                    <Flex
                        position="relative"
                        overflow="hidden"
                        color="white"
                        w={"100vw"}
                        h={["900px","900px", "900px", "600px"]}
                        justify={"center"}
                    >
                        <Box
                            position="absolute"
                            top="0"
                            left="-5%"
                            right="-100%"
                            height="100%"
                            //  clipPath="polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                            bgGradient="linear(to-tr, #412D95, #897BDC)"
                            transform="skewY(-3deg)"
                        />
                        <Grid
                            position={"absolute"}
                            top={["8%", "10%", "13%", "30%"]}
                            templateColumns={['repeat(2, 3fr)', 'repeat(3, 3fr)', 'repeat(3, 3fr)', 'repeat(5, 3fr)']}
                            textAlign={"center"}
                            gap={["5vw", "5vw", "5vw", "2vw"]}
                        >
                            <GridItem>
                                <Flex
                                    flexDir={"column"}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <Image
                                        w={["150px", "210px"]}
                                        h={["150px", "210px"]}
                                        objectFit={"fill"}
                                        borderRadius={"50%"}
                                        src={ayanfe}
                                        mb={"15px"}
                                    />
                                </Flex>
                                <Text
                                    fontWeight={600}
                                    fontSize={["16px", "18px"]}
                                    mb={"3px"}
                                >
                                    Ayanfe Afolabi
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize={["13px", "14px"]}
                                    mb={"8px"}
                                >
                                    Mobile Developer
                                </Text>
                                <Flex justify="center" gap={"12px"}>
                                    <Link href={"https://www.linkedin.com/in/afolabi-ayanfe-6813a0212"}>
                                        <Icon
                                            as={FaLinkedin}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                    <Link href={"http://github.com/ayanfesolution"}>
                                        <Icon
                                            as={FaGithub}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    flexDir={"column"}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <Image
                                        w={["150px", "210px"]}
                                        h={["150px", "210px"]}
                                        objectFit={"fill"}
                                        borderRadius={"50%"}
                                        src={"https://media.licdn.com/dms/image/D4D35AQEuWJrG3ld0Cg/profile-framedphoto-shrink_800_800/0/1664735876048?e=1699239600&v=beta&t=fdJqgW-eOFufEbWfYjiAs1oPQ6W6Ih9rcEk_iv81RYM"}
                                        mb={"15px"}
                                    />
                                </Flex>
                                <Text
                                    fontWeight={600}
                                    fontSize={["16px", "18px"]}
                                    mb={"3px"}
                                >
                                    Ibrahim Ismail
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize={["13px", "14px"]}
                                    mb={"8px"}
                                >
                                    Backend Developer
                                </Text>
                                <Flex justify="center" gap={"12px"}>
                                    <Link href={"https://www.linkedin.com/in/ismail-ibrahim-3a79b723a"}>
                                        <Icon
                                            as={FaLinkedin}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                    <Link href={"https://github.com/busayo-I/"}>
                                        <Icon
                                            as={FaGithub}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    flexDir={"column"}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <Image
                                        w={["150px", "210px"]}
                                        h={["150px", "210px"]}
                                        objectFit={"fill"}
                                        borderRadius={"50%"}
                                        src={"https://avatars.githubusercontent.com/u/82169299?v=4"}
                                        mb={"15px"}
                                    />
                                </Flex>
                                <Text
                                    fontWeight={600}
                                    fontSize={["16px", "18px"]}
                                    mb={"3px"}
                                >
                                    Sophia Ezeh
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize={["13px", "14px"]}
                                    mb={"8px"}
                                >
                                    Frontend Developer
                                </Text>
                                <Flex justify="center" gap={"12px"}>
                                    <Link href={"https://www.linkedin.com/in/sophia-ezeh-9884b6215/"}>
                                        <Icon
                                            as={FaLinkedin}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                    <Link href={"http://github.com/Solexi"}>
                                        <Icon
                                            as={FaGithub}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    flexDir={"column"}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <Image
                                        w={["150px", "210px"]}
                                        h={["150px", "210px"]}
                                        objectFit={"fill"}
                                        borderRadius={"50%"}
                                        src={"https://media.licdn.com/dms/image/D4D03AQGyyP4U92XctA/profile-displayphoto-shrink_800_800/0/1680630358421?e=1704326400&v=beta&t=7bNevf07_DP3tfZAwMK5BZnw-8i_l06m3Sh0uj2cw4I"}
                                        mb={"15px"}
                                    />
                                </Flex>
                                <Text
                                    fontWeight={600}
                                    fontSize={["16px", "18px"]}
                                    mb={"3px"}
                                >
                                    Peace Obienyi
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize={["13px", "14px"]}
                                    mb={"8px"}
                                >
                                    UI/UX Designer
                                </Text>
                                <Flex justify="center" gap={"12px"}>
                                    <Link href={"https://www.linkedin.com/in/peace-obienyi-6a9791194/"}>
                                        <Icon
                                            as={FaLinkedin}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                    <Link href={"https://dribbble.com/Confettidesigns"}>
                                        <Icon
                                            as={FaDribbble}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    flexDir={"column"}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <Image
                                        w={["150px", "210px"]}
                                        h={["150px", "210px"]}
                                        objectFit={"fill"}
                                        borderRadius={"50%"}
                                        src={"https://pbs.twimg.com/profile_images/1503877967948263430/dYTulFIR_400x400.jpg"}
                                        mb={"15px"}
                                    />
                                </Flex>
                                <Text
                                    fontWeight={600}
                                    fontSize={["16px", "18px"]}
                                    mb={"3px"}
                                >
                                    Maryjane Adebayo
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize={["13px", "14px"]}
                                    mb={"8px"}
                                >
                                    Product Manager
                                </Text>
                                <Flex justify="center" gap={"12px"}>
                                    <Link href={"https://www.linkedin.com/in/maryjaneadebayo/"}>
                                        <Icon
                                            as={FaLinkedin}
                                            w={["23px", "25px"]}
                                            h={["23px", "25px"]}
                                        />
                                    </Link>
                                    {/* <Link href={"http://github.com/ayanfesolution"}>
                                    <Icon
                                        as={FaGithub}
                                        w={"25px"}
                                        h={"25px"}
                                    />
                                    </Link> */}
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Flex>
                </Flex>
            </Flex>
            <Box
                mt={"200px"}
            >
                <Footer />
            </Box>
        </Flex>
    )
}

export default Meet;