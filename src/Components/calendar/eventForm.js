import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "../../schemas/eventValidation";
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

function EventForm({
  onSubmit,
  handleCloseDialog,
  currentDate,
  initialData,
  isEdit,
}) {
  const eventForm = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData || { date: currentDate },
  });

  return (
    <Form {...eventForm} className="space-y-8">
      <form
        onSubmit={eventForm.handleSubmit((data) => onSubmit(data, "event"))}
        className="space-y-8"
      >
        <FormField
          control={eventForm.control}
          name="eventtitle"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Unit test" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={eventForm.control}
          name="date"
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
                      : ""
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

        <div className="mb-4 flex space-x-4">
          <FormField
            control={eventForm.control}
            name="from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={eventForm.control}
            name="to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={eventForm.control}
          name="location"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Input Event Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={eventForm.control}
          name="eventcalendar"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Calendar</FormLabel>
              <FormControl>
                <select className="border rounded w-full py-2 px-3" {...field}>
                  <option value="admin@chordify.com">admin@chordify.com</option>
                  <option value="user@chordify.com">user@chordify.com</option>
                </select>
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

export { EventForm };
