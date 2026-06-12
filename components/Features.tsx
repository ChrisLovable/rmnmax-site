"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "W.Cl.2 Auto-Generation",
    description:
      "Automatically generate and populate W.Cl.2 appointment forms for every site, role and responsible person — no more manual drafting.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
      />
    ),
  },
  {
    title: "AI Hazard Identification",
    description:
      "Upload site photos or descriptions and let our AI flag potential hazards, suggest controls, and rank them by risk level.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3m0 3h.01M10.29 3.86l-8.48 14.7A1 1 0 002.66 20h18.68a1 1 0 00.86-1.5l-8.48-14.64a1 1 0 00-1.72 0z"
      />
    ),
  },
  {
    title: "Ask the Acts",
    description:
      "Get instant, plain-language answers to your OHS Act and regulation questions — backed by the actual legislation, cited and explained.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Risk Assessments",
    description:
      "Build, review and sign off risk assessments digitally, with version history and automatic reminders for review dates.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l2 2 4-4"
      />
    ),
  },
  {
    title: "Multi-Client Dashboard",
    description:
      "Consultants and safety officers can manage every client and site from a single dashboard, with compliance scores at a glance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M3 6h18M3 14h18M3 18h18"
      />
    ),
  },
  {
    title: "Smart Notifications",
    description:
      "Automated reminders for expiring certifications, overdue inspections and outstanding actions — delivered to the right person, on time.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F4F6FA]">
      <div className="container-px section-py mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Everything you need to stay compliant
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            RMNMax brings every part of your OHS compliance workflow into one
            platform — built specifically for South African legislation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-navy/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
