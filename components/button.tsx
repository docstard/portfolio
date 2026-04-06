"use client"
import React from 'react'
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { useRouter } from 'next/navigation';

const buttonVariants = cva(
    "w-full sm:w-auto rounded-xl font-bold text-lg transition-all",
    {
        variants: {
            variant: {
                primary: "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:scale-[1.05]",
                secondary: "bg-white text-primary hover:bg-slate-100 shadow-xl hover:scale-[1.05]",
                glass:"bg-[rgba(255,255,255,0.0.03)] border border-solid border-[rgba(255,255,255,0.1)] hover:bg-white/5 text-white",
                outline: "",
                ghost: "",
            },
            size: {
                sm: "",
                md: "px-8 py-4",
                lg: "px-10 py-5",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

interface MainButtonProps extends ButtonProps {
    link?: string;
}

const Button = ({ className, variant, size, link, ...props }: MainButtonProps) => {
    const router = useRouter();
    const onclickfunc = (link : string | undefined) => {
        if(link) {
            router.push(link);
        }
    };

    return (
        <button 
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={()=>onclickfunc(link)}
            {...props}
        />
    )
}

export default Button