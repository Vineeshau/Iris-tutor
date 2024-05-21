import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(2, {
    message: "Please enter the valid name.",
  }),
  email: z.string().email({
    message: "Please enter the valid email.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long.",
    })
    .max(16, {
      message: "Password must be at most 16 characters long.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/, {
      message:
        "Password must contain at least one alphabet, one number, and one special character.",
    }),
});

export const signinSchema = z.object({
  email: z.string().email({
    message: "Please enter the valid email.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long.",
    })
    .max(16, {
      message: "Password must be at most 16 characters long.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/, {
      message:
        "Password must contain at least one alphabet, one number, and one special character.",
    }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter the valid email.",
  }),
});
