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
   
  export function StartNewCourseDialog() {
    const newcourse = useForm(); // Move the useForm hook inside the component function
   
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#3278FF] hover:bg-[#3278FF]-400 text-white hover:text-white px-4 py-2 rounded w-48"
          >
            Start a new course
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Start a new course</AlertDialogTitle>
            <AlertDialogDescription>
              <Form {...newcourse} className="space-y-8">
                {/* Course Name Input */}
                <FormField
                  control={newcourse.control}
                  name="coursename"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Course Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Course Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
   
                {/* Content License Dropdown */}
                <FormField
                  control={newcourse.control}
                  name="contentlicense"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Content License</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="form-select mt-1 block w-full"
                        >
                          <option value="">Select a license</option>
                          <option value="license1">License 1</option>
                          <option value="license2">License 2</option>
                          <option value="license3">License 3</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
   
                {/* Make Course Publicly Visible Checkbox */}
                <FormField
                  control={newcourse.control}
                  name="publiclyvisible"
                  render={({ field }) => (
                    <FormItem className="mb-4">
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
   
                {/* Submit and Cancel Buttons */}
                <div className="flex space-x-4">
                  <AlertDialogAction asChild>
                    <button
                      type="submit"
                      className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </AlertDialogAction>
                  <AlertDialogCancel asChild>
                    <button
                      type="button"
                      className="btn btn-secondary bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Cancel
                    </button>
                  </AlertDialogCancel>
                </div>
              </Form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
   
  export default StartNewCourseDialog;