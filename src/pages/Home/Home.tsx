import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../../component/Navbar/index';
import splash from '../../images/splash.png';
import loan from '../../images/loan.png';
import React from 'react';
import "typeface-poppins";

const Home: React.FC = () => {
    return (
        <Flex
            flexDir={"column"}
            fontFamily={"Poppins"}
        >
            <Box
                w={"100vw"}
                mb={"80px"}
            >
                <Navbar />
            </Box>
            <Box
                display={"flex"}
                flexDir={"row"}
                px={"200px"}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <Box
                    display={"block"}
                    w={"500px"}
                >
                    <Heading
                        fontSize={"58px"}
                        fontWeight={700}
                        lineHeight={"90px"}
                        mt={"120px"}
                        color={"#412D95"}
                    >
                        Your All in One Financial Hub
                    </Heading>
                    <Text>
                        Padi4Life connects you with friends, local services, manage your money,
                        get small loans when you need them. It is a financial platform that
                        helps you manage your finances and achieve your financial goals.
                    </Text>
                    <Button
                        bg={"#000000"}
                        size={"lg"}
                        color={"#ffffff"}
                        _hover={{ bg: "#1E1446" }}
                        mt={"20px"}
                    >
                        Contact Us
                    </Button>
                </Box>
                <Flex
                    h={"500px"}
                    w={"400px"}
                    mt={"80px"}
                    justify={"center"}
                // alignItems={"center"}
                >
                    <Flex
                        bg={"#897BDC"}
                        h={"300px"}
                        w={"300px"}
                        borderRadius={"50%"}
                        justify={"center"}
                        pt={"50px"}
                    >
                        <Box
                            h={"305px"}
                            display={"flex"}
                            flexDir={"row"}
                            transformOrigin={"center"}
                            justifyContent={"center"}
                        // overflowY={"hidden"}
                        // display={"block"}
                        >
                            <Image
                                transform={'rotate(-30deg)'}
                                src={splash}
                                w={"200px"}
                                h={"309px"}
                            />
                            <Image
                                transform={'rotate(0deg)'}
                                src={splash}
                                w={"200px"}
                                h={"409px"}
                                zIndex={2}
                            />
                            <Image
                                transform={'rotate(30deg)'}
                                src={splash}
                                w={"200px"}
                                h={"309px"}
                            />
                            {/* <Image
                                zIndex={"2"}
                                src={zigzag}
                                w={"200px"}
                                position={"relative"}
                                bottom={"120px"}
                            /> */}
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box
                px={"200px"}
                bg={"#ABA5E5"}
                py={"50px"}
            >
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={6}
                >
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"300px"}
                            px={"10px"}
                            py={"10px"}
                            borderRadius={"md"}
                        >
                            <Flex
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                align={"center"}
                            >
                                <Text
                                    fontSize={"18px"}
                                    fontWeight={500}
                                >
                                    Get a Loan
                                </Text>
                                <Image
                                    src={loan}
                                    w={"40px"}
                                    h={"40px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"14px"}
                                fontWeight={300}
                                mt={"10px"}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius officiis illum, voluptatibus necessitatibus possimus placeat beatae 
                                ut vero delectus id asperiores ea nesciunt quam harum natus quaerat recusandae unde reiciendis!
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"300px"}
                            px={"10px"}
                            py={"10px"}
                            borderRadius={"md"}
                        >
                            <Flex
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                align={"center"}
                            >
                                <Text
                                    fontSize={"18px"}
                                    fontWeight={500}
                                >
                                    Get a Loan
                                </Text>
                                <Image
                                    src={loan}
                                    w={"40px"}
                                    h={"40px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"14px"}
                                fontWeight={300}
                                mt={"10px"}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius officiis illum, voluptatibus necessitatibus possimus placeat beatae 
                                ut vero delectus id asperiores ea nesciunt quam harum natus quaerat recusandae unde reiciendis!
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"300px"}
                            px={"10px"}
                            py={"10px"}
                            borderRadius={"md"}
                        >
                            <Flex
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                align={"center"}
                            >
                                <Text
                                    fontSize={"18px"}
                                    fontWeight={500}
                                >
                                    Get a Loan
                                </Text>
                                <Image
                                    src={loan}
                                    w={"40px"}
                                    h={"40px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"14px"}
                                fontWeight={300}
                                mt={"10px"}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius officiis illum, voluptatibus necessitatibus possimus placeat beatae 
                                ut vero delectus id asperiores ea nesciunt quam harum natus quaerat recusandae unde reiciendis!
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"300px"}
                            px={"10px"}
                            py={"10px"}
                            borderRadius={"md"}
                        >
                            <Flex
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                align={"center"}
                            >
                                <Text
                                    fontSize={"18px"}
                                    fontWeight={500}
                                >
                                    Get a Loan
                                </Text>
                                <Image
                                    src={loan}
                                    w={"40px"}
                                    h={"40px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"14px"}
                                fontWeight={300}
                                mt={"10px"}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius officiis illum, voluptatibus necessitatibus possimus placeat beatae 
                                ut vero delectus id asperiores ea nesciunt quam harum natus quaerat recusandae unde reiciendis!
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"300px"}
                            px={"10px"}
                            py={"10px"}
                            borderRadius={"md"}
                        >
                            <Flex
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                align={"center"}
                            >
                                <Text
                                    fontSize={"18px"}
                                    fontWeight={500}
                                >
                                    Get a Loan
                                </Text>
                                <Image
                                    src={loan}
                                    w={"40px"}
                                    h={"40px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"14px"}
                                fontWeight={300}
                                mt={"10px"}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius officiis illum, voluptatibus necessitatibus possimus placeat beatae 
                                ut vero delectus id asperiores ea nesciunt quam harum natus quaerat recusandae unde reiciendis!
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Flex>
    );
}

export default Home;