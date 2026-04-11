'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Info, 
  Table as TableIcon, 
  CreditCard, 
  AlertCircle, 
  Clipboard, 
  Check,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

/**
 * Helper to copy text to clipboard with feedback
 */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-brand group relative"
      title="Copy to clipboard"
    >
      {copied ? <Check size={18} className="text-green-600" /> : <Clipboard size={18} />}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-charcoal text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {copied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  );
}

const feeData = [
  { item: 'Registration / Application Fee (Non-refundable)', amount: 'PKR 1,000/-' },
  ...Array(23).fill({ item: 'Program Tuition / Admission Fee (Placeholder)', amount: 'PKR 1,000/-' })
];

const otherCharges = [
  { item: 'Campus Transfer Fee (Between campuses)', amount: 'PKR 5,000/-' },
  ...Array(6).fill({ item: 'Document Verification / Processing (Placeholder)', amount: 'PKR 5,000/-' })
];

const refundPolicy = [
  { timeline: 'Up to 7th day of convene of classes', refund: '100%' },
  { timeline: 'From 8th - 15th day of convene of classes', refund: '80%' },
  { timeline: 'From 16th - 30th day of convene of classes', refund: '60%' },
  { timeline: 'From 31st - 45th day of convene of classes', refund: '50%' },
  { timeline: 'After 45th day of convene of classes', refund: '0% (No Refund)' },
];

export default function FeeStructure() {
  return (
    <div className="space-y-24 pb-20">
      {/* Section 1: Hero & Strategic Offer */}
      <section className="section pb-0!">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12">
              <span className="eyebrow mb-4">Financial Transparency</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">GU Tech Fee Structure</h1>
            </div>

            <FadeUp className="lg:col-span-7 h-full">
              <div className="relative overflow-hidden rounded-3xl bg-brand p-8 md:p-12 text-white h-full group">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-6">
                    <TrendingUp size={14} />
                    Strategic Offer
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display mb-4 leading-tight">
                    50% Tuition Fee Off <br />
                    <span className="opacity-70">— Limited Seats Available</span>
                  </h2>
                  <p className="text-white/80 max-w-md mb-8">
                    Secure your future at half the cost. This merit-based incentive is designed to support the next generation of technology leaders.
                  </p>
                  <Link href="https://alghazaliuniversity.arpl.pk/" className="button button--light text-brand!">
                    Check Eligibility <ArrowRight size={18} />
                  </Link>
                </div>
                {/* Decorative element */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-5 h-full">
              <div className="surface p-8 md:p-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-display mb-4">Financial Support</h3>
                <p className="text-ink-soft leading-relaxed grow">
                  We believe financial barriers should never limit potential. GU Tech offers diverse Financial Assistance, including flexible installment plans and merit-based scholarships, ensuring quality education is accessible to all.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 2: Fee Schedules */}
      <section className="section py-0!">
        <div className="container">
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <TableIcon className="text-brand" size={24} />
                <h2 className="text-3xl font-display">Program Fees</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-line shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="sticky top-0 z-20">
                    <tr className="bg-gray-50 border-bottom border-line">
                      <th className="p-5 font-bold text-sm uppercase tracking-wider text-charcoal">Description / Particulars</th>
                      <th className="p-5 font-bold text-sm uppercase tracking-wider text-charcoal text-right">Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {feeData.map((row, i) => (
                      <tr key={i} className="hover:bg-brand/5 transition-colors group">
                        <td className="p-5 text-ink-soft group-hover:text-charcoal transition-colors">{row.item}</td>
                        <td className="p-5 text-right font-bold text-charcoal">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <AlertCircle className="text-brand" size={24} />
                <h2 className="text-3xl font-display">Other Charges</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-line shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-bottom border-line">
                      <th className="p-5 font-bold text-sm uppercase tracking-wider text-charcoal">Charge Type</th>
                      <th className="p-5 font-bold text-sm uppercase tracking-wider text-charcoal text-right">Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {otherCharges.map((row, i) => (
                      <tr key={i} className="hover:bg-brand/5 transition-colors group">
                        <td className="p-5 text-ink-soft group-hover:text-charcoal transition-colors">{row.item}</td>
                        <td className="p-5 text-right font-bold text-charcoal">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Policy Highlights */}
      <section className="section bg-gray-50/50 py-20!">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="surface p-8 border-l-4 border-l-brand h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    <AlertCircle size={20} />
                  </div>
                  <h3 className="text-2xl font-display">Late Payment Policy</h3>
                </div>
                <div className="space-y-4 text-ink-soft leading-relaxed">
                  <p>
                    A <span className="text-brand font-bold">Charity on Late Payment</span> of PKR 10/- per day per PKR 1,000/- is applicable on overdue amounts.
                  </p>
                  <p>
                    Failure to settle dues for 2 consecutive months will lead to <span className="text-charcoal font-bold">Registration Suspension</span>. 
                    Re-registration requires payment of all dues plus a restoration fee.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="surface p-8 border-l-4 border-l-green-600 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-2xl font-display">Flexible Payments</h3>
                </div>
                <div className="space-y-4 text-ink-soft leading-relaxed">
                  <p>
                    We provide the option to pay tuition fees in up to <span className="text-green-600 font-bold">3 Installments</span> per semester.
                  </p>
                  <p>
                    This facility must be requested and approved by the Finance Department at the start of each semester cycle.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 4: Refund Policy */}
      <section className="section py-0!">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="text-brand" size={24} />
                <h2 className="text-3xl font-display">Refund Schedule</h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-line">
                    <tr>
                      <th className="p-4 font-bold text-xs uppercase text-charcoal">Timeline</th>
                      <th className="p-4 font-bold text-xs uppercase text-charcoal text-right">% Refund</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {refundPolicy.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                        <td className="p-4 text-sm text-ink-soft">{row.timeline}</td>
                        <td className="p-4 text-right font-bold text-charcoal">{row.refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-sand/30 p-8 rounded-3xl border border-sand shadow-inner relative overflow-hidden">
                <Info className="text-brand opacity-10 absolute -right-4 -top-4" size={120} />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Info className="text-brand" size={20} />
                  Important Refund Notes
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                    <span><strong className="text-charcoal">Refundable:</strong> Only the Caution Money / Security Deposit is fully refundable upon completion/withdrawal.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5" />
                    <span><strong className="text-charcoal">Non-Refundable:</strong> Admission Fee, Activity Fee, and Examination Charges are non-refundable under any circumstances.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5" />
                    <span>All refund requests must be submitted in writing with a valid justification and original fee receipts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mode of Payment & Final CTA */}
      <section className="section bg-charcoal text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">Secure Payment</span>
              <h2 className="text-4xl md:text-5xl font-display mb-6">Mode of Payment</h2>
              <p className="text-white/60">Choose your preferred way to secure your admission</p>
            </div>

            <div className="grid md:grid-cols-10 gap-8 items-center">
              <div className="md:col-span-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-8">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <ShieldCheck className="text-brand" />
                    <span className="font-bold tracking-tight">Direct Bank Deposit / Transfer</span>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex justify-between items-center group">
                      <div>
                        <span className="text-[10px] uppercase opacity-50 block mb-1">Account Title</span>
                        <span className="font-medium">ONE NATION FOUNDATION</span>
                      </div>
                      <CopyButton text="ONE NATION FOUNDATION" />
                    </div>

                    <div className="flex justify-between items-center group">
                      <div>
                        <span className="text-[10px] uppercase opacity-50 block mb-1">Bank Name</span>
                        <span className="font-medium">National Bank of Pakistan (NBP)</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center group">
                      <div>
                        <span className="text-[10px] uppercase opacity-50 block mb-1">Account Number</span>
                        <span className="text-xl font-mono tracking-wider font-bold">1063004169854142</span>
                      </div>
                      <CopyButton text="1063004169854142" />
                    </div>

                    <div className="flex justify-between items-center group">
                      <div>
                        <span className="text-[10px] uppercase opacity-50 block mb-1">IBAN Number</span>
                        <span className="text-xl font-mono tracking-wider font-bold">PK42 NBPA 1063 0041 6985 4142</span>
                      </div>
                      <CopyButton text="PK42 NBPA 1063 0041 6985 4142" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="bg-brand/10 border border-brand/20 p-6 rounded-2xl">
                  <h4 className="font-bold flex items-center gap-2 mb-3">
                    <div className="p-1 rounded bg-brand text-white"><Check size={14} /></div>
                    After Payment
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Deposit your fee and email a scanned copy of the slip with your Name, CNIC, and Program to the admissions team.
                  </p>
                </div>

                <Link 
                  href="https://alghazaliuniversity.arpl.pk/" 
                  className="button button--primary min-h-16! text-lg! rounded-2xl!"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
      </section>
    </div>
  );
}
