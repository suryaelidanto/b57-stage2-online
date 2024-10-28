import { api } from "@/libs/api";
import { Thread } from "@/types/thread";
import { useEffect, useState } from "react";

export function useHome() {
  const [threads, setThreads] = useState<Thread[]>([]);

  async function getThreads() {
    const response = await api.get("/threads");
    setThreads(response.data);
  }

  useEffect(() => {
    getThreads();
  }, []);

  return {
    threads,
  };
}
