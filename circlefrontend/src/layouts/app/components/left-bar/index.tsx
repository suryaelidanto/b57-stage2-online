import { Logo, Logout } from "@/assets";
import { GreenButton } from "@/components/green-button";
import { useAuthStore } from "@/store/auth";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { leftBarMenu } from "../../constants/left-bar.constant";

export function LeftBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearUser } = useAuthStore();

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
          {leftBarMenu.map((menu, index) => (
            <Button
              key={index}
              onClick={() => {
                navigate(menu.path);
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
              {location.pathname === menu.path ? (
                <>
                  <Image src={menu.icon.solid} w={"24px"} />{" "}
                  <Text color="white">{menu.name}</Text>
                </>
              ) : (
                <>
                  <Image src={menu.icon.outline} w={"24px"} />{" "}
                  <Text color="white" fontWeight={"bold"}>
                    {menu.name}
                  </Text>
                </>
              )}
            </Button>
          ))}
          <GreenButton mb={"auto"}>Create Post</GreenButton>
          <Button
            onClick={() => {
              navigate("/login");
              clearUser();
            }}
            marginTop={"270px"}
            justifyContent={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            variant={"ghost"}
            gap={"16px"}
            _hover={{
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
          >
            <Image src={Logout} w={"24px"} /> <Text color="white">Logout</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
