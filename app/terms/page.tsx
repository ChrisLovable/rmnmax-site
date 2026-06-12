import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | RMNMax",
};

export default function TermsOfService() {
  return (
    <main>
      <Navbar />
      <section className="bg-white">
        <div className="container-px section-py mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">Terms of Service</h1>

          <div className="mt-8 space-y-6 text-navy/70">
            <p>
              These Terms of Service govern your access to and use of the
              RMNMax website and platform. By using our services, you agree
              to be bound by these terms.
            </p>
            <p>
              RMNMax provides software tools to assist employers and OHS
              consultants with Occupational Health & Safety Act compliance,
              including W.Cl.2 appointment generation, AI-assisted hazard
              identification, risk assessment management, and related
              reporting features.
            </p>
            <p>
              While RMNMax aims to support your compliance efforts, use of
              the platform does not replace the need for qualified OHS
              professionals or guarantee compliance with all applicable
              legislation. Responsibility for workplace health and safety
              remains with the employer.
            </p>
            <p>
              For questions about these terms, please contact us at{" "}
              <a href="mailto:roynaude.roy@gmail.com" className="text-accent hover:underline">
                roynaude.roy@gmail.com
              </a>
              .
            </p>
          </div>

          <Link href="/" className="mt-10 inline-block text-sm font-semibold text-accent hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
