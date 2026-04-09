import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">Contact Us</h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              We are here to help. Connect with our dedicated campus offices for rapid support and insights.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <div className="split-section">
            <div className="flex-1">
              <h2 className="text-4xl font-playfair font-bold text-dark mb-6">Get In Touch</h2>
              <p className="text-lg opacity-80 mb-8 font-light leading-relaxed">
                Have profound questions regarding our elite admission streams, cross-disciplinary academic programs, or campus community life? Our dedicated support teams are standing by to guide your journey into GU TECH.
              </p>
              
              <div className="mb-6">
                <strong className="text-dark block font-bold mb-1">General Inquiries:</strong>
                <a href="mailto:info@gutech.edu" className="text-primary text-lg hover:underline transition-colors">info@gutech.edu</a>
              </div>
              <div className="mb-6">
                <strong className="text-dark block font-bold mb-1">Admissions Office:</strong>
                <a href="mailto:admissions@gutech.edu" className="text-primary text-lg hover:underline transition-colors">admissions@gutech.edu</a>
              </div>
              <div className="mb-8">
                <strong className="text-dark block font-bold mb-2">Instant Support:</strong>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-outline mt-2" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem' }}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Chat
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="card" style={{ borderTop: '4px solid var(--primary-red)' }}>
                <h3 className="card-title text-2xl font-playfair mb-6">Direct Message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="block text-dark font-medium mb-2 text-sm uppercase tracking-wide">Legal Name</label>
                    <input type="text" style={{ width: '100%', padding: '0.875rem', borderRadius: '6px', border: '1px solid #e0e0e0', outline: 'none', transition: 'border-color 0.3s ease' }} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-dark font-medium mb-2 text-sm uppercase tracking-wide">Academic Email</label>
                    <input type="email" style={{ width: '100%', padding: '0.875rem', borderRadius: '6px', border: '1px solid #e0e0e0', outline: 'none', transition: 'border-color 0.3s ease' }} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-dark font-medium mb-2 text-sm uppercase tracking-wide">Inquiry Body</label>
                    <textarea rows={5} style={{ width: '100%', padding: '0.875rem', borderRadius: '6px', border: '1px solid #e0e0e0', outline: 'none', transition: 'border-color 0.3s ease', resize: 'vertical' }} placeholder="How can we assist your journey?"></textarea>
                  </div>
                  <button type="button" className="btn btn-primary mt-4 w-full">Transmit Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
