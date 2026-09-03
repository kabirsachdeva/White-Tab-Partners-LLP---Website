"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import clsx from "clsx";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  office: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Please provide more detail about your matter"),
});

type FormData = z.infer<typeof schema>;

const inputClass = clsx(
  "w-full bg-white border border-dark/15 rounded-lg px-4 py-3 text-dark font-sans text-sm",
  "placeholder:text-dark/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30",
  "transition-colors"
);

const labelClass = "block text-[10px] tracking-[0.15em] uppercase font-sans text-dark/50 mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to send message.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-5">
        <CheckCircle size={40} className="text-gold" />
        <h3 className="font-serif text-2xl text-dark font-light">Message received.</h3>
        <p className="text-dark/60 text-sm font-sans max-w-sm">
          Thank you for reaching out. One of our partners will respond to you
          personally within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-gold text-sm font-sans underline underline-offset-4 mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            {...register("name")}
            placeholder="Your full name"
            className={clsx(inputClass, errors.name && "border-red-400 ring-red-200")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs font-sans mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={clsx(inputClass, errors.email && "border-red-400 ring-red-200")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-sans mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Preferred Office</label>
          <select {...register("office")} className={inputClass}>
            <option value="">Select office</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Dubai">Dubai</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Subject *</label>
        <input
          {...register("subject")}
          placeholder="Brief description of the matter"
          className={clsx(inputClass, errors.subject && "border-red-400 ring-red-200")}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs font-sans mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Please describe your matter in brief. All information is treated as strictly confidential."
          className={clsx(
            inputClass,
            "resize-none",
            errors.message && "border-red-400 ring-red-200"
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-xs font-sans mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm font-sans bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light disabled:opacity-60 text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
      >
        {status === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </button>

      <p className="text-dark/35 text-xs font-sans">
        All enquiries are treated as strictly confidential.
      </p>
    </form>
  );
}
