import { z } from "zod";
 
const eventSchema = z
  .object({
    eventtitle: z.string().min(1, { message: "Title is required" }),
    date: z.string(),
    from: z.string().min(1, { message: "From is required" }),
    to: z.string().min(1, { message: "To is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    eventcalendar: z.string().min(1, { message: "Calendar is required" }),
  })
  .refine((data) => data.to > data.from, {
    message: "To time must be greater than From time",
    path: ["to"],
  });
 
const assignmentSchema = z.object({
  assignmenttitle: z.string().min(1, { message: "Title is required" }),
  due: z
    .string()
    .min(1, { message: "Date is required" })
    .nullable()
    .refine(
      (value) => {
        if (!value) return false; // Require a value
        const selectedDate = new Date(value);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return selectedDate >= currentDate;
      },
      { message: "Date must be today or a future date" }
    ),
  assignmentcalendar: z.string().min(1, { message: "Calendar is required" }),
  group: z.string().min(1, { message: "Group is required" }),
  publish: z.boolean(),
});
 
export { eventSchema, assignmentSchema };