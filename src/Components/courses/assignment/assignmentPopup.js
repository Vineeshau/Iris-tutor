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
import { addAssignmentSchema } from "../../../schemas/coursesSchema";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ScrollArea } from "@/Components/ui/scroll-area";

const animatedComponents = makeAnimated();
const assignmentGroupItems = [
  { title: "Assignments" },
  { title: "Assignments2" },
];
const displayGradeItems = [{ title: "Points" }, { title: "Points2" }];
const submissionTypeItems = [
  { title: "No Submission" },
  { title: "Online" },
  { title: "On Paper" },
  { title: "External Tool" },
];
const submissionAttemptsItems = [{ title: "Unlimited" }, { title: "Limited" }];
const options = [
  { value: "Everyone", label: "Everyone" },
  { value: "Section 1", label: "Section 1" },
  { value: "Section 2", label: "Section 2" },
];

function AssignmentPopup({ popUp, assignment, groupName }) {
  const [editorData, setEditorData] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableFromDate, setAvailableFromDate] = useState("");

  const form = useForm({
    resolver: zodResolver(addAssignmentSchema),
    mode: "onBlur",
    defaultValues: assignment || {
      assignmentName: "",
      assignmentDescription: "",
      points: "",
      assignmentGroup: "",
      assignmentGrade: "",
      count: false,
      submissionType: "",
      submissionAttempts: "",
      attemptsNumber: "",
      groupAssignment: false,
      peerReview: false,
      assignTo: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      groupId: "",
    },
  });

  useEffect(() => {
    if (assignment) {
      Object.keys(assignment).forEach((key) => {
        if (key !== "assignTo") {
          form.setValue(key, assignment[key]);
        }
      });

      setEditorData(assignment.assignmentDescription || "");

      const selectedOptions = assignment.assignTo
        ? assignment.assignTo.split(",").map((value) => ({
            value,
            label: value,
          }))
        : [];
      setSelectedOptions(selectedOptions);
    }
  }, [assignment, form]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    form.setValue("assignTo", selected.map((option) => option.value).join(","));
  };

  const onSubmit = (data) => {
    const newAssignment = { ...data, groupName };
    let storedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];

    if (assignment) {
      const index = storedAssignments.findIndex(
        (a) => a.assignmentName === assignment.assignmentName
      );
      if (index !== -1) {
        storedAssignments[index] = newAssignment;
      } else {
        storedAssignments.push(newAssignment);
      }
    } else {
      storedAssignments.push(newAssignment);
    }

    localStorage.setItem("assignments", JSON.stringify(storedAssignments));
    form.reset({
      assignmentName: "",
      assignmentDescription: "",
      points: "",
      assignmentGroup: "",
      assignmentGrade: "",
      count: false,
      submissionType: "",
      submissionAttempts: "",
      attemptsNumber: "",
      groupAssignment: false,
      peerReview: false,
      assignTo: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      groupId: "",
    });
    popUp();
  };

  return (
    <div>
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl font-bold">Assignment</p>
        <X className="cursor-pointer" onClick={popUp} />
      </div>
      <hr />
      <Form {...form}>
        <ScrollArea className="h-[600px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-6 flex flex-col items-center px-4 lg:px-8"
          >
            <div className="flex flex-col gap-4 w-full lg:w-[850px]">
              <FormField
                control={form.control}
                name="assignmentName"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Assignment Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        data-cy="assignmentName-input"
                        placeholder="Assignment Name"
                        className="p-2 lg:p-4 rounded-xl border-2 border-[#CBD5E1] w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignmentDescription"
                render={() => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setEditorData(data);
                          form.setValue("assignmentDescription", data);
                        }}
                        className="border-2 border-[#CBD5E1]"
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="points"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Points
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        data-cy="point-input"
                        placeholder=""
                        className="p-2 lg:p-4 rounded-xl border-2 border-[#CBD5E1] w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignmentGroup"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex flex-col">
                      <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                        Assignment Group
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-[40px] rounded-lg border-2 border-[#CBD5E1] bg-white"
                        >
                          {assignmentGroupItems.map((item, itemIndex) => (
                            <option key={itemIndex} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignmentGrade"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex flex-col">
                      <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                        Display Grade as
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-[40px] rounded-lg border-2 border-[#CBD5E1] bg-white"
                        >
                          {displayGradeItems.map((item, itemIndex) => (
                            <option key={itemIndex} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="count"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex flex-row gap-2 items-center">
                      <FormControl>
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                        />
                      </FormControl>
                      <FormLabel className="text-[#838383] text-xs lg:text-sm">
                        Do not count this assignment towards the final grade
                      </FormLabel>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="submissionType"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex flex-col">
                      <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                        Submission Type
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-[40px] rounded-lg border-2 border-[#CBD5E1] bg-white"
                        >
                          {submissionTypeItems.map((item, itemIndex) => (
                            <option key={itemIndex} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="submissionAttempts"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col">
                    <div className="flex flex-row items-center gap-2 p-5 rounded-xl border-2 border-[gray] w-full">
                      <div className="flex flex-col w-full">
                        <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                          Submission Attempts
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full h-[40px] rounded-lg border-2 border-[#CBD5E1] bg-white"
                          >
                            {submissionAttemptsItems.map((item, itemIndex) => (
                              <option key={itemIndex} value={item.title}>
                                {item.title}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                      </div>
                      <FormField
                        control={form.control}
                        name="attemptsNumber"
                        render={({ field }) => (
                          <FormItem className="w-full flex flex-col">
                            <div className="flex flex-col w-full">
                              <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                                Attempts Number
                              </FormLabel>
                              <FormControl>
                                <input
                                  {...field}
                                  type="number"
                                  className="w-full h-[40px] border-2 border-[#CBD5E1] rounded-lg"
                                />
                              </FormControl>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="groupAssignment"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Group Assignment
                    </FormLabel>
                    <div className="flex flex-row gap-2 items-center p-5 rounded-xl border-2 border-[gray] w-full h-20">
                      <FormControl>
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                        />
                      </FormControl>
                      <FormLabel className="text-[#838383] text-xs lg:text-sm">
                        This is a group assignment
                      </FormLabel>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="peerReview"
                render={({ field }) => (
                  <FormItem className="w-full flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Peer Reviews
                    </FormLabel>
                    <div className="flex flex-row gap-2 items-center p-5 rounded-xl border-2 border-[gray] w-full h-20">
                      <FormControl>
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                        />
                      </FormControl>
                      <FormLabel className="text-[#838383] text-xs lg:text-sm">
                        Require Peer Reviews
                      </FormLabel>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignTo"
                render={({ field }) => (
                  <FormItem className="w-full flex-col">
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Assign
                    </FormLabel>
                    <div className="flex flex-col gap-4 p-5 rounded-xl border-2 border-[gray] w-full">
                      <p className="font-bold">Assign to</p>
                      <FormControl>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={options}
                          value={selectedOptions}
                          onChange={handleSelectChange}
                          className="border border-[#CBD5E1] rounded-xl"
                        />
                      </FormControl>
                      <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                          <div className="flex flex-col">
                            <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                              Due
                            </FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="date"
                                className="border-2 border-[#CBD5E1] rounded-lg h-10"
                              />
                            </FormControl>
                            <FormMessage className="w-full" />
                          </div>
                        )}
                      />
                      <div className="flex flex-row gap-2">
                        <FormField
                          control={form.control}
                          name="availableFrom"
                          render={({ field }) => (
                            <div className="flex flex-col">
                              <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                                Available from
                              </FormLabel>
                              <FormControl>
                                <input
                                  {...field}
                                  type="date"
                                  className="border-2 border-[#CBD5E1] rounded-lg w-56 h-10"
                                  onChange={(e) => {
                                    setAvailableFromDate(e.target.value);
                                    field.onChange(e);
                                  }}
                                />
                              </FormControl>
                              <FormMessage className="w-full" />
                            </div>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="availableUntil"
                          render={({ field }) => (
                            <div className="flex flex-col">
                              <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                                Until
                              </FormLabel>
                              <FormControl>
                                <input
                                  {...field}
                                  type="date"
                                  className="border-2 border-[#CBD5E1] rounded-lg w-56 h-10"
                                  min={availableFromDate || ""}
                                  disabled={!availableFromDate}
                                />
                              </FormControl>
                              <FormMessage className="w-full" />
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <FormMessage className="w-full" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 justify-end py-4 w-full lg:w-[850px]">
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
                save & Publish
              </Button>
            </div>
          </form>
        </ScrollArea>
      </Form>
    </div>
  );
}

export default AssignmentPopup;
