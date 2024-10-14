import { Button, ButtonProps } from "@chakra-ui/react";

export function GreenButton({ children, ...rest }: ButtonProps) {
  return (
    <Button
      backgroundColor={"brand.primary.400"}
      color="white"
      _hover={{
        backgroundColor: "brand.primary.500",
      }}
      _active={{
        backgroundColor: "brand.primary.800",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
