"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
import { FormEvent } from "react"
import React, { useEffect } from 'react';
import { useRouter } from "next/router"
import { redirect } from "next/navigation"

const FormSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "password cannot be empty",
    })
})

export function LoginComponent() {
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const  onSubmit = async (e:FormEvent<HTMLFormElement>, data: z.infer<typeof FormSchema>) => {
        e.preventDefault(); 
        // console.log(data);
        // form.trigger();
        const loginResponse = await signIn("credentials", { email: data.email, password: data.password, redirect: false});
        if(loginResponse?.ok) {
            console.log(`--- Login Response -- : ${JSON.stringify(loginResponse, null, 2)}`);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={(e) => onSubmit(e, form.getValues())} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}


