import { z } from "zod";

export const accountVerificationSchema = z.object({
  otp: z.string().min(6, "A 6 digit otp code is required"),
});

export type AccountVerificationFormValues = z.infer<
  typeof accountVerificationSchema
>;
