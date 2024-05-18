import { z } from "zod";

export const accountVerificationSchema = z.object({
  otp: z
    .string()
    .min(6, "Enter your 6 characters otp code")
    .max(6, "Your otp code must be 6 characters"),
});

export type AccountVerificationFormValues = z.infer<
  typeof accountVerificationSchema
>;
