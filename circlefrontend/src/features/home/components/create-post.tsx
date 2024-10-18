import { GalleryAdd } from "@/assets";
import { GreenButton } from "@/components/green-button";
import { useAuthStore } from "@/store/auth";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Spacer,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";



export function CreatePost() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useAuthStore();
    const inputFileRef = useRef<HTMLInputElement>(null);
  
    return (
        <>
        <Box
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
        onClick={onOpen}
      >
        <Avatar src={user.profile.profilePicture} border={"2px solid white"} />
        <Text color={"brand.secondary.500"}>What is happening?!</Text>
        <Spacer />
        <Image src={GalleryAdd} w="24px" />
        <GreenButton disabled>Post</GreenButton>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={"white"} />
          <ModalBody backgroundColor={"brand.background"}>
            <Box
              display={"flex"}
              paddingY={"50px"}
              gap="5px"
              alignItems={"center"}
            >
              <Avatar
                src={user.profile.profilePicture}
                border={"2px solid white"}
              />
              <Input placeholder="What is happening?!" />
            </Box>
            <Divider />
          </ModalBody>

          <ModalFooter backgroundColor={"brand.background"} display={"flex"}>
            <Input type="file" hidden ref={inputFileRef} />
            <Button
              variant={"ghost"}
              onClick={() => {
                inputFileRef.current?.click();
              }}
            >
              <Image src={GalleryAdd} w="24px" />
            </Button>
            <Spacer />
            <GreenButton disabled>Post</GreenButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}