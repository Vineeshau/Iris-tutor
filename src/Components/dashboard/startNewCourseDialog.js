"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/Components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { X } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
 
const newCourseSchema = z.object({
  coursename: z.string().min(1, { message: "Course Name is required" }),
  contentlicense: z.string().min(1, { message: "Content License is required" }),
  publish: z.boolean().optional(),
});
 
export function StartNewCourseDialog() {
  const newcourse = useForm({
    resolver: zodResolver(newCourseSchema),
    defaultValues: {
      coursename: "",
      contentlicense: "",
      publish: false,
    },
  });
 
  const onSubmit = async (data) => {
    try {
      // Handle form submission logic here (e.g., API call)
      console.log("Form data:", data);
      // Reset the form after successful submission
      newcourse.reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
 
  return (
    <AlertDialog className="">
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#3278FF] hover:bg-[#3278FF]-400 text-white hover:text-white px-4 py-2 rounded w-48"
        >
          Start a new course
        </Button>
      </AlertDialogTrigger>
 
      <AlertDialogContent className="max-w-md w-full p-10">
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle>Start a new Course</AlertDialogTitle>
            <AlertDialogCancel className="">
              <X size={20} />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <Form {...newcourse} className="space-y-4" onSubmit={newcourse.handleSubmit(onSubmit)}>
            <FormField
              control={newcourse.control}
              name="coursename"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Course Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Name" {...field} />
                  </FormControl>
                  <FormMessage
                    errors={newcourse.formState.errors}
                    name="coursename"
                  />
                </FormItem>
              )}
            />
 
            <FormField
              control={newcourse.control}
              name="contentlicense"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Content License</FormLabel>
                  <FormControl>
                    <select
                      className="border rounded w-full py-2 px-3"
                      {...field}
                    >
                      <option value="">Select a license</option>
                      <option value="Assignments">License_one</option>
                      <option value="Assignments two">License_two</option>
                    </select>
                  </FormControl>
                  <FormMessage
                    errors={newcourse.formState.errors}
                    name="contentlicense"
                  />
                </FormItem>
              )}
            />
 
            <FormField
              control={newcourse.control}
              name="publish"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="mb-2 block">
                    Make Course Publicly Visible
                  </FormLabel>
                  <FormControl>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        {...field}
                        checked={field.value}
                      />
                      <span className="ml-2">Publicly Visible</span>
                    </label>
                  </FormControl>
                  <FormMessage
                    errors={newcourse.formState.errors}
                    name="publish"
                  />
                </FormItem>
              )}
            />
          </Form>
        </AlertDialogDescription>
        <AlertDialogFooter className="flex justify-end space-x-4">
          <AlertDialogCancel asChild>
            <Button
              variant="secondary"
              className="bg-gray-500 hover:bg-gray-500 text-white hover:text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="primary"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={newcourse.handleSubmit(onSubmit)}
            >
              Create Course
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
 
export default StartNewCourseDialog;
 