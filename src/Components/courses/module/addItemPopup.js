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
import { z } from "zod";

// Update the schema to include the new fields
const addItemSchema = z.object({
  content: z.string().min(1, "Content is required"),
  description: z.string().min(1, "Description is required"),
  imageOrFile: z.string().optional(), // Assuming it will be a file URL
  videoLink: z.string().optional(),
  videoFile: z.string().optional(), // Assuming it will be a video URL
});

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

function AddItemPopup({ onClose, moduleId, initialValues }) {
  const form = useForm({
    resolver: zodResolver(addItemSchema),
    mode: "onBlur",
    defaultValues: {
      content: "",
      description: "",
      imageOrFile: "",
      videoLink: "",
      videoFile: "",
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

    // Retrieve existing moduleDetails from local storage
    const existingModuleDetails = JSON.parse(localStorage.getItem("moduleDetails")) || [];
    // Add the new itemData to the moduleDetails
    existingModuleDetails.push(itemData);
    // Store updated moduleDetails in local storage
    localStorage.setItem("moduleDetails", JSON.stringify(existingModuleDetails));

    form.reset({
      content: "",
      description: "",
      imageOrFile: "",
      videoLink: "",
      videoFile: "",
    });
    onClose();
  };

  return (
    <div>
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl">{initialValues ? "Edit Item" : "Add Item"}</p>
        <X className="cursor-pointer" onClick={onClose} />
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
              name="content"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">Label</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[100px] border border-[#CBD5E1] w-full"
                      placeholder="Content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[100px] border border-[#CBD5E1] w-full"
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageOrFile"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">Upload Image or File</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      className="w-full h-[40px] rounded-lg border border-[#CBD5E1] bg-white"
                      onChange={(e) => field.onChange(e.target.files[0]?.name || "")}
                    />
                  </FormControl>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videoLink"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">Video Link</FormLabel>
                  <FormControl>
                    <input
                      type="url"
                      className="w-full h-[40px] rounded-lg border border-[#CBD5E1] bg-white"
                      placeholder="Video Link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="w-full" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videoFile"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#565E6C] text-base font-normal lg:text-base">Upload Video</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      className="w-full h-[40px] rounded-lg border border-[#CBD5E1] bg-white"
                      onChange={(e) => field.onChange(e.target.files[0]?.name || "")}
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
              onClick={onClose}
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
