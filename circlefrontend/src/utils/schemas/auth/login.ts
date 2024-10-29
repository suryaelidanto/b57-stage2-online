import { z } from "zod";

export const loginFormSchema = z.object({
  emailOrUsername: z.string().min(3),
  password: z.string().min(6),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
