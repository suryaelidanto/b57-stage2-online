import { z } from "zod";

export const registerSchema = z.object({
   name: z.string(),
   email: z.string().email("ini mah bukaaan email cok"),
   password: z.string().min(6, "Password must be at least 6 characters long"),
   address: z.string().optional(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
