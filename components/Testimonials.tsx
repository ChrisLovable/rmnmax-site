"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "RMNMax took our W.Cl.2 process from a week of admin to under an hour. The AI hazard identification has already caught issues our site supervisors missed.",
    name: "Pieter Botha",
    role: "Site Manager, Golden Gate Construction",
  },
  {
    quote:
      "As a consultant managing multiple clients, the multi-client dashboard is a game changer. I can see every site's compliance score in one place and act before anything becomes a problem.",
    name: "Roy Naude",
    role: "OHS Consultant",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F4F6FA]">
      <div className="container-px section-py mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Trusted by safety professionals
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Hear from the teams who&apos;ve traded spreadsheets for RMNMax.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-navy/5 bg-white p-8 shadow-card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mb-4 h-8 w-8 text-accent/30"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H4.83A2.17 2.17 0 017 9V6h.17zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83h-4.66A2.17 2.17 0 0117 9V6h.17z" />
              </svg>
              <blockquote className="flex-1 text-base leading-relaxed text-navy/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-navy/5 pt-4">
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-navy/50">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
