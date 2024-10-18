import { Box } from "@chakra-ui/react";
import { MyProfile } from "./left-bar/my-profile";
import { Credit } from "./left-bar/credit";
import { SuggestedUser } from "./left-bar/suggested-user";

export function RightBar() {
  return (
    <Box
      w={"422.25px"}
      h={"100vh"}
      borderLeft={"1px"}
      borderColor={"brand.outline"}
      borderStyle={"solid"}
    >
      <MyProfile />
      <SuggestedUser />
      <Credit />
    </Box>
  );
}
