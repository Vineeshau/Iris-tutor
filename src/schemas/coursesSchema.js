import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const addModuleSchema = z.object({
  moduleName: z.string().min(2, {
    message: "Please enter the valid module name.",
  }),
  date: z
    .string()
    .refine((val) => dateRegex.test(val) && !isNaN(new Date(val).getTime()), {
      message: "Please enter a valid date in the format MM-DD-YYYY.",
    }),
});

export const addItemSchema = z.object({
  assignmentType: z.string().min(2, {
    message: "Please select a valid assignment type.",
  }),
  assignmentDescription: z.string().optional(),
});

export const addAnnouncementSchema = z.object({
  title: z.string().min(2, {
    message: "Please give a valid topic.",
  }),
  titleDescription: z.string().optional(),
  postTo: z.string().optional(),
  attachment: z.string().optional(),
  options: z.string().optional(),
});


