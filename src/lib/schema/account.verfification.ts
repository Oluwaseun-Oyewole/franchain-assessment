import { z } from "zod";

export const accountVerificationSchema = z.object({
  otp: z
    .string()
    .min(6, "Enter your 6 digits otp code is required")
    .max(6, "Your OTP must be 6 digits"),
});

export type AccountVerificationFormValues = z.infer<
  typeof accountVerificationSchema
>;
