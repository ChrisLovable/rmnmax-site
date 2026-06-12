"use client";

import { useState, useEffect, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RequestDemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function RequestDemoModal({
  isOpen,
  onClose,
}: RequestDemoModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrorMessage("");
      setForm(initialForm);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-card-hover"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-navy/50 transition hover:bg-navy/5 hover:text-navy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-7 w-7 text-accent"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy">Request received</h3>
                <p className="mt-2 text-navy/70">
                  Thanks for your interest in RMNMax. Our team will be in touch within
                  one business day to schedule your demo.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-light"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 id="demo-modal-title" className="text-xl font-semibold text-navy sm:text-2xl">
                  Request a demo
                </h3>
                <p className="mt-1 text-sm text-navy/60">
                  Tell us a bit about your business and we&apos;ll show you how RMNMax
                  can simplify your OHS compliance.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy/80">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy/80">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Acme Construction"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy/80">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="jane@acme.co.za"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy/80">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="082 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy/80">
                      What would you like to discuss?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us about your team and your current OHS process..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending..." : "Send request"}
                  </button>

                  <p className="text-center text-xs text-navy/50">
                    By submitting this form you agree to be contacted by RMNMax about
                    your enquiry, in line with our POPIA-compliant privacy practices.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
