import { CreatePost } from "@/features/home/components/create-post";
import { ListPost } from "@/features/home/components/list-post";
import { Text } from "@chakra-ui/react";

export function HomeRoute() {
  return (
    <>
      <Text as={"h1"} color="white" fontWeight={"bold"} fontSize={"xl"}>
        Home
      </Text>
      <CreatePost />
      <ListPost />
    </>
  );
}
