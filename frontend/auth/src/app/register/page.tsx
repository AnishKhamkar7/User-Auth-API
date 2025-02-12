"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Mail, User, Lock } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8, "Password should be minimum 8 characters."),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: undefined,
      email: undefined,
      password: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <div className=" bg-gray-200 p-6 rounded-lg max-w-md mx-auto mt-20 items-center">
      <h3 className="text-2xl mb-4 text-center">Register</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>

                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="hover:border-gray-400 transition-all duration-300 cursor-pointer"
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
                <FormLabel className="flex gap-3 items-center">
                  <Mail />
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="JohnDoe@123.com"
                    className="hover:border-gray-400 transition-all duration-300 cursor-pointer"
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
              <FormItem>
                <FormLabel className="flex gap-3 items-center">
                  <Lock />
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Don't see me"
                    className="hover:border-gray-400 transition-all duration-300 cursor-pointer"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-start">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
