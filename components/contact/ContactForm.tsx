"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

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
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);

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

      setSuccess(true);
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
    "mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary/20";
  const labelBase = "text-sm font-medium text-gray-700";
  const errorText = "mt-1 text-xs text-red-500";

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-blue-pale/30 p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-primary text-white"
          >
            <CheckCircle className="h-10 w-10" />
          </motion.div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            Thank you. We&apos;ll be in touch shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <label className={labelBase} htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={cn(inputBase, errors.name && "border-red-500")}
              {...register("name", { required: "Please enter your name." })}
            />
            {errors.name && (
              <p className={errorText}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className={labelBase} htmlFor="company">
              Practice / Company <span className="text-red-500">*</span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              className={cn(inputBase, errors.company && "border-red-500")}
              {...register("company", {
                required: "Please enter your practice or company name."
              })}
            />
            {errors.company && (
              <p className={errorText}>{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className={labelBase} htmlFor="specialty">
              Specialty
            </label>
            <select
              id="specialty"
              className={cn(inputBase, errors.specialty && "border-red-500")}
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
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={cn(inputBase, errors.email && "border-red-500")}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address."
                }
              })}
            />
            {errors.email && (
              <p className={errorText}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className={labelBase} htmlFor="phone">
              Phone <span className="text-gray-400">(optional)</span>
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
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={cn(
                inputBase,
                "resize-none",
                errors.message && "border-red-500"
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
            <p className="rounded-md bg-red-50 p-3 text-sm text-red-600" role="alert">
              {serverError}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 md:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
