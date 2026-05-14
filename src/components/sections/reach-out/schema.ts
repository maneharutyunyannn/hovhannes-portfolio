"use client";
import * as z from "zod/mini";

export const ReachOutSchema = z.object({
    first_name: z.string().check(
        z.minLength(1, "Անունը պարտադիր է")
    ),
    last_name: z.string(),

    email: z.string()
        .check(z.minLength(1, "Էլ․ փոստը պարտադիր է"))
        .check(z.email("Սխալ էլ․ փոստի ձևաչափ")),

    phone_number: z.string()
        .check(z.minLength(1, "Հեռախոսահամարը պարտադիր է"))
        .check(z.regex(/^\+?\d+$/, "Սխալ հեռախոսահամար")),

    message: z.string()
        .check(z.minLength(1, "Հաղորդագրությունը պարտադիր է"))
        .check(z.maxLength(500, "Հաղորդագրությունը պետք է լինի մինչև 500 նիշ"))
});