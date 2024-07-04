"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { contactusSchema } from "../../schemas/contactusSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUsPage = () => {
  const form = useForm({
    resolver: zodResolver(contactusSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    form.reset({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companySize: "",
      message: "",
    });
  };

  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    form.setValue("phoneNumber", value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div
      className="flex justify-center items-center h-full py-20"
      style={{ backgroundColor: "rgba(246, 212, 160, 0.4)" }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Contact Form</h2>
          <p className="text-2xl font-normal text-center">
            Let&apos;s Connect and Explore New Possibilities
          </p>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="custom-input"
                    data-cy="full-name-input"
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
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    data-cy="email-input"
                    placeholder="Enter your email"
                    {...field}
                    className="custom-input"
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
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"us"}
                    value={field.value}
                    onChange={(value) => {
                      handleChange(value);
                      field.onChange(value);
                    }}
                    inputProps={{
                      required: true,
                      className:
                        "w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring focus:ring-blue-200 font-sans",
                      "data-cy": "phone-input",
                    }}
                    containerStyle={{ marginTop: "8px" }}
                    placeholder={field.value ? "" : "        Phone number"}
                  />
                </FormControl>
                {!valid && (
                  <FormMessage name="phoneNumber">
                    Please enter a valid phone number.
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Company Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your company name"
                    data-cy="company-name-input"
                    {...field}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Company Size *</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <select
                      {...field}
                      className="w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring focus:ring-blue-200 font-sans"
                      data-cy="company-size-select" // Add your data-cy attribute here
                    >
                      <option value="">Select Company Size</option>
                      <option value="11-50">11 to 50</option>
                      <option value="51-200">51 to 200</option>
                      <option value="201-500">201 to 500</option>
                      <option value="501-1000">501 to 100</option>
                      <option value="1001-5000">1001 to 5000</option>
                      <option value="5001-10000">5001 to 10000</option>
                      <option value="10001 +">10001 +</option>
                    </select>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your message"
                    data-cy="message-input"
                    {...field}
                    style={{ height: "120px" }}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsPage;
