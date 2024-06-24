import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const addModuleSchema = z.object({
  id: z.string().optional(),
  moduleName: z.string().min(2, {
    message: "Please enter the valid module name.",
  }),
  lockUntil: z.boolean().optional(),
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

export const addAssignmentSchema = z.object({
  assignmentName: z.string().nonempty("Assignment name is required"),
  assignmentDescription: z.string().optional(),
  points: z.string().nonempty("Points is required"),
  assignmentGroup: z.string().nonempty("Assignment group is required"),
  assignmentGrade: z.string().nonempty("Assignment grade is required"),
  count: z.boolean(),
  submissionType: z.string().nonempty("Submission type is required"),
  submissionAttempts: z.string().nonempty("Submission attempts is required"),
  attemptsNumber: z.string().optional(),
  groupAssignment: z.boolean(),
  peerReview: z.boolean(),
  assignTo: z.string(),
  groupId: z.string().optional(),
  dueDate: z
    .string()
    .nonempty("Due date is required")
    .refine(
      (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return selectedDate >= currentDate;
      },
      { message: "Date must be today or a future date" }
    ),
  availableFrom: z
    .string()
    .nonempty("Available from is required")
    .refine(
      (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return selectedDate >= currentDate;
      },
      { message: "Date must be today or a future date" }
    ),
  availableUntil: z
    .string()
    .nonempty("Avilable date is required")
    .refine(
      (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return selectedDate >= currentDate;
      },
      { message: "Date must be today or a future date" }
    ),
});

export const groupSchema = z.object({
  assignmentGroup: z.string().min(2, {
    message: "Please give a valid group name.",
  }),
});

export const addDiscussionSchema = z.object({
  title: z.string().min(2, {
    message: "Please give a valid topic.",
  }),
  titleDescription: z.string().optional(),
  postTo: z.string().optional(),
  attachment: z.string().optional(),
  options: z.string().optional(),
});
