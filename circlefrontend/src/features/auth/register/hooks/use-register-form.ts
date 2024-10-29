import { api } from "@/libs/api";
// import { useAuthStore } from "@/store/auth";
import { RegisterForm, registerFormSchema } from "@/utils/schemas/auth/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onSubmit",
    resolver: zodResolver(registerFormSchema),
  });

//   const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: RegisterForm) => {
      const { address, email, name, password } = data;

      await api.post<unknown, unknown, RegisterForm>("/register", {
        name,
        address,
        email,
        password,
      });

      navigate("/login");
      alert("Berhasil register!");
    },
    [navigate]
  );

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};
