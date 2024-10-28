import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LeftBar } from "./components/left-bar";
import { RightBar } from "./components/right-bar";

export function AppLayout() {
  //TODO: make check for token from cookies

  return (
    <Box display={"flex"}>
      <LeftBar />

      <Box w={"561px"} p={"30px"}>
        <Outlet />
      </Box>

      <RightBar />
    </Box>
  );
}
