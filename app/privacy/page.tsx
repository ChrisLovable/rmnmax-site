import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | RMNMax",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <section className="bg-white">
        <div className="container-px section-py mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-navy/50">POPIA compliance statement</p>

          <div className="mt-8 space-y-6 text-navy/70">
            <p>
              RMNMax (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
              protecting your personal information in accordance with the
              Protection of Personal Information Act, 2013 (POPIA).
            </p>
            <p>
              When you submit a demo request or contact us through this
              website, we collect your name, company, email address, phone
              number and any message you provide. This information is used
              solely to respond to your enquiry and to provide information
              about RMNMax.
            </p>
            <p>
              We do not sell or share your personal information with third
              parties for marketing purposes. Information submitted via our
              contact form is processed by our email service provider for the
              sole purpose of delivering your enquiry to our team.
            </p>
            <p>
              You have the right to access, correct, or request deletion of
              your personal information at any time. To exercise these
              rights, please contact us at{" "}
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
