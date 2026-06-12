"use client";

import { motion } from "framer-motion";
import RequestDemoButton from "@/components/RequestDemoButton";

const tiers = [
  {
    name: "Starter",
    price: "R799",
    description: "For small businesses with a single site getting started with OHS compliance.",
    features: [
      "1 site",
      "W.Cl.2 auto-generation",
      "Basic risk assessments",
      "Ask the Acts (limited)",
      "Email notifications",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "R1,499",
    description: "For growing businesses managing multiple sites and teams.",
    features: [
      "Up to 5 sites",
      "W.Cl.2 auto-generation",
      "AI hazard identification",
      "Unlimited risk assessments",
      "Ask the Acts (unlimited)",
      "Priority notifications",
    ],
    highlighted: true,
  },
  {
    name: "Consultant",
    price: "R2,999",
    description: "For OHS consultants and safety officers managing multiple clients.",
    features: [
      "Unlimited sites",
      "Multi-client dashboard",
      "AI hazard identification",
      "Unlimited risk assessments",
      "Ask the Acts (unlimited)",
      "White-label reports",
      "Priority support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="container-px section-py mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Choose the plan that fits your business. All plans include core
            OHS Act compliance tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl p-8 ${
                tier.highlighted
                  ? "border-2 border-accent bg-navy shadow-card-hover lg:-translate-y-3"
                  : "border border-navy/10 bg-white shadow-card"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3
                className={`text-xl font-semibold ${
                  tier.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  tier.highlighted ? "text-white/60" : "text-navy/60"
                }`}
              >
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.price}
                </span>
                <span className={tier.highlighted ? "text-white/50" : "text-navy/50"}>
                  /mo
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${
                      tier.highlighted ? "text-white/80" : "text-navy/70"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? "text-accent-light" : "text-accent"
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <RequestDemoButton
                className={`mt-8 w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Request Demo
              </RequestDemoButton>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy/50">
          All prices in ZAR, excluding VAT. Annual billing available — contact us for details.
        </p>
      </div>
    </section>
  );
}
