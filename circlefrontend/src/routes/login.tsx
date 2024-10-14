import { Box } from "@chakra-ui/react";
import { LoginForm } from "@/features/auth/login/components/login-form";

export function LoginRoute() {
  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"128px"}>
      <LoginForm />
    </Box>
  );
}
