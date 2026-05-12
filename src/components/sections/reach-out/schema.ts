"use client";
import * as z from "zod/mini";

export const ReachOutSchema = z.object({
    first_name: z.string().check(
        z.minLength(1, "First name is required")
    ),
    last_name: z.string(),
    email: z.string()
        .check(z.minLength(1, "Email is required"))
        .check(z.email("Invalid email format")),
    phone_number: z.string()
        .check(z.minLength(1, "Phone number is required"))
        .check(z.regex(/^\+?\d+$/, "Invalid phone number")),
    message: z.string()
        .check(z.minLength(1, "Message is required"))
        .check(z.maxLength(500, "Message must be less than 500 characters"))
});