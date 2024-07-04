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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
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
    <div
      className="py-20 w-full"
      style={{ backgroundColor: "rgba(246, 212, 160, 0.4)" }}
    >
      <div className="flex justify-center">
        <Card className="flex flex-col border-none shadow-2xl items-center rounded-2xl w-96 lg:w-[450px] shadow-2x gap-6">
          <CardHeader>
            <CardTitle>
              <div className="py-8">
                <Image src="/logo.svg" width={150} height={500} alt="Image" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center">
            <p className="text-2xl font-bold text-[#171A1F]">Sign In</p>
            <Link href="/">
              <div className="w-full lg:w-96 h-11 rounded-xl border border-[#8e939d] flex justify-center items-center text-lg text-[#171A1F]">
                <FcGoogle />
                Sign in with Google
              </div>
            </Link>
            <div className="pt-4">
              <hr className="w-full lg:w-96 border-[#ededed]" />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-[#616161] text-xs font-bold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          data-cy="email-input"
                          placeholder="Your Email"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="w-72 lg:w-96" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col relative">
                      <FormLabel className="text-[#616161] text-xs font-bold">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          data-cy="password-input"
                          placeholder="Password"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      {showPassword ? (
                        <BiSolidShow
                          className="absolute right-4 top-9 transform -translate-y-1/2 text-black text-xl cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <BiSolidHide
                          className="absolute right-4 top-9 transform -translate-y-1/2 text-black text-xl cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                      <FormMessage className="w-72 lg:w-96" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full lg:w-96 rounded border-none text-sm text-white bg-blue-500"
                >
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <Link href="/signup" className="text-[#2279FE] text-base">
              Sign Up
            </Link>
            <Link href="/forgotPassword" className="text-[#2279FE] text-base">
              Having trouble signing in?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Page;
