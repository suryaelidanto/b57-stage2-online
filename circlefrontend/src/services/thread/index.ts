import { api } from "@/libs/api";
import { Thread } from "@/types/thread";
import { useQuery } from "@tanstack/react-query";

export function useFindThreads() {
  return useQuery<Thread[]>({
    queryKey: ["threads"],
    queryFn: async () => {
      return (await api.get("/threads")).data;
    },
  });
}
