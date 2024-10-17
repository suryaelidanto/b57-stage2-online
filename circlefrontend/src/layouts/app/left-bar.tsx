import { Follows, Home, HomeOutline, Logo, Profile, Search } from "@/assets";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function LeftBar() {
  const navigate = useNavigate();
  const isActive = false;

  return (
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
            onClick={() => {
              navigate("/");
            }}
            justifyContent={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            variant={"ghost"}
            gap={"16px"}
            _hover={{
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
          >
            {isActive ? (
              <>
                <Image src={Home} w={"24px"} /> <Text color="white">Home</Text>
              </>
            ) : (
              <>
                <Image src={HomeOutline} w={"24px"} />{" "}
                <Text color="white" fontWeight={"bold"}>
                  Home
                </Text>
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              navigate("/search");
            }}
            justifyContent={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            variant={"ghost"}
            gap={"16px"}
            _hover={{
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
          >
            <Image src={Search} w={"24px"} />
            <Text color="white">Search</Text>
          </Button>
          <Button
            onClick={() => {
              navigate("/follows");
            }}
            justifyContent={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            variant={"ghost"}
            gap={"16px"}
            _hover={{
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
          >
            <Image src={Follows} w={"24px"} />
            <Text color="white">Follows</Text>
          </Button>
          <Button
            onClick={() => {
              navigate("/profile");
            }}
            justifyContent={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            variant={"ghost"}
            gap={"16px"}
            _hover={{
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
          >
            <Image src={Profile} w={"24px"} />
            <Text color="white">Profile</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
