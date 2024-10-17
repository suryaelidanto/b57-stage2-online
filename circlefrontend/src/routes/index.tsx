import { AppLayout } from "@/layouts/app/layout";
import { createBrowserRouter } from "react-router-dom";
import { DetailThreadRoute } from "./detail-thread";
import { FollowsRoute } from "./follows";
import { ForgotPasswordRoute } from "./forgot-password";
import { HomeRoute } from "./home";
import { LoginRoute } from "./login";
import { ProfileRoute } from "./profile";
import { RegisterRoute } from "./register";
import { ResetPasswordRoute } from "./reset-password";
import { SearchRoute } from "./search";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/search",
        element: <SearchRoute />,
      },
      {
        path: "/profile",
        element: <ProfileRoute />,
      },
      {
        path: "/follows",
        element: <FollowsRoute />,
      },
      {
        path: "/detail/:id",
        element: <DetailThreadRoute />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
  },

  {
    path: "/reset-password",
    element: <ResetPasswordRoute />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPasswordRoute />,
  },
]);
