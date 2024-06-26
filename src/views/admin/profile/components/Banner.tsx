// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import Default from "components/fields/InputField";

export default function Banner(props: {
  banner: string;
  avatar: string;
  name: string;
  job: string;
  posts: number | string;
  followers: number | string;
  following: number | string;
  [x: string]: any;
}) {
  const { banner, avatar, name, job, posts, followers, following, ...rest } =
    props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} alignItems="center" {...rest}>
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
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
        {/* <Default
          mb="10px"
          id="input"
          label="PIXEL CODE"
          placeholder="Add UPI"
          extra={""}
          type="textarea"
        /> */}
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
          placeholder={"placeholder"}
          _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
          h="44px"
          maxH="44px"
        />
      </Flex>
    </Card>
  );
}
