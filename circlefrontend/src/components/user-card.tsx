import { useFetchData } from "@/hooks/use-fetch-data";
import { JSONPlaceholderUser } from "@/types/jsonplaceholder/user";

export function UserCards() {
  const { datas: users, error } = useFetchData<JSONPlaceholderUser>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error) return <h1>Oops! Something went wrong!</h1>;

  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>{user.email}</h1>
      ))}
    </>
  );
}
