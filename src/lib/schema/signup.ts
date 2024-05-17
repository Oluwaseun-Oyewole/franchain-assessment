import { z } from "zod";

export const registerValidationSchema = z.object({
  firstName: z.string().min(4, "First name must be at least 4 characters"),
  lastName: z.string().min(4, "Last name must be at least 4 characters"),
  businessName: z
    .string()
    .min(4, "Business name must be at least 4 characters"),
  workEmail: z.string().email("Invalid email format"),
  password: z
    .string()
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/.test(
          value ?? ""
        ),
      "Password must Contain at least 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export type RegisterFormValues = z.infer<typeof registerValidationSchema>;
