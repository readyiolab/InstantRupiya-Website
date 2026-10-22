import { z } from "zod";

export const preparationSchema = z.object({
  needs: z.string().trim().min(10, "Describe your needs in at least 10 characters.").max(600),
  employment: z.enum(["Salaried", "Self-employed", "Other"]),
  amount: z.number().finite().min(1000).max(10000000),
  income: z.number().finite().min(0).max(10000000),
  commitments: z.number().finite().min(0).max(10000000),
  consent: z.literal(true),
}).strict();
export type PreparationInput = z.infer<typeof preparationSchema>;