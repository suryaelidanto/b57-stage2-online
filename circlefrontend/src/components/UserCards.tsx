import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function UserCards() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // mounting
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUsers(result));
  }, []);

  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>{user.email}</h1>
      ))}
    </>
  );
}
