import { RegisterForm } from "@/features/auth/register/components/register-form";
import { Box } from "@chakra-ui/react";

export function RegisterRoute() {
  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"128px"}>
      <RegisterForm />
    </Box>
  );
}
