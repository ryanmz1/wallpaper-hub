import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/wr-unicorn-two.png";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <HStack justifyContent='space-between' paddingRight='10px'>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <ThemeToggle></ThemeToggle>
    </HStack>
  )
}

export default NavBar