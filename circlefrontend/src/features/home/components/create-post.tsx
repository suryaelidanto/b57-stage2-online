import { GalleryAdd } from "@/assets";
import { GreenButton } from "@/components/green-button";
import { api } from "@/libs/api";
import { useAuthStore } from "@/store/auth";
import {
  CreateThread,
  createThreadSchema,
} from "@/utils/schemas/thread/create-thread";
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
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export function CreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit } = useForm<CreateThread>({
    mode: "onSubmit",
    resolver: zodResolver(createThreadSchema),
  });

  const { ref: fileRef, ...registerFile } = register("file");

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation<boolean, Error, CreateThread>({
    mutationKey: ["threads"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("file", data.file[0]);

      return await api.post("/threads", formData);
    },
    onError: () => {
      alert("Post Thread Failed!")
    },
    onSuccess: () => {
      alert("Post Thread Success!")
      queryClient.invalidateQueries({
        queryKey: ["threads"]
      })
    }
  });

  async function onSubmit(data: CreateThread) {
    await mutateAsync(data);
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <Input
                  placeholder="What is happening?!"
                  color={"white"}
                  {...register("content")}
                />
              </Box>
              <Divider />
            </ModalBody>

            <ModalFooter backgroundColor={"brand.background"} display={"flex"}>
              <Input
                type="file"
                hidden
                ref={(e) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (inputFileRef as any).current = e;
                  fileRef(e);
                }}
                {...registerFile}
              />
              <Button
                variant={"ghost"}
                onClick={() => {
                  inputFileRef.current?.click();
                }}
              >
                <Image src={GalleryAdd} w="24px" />
              </Button>
              <Spacer />
              <GreenButton type="submit">{isPending ? "Loading..." : "Post"}</GreenButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
