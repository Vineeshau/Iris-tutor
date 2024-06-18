import React from "react";
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
import { groupSchema } from "../../../schemas/coursesSchema";

function GroupPopup({ popUp, currentGroup, isOpen }) {
  console.log(popUp)
  const form = useForm({
    resolver: zodResolver(groupSchema),
    mode: "onBlur",
    defaultValues: {
      assignmentGroup: currentGroup?.assignmentGroup || "",
    },
  });

  const onSubmit = (data) => {
    let existingGroups =
      JSON.parse(localStorage.getItem("assignmentGroups")) || [];

    if (currentGroup) {
      existingGroups = existingGroups.map((grp) =>
        grp.id === currentGroup.id ? { ...grp, assignmentGroup: data.assignmentGroup } : grp
      );
    } else {
      existingGroups.push({ id: Date.now(), assignmentGroup: data.assignmentGroup });
    }

    localStorage.setItem("assignmentGroups", JSON.stringify(existingGroups));
    form.reset({
      assignmentGroup: "",
    });
    popUp();
  };

  return (
    <div>
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl">{popUp ? "Add" : "Edit" }</p>
        <X className="cursor-pointer" onClick={popUp} />
      </div>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 mt-6 flex flex-col items-center px-4 lg:px-8"
        >
          <div className="flex flex-col gap-4 w-full lg:w-[600px]">
            <FormField
              control={form.control}
              name="assignmentGroup"
              render={({ field }) => (
                <FormItem className="flex flex-col p-10">
                  <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold w-36">
                    Group Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      data-cy="assignmentGroup-input"
                      placeholder="Group Name"
                      className="p-2 lg:p-4 rounded-xl border-2 border-[#CBD5E1] w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
          </div>
          <hr className="w-full" />
          <div className="flex flex-col lg:flex-row justify-end gap-2 w-full mt-4 lg:mt-0 px-4 lg:px-0 p-2">
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
              {currentGroup ? "Edit Group" : "Add Group"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default GroupPopup;
