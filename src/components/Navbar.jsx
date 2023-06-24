// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import {Link as ChakraLink, Box, Flex, Text, Wrap, WrapItem, Avatar, Spacer, Image} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' backgroundColor="grey" display={{ base: "none", md: "flex" }} >
           <Box p={2}>
            <Wrap justifyContent="space-between" >
                <WrapItem>
                    <Image boxSize='80px'
    objectFit='cover'  src='https://1.bp.blogspot.com/-YOAq9l9FKgo/XiP2ndcirOI/AAAAAAAABd0/0vzlrIJe-Sg0vcWH1o9APnZFxBhIJEAuACLcBGAsYHQ/s400/Logo%2BUniversitas%2BUdayana%2BBali.png' />
                </WrapItem>
            </Wrap>
            </Box>
            <Box p="5" > 
            <ChakraLink as={Link} to="/" data-testid="home-page" fontWeight="bold" >
               <Text fontSize="md" color="white" _hover={{ color: "silver" }} justifyContent="center">
                Student Portal
                </Text>
            </ChakraLink>
            </Box>
            <Box p="5"> 
            <ChakraLink as={Link} to="/student" data-testid="student-page" fontWeight="bold" >
                <Text fontSize="md" color="white" _hover={{ color: "silver" }} justifyContent="center">
                    All Student
                </Text>
            </ChakraLink>
            </Box>
            <Box p="5">
            <ChakraLink as={Link} to="/add" data-testid="add-page" fontWeight="bold" >
                <Text fontSize="md" color="white" _hover={{ color: "silver" }} justifyContent="center">
                    Add Student
                </Text>
            </ChakraLink>
            </Box>
            <Spacer/>
            <Box p={2} mr={4}>
            <Wrap justifyContent="space-between" >
                <WrapItem>
                    <Avatar  src='https://i.pinimg.com/originals/67/bc/35/67bc35b5e459212ac27101dab2c6ab01.jpg' />
                </WrapItem>
            </Wrap>
            </Box>
            
        </Flex>
    );
};

export default NavBar;
