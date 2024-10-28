import { z } from "zod";

export const loginSchema = z.object({
   email: z.string().email("Email yang bener dong boyy"),
   password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
