import fakeUser from "@/datas/user.json";
import { useAuthStore } from "@/store/auth";
import { User } from "@/types/user";
import { LoginForm, loginFormSchema } from "@/utils/schemas/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });

  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (data: LoginForm) => {
      const user = fakeUser.find(
        (user) =>
          user.email === data.emailOrUsername ||
          user.username === data.emailOrUsername
      ) as User;

      if (!user) return alert("Email / password is wrong!");

      if (!(user?.password === data.password))
        return alert("Email / password is wrong!");

      user.password = "";
      setUser(user);
      navigate("/");
    },
    [navigate, setUser]
  );

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};
