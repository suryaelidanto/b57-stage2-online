import { useFindThreads } from "@/services/thread";

export function useHome() {
  const { data: threads } = useFindThreads();

  return {
    threads,
  };
}
