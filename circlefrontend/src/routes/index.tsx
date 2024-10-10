import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./home";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ProfileRoute } from "./profile";
import { ResetPasswordRoute } from "./reset-password";
import { ForgotPasswordRoute } from "./forgot-password";
import { FollowsRoute } from "./follows";
import { DetailThreadRoute } from "./detail-thread";
import { SearchRoute } from "./search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
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
    path: "/profile",
    element: <ProfileRoute />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordRoute />,
  },
  {
    path: "/search",
    element: <SearchRoute />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordRoute />,
  },
  {
    path: "/follows",
    element: <FollowsRoute />,
  },
  {
    path: "/detail/:id",
    element: <DetailThreadRoute />,
  },
]);
