import Link from 'next/link';
import { FileBadge, IdCard, GraduationCap, CheckCircle } from 'lucide-react';

import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import AdmissionEligibility from '@/components/site/AdmissionEligibility';
import AdmissionFlow from '@/components/site/AdmissionFlow';
import ScrollBlur from '@/components/animations/ScrollBlur';
import {
  createMetadata,
  siteConfig,
} from '@/lib/site-data';

export const metadata = createMetadata(
  'Admissions',
  'Complete guide to GU TECH admission process, eligibility criteria, and required documents.',
);

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="GU TECH Admission Process"
        description="A streamlined path from your ambition to enrollment. Explore our criteria, selection process, and application steps below."
        imageSrc="/admissions-hero-section.avif"
        locked={true}
      />

      <main className="home-sheet">
        {/* Section 2: Eligibility & Selection */}
        <ScrollBlur>
          <AdmissionEligibility />
        </ScrollBlur>

        {/* Section 3: Interactive Guide to Apply */}
        <ScrollBlur>
          <AdmissionFlow />
        </ScrollBlur>

        {/* Section 4: Document Checklist & Final CTA */}
        <ScrollBlur>
          <section className="section">
          <div className="container">
            <div className="surface p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <span className="eyebrow mb-3">Preparation</span>
                  <h2 className="text-3xl md:text-4xl font-display mb-4">Document Checklist</h2>
                  <p className="text-ink-soft">Ensure you have the following documents ready for your application submission.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-line surface">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <FileBadge size={20} />
                    </div>
                    <span className="font-semibold text-sm">HSC / SSC Mark sheets *</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-line surface">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <IdCard size={20} />
                    </div>
                    <span className="font-semibold text-sm">ID Card / B-Form *</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-line surface">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <GraduationCap size={20} />
                    </div>
                    <span className="font-semibold text-sm">Equivalence (if applicable)</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-line surface">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <CheckCircle size={20} />
                    </div>
                    <span className="font-semibold text-sm">Valid Test Scores</span>
                  </div>
                </div>

                <p className="text-xs text-ink-soft text-center mb-12 opacity-80">
                  * Either one can be submitted at the time of initial application. Original documents will be required during final processing.
                </p>

                <div className="flex flex-col items-center gap-6">
                  <a 
                    className="button button--primary px-12 py-4 h-auto text-lg" 
                    href={siteConfig.applyHref} 
                    rel="noreferrer" 
                    target="_blank"
                  >
                    Apply Now
                  </a>
                  
                  <div className="flex gap-4">
                    <a className="text-sm font-bold text-ink-soft hover:text-brand transition-colors" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp Help
                    </a>
                    <span className="text-line">|</span>
                    <Link className="text-sm font-bold text-ink-soft hover:text-brand transition-colors" href="/contact">
                      Contact Admissions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollBlur>
      </main>
    </>
  );
}
