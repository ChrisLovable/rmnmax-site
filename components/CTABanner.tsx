"use client";

import { motion } from "framer-motion";
import RequestDemoButton from "@/components/RequestDemoButton";

export default function CTABanner() {
  return (
    <section className="bg-navy">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-light to-navy px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              Ready to make your workplace OHS compliant?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Join the South African businesses using RMNMax to automate
              compliance, reduce risk, and pass audits with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <RequestDemoButton className="rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-dark">
                Request a Demo
              </RequestDemoButton>
              <a
                href="https://app.rmnmax.co.za"
                className="rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Login to RMNMax
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
