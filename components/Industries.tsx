"use client";

import { motion } from "framer-motion";

const industries = [
  "Construction",
  "Manufacturing",
  "Mining & Quarrying",
  "Warehousing & Logistics",
  "Agriculture",
  "Retail",
  "Hospitality",
  "Healthcare",
  "Education",
  "Engineering",
  "Facilities Management",
  "Professional Services",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white">
      <div className="container-px section-py mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Built for every South African industry
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            The OHS Act applies to every employer in SA — no matter the size
            or sector of your business.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-full border border-navy/10 bg-navy/[0.03] px-5 py-2.5 text-sm font-medium text-navy/80 transition hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
