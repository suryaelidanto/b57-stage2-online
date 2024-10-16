export interface User {
  email: string;
  username: string;
  password: string;
  profile: Profile;
}

export interface Profile {
  fullName: string;
  address: string;
  profilePicture: string;
}
