import React, { useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { NotebookPen, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Textarea } from "@/Components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addItemSchema } from "../../../schemas/coursesSchema";

const dropdownItems = [
  {
    title: "Assignment",
    list: [
      { title: "Quiz" },
      { title: "File" },
      { title: "Page1" },
      { title: "Discussion" },
      { title: "Page2" },
    ],
    external: [
      {
        item: "External URL",
      },
      {
        item: "External Tool",
      },
    ],
  },
];

function AddItemPopup({ popUp, onAddItem, initialValues, moduleId }) {
  const form = useForm({
    resolver: zodResolver(addItemSchema),
    mode: "onBlur",
    defaultValues: {
      assignmentType: "",
      assignmentDescription: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  const onSubmit = (data) => {
    const itemData = {
      ...data,
      moduleId: moduleId,
      id: initialValues ? initialValues.id : Date.now().toString(),
    };

    onAddItem(itemData);
    form.reset({
      assignmentType: "",
      assignmentDescription: "",
    });
    popUp();
  };

  return (
    <div>
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl">{initialValues ? "Edit Item" : "Add Item"}</p>
        <X className="cursor-pointer" onClick={popUp} />
      </div>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-6 flex flex-col items-center px-4 lg:px-8"
        >
          <div className="flex flex-col gap-4 w-full lg:w-[594px]">
            <FormField
              control={form.control}
              name="assignmentType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex flex-row gap-2 items-center">
                    <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">
                      Add
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full h-[40px] rounded-lg border border-[#CBD5E1] bg-white"
                      >
                        {dropdownItems.map((dropdownGroup, groupIndex) => (
                          <optgroup
                            key={groupIndex}
                            label={dropdownGroup.title}
                          >
                            {dropdownGroup.list.map((item, itemIndex) => (
                              <option
                                key={item.title + itemIndex}
                                value={item.title}
                              >
                                {item.title}
                              </option>
                            ))}
                            <option
                              disabled
                              className="bg-[#CBD5E1] cursor-default"
                            ></option>
                            {dropdownGroup.external.map((item, itemIndex) => (
                              <option
                                key={item.item + itemIndex}
                                value={item.item}
                              >
                                {item.item}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </FormControl>
                  </div>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <NotebookPen />
              <p className="text-sm font-light text-[#0F172A]">
                Select the assignment you want to associate with this module, or
                add an assignment by selecting &quot;Create Assignment&quot;.
              </p>
            </div>
            <FormField
              control={form.control}
              name="assignmentDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="h-[162px] border border-[#9095A0] w-full"
                      placeholder="Assignments"
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
              {initialValues ? "Save Changes" : "Add Item"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddItemPopup;
