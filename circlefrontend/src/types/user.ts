export interface User {
  email: string;
  username: string;
  password: string;
  profile: Profile;
  followers: number;
  following: number;
}

export interface Profile {
  fullName: string;
  address: string;
  profilePicture: string;
  bio: string;
}
