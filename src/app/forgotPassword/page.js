"use client";

import React from "react";
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
import { forgotPasswordSchema } from "../../schemas/validate";

function Page() {
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    form.reset({
      email: "",
    });
  };

  return (
    <div className="py-20 w-full">
      <div className="flex justify-center">
        <Card className="flex flex-col border-none shadow-2xl items-center rounded-2xl w-96 lg:w-[450px] shadow-2x gap-2">
          <CardHeader>
            <CardTitle>
              <div className="py-8">
                <Image src="/logo.svg" width={150} height={500} alt="Image" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center">
            <p className="text-2xl font-bold text-[#171A1F]">Forgot Password</p>
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
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="p-4 rounded-xl border-[#8e939d]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="w-72 lg:w-96" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full lg:w-96 rounded border-none text-sm text-white"
                >
                  Recover password
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Page;
