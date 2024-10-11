import {
  Box,
  Link as ChakraLink,
  Image,
  Input,
  Text
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { GreenButton } from "../../../../components/green-button";
import Logo from "/logo.svg";

export function LoginForm() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"305px"}>
      <Image src={Logo} width={"100px"} />
      <Text as={"h1"} fontSize={"2xl"} color="white" fontWeight={"bold"}>
        Login to Circle
      </Text>
      <Input placeholder="Email/Username" />
      <Input placeholder="Password" />
      <Box display={"flex"} justifyContent={"flex-end"}>
        <ChakraLink as={ReactRouterLink} to={"/forgot-password"} color="white">
          Forgot Password?
        </ChakraLink>
      </Box>
      <GreenButton>    
        Login
      </GreenButton>
    </Box>
  );
}
