// Chakra imports
import { Avatar, Box, Flex, FormLabel, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import Default from "components/fields/InputField";
import React from "react";

export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {job}
      </Text>
      {/* <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {posts}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Posts
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Followers
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Following
          </Text>
        </Flex>
      </Flex> */}
      <Flex width={"100%"}>
        <Default
          mb="10px"
          id="input"
          label="PASSWORD"
          placeholder="Password"
          extra={""}
          type="password"
        />
      </Flex>
      <Flex width={"100%"}>
        <Default
          mb="10px"
          id="input"
          label="UPI ID"
          placeholder="Add UPI"
          extra={""}
          type="text"
        />
      </Flex>
      <Flex flexDir={"column"} width={"100%"}>
    
        <FormLabel
          display="flex"
          ms="10px"
          htmlFor={"id"}
          fontSize="sm"
          color={"black"}
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}>
          PIXEL CODE
        </FormLabel>
        <Textarea
          id={"id"}
          fontWeight="500"
          //   variant="main"
          placeholder={"Enter your code here..."}
          _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
          h="44px"
          maxH="44px"
        />
      </Flex>
    </Card>
  );
}
