"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addAnnouncementSchema } from "../../../schemas/coursesSchema";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ScrollArea } from "@/Components/ui/scroll-area";

const animatedComponents = makeAnimated();
const options = [
  { value: "All Sections", label: "All Sections" },
  { value: "Section 1", label: "Section 1" },
  { value: "Section 2", label: "Section 2" },
];

function AnnouncementPopup({ popUp, onSuccess, editData, isEditMode }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [editorData, setEditorData] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState({
    delayPosting: false,
    allowComments: false,
    mustPostToSeeReplies: false,
    enablePodcast: false,
    allowLinking: false,
  });

  const form = useForm({
    resolver: zodResolver(addAnnouncementSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      titleDescription: "",
      postTo: "",
      attachment: "",
      options: "",
    },
  });

  useEffect(() => {
    if (isEditMode && editData) {
      form.setValue("title", editData.title);
      form.setValue("titleDescription", editData.titleDescription);
      form.setValue("postTo", editData.postTo);
      form.setValue("attachment", editData.attachment);
      setEditorData(editData.titleDescription);
      setSelectedOptions(
        editData.postTo.split(",").map((option) => {
          return options.find((o) => o.value === option);
        })
      );
      if (editData.options) {
        try {
          setCheckboxOptions(JSON.parse(editData.options));
        } catch (error) {
          console.error("Error parsing options:", error);
        }
      }
    }
  }, [isEditMode, editData, form]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    form.setValue("postTo", selected.map((option) => option.value).join(","));
  };

  const handleCheckboxChange = (option) => {
    const newCheckboxOptions = {
      ...checkboxOptions,
      [option]: !checkboxOptions[option],
    };
    setCheckboxOptions(newCheckboxOptions);
    form.setValue("options", JSON.stringify(newCheckboxOptions));
  };

  const onSubmit = (data) => {
    const announcements =
      JSON.parse(localStorage.getItem("announcements")) || [];

    if (isEditMode) {
      const index = announcements.findIndex((ann) => ann.id === editData.id);
      announcements[index] = { ...data, id: editData.id };
    } else {
      data.id = Date.now(); // Assign a unique ID to each announcement
      announcements.push(data);
    }

    localStorage.setItem("announcements", JSON.stringify(announcements));

    form.reset({
      title: "",
      titleDescription: "",
      postTo: "",
      attachment: "",
      options: "",
    });
    onSuccess();
  };

  return (
    <div className="w-full lg:w-[950px] card mx-auto my-4 overflow-hidden">
      <ScrollArea className="h-[500px]">
        <div className="flex justify-between p-4 lg:p-8">
          <p className="text-xl lg:text-3xl">
            {isEditMode ? "Edit Announcement" : "Add Announcement"}
          </p>
          <X className="cursor-pointer" onClick={popUp} />
        </div>
        <hr />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-6 flex flex-col items-center px-4 lg:px-8"
          >
            <div className="flex flex-col gap-4 w-full lg:w-[850px]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Topic Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        data-cy="moduleName-input"
                        placeholder=""
                        className="p-2 lg:p-4 rounded-xl border-[#8e939d] w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="titleDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setEditorData(data);
                          form.setValue("titleDescription", data);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postTo"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Post to
                    </FormLabel>
                    <FormControl>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={options}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attachment"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Attachment
                    </FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        data-cy="moduleName-input"
                        placeholder=""
                        className=" border-[#8e939d]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="options"
                render={() => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Options
                    </FormLabel>
                    <FormControl>
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checkboxOptions.delayPosting}
                            onChange={() =>
                              handleCheckboxChange("delayPosting")
                            }
                          />
                          <p className="text-[#8e939d]">Delay Posting</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checkboxOptions.allowComments}
                            onChange={() =>
                              handleCheckboxChange("allowComments")
                            }
                          />
                          <p className="text-[#8e939d]">
                            Allow users to comment
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checkboxOptions.mustPostToSeeReplies}
                            onChange={() =>
                              handleCheckboxChange("mustPostToSeeReplies")
                            }
                          />
                          <p className="text-[#8e939d]">
                            Users must post before seeing replies
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checkboxOptions.enablePodcast}
                            onChange={() =>
                              handleCheckboxChange("enablePodcast")
                            }
                          />
                          <p className="text-[#8e939d]">Enable podcast feed</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checkboxOptions.allowLinking}
                            onChange={() =>
                              handleCheckboxChange("allowLinking")
                            }
                          />
                          <p className="text-[#8e939d]">Allow linking</p>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 justify-end py-4 w-full lg:w-[850px]">
              <Button
                type="submit"
                className="w-full lg:w-auto rounded border-none text-sm text-white bg-blue-600"
              >
                {isEditMode ? "Update Announcement" : "Publish"}
              </Button>
            </div>
          </form>
        </Form>
      </ScrollArea>
    </div>
  );
}

export default AnnouncementPopup;
