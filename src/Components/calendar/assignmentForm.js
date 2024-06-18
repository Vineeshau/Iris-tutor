import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { assignmentSchema } from "../../schemas/eventValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

function AssignmentForm({
  onSubmit,
  handleCloseDialog,
  currentDate,
  initialData,
  isEdit,
}) {
  const assignmentForm = useForm({
    resolver: zodResolver(assignmentSchema),
    defaultValues: {
      assignmenttitle: initialData?.assignmenttitle || "",
      due: initialData?.due || currentDate,
      assignmentcalendar: initialData?.assignmentcalendar || "",
      group: initialData?.group || "",
      publish: initialData?.publish || false,
    },
  });

  return (
    <Form {...assignmentForm} className="space-y-8">
      <form
        onSubmit={assignmentForm.handleSubmit((data) =>
          onSubmit(data, "assignment")
        )}
        className="space-y-8"
      >
        <FormField
          control={assignmentForm.control}
          name="assignmenttitle"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={assignmentForm.control}
          name="due"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="yyyy-mm-dd"
                  {...field}
                  value={
                    field.value
                      ? new Date(
                          new Date(field.value).getTime() -
                            new Date(field.value).getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .split("T")[0]
                      : new Date(
                          new Date().getTime() -
                            new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .split("T")[0]
                  }
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={assignmentForm.control}
          name="assignmentcalendar"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Calendar</FormLabel>
              <FormControl>
                <select className="border rounded w-full py-2 px-3" {...field}>
                  <option value="Demo course one">Demo course one</option>
                  <option value="Demo course two">Demo course two</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={assignmentForm.control}
          name="group"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Group</FormLabel>
              <FormControl>
                <select className="border rounded w-full py-2 px-3" {...field}>
                  <option value="Assignments">Assignments</option>
                  <option value="Assignments two">Assignments two</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={assignmentForm.control}
          name="publish"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="mb-2 block">Publish</FormLabel>
              <FormControl>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    {...field}
                    checked={field.value}
                  />
                  <span className="ml-2">Publish</span>
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4 justify-end">
          <Button
            type="button"
            onClick={handleCloseDialog}
            className="bg-gray-500 hover:bg-gray-500"
          >
            Cancel
          </Button>
          <Button type="submit">{isEdit ? "Update" : "Submit"}</Button>
        </div>
      </form>
    </Form>
  );
}

export { AssignmentForm };
