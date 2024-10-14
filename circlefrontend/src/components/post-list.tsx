import { useFetchData } from "@/hooks/use-fetch-data";
import { JSONPlaceholderPost } from "@/types/jsonplaceholder/post";

export function PostList() {
  const { datas: posts, error } = useFetchData<JSONPlaceholderPost>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) return <h1>Oops! Something went wrong!</h1>;

  return (
    <>
      {posts.map((user) => (
        <h1 key={user.id}>{user.body}</h1>
      ))}
    </>
  );
}
