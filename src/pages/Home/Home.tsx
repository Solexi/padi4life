import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from '../../component/Navbar/index';
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
            w={["100vw", "100%"]}
        >
            <Box
                w={"100vw"}
                mb={"80px"}
            >
                <Navbar />
            </Box>
            <Box
                display={"flex"}
                flexDir={["column", "column", "column", "row"]}
                px={["", "", "", "15vw"]}
                justifyContent={["", "", "center", "space-between"]}
                mb={["", "80px"]}
            >
                <Box
                    display={"block"}
                    textAlign={["center", "center", "center", "left"]}
                    w={["100vw", "100vw", "100vw", "500px"]}
                >
                    <Heading
                        fontFamily={"Poppins"}
                        fontSize={["50px", "36px", "60px", "48px", "50px", "58px"]}
                        fontWeight={700}
                        lineHeight={["70px", "70px", "90px"]}
                        mt={"120px"}
                        color={"#412D95"}
                    >
                        Your All in One Financial Hub
                    </Heading>
                    <Text
                        mx={"10px"}
                        fontSize={["14px", "20px", "20px", ""]}
                        mt={["15px", ""]}
                    >
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
                    h={["340px", "500px"]}
                    w={["95vw", "100vw", "100vw", "400px"]}
                    mt={"80px"}
                    // mx={["4vw", ""]}
                    justify={["center", "center"]}
                >
                    <Flex
                        bg={"#897BDC"}
                        h={["170px", "300px", "250px", "300px"]}
                        w={["170px", "300px", "250px", "300px"]}
                        borderRadius={"50%"}
                        justify={"center"}
                        pt={"50px"}
                    >
                        <Box
                            h={["150px", "305px"]}
                            display={"flex"}
                            flexDir={"row"}
                            transformOrigin={"center"}
                            justifyContent={"center"}
                        >
                            <Image
                                transform={'rotate(-20deg)'}
                                src={social}
                                w={["90px", "200px"]}
                                h={["180px", "309px"]}
                            />
                            <Image
                                transform={'rotate(0deg)'}
                                src={splash}
                                w={["100px", "200px"]}
                                h={["210px", "409px"]}
                                zIndex={2}
                            />
                            <Image
                                transform={'rotate(20deg)'}
                                src={wallet}
                                w={["90px", "200px"]}
                                h={["180px", "309px"]}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Flex
                px={["", "80px"]}
                bg={"#ABA5E5"}
                py={"50px"}
                mb={"40px"}
                justifyContent={"center"}
            >
                <ScrollAnimation animateIn={'fadeIn'}>
                    <Grid
                        templateColumns={['repeat(1, 3fr)', 'repeat(2, 3fr)', 'repeat(2, 3fr)', 'repeat(5, 3fr)']}
                        alignSelf={"center"}
                        gap={["5vw", "5vw", "5vw", "2vw"]}
                    >
                        <GridItem>
                            <Box
                                bg={"#FFFFFF"}
                                w={"250px"}
                                h={"260px"}
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
                                        Asset Tokenization
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
                                    Padi4Life allows you to tokenize various assets, such as real estate, art, and collectibles. This means you can invest in these assets by purchasing digital tokens, thanks to blockchain technology. It makes investing in traditionally illiquid assets more accessible and secure.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                bg={"#FFFFFF"}
                                w={"250px"}
                                h={"260px"}
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
                                        P2P lending
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
                                    Need a short-term loan? Padi4Life facilitates peer-to-peer lending, where you can request loans from other users within the Padi4Life community. You can also monitor your loan status and easily manage repayments.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                bg={"#FFFFFF"}
                                w={"250px"}
                                h={"260px"}
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
                                        PadiCoin
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
                                    The Padi Coin feature in the Padi4Life app adds an exciting and innovative dimension to the platform by allowing users to not only earn and use Padi Coins within the app's social community but also as a means to invest in tangible assets like land properties and estates.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                bg={"#FFFFFF"}
                                w={"250px"}
                                h={"260px"}
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
                                        Community Engagement
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
                                    Padi4Life offers a social feed where you can make posts, share financial insights, and engage with other users. What's unique is that you'll earn rewards in the form of Padi Coins based on the number of likes your posts receive.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                bg={"#FFFFFF"}
                                w={"250px"}
                                h={"260px"}
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
                                        Upcoming Features
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
                                    Padi4Life is continually evolving. In the near future, the app will introduce bill payment options for various utilities and services. You'll also be able to conveniently purchase mobile airtime, making everyday financial tasks more convenient.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </ScrollAnimation>
            </Flex>
            <Flex
                mt={["40px", "60px"]}
                px={["2.5vw", "5vw", "5vw", "15vw"]}
                flexDir={["column", "row"]}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <Flex
                    w={["90vw", "500px"]}
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
                        fontFamily={"Poppins"}
                        fontSize={["50px", "42px", "42px", "48px", "50px"]}
                        fontWeight={700}
                        lineHeight={["60px", "70px", "70px", "90px"]}
                        color={"#412D95"}
                    >
                        Connect With Others And Earn
                    </Heading>
                    <Text
                        fontSize={"18px"}
                        fontWeight={300}
                        mt={"20px"}
                        mb={["30px", ""]}
                    >
                        Connect on Padi4Life, share resources, and earn rewards through
                        social and financial interactions, making money management a social experience
                    </Text>
                </Flex>
                <Flex
                    w={["95vw", "500px"]}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    <ScrollAnimation animateIn='bounceInRight' animateOnce>
                        <Image
                            src={rocket}
                            mt={"70px"}
                            w={"400px"}
                            h={"714px"}
                            objectFit={"cover"}
                            borderRadius={"3xl"}
                        />
                    </ScrollAnimation>
                </Flex>
            </Flex>
            <Flex
                bg={"#ABA5E5"}
                mt={"60px"}
                px={["7vw", "5vw", "5vw", "15vw"]}
                py={"100px"}
                flexDir={["column", "row"]}
                justifyContent={["center", "space-between"]}
                mb={"80px"}
            >
                <Flex
                    bg={"#897BDC"}
                    h={"300px"}
                    w={"300px"}
                    borderRadius={"50%"}
                    pl={"101px"}
                >
                    <ScrollAnimation animateIn='bounceInLeft' animateOnce>
                        <Image
                            src={getloan}
                            mt={"-40px"}
                            w={"400px"}
                            h={"400px"}
                        // objectFit={"cover"}
                        // borderRadius={"3xl"}
                        />
                    </ScrollAnimation>
                </Flex>
                <Flex
                    w={["90vw", "", "400px", "500px"]}
                    flexDir={"column"}
                    mt={["40px", "", "20px", "40px"]}
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
                        fontFamily={"Poppins"}
                        fontSize={["50px", "36px", "42px", "48px", "50px"]}
                        fontWeight={700}
                        lineHeight={["60px", "70px", "70px", "90px"]}
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
                px={["2.5vw", "5vw", "5vw", "15vw"]}
                flexDir={["column", "row"]}
                justifyContent={["center", "space-between"]}
                mb={"80px"}
            >
                <Flex
                    w={["95vw", "500px"]}
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
                        fontFamily={"Poppins"}
                        fontSize={["50px", "36px", "42px", "48px", "50px"]}
                        fontWeight={700}
                        lineHeight={["60px", "70px", "70px", "90px"]}
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
                    w={["95vw", "500px"]}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    <ScrollAnimation animateIn='bounceInRight' animateOnce>
                    <Image
                        src={manage}
                        mt={"50px"}
                        w={"400px"}
                        h={"714px"}
                        objectFit={"cover"}
                        borderRadius={"3xl"}
                    />
                    </ScrollAnimation>
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