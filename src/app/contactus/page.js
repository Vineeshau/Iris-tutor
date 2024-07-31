"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

// Define the validation schema using Zod
const forgotPasswordSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phoneNumber: z.string()
    .optional()
    .refine(value => value === undefined || value.length >= 10, "Phone number should be at least 10 digits"),
  message: z.string().nonempty("Message is required"),
});

function Page() {
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8F3FA] py-8 md:py-16">
      <div className="w-full max-w-md px-4">
        <Card className="flex flex-col border-none shadow-2xl items-center rounded-2xl w-full max-w-xl lg:max-w-3xl xl:max-w-5xl shadow-2x gap-2">
          <CardHeader>
            <CardTitle className="text-3xl font-medium text-[#171A1F]">
              Get in touch with us!
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-6 w-full"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Last Name"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Message"
                          data-cy="message-input"
                          {...field}
                          style={{ height: "120px" }}
                          className="custom-input w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="w-full lg:w-96 mx-auto border-none text-sm text-white bg-[#22577A] hover:bg-[#22577A] rounded-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4"></CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Page;
