import {
  Follows,
  FollowsOutline,
  Home,
  HomeOutline,
  Profile,
  ProfileOutline,
  Search,
  SearchOutline,
} from "@/assets";
import { LeftBarMenu } from "../types/left-bar";

export const leftBarMenu: LeftBarMenu[] = [
  {
    icon: {
      solid: Home,
      outline: HomeOutline,
    },
    path: "/",
    name: "Home",
  },
  {
    icon: {
      solid: Search,
      outline: SearchOutline,
    },
    path: "/search",
    name: "Search",
  },
  {
    icon: {
      solid: Follows,
      outline: FollowsOutline,
    },
    path: "/follows",
    name: "Follows",
  },
  {
    icon: {
      solid: Profile,
      outline: ProfileOutline,
    },
    path: "/profile",
    name: "Profile",
  },
];
