import React, { useEffect, useState } from "react";
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
import { Switch } from "@/Components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { addModuleSchema } from "../../../schemas/coursesSchema";

const generateUniqueId = () => {
  // Generate unique ID logic goes here, example:
  return Math.random().toString(36).substring(2, 15);
};

function AddModulePopup({ onClose, onSuccess, initialValues }) {
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    // Simulating setting courseId based on current URL
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const id = pathSegments[pathSegments.length - 1]; // Assuming courseId is the last segment
    setCourseId(id);
  }, []);

  const form = useForm({
    resolver: zodResolver(addModuleSchema),
    mode: "onBlur",
    defaultValues: {
      id: generateUniqueId(),
      moduleName: "",
      lockUntil: false,
      date: "",
      ...initialValues,
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset({
        ...form.getValues(),
        ...initialValues,
      });
    }
  }, [initialValues, form]);

  const onSubmit = (data) => {
    saveModule(data);
  };

  const saveModule = (data) => {
    // Include courseId in module data
    const moduleData = {
      ...data,
      courseId: courseId,
    };

    let modules = JSON.parse(localStorage.getItem("DummyModules")) || [];
    if (initialValues) {
      // Editing existing module
      const index = modules.findIndex((module) => module.id === data.id);
      if (index !== -1) {
        modules[index] = moduleData;
      }
    } else {
      // Adding new module
      modules.push(moduleData);
    }
    localStorage.setItem("DummyModules", JSON.stringify(modules));
    form.reset();
    onSuccess(); // Notify parent component of successful save
  };

  return (
    <div className="w-full lg:w-[784px] card mx-auto my-4 overflow-hidden">
      <div className="flex justify-between p-4 lg:p-8">
        <p className="text-xl lg:text-3xl">
          {initialValues ? "Edit Module" : "Add Module"}
        </p>
        <X className="cursor-pointer" onClick={onClose} />
      </div>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 mt-6 flex flex-col items-center px-4 lg:px-8"
        >
          <div className="flex flex-col gap-4 w-full lg:w-[594px]">
            <FormField
              control={form.control}
              name="moduleName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                    Module Name
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
            <FormItem>
              <Controller
                control={form.control}
                name="lockUntil"
                render={({ field }) => (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      name="lockUntil"
                    />
                    <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                      Lock Until
                    </FormLabel>
                  </div>
                )}
              />
              <FormMessage className="w-full" />
            </FormItem>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#616161] text-xs lg:text-sm font-bold">
                    Date
                  </FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      data-cy="date-input"
                      placeholder=""
                      className="p-2 lg:p-4 border rounded-xl border-[#8e939d] w-full h-[40px]"
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
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full lg:w-auto rounded border-none text-sm text-white bg-blue-600"
            >
              {initialValues ? "Update Module" : "Add Module"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddModulePopup;
