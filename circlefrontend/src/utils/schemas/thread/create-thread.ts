import { z } from "zod";

export const createThreadSchema = z.object({
  content: z.string().min(3),
  file: z.any(),
});

export type CreateThread = z.infer<typeof createThreadSchema>;
