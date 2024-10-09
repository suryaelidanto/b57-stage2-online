// import HaloGuys, { Hello as HaloBang, Hello3 } from "./components/HelloWorld";

import { MyButton } from "./components/Button";
import { Counter } from "./components/Counter";
import { FormLogin } from "./components/FormLogin";
import { UserCards } from "./components/UserCards";
import { UserList } from "./components/UserList";
import { User } from "./types/user";

function App() {
  const dummyUsers: User[] = [
    {
      fullName: "A",
      address: "B",
      profilePicture: "C",
    },
    {
      fullName: "X",
      address: "Y",
      profilePicture: "Z",
    },
    {
      fullName: "D",
      address: "E",
      profilePicture: "F",
    },
  ];

  return (
    <>
      {/* <Hello3  />
      <HaloBang name="Muhammad Fayakuun" address="Depok" />
      <HaloBang name="Gerald Gunasha" />
      <HaloBang name="Izulsyauki Imani" />
      <HaloGuys name="Test" address="Tangerang" /> */}
      {/* <MyButton
        text="Halo 1"
        onClick={() => {
          alert("Diclick!");
        }}
        onMouseEnter={() => {
          alert("Dilewati cursor!");
        }}
      /> */}
      {/* <UserList users={dummyUsers} /> */}
      {/* <Counter /> */}
      {/* <FormLogin /> */}
      <UserCards />
    </>
  );
}

export default App;
