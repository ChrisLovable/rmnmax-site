"use client";

import { motion } from "framer-motion";
import RequestDemoButton from "@/components/RequestDemoButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Built for South African OHS compliance
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Stop managing safety on <span className="text-accent">spreadsheets</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
              RMNMax is the all-in-one OHS compliance platform that automates
              your W.Cl.2 reporting, flags hazards with AI, and keeps every
              client&apos;s safety file audit-ready — without the paperwork.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <RequestDemoButton className="rounded-lg bg-accent px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-dark">
                Request a Demo
              </RequestDemoButton>
              <a
                href="#features"
                className="rounded-lg border border-white/20 px-7 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckIcon /> OHS Act aligned
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon /> POPIA compliant
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon /> Setup in minutes
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className="h-4 w-4 text-accent"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-sm sm:p-4">
      <div className="overflow-hidden rounded-xl bg-[#F4F6FA]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-navy/5 bg-white px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-navy/40">
            app.rmnmax.co.za/dashboard
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-36 flex-col gap-1 border-r border-navy/5 bg-white p-3 sm:flex">
            {["Dashboard", "Sites", "Risk Assessments", "Ask the Acts", "Reports"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-md px-2.5 py-2 text-[11px] font-medium ${
                    i === 0 ? "bg-accent/10 text-accent" : "text-navy/50"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-navy">Compliance Overview</p>
                <p className="text-[11px] text-navy/40">12 active sites</p>
              </div>
              <div className="rounded-md bg-accent px-3 py-1.5 text-[11px] font-semibold text-white">
                New Report
              </div>
            </div>

            {/* Stat cards */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              {[
                { label: "Compliance Score", value: "94%" },
                { label: "Open Hazards", value: "3" },
                { label: "W.Cl.2 Reports", value: "128" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-navy/5 bg-white p-3"
                >
                  <p className="text-[10px] font-medium text-navy/40">{stat.label}</p>
                  <p className="mt-1 text-lg font-bold text-navy">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mb-4 rounded-lg border border-navy/5 bg-white p-4">
              <p className="mb-3 text-[11px] font-semibold text-navy/60">
                Hazards Identified vs Resolved
              </p>
              <div className="flex h-20 items-end gap-2">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-sm bg-accent/20"
                      style={{ height: `${h}%` }}
                    />
                    <div
                      className="w-full rounded-sm bg-accent"
                      style={{ height: `${h * 0.6}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Task list */}
            <div className="space-y-2">
              {[
                { label: "Fire extinguisher inspection — Site A", done: true },
                { label: "Risk assessment review — Site C", done: true },
                { label: "PPE compliance audit — Site B", done: false },
              ].map((task) => (
                <div
                  key={task.label}
                  className="flex items-center gap-2 rounded-lg border border-navy/5 bg-white px-3 py-2 text-[11px]"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full ${
                      task.done ? "bg-accent text-white" : "border border-navy/20"
                    }`}
                  >
                    {task.done && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="h-2.5 w-2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={task.done ? "text-navy/40 line-through" : "text-navy/70"}>
                    {task.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute -right-4 -top-4 hidden rounded-xl border border-white/10 bg-white px-4 py-2.5 shadow-card sm:block"
      >
        <p className="text-[10px] font-medium text-navy/40">AI Hazard Alert</p>
        <p className="text-xs font-semibold text-navy">New risk flagged on Site A</p>
      </motion.div>
    </div>
  );
}
