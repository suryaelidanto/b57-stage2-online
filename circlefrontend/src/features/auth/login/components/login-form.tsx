import { Box, Link as ChakraLink, Image, Input, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { GreenButton } from "@/components/green-button";
import Logo from "@/assets/logo.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

const loginFormSchema = z.object({
  emailOrUsername: z.string().min(3),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = useCallback((data: LoginForm) => {
    // proses bikin ngeleq intinya

    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        width={"305px"}
      >
        <Image src={Logo} width={"100px"} />
        <Text as={"h1"} fontSize={"2xl"} color="white" fontWeight={"bold"}>
          Login to Circle
        </Text>
        <Input
          placeholder="Email/Username"
          {...register("emailOrUsername")}
          color={"white"}
        />

        {errors.emailOrUsername ? (
          <Text as={"span"} color={"red"}>
            {errors.emailOrUsername.message}
          </Text>
        ) : null}

        <Input
          placeholder="Password"
          {...register("password")}
          color={"white"}
        />

        {errors.password ? (
          <Text as={"span"} color={"red"}>
            {errors.password.message}
          </Text>
        ) : null}

        <Box display={"flex"} justifyContent={"flex-end"}>
          <ChakraLink
            as={ReactRouterLink}
            to={"/forgot-password"}
            color="white"
          >
            Forgot Password?
          </ChakraLink>
        </Box>
        <GreenButton type="submit">Login</GreenButton>
      </Box>
    </form>
  );
}
