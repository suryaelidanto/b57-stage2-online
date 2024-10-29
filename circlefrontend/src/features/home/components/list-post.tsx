import { Box, Text } from "@chakra-ui/react";
import { useHome } from "../hooks/use-home";

export function ListPost() {
  const { threads } = useHome();

  return (
    <Box>
      {threads?.map((thread, index) => {
        return (
          <Box key={index}>
            <Text color={"white"}>Content : {thread.content}</Text>
            <Text color={"white"}>File : {thread.file} </Text>
          </Box>
        );
      })}
    </Box>
  );
}
