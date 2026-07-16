import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ContactFormSection } from '@/app/contact-us/components/ContactFormSection';
import TermsAndConditions from '@/components/common/TermsAndConditions';
import JSON_DATA from "./terms.json"

export const metadata = {
  title: "Request Demo | Comfygen",
  description: "Request a demo of our digital solutions.",
};

export default function RequestDemoPage() {
  return (
    <main className="relative min-h-screen font-sans flex flex-col bg-slate-50">
      {/* Dark Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="dark" />
      </div>

      <section className="w-full pt-40 pb-32 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-md">
            Schedule a Walkthrough
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight !font-heading">
          Terms And <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Conditions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Our company's Terms & Conditions govern the use of our products or services. By using our offerings, you agree to comply with our policies, including intellectual property rights, data protection, and liability limitations. We reserve the right to modify or terminate these terms at any time and may take action against any violations.
          </p>
        </div>
      </section>


      <TermsAndConditions data={JSON_DATA.TermsAndConditions}/>

      {/* <div className="-mt-20 relative z-20">
        <ContactFormSection />
      </div> */}

      <Footer />
    </main>
  );
}
