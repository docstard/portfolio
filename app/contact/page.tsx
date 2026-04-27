"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { useRouter } from "next/navigation"

import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { tr } from "zod/locales"
import { useState } from "react"


const formSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.email(),
    companyName: z.string().min(1).max(500),
    projectType: z.string().min(1).max(500),
    budget: z.string().min(1).max(500),
    projectBrief: z.string().min(1).max(150)
});

const page = () => {

    const [showSuccess, setShowSuccess] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            projectType: "Website",
            budget: "10k-25k",
            projectBrief: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // e.preventDefault();
        // console.log(data)
        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                // 3. Trigger the alert
                setShowSuccess(true)

                // 4. Redirect after 5 seconds
                setTimeout(() => {
                    router.push("/")
                }, 5000)
            }
           
            
        } catch {
            console.error("Submition Failed")
        }


        // alert("Message sent!");
    }

    // console.log(form.watch());



    return (
        <main className="pt-32 pb-20  overflow-hidden">
            {showSuccess && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-md animate-in fade-in slide-in-from-top-4">
                    <Alert className="bg-slate-900 border-cyan-500 text-white shadow-2xl">
                        <AlertTitle className="text-cyan-400 font-bold">Message Sent!</AlertTitle>
                        <AlertDescription>
                            Thank you for reaching out. We'll get back to you shortly. 
                            Redirecting you to the home page in 5 seconds...
                        </AlertDescription>
                    </Alert>
                </div>
            )}
            {/* <!-- Ambient Background Accents --> */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div
                    className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px]"
                ></div>
                <div
                    className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]"
                ></div>
                <div
                    className="absolute top-[40%] left-[20%] w-75 h-75 bg-cyan-600/10 rounded-full blur-[100px]"
                ></div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col gap-16 px-6 md:px-12">
                {/* <!-- Hero Section --> */}
                <header className="max-w-3xl flex flex-col gap-6">
                    <h1
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400"
                    >
                        Let’s Build Your Next Digital Product.
                    </h1>
                    <p
                        className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
                    >
                        Whether you have a specific idea or just a spark, we're here to help
                        you bring it to life with high-performance code and intelligent AI.
                    </p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* <!-- Contact Form Section --> */}
                    <div className="lg:col-span-8">
                        <div
                            className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group"
                        >
                            {/* Subtle Inner Gradient Border */}
                            <div
                                className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"
                            ></div>
                            <div
                                className="absolute -inset-px bg-linear-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl opacity-50 pointer-events-none"
                            ></div>
                            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                                <FieldGroup>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <Controller
                                            name="name"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-name">
                                                        Full Name
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id="form-rhf-demo-name"
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="John Doe"
                                                        // autoComplete="off"
                                                        className="w-full h-10 md:h-14 bg-white/5 border border-white/10 rounded-xl  px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                                    />
                                                    {fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="email"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-email">
                                                        Work Email
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id="form-rhf-demo-email"
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="john@company.com"
                                                        // autoComplete="off"
                                                        className="w-full h-10 md:h-14 bg-white/5 border border-white/10 rounded-xl  px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                                    />
                                                    {fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="companyName"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-email">
                                                        Company Name
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id="form-rhf-demo-companyName"
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="Acme Inc."
                                                        // autoComplete="off"
                                                        className="w-full h-10 md:h-14 bg-white/5 border border-white/10 rounded-xl  px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                                    />
                                                    {fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="projectType"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-email">
                                                        Project Type
                                                    </FieldLabel>
                                                    <select
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                                                        {...field}
                                                    >
                                                        <option className="bg-slate-900 ">Website</option>
                                                        <option className="bg-slate-900">AI/Automation</option>
                                                        <option className="bg-slate-900">Web App</option>
                                                        <option className="bg-slate-900">eCommerce</option>
                                                        <option className="bg-slate-900">UI/UX Design</option>
                                                    </select>
                                                </Field>

                                            )}
                                        />
                                        <Controller
                                            name="budget"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-email">
                                                        Budget Range
                                                    </FieldLabel>
                                                    <select
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                                                        {...field}
                                                    >
                                                        <option className="bg-slate-900">10k - 25k</option>
                                                        <option className="bg-slate-900">25k - 50k</option>
                                                        <option className="bg-slate-900">50k - 100k</option>
                                                        <option className="bg-slate-900">100k+</option>
                                                    </select>
                                                </Field>

                                            )}
                                        />
                                    </div>
                                    <Controller
                                        name="projectBrief"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1" htmlFor="form-rhf-demo-projectBrief">
                                                    Project Brief
                                                </FieldLabel>
                                                <InputGroup className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none">
                                                    <InputGroupTextarea
                                                        {...field}
                                                        id="form-rhf-demo-projectBrief"
                                                        placeholder="Tell us about your project goals..."
                                                        rows={4}
                                                        className="min-h-24 resize-none"
                                                        aria-invalid={fieldState.invalid}
                                                    />
                                                    <InputGroupAddon align="block-end">
                                                        <InputGroupText className="tabular-nums">
                                                            {field.value.length}/150 characters
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>

                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />


                                </FieldGroup>
                                <Field>

                                    <button
                                        className="w-full mt-8 bg-white text-slate-950 font-bold py-5 rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group"
                                        type="submit"
                                        form="form-rhf-demo"
                                    >
                                        Send Inquiry
                                        <span
                                            className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform"
                                        >arrow_forward</span
                                        >
                                    </button>
                                </Field>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Contact Info Sidebar --> */}
                    <aside className="lg:col-span-4 flex flex-col gap-12">
                        {/* Direct Contact */}
                        <section className="flex flex-col gap-6">
                            <h3
                                className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400"
                            >
                                Direct Contact
                            </h3>
                            <div className="flex flex-col gap-4">
                                <a
                                    className="flex items-center gap-4 group"
                                    href="mailto:hello@atticflow.com"
                                >
                                    <div
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-blue-400"
                                        >mail</span
                                        >
                                    </div>
                                    <span
                                        className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors"
                                    >atticflow.business@gmail.com</span
                                    >
                                </a>
                            </div>
                        </section>
                        {/* <!-- Global Presence --> */}
                        <section className="flex flex-col gap-6">
                            <h3
                                className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400"
                            >
                                Presence
                            </h3>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center"
                                    >
                                        <span className="material-symbols-outlined text-purple-400"
                                        >location_on</span
                                        >
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Jaipur</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            Vaishali Nagar, Jaipur
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>
                        {/* <!-- Socials -->     */}
                        <section className="flex flex-col gap-6">
                            <h3
                                className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400"
                            >
                                Connect
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    target="_blank"
                                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 transition-all group"
                                    href="https://www.linkedin.com/in/dhruv-choudhary369"
                                >
                                    <svg
                                        className="w-5 h-5 fill-slate-400 group-hover:fill-white transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        ></path>
                                    </svg>
                                </a>
                                
                                <a
                                target="_blank"
                                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 transition-all group"
                                    href="https://www.instagram.com/atticflow?igsh=MXQ0ZmdsMjQyN3AxMg%3D%3D&utm_source=qr"
                                >
                                    <svg
                                        className="w-5 h-5 fill-slate-400 group-hover:fill-white transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default page