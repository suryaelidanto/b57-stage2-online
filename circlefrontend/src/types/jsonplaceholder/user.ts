export type JSONPlaceholderAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JSONPlaceholderAddressGeo;
};

export type JSONPlaceholderAddressGeo = {
  latg: string;
  lng: string;
};

export type JSONPlaceholderCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type JSONPlaceholderUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JSONPlaceholderAddress;
  phone: string;
  website: string;
  company: JSONPlaceholderCompany;
};
