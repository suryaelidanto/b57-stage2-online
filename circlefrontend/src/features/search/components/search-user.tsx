import { Search } from "@/assets";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useSearchUser } from "../hooks/use-search-user";

export function SearchUser() {
  const { register, users, watch } = useSearchUser();

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <Image src={Search} w={"24px"} />
        </InputLeftElement>
        <Input
          placeholder="Search your friend"
          backgroundColor={"brand.secondary.800"}
          color={"white"}
          {...register("search")}
        />
      </InputGroup>

      {!watch("search") ? (
        <Box
          w={"100%"}
          h={"500px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text as="h1" fontWeight={"bold"} fontSize={"lg"} color={"white"}>
            Find someone you love {"<3"}
          </Text>
        </Box>
      ) : (
        <>
          {!users.length ? (
            <Box
              w={"100%"}
              h={"500px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              textAlign={"center"}
            >
              <Box w={"300px"}>
                <Text
                  as="h1"
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  color={"white"}
                >
                  No results for "{watch("search")}"
                </Text>
                <Text color="brand.secondary.500">
                  Try searching for something else or check the spelling of what
                  you typed.
                </Text>
              </Box>
            </Box>
          ) : (
            <>
              {users.map((user) => {
                return (
                  <Box display={"flex"} marginTop={"20px"}>
                    <Box flex={"1"}>
                      <Avatar src={user.profile.profilePicture} />
                    </Box>
                    <Box flex={"5"}>
                      <Text color={"white"}>{user.profile.fullName}</Text>
                      <Text color={"brand.secondary.400"}>
                        @{user.username}
                      </Text>
                      <Text color={"white"}>{user.profile.bio}</Text>
                    </Box>
                    <Button variant={"outline"} color={"white"} flex="1">
                      Follow
                    </Button>
                  </Box>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}
