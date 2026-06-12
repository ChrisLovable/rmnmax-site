"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Sites managed" },
  { value: "94%", label: "Average compliance score" },
  { value: "12,000+", label: "Hazards identified by AI" },
  { value: "60%", label: "Less time on paperwork" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-navy/5 bg-white">
      <div className="container-px mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <p className="text-3xl font-bold text-navy sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
