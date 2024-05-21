import { z } from "zod";

 export const contactusSchema = z.object({
    fullName: z.string().min(2, {
      message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    phoneNumber: z.string().min(10, {
      message: "Phone number must be at least 10 digits.",
    }),
    companyName: z.string().min(2, {
      message: "Company name must be at least 2 characters.",
    }),
    companySize: z.string().min(1, {
      message: "Please specify company size.",
    }),
    message: z.string().min(2, {
      message: "Message must be at least 2 characters.",
    }),
  });