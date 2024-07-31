"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
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
import { signinSchema } from "../../schemas/validate";

function Page() {
  const form = useForm({
    resolver: zodResolver(signinSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    form.reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8F3FA] py-8 md:py-16">
      <div className="w-full max-w-md px-4">
        <Card className="flex flex-col border-none shadow-lg rounded-lg">
          <CardHeader className="text-center py-6">
            <div className="flex justify-center">
              <Image
                src="/iris_logo.svg"
                width={80}
                height={80}
                alt="IrisTutor Logo"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center px-8">
            <h1 className="text-2xl font-bold text-[#171A1F] mb-4">Login</h1>
            <Button className="w-full mb-4 bg-white border border-gray-300 text-black flex items-center justify-center gap-2 hover:bg-gray-100">
              <FcGoogle />
              Sign in with Google
            </Button>

            <p className="text-gray-600 mb-4">or use your email account</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 pr-10"
                            {...field}
                          />
                          <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <BiSolidShow className="text-xl text-gray-700" />
                            ) : (
                              <BiSolidHide className="text-xl text-gray-700" />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Link
                  href="/forgotPassword"
                  className="text-sm text-blue-500 self-end"
                >
                  Forgot Password?
                </Link>
                <Button
                  type="submit"
                  className="w-full bg-[#22577A] text-white py-2 rounded-md hover:bg-[#22577A]"
                >
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 pb-4">
            <p className="text-gray-600">Do you have an account?</p>
            <Link href="/signup" className="text-blue-500">
              Sign Up!
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Page;
