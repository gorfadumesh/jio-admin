import React from "react";

// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image height={"70px"} p={"10px"} src={"https://www.unlimitedhimalaya.com/back_end/images/logo.png"} alt="" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
