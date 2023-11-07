import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
// import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../../component/Navbar/index';
import splash from '../../images/splash.png';
import loan from '../../images/loan.png';
import getloan from '../../images/getloan.png';
import connect from '../../images/connect.png';
import rocket from '../../images/mockrocket.png';
import manage from '../../images/manage.png';
import social from '../../images/social.png';
import wallet from '../../images/wallet.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import "typeface-poppins";
import Footer from '../../component/Footer';

const Home: React.FC = () => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const controls = useAnimation();

    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 100, // Move the element down by 50px
        },
        visible: {
            opacity: 1,
            y: 0, // Move the element back to its original position
            transition: {
                duration: 0.7, // Adjust the animation duration as needed
                ease: 'easeIn'
            },
        },
    };

    const slideInVariants = {
        hidden: {
            x: -500, // Start off-screen to the left
            opacity: 0,
            scale: 0
        },
        visible: {
            x: 0, // Slide to its original position
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1, // Adjust the animation duration as needed
                ease: 'easeOut', // Use a suitable easing function
            },
        },
    };

    const slideInImageVariants = {
        hidden: {
            x: 1000, // Start off-screen to the right
            opacity: 0,
            scale: 0
        },
        visible: {
            x: 0, // Slide to its original position
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1, // Adjust the animation duration as needed
                ease: 'easeOut', // Use a suitable easing function
            },
        },
    };

    useEffect(() => {
        const checkViewport = async () => {
            if (gridRef.current) {
                const element = gridRef.current;
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight && elementBottom > 0) {
                    // If the element is in the viewport, trigger the animation
                    await controls.start('visible');
                }
            }
            if (containerRef.current) {
                const element = containerRef.current;
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight && elementBottom > 0) {
                    // If the element is in the viewport, trigger the animation
                    await controls.start('visible');
                }
            }
            if (imageRef.current) {
                const element = imageRef.current;
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight && elementBottom > 0) {
                    // If the element is in the viewport, trigger the animation
                    await controls.start('visible');
                }
            }
        };

        // Initially, check the viewport to see if the element is already in view
        checkViewport();

        // Add a scroll event listener to check when the user scrolls
        window.addEventListener('scroll', checkViewport);

        return () => {
            // Remove the scroll event listener when the component unmounts
            window.removeEventListener('scroll', checkViewport);
        };
    }, [controls]);


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
                {/* <ScrollAnimation animateIn={'fadeIn'}> */}
                <motion.div
                    ref={gridRef}
                    initial="hidden"
                    animate={controls}
                    variants={animationVariants}
                >
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
                </motion.div>
                {/* </ScrollAnimation> */}
            </Flex>
            <Flex
                mt={["40px", "60px"]}
                px={["2.5vw", "5vw", "5vw", "15vw"]}
                flexDir={["column", "row"]}
                justifyContent={"space-between"}
                mb={"80px"}
            >
                <motion.div
                    ref={containerRef}
                    initial="hidden"
                    animate={controls}
                    variants={slideInVariants}
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
                </motion.div>
                <Flex
                    w={["95vw", "500px"]}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    {/* <ScrollAnimation animateIn='bounceInRight' animateOnce> */}
                    <motion.div
                        ref={imageRef}
                        initial="hidden"
                        animate={controls}
                        variants={slideInImageVariants}
                    >
                        <Image
                            src={rocket}
                            mt={"70px"}
                            w={"400px"}
                            h={"714px"}
                            objectFit={"cover"}
                            borderRadius={"3xl"}
                        />
                    </motion.div>
                    {/* </ScrollAnimation> */}
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
                    {/* <ScrollAnimation animateIn='bounceInLeft' animateOnce> */}
                    <motion.div
                        ref={containerRef}
                        initial="hidden"
                        animate={controls}
                        variants={slideInVariants}
                    >
                        <Image
                            src={getloan}
                            mt={"-40px"}
                            w={"400px"}
                            h={"400px"}
                        // objectFit={"cover"}
                        // borderRadius={"3xl"}
                        />
                    </motion.div>
                    {/* </ScrollAnimation> */}
                </Flex>
                <motion.div
                    ref={imageRef}
                    initial="hidden"
                    animate={controls}
                    variants={slideInImageVariants}
                >
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
                </motion.div>
            </Flex>
            <Flex
                mt={"60px"}
                px={["2.5vw", "5vw", "5vw", "15vw"]}
                flexDir={["column", "row"]}
                justifyContent={["center", "space-between"]}
                mb={"80px"}
            >
                <motion.div
                    ref={containerRef}
                    initial="hidden"
                    animate={controls}
                    variants={slideInVariants}
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
                </motion.div>
                <Flex
                    w={["95vw", "500px"]}
                    bgImage={connect}
                    borderRadius={"20px"}
                    justify={"center"}
                    h={"400px"}
                    overflow={"clip"}
                >
                    {/* <ScrollAnimation animateIn='bounceInRight' animateOnce> */}
                    <motion.div
                        ref={imageRef}
                        initial="hidden"
                        animate={controls}
                        variants={slideInImageVariants}
                    >
                        <Image
                            src={manage}
                            mt={"50px"}
                            w={"400px"}
                            h={"714px"}
                            objectFit={"cover"}
                            borderRadius={"3xl"}
                        />
                    </motion.div>
                    {/* </ScrollAnimation> */}
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