import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../../component/Navbar/index';
import Download from '../../component/Download';
import splash from '../../images/splash.png';
import loan from '../../images/loan.png';
import getloan from '../../images/getloan.png';
import connect from '../../images/connect.png';
import rocket from '../../images/mockrocket.png';
import manage from '../../images/manage.png';
import social from '../../images/social.png';
import wallet from '../../images/wallet.png';
import React from 'react';
import "typeface-poppins";
import Footer from '../../component/Footer';

const Home: React.FC = () => {
    return (
        <Flex
            flexDir={"column"}
            fontFamily={"Poppins"}
            w={"100%"}
        // align={"center"}
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
                        >
                            <Image
                                transform={'rotate(-30deg)'}
                                src={social}
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
                                src={wallet}
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
            <Flex
                px={"80px"}
                bg={"#ABA5E5"}
                py={"50px"}
                mb={"40px"}
                justifyContent={"center"}
            >
                <Grid
                    // templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 3fr)'
                    alignSelf={"center"}
                    gap={"2vw"}
                >
                    <GridItem>
                        <Box
                            bg={"#FFFFFF"}
                            w={"250px"}
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
                            w={"250px"}
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
                            w={"250px"}
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
                            w={"250px"}
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
                            w={"250px"}
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
            </Flex>
            <Flex
                mt={"60px"}
                px={"15vw"}
                flexDir={"row"}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <Flex
                    w={"500px"}
                    flexDir={"column"}
                    mt={"40px"}
                >
                    <Flex
                        mb={"20px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Box
                            w={"50px"}
                            bg={"#808080"}
                            h={"2px"}
                            borderRadius={"5px"}
                            mr={"12px"}
                        />
                        <Text
                            color={"#010101"}
                        >
                            01
                        </Text>
                    </Flex>
                    <Heading
                        fontSize={"50px"}
                        fontWeight={700}
                        lineHeight={"90px"}
                        color={"#412D95"}
                    >
                        Connect With Others And Earn
                    </Heading>
                    <Text
                        fontSize={"18px"}
                        fontWeight={300}
                        mt={"20px"}
                    >
                        Connect on Padi4Life, share resources, and earn rewards through 
                        social and financial interactions, making money management a social experience
                    </Text>
                </Flex>
                <Flex
                    w={"500px"}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    <Image
                        src={rocket}
                        mt={"70px"}
                        w={"400px"}
                        h={"714px"}
                        objectFit={"cover"}
                        borderRadius={"3xl"}
                    />
                </Flex>
            </Flex>
            <Flex
                bg={"#ABA5E5"}
                mt={"60px"}
                px={"15vw"}
                py={"100px"}
                flexDir={"row"}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <Flex
                    bg={"#897BDC"}
                    h={"300px"}
                    w={"300px"}
                    borderRadius={"50%"}
                    pl={"101px"}
                >
                    <Image
                        src={getloan}
                        mt={"-40px"}
                        w={"400px"}
                        h={"400px"}
                        // objectFit={"cover"}
                        // borderRadius={"3xl"}
                    />
                </Flex>
                <Flex
                    w={"500px"}
                    flexDir={"column"}
                    mt={"40px"}
                >
                    <Flex
                        mb={"20px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Box
                            w={"50px"}
                            bg={"#808080"}
                            h={"2px"}
                            borderRadius={"5px"}
                            mr={"12px"}
                        />
                        <Text
                            color={"#010101"}
                        >
                            02
                        </Text>
                    </Flex>
                    <Heading
                        fontSize={"50px"}
                        fontWeight={700}
                        lineHeight={"90px"}
                        color={"#412D95"}
                    >
                       Get Quick And Safe Loan
                    </Heading>
                    <Text
                        fontSize={"18px"}
                        fontWeight={300}
                        mt={"20px"}
                    >
                        Secure fast loans with ease on Padi4Life, for a convenient and 
                        safe borrowing experience and satisfy your financial needs.
                    </Text>
                </Flex>
            </Flex>
            <Flex
                mt={"60px"}
                px={"15vw"}
                flexDir={"row"}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <Flex
                    w={"500px"}
                    flexDir={"column"}
                    mt={"40px"}
                >
                    <Flex
                        mb={"20px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Box
                            w={"50px"}
                            bg={"#808080"}
                            h={"2px"}
                            borderRadius={"5px"}
                            mr={"12px"}
                        />
                        <Text
                            color={"#010101"}
                        >
                            03
                        </Text>
                    </Flex>
                    <Heading
                        fontSize={"50px"}
                        fontWeight={700}
                        lineHeight={"90px"}
                        color={"#412D95"}
                    >
                        Manage Your Funds Perfectly
                    </Heading>
                    <Text
                        fontSize={"18px"}
                        fontWeight={300}
                        mt={"20px"}
                    >
                        Effortlessly optimize your finances with Padi4Life with tools and insights 
                        for flawless money management, making every dollar count
                    </Text>
                </Flex>
                <Flex
                    w={"500px"}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    <Image
                        src={manage}
                        mt={"50px"}
                        w={"400px"}
                        h={"714px"}
                        objectFit={"cover"}
                        borderRadius={"3xl"}
                    />
                </Flex>
            </Flex>
            <Box
                mt={"200px"}
            >
                <Footer />
            </Box>
        </Flex>
    );
}

export default Home;