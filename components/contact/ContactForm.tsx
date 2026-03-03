"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

type ContactFormValues = {
  name: string;
  company: string;
  specialty: "Orthopedic Surgery" | "Podiatry" | "Neurosurgery" | "Other";
  email: string;
  phone?: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    defaultValues: {
      specialty: "Orthopedic Surgery"
    }
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setServerSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(
          data?.error ??
            "We were unable to process your request at this time."
        );
      }

      setServerSuccess("Thank you. We'll be in touch shortly.");
      reset();
    } catch (error) {
      console.error(error);
      setServerError(
        "Something went wrong. Please try again or email us directly at " +
          COMPANY.email +
          "."
      );
    }
  };

  const inputBase =
    "mt-1 w-full rounded-md border border-ice/70 bg-navy-light/40 px-3 py-2 text-sm text-white placeholder:text-silver/60 focus-ring";

  const labelBase =
    "text-xs font-medium text-silver flex items-center justify-between";

  const errorText = "mt-1 text-xs text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-md border border-ice/60 bg-navy-light/40 p-5 text-sm"
      noValidate
    >
      <div>
        <label className={labelBase} htmlFor="name">
          <span>Name</span>
          <span className="text-[11px] text-silver/70">Required</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={cn(inputBase, errors.name && "border-red-400")}
          {...register("name", { required: "Please enter your name." })}
        />
        {errors.name && <p className={errorText}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelBase} htmlFor="company">
          <span>Practice / Company</span>
          <span className="text-[11px] text-silver/70">Required</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={cn(inputBase, errors.company && "border-red-400")}
          {...register("company", {
            required: "Please enter your practice or company name."
          })}
        />
        {errors.company && <p className={errorText}>{errors.company.message}</p>}
      </div>

      <div>
        <label className={labelBase} htmlFor="specialty">
          <span>Specialty</span>
        </label>
        <select
          id="specialty"
          className={cn(
            inputBase,
            "bg-navy-light/60 text-sm",
            errors.specialty && "border-red-400"
          )}
          {...register("specialty", { required: true })}
        >
          <option value="Orthopedic Surgery">Orthopedic Surgery</option>
          <option value="Podiatry">Podiatry</option>
          <option value="Neurosurgery">Neurosurgery</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className={labelBase} htmlFor="email">
          <span>Email</span>
          <span className="text-[11px] text-silver/70">Required</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(inputBase, errors.email && "border-red-400")}
          {...register("email", {
            required: "Please enter your email address.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address."
            }
          })}
        />
        {errors.email && <p className={errorText}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelBase} htmlFor="phone">
          <span>Phone</span>
          <span className="text-[11px] text-silver/70">Optional</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputBase}
          {...register("phone")}
        />
      </div>

      <div>
        <label className={labelBase} htmlFor="message">
          <span>Message</span>
          <span className="text-[11px] text-silver/70">Required</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(
            inputBase,
            "resize-none align-top",
            errors.message && "border-red-400"
          )}
          {...register("message", {
            required: "Please let us know how we can help.",
            minLength: {
              value: 10,
              message: "Please provide a bit more detail."
            }
          })}
        />
        {errors.message && (
          <p className={errorText}>{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red-400" role="alert">
          {serverError}
        </p>
      )}
      {serverSuccess && (
        <p className="text-sm text-emerald-400" role="status">
          {serverSuccess}
        </p>
      )}

      <div className="pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}

