import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LeftBar } from "./left-bar";
import { RightBar } from "./right-bar";

export function AppLayout() {
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
