"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set up your sites",
    description:
      "Add your company, sites and responsible persons. RMNMax automatically maps your structure to the OHS Act requirements.",
  },
  {
    number: "02",
    title: "Let AI do the heavy lifting",
    description:
      "Generate W.Cl.2 appointments, run AI hazard identification, and build risk assessments in minutes instead of days.",
  },
  {
    number: "03",
    title: "Stay audit-ready, always",
    description:
      "Track compliance scores across every site, get notified before deadlines, and export reports the moment an inspector arrives.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="container-px section-py mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-navy/60">
            From setup to audit-ready in three simple steps.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-base font-bold text-white">
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-navy/10 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
