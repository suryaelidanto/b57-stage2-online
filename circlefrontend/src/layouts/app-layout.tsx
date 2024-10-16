import { Outlet } from "react-router-dom";
import { Avatar, Box, Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Logo, Home, Search, Follows, Profile } from "@/assets";
import { useAuthStore } from "@/store/auth";

export function AppLayout() {
  const { user } = useAuthStore();

  return (
    <Box display={"flex"}>
      <Box
        w={"312.75px"}
        h={"100vh"}
        borderRight={"1px"}
        borderColor={"brand.outline"}
        borderStyle={"solid"}
      >
        <Box marginLeft={"45px"} marginTop={"30px"}>
          <Image src={Logo} w={"135px"} />
          <Box
            display={"flex"}
            flexDirection={"column"}
            marginTop={"40px"}
            w={"252.75px"}
            gap={"6px"}
          >
            <Button
              justifyContent={"flex-start"}
              display={"flex"}
              alignItems={"center"}
              variant={"ghost"}
              gap={"16px"}
              _hover={{
                backgroundColor: "rgba(255,255,255, 0.1)",
              }}
            >
              <Image src={Home} w={"24px"} /> <Text color="white">Home</Text>
            </Button>
            <Button
              justifyContent={"flex-start"}
              display={"flex"}
              alignItems={"center"}
              variant={"ghost"}
              gap={"16px"}
              _hover={{
                backgroundColor: "rgba(255,255,255, 0.1)",
              }}
            >
              <Image src={Search} w={"24px"} />{" "}
              <Text color="white">Search</Text>
            </Button>
            <Button
              justifyContent={"flex-start"}
              display={"flex"}
              alignItems={"center"}
              variant={"ghost"}
              gap={"16px"}
              _hover={{
                backgroundColor: "rgba(255,255,255, 0.1)",
              }}
            >
              <Image src={Follows} w={"24px"} />{" "}
              <Text color="white">Follows</Text>
            </Button>
            <Button
              justifyContent={"flex-start"}
              display={"flex"}
              alignItems={"center"}
              variant={"ghost"}
              gap={"16px"}
              _hover={{
                backgroundColor: "rgba(255,255,255, 0.1)",
              }}
            >
              <Image src={Profile} w={"24px"} />{" "}
              <Text color="white">Profile</Text>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Outlet />
      </Box>

      <Box
        w={"422.25px"}
        h={"100vh"}
        borderLeft={"1px"}
        borderColor={"brand.outline"}
        borderStyle={"solid"}
      >
        <Box margin={"30px"}>
          <Card backgroundColor={"brand.secondary"}>
            <CardBody>
              <Box>
                <Text as="h1" color={"white"}>
                  Email : {user.email}
                </Text>
                <Text as="h1" color={"white"}>
                  Username : {user.username}
                </Text>
                <Text as="h1" color={"white"}>
                  Fullname : {user.profile.fullName}
                </Text>
                <Text as="h1" color={"white"}>
                  Address : {user.profile.address}
                </Text>
                <Avatar
                  src={user.profile.profilePicture}
                  border={"1px solid black"}
                />
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
