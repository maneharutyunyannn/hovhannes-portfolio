'use client'
import sendFeedbackMessageAction from "@/lib/action/sendFeedbackMessageAction";
import {useActionState, useEffect} from "react";
import {ReachOutSchema as schema} from "@/components/sections/reach-out/schema";

import {toast} from "sonner"
import {useForm} from 'react-hook-form'

import {zodResolver} from "@hookform/resolvers/zod";
import {FieldGroup, FieldSet} from "@/components/shadcn-ui/field";
import {Spinner} from "@/components/shadcn-ui/spinner";
import {Text} from "@/components/ui/form/text";
import {Textarea} from "@/components/ui/form/textarea";
import {Button} from "@/components/shadcn-ui/button";
import {cn} from "@/lib/utils";

import {Heading} from "@/components/ui/heading";
import {Mail, Phone, MapPin} from "lucide-react";

export function ReachOutSection() {
    const notifySuccess = () =>
        toast.success("Your message has been sent successfully! We will get back to you shortly.");
    const notifyError = () =>
        toast.error("Oops! Something went wrong. Please try sending your message again.");

    const [state, formAction, pending] = useActionState(sendFeedbackMessageAction, null);

    const form = useForm({
        disabled: pending,
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            message: ""
        },
    });

    useEffect(() => {
        if (!pending && state?.success === true) {
            notifySuccess();
            form.reset();
        }
        if (!pending && state?.success === false) {
            notifyError();
        }
    }, [pending, state]);

    const {isValid} = form.formState;

    return (
        <section className="px-5 md:px-20 py-4 md:py-10" id="reach-out">
            <Heading as="h2" className="text-[#18120E] ">Հետադարձ կապ</Heading>

            <div className="flex flex-col md:flex-row">
                <div className="flex-1 pb-4 md:pb-0">
                    <div className="space-y-6 pt-6 md:pt-14">
                        <div className="flex gap-2">
                            <Mail width={15} height={15}/>
                            <div className="flex flex-col items-start">
                                <span
                                    className="block font-semibold text-[#18120E] text-center text-[16px] leading-[16px]">
                                    Էլ․ փոստ
                                </span>
                                <span className="block">hovoh9911@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Phone width={15} height={15}/>
                            <div className="flex flex-col items-start">
                            <span
                                className="block font-semibold text-[#18120E] text-center text-[16px] leading-[16px]">Հեռախոսահամար</span>
                                <span className="block">+374 41 044 410</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <MapPin width={15} height={15}/>
                            <div className="flex flex-col items-start">
                            <span
                                className="block font-semibold text-[#18120E] text-center text-[16px] leading-[16px]">Գտնվելու վայր
</span>
                                <span className="block">Երևան, Հայաստան</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <form
                        action={formAction}
                        className="p-8 border border-[#18120E] rounded-lg"
                    >
                        <FieldGroup className="gap-[17px] md:gap-6 max-w-[600px]">
                            <FieldSet className="text-[#000E21]">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                                    <Text
                                        inputClassName="h-12"
                                        className="gap-2"
                                        name="first_name"
                                        label="Անուն"
                                        required
                                        control={form.control}
                                    />
                                    <Text inputClassName="h-12"
                                          className="gap-2"
                                          name="last_name"
                                          label="Ազգանուն"
                                          control={form.control}
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                                    <Text inputClassName="h-12 "
                                          className="gap-2"
                                          name="email"
                                          label="Էլ․ փոստ"
                                          required
                                          control={form.control}
                                    />
                                    <Text inputClassName="h-12"
                                          className="gap-2"
                                          name="phone_number"
                                          label="Հեռախոսահամար"
                                          required
                                          control={form.control}
                                    />
                                </div>

                                <div className="">
                                    <Textarea
                                        className="gap-2 !text-[1rem] font-normal"
                                        name="message"
                                        label="Հաղորդագրություն"
                                        required
                                        inputClassName="h-26"
                                        control={form.control}
                                    />
                                </div>
                            </FieldSet>
                            <div className="flex justify-center md:justify-start">
                                <Button disabled={!isValid || pending}
                                        className={cn("w-fit text-[1rem] py-[10px] px-[100px] md:px-6 h-11",
                                        )}
                                        type="submit">
                                    {pending && <Spinner/>}
                                    Ուղարկել
                                </Button>
                            </div>
                        </FieldGroup>
                    </form>
                </div>
            </div>
        </section>
    )
}