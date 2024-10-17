import { BGProfileCover } from "@/assets";
import { useAuthStore } from "@/store/auth";
import { Avatar, Box, Button, Card, CardBody, Text } from "@chakra-ui/react";

export function RightBar() {
  const { user } = useAuthStore();

  return (
    <Box
      w={"422.25px"}
      h={"100vh"}
      borderLeft={"1px"}
      borderColor={"brand.outline"}
      borderStyle={"solid"}
    >
      <Box margin={"30px"}>
        <Card backgroundColor={"brand.secondary.800"}>
          <CardBody>
            <Box>
              <Box
                backgroundImage={BGProfileCover}
                w={"100%"}
                height="75px"
                position={"relative"}
              >
                <Avatar
                  bottom={"-5"}
                  left={"3"}
                  position={"absolute"}
                  src={user.profile.profilePicture}
                  border={"1px solid black"}
                />
              </Box>
              <Box mt={"20px"} display={"flex"} justifyContent={"flex-end"}>
                <Button variant={"outline"} color={"white"} fontSize={"sm"}>
                  Edit Profile
                </Button>
              </Box>
              <Box>
                <Text
                  as="h1"
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={"xl"}
                >
                  {user.profile.fullName}
                </Text>
                <Text as="h1" color={"brand.secondary.500"}>
                  @{user.username}
                </Text>
                <Text as="h1" color={"white"}>
                  {user.profile.bio}
                </Text>
                <Box display={"flex"} gap="20px" mt="10px">
                  <Text as="h1" color={"white"}>
                    <Text as="span" fontWeight={"bold"}>
                      {user.following}
                    </Text>
                    Following
                  </Text>
                  <Text as="h1" color={"white"}>
                    <Text as="span" fontWeight={"bold"}>
                      {user.followers}
                    </Text>
                    Followers
                  </Text>
                </Box>
              </Box>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
