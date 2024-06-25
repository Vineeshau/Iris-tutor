import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/Components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/Components/ui/alert-dialog";

const newCourseSchema = z.object({
  coursename: z.string().min(1, { message: "Course Name is required" }),
  contentlicense: z.string().min(1, { message: "Content License is required" }),
  publish: z.boolean().optional(),
  image: z.any().optional(),
  duration: z.enum(["2 hours", "3 hours", "4 hours", "5 hours", "6 hours"]),
});

function StartNewCourseDialog({ popUp }) {
  const [showAlert, setShowAlert] = useState(false);
  const newcourse = useForm({
    resolver: zodResolver(newCourseSchema),
    defaultValues: {
      coursename: "",
      contentlicense: "",
      publish: false,
      image: "",
      duration: "",
    },
  });

  const onSubmit = (data) => {
    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        data.image = reader.result;
        saveCourse(data);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    } else {
      saveCourse(data);
    }
  };

  const saveCourse = (data) => {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push(data);
    localStorage.setItem("courses", JSON.stringify(courses));
    newcourse.reset();
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    popUp();
  };

  return (
    <div>
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl font-bold">Start a new course</p>
        <X className="cursor-pointer" onClick={popUp} />
      </div>
      <hr />
      <Form {...newcourse}>
        <form
          onSubmit={newcourse.handleSubmit(onSubmit)}
          className="space-y-6 mt-6 flex flex-col items-center px-4 lg:px-8"
        >
          <div className="flex flex-col gap-2 w-full lg:w-[594px]">
            <FormField
              control={newcourse.control}
              name="coursename"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                    Course Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Course Name"
                      {...field}
                      className="p-2 lg:p-4 rounded-xl border-[#8e939d] w-full"
                    />
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
                      <option value="License_one">License_one</option>
                      <option value="License_two">License_two</option>
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
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col mb-6">
                  <FormLabel>Image Upload</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage
                    errors={newcourse.formState.errors}
                    name="image"
                  />
                </FormItem>
              )}
            />

            <FormField
              control={newcourse.control}
              name="duration"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <select
                      className="border rounded w-full py-2 px-3"
                      {...field}
                    >
                      <option value="">Select duration</option>
                      <option value="2 hours">2 hours</option>
                      <option value="3 hours">3 hours</option>
                      <option value="4 hours">4 hours</option>
                      <option value="5 hours">5 hours</option>
                      <option value="6 hours">6 hours</option>
                    </select>
                  </FormControl>
                  <FormMessage
                    errors={newcourse.formState.errors}
                    name="duration"
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
          </div>
          <hr className="w-full" />
          <div className="flex flex-col lg:flex-row justify-end gap-2 w-full mt-4 lg:mt-0 px-4 lg:px-0 p-4">
            <Button
              type="button"
              variant="outline"
              className="w-full lg:w-auto rounded text-sm border-black"
              onClick={popUp}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full lg:w-auto rounded border-none text-sm text-white bg-blue-600"
            >
              Create Course
            </Button>
          </div>
        </form>
      </Form>

      {showAlert && (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Course Added Successfully</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              Your new course has been added successfully!
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction onClick={closeAlert}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}

export default StartNewCourseDialog;
