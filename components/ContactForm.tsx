"use client";

import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  // Animations
  const formRef = useScrollAnimation<HTMLFormElement>({ type: "fadeUp", duration: 1, delay: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name Field */}
        <div className="bg-white/10 rounded-lg p-1 flex items-center">
          <label
            htmlFor="name"
            className="text-xs font-bold text-white uppercase tracking-wider px-4 min-w-[80px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 py-3 px-2"
            disabled={status.type === "loading"}
          />
        </div>

        {/* Email Field */}
        <div className="bg-white/10 rounded-lg p-1 flex items-center">
          <label
            htmlFor="email"
            className="text-xs font-bold text-white uppercase tracking-wider px-4 min-w-[80px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 py-3 px-2"
            disabled={status.type === "loading"}
          />
        </div>

        {/* Phone Field */}
        <div className="bg-white/10 rounded-lg p-1 flex items-center">
          <label
            htmlFor="phone"
            className="text-xs font-bold text-white uppercase tracking-wider px-4 min-w-[80px]"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 py-3 px-2"
            disabled={status.type === "loading"}
          />
        </div>

        {/* Company Field */}
        <div className="bg-white/10 rounded-lg p-1 flex items-center">
          <label
            htmlFor="company"
            className="text-xs font-bold text-white uppercase tracking-wider px-4 min-w-[80px]"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 py-3 px-2"
            disabled={status.type === "loading"}
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 p-0 resize-none"
          placeholder="How can we help you?"
          disabled={status.type === "loading"}
        />
      </div>

      {/* Status Messages */}
      {status.message && (
        <div
          className={`p-4 rounded-xl text-center font-medium mb-6 ${
            status.type === "success"
              ? "bg-lime-200/20 text-lime-200 border border-lime-200/30"
              : "bg-red-500/20 text-red-300 border border-red-500/30"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status.type === "loading"}
          className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-lime-200 px-12 py-4 text-sm font-bold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:bg-lime-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status.type === "loading" ? (
            <span className="flex items-center gap-3">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}
