import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().min(3),
  password: z.string().min(6),
  address: z.string(),
});

export type RegisterForm = z.infer<typeof registerFormSchema>;
