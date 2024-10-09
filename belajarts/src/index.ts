// PRIMITIVE DATA TYPES

// const age: number = 25;
// const fullName: string = "Naruto";
// const isStudent: boolean = true;

// UNKNOWN VS ANY

// const vAny: any = 10;
// const vUnknown: unknown = 10;

// const data1 : string = vAny
// const data2: number = vUnknown as number
// const data3: string = vUnknown as string

// vAny.hahahaha()
// vUnknown.hahahah()

// UNION DAN INTERSECTION

// union
// let numberOrString: string | number | boolean = "asdasd";
// numberOrString = true;

// type A = {
//   username: string;
//   age?: number;
// };

// type B = {
//   fullName: string;
// };

// intersection
// type C = A & B;

// const user: A = {
//   age: 25,
//   username: "naruto",
// };

// const user2: B = {
//   fullName: "sasuke",
// };

// const user3: C = {
//   fullName: "naruto",
//   username: "@naruto",
// };

// LITERAL TYPES
// type Direction = "left" | "right";

// const direction1: Direction = "right";
// const direction2: Direction = "left";

// ENUM
// enum Color {
//   Red = "Red",
//   Green = "Green",
//   Blue = "Blue",
//   Yellow = "Yellow",
//   Black = "Black",
//   White = "White",
//   Aqua = "Aqua"
// }

// let color: Color = Color.Aqua;
// console.log(color);

// INTERFACE
// interface User {
//   name: string;
//   age: number;
// }

// let user1: User = {
//   name: "A",
//   age: 30,
// };

// TYPE ALIASES
// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "B",
//   age: 35,
// };

// EXTENDING INTERFACE
// interface User {
//   name?: string;
//   email: string;
//   password: string;
// }

// interface Profile {
//   age?: number;
//   image?: string;
//   birthDate?: Date;
//   address: string;
// }

// interface UserProfile extends User, Profile {
//   isVerified: boolean;
// }

// const user : User = {

// }

// const profile : Profile = {

// }

// const userProfile: UserProfile = {

// };

// EXTENDING TYPE ALIASES

// type User = {
//   name?: string;
//   email: string;
//   password: string;
// };

// type Profile = {
//   image?: string;
//   age?: number;
//   birthDate?: Date;
//   address: string;
// };

// type UserProfile = User &
//   Profile & {
//     isVerified: boolean;
//   };

//   const user: User = {

//   }

//   const profile : Profile = {

//   }

//   const userProfile : UserProfile = {

//   }
