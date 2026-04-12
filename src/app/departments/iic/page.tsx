import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  Layers3,
  MoveRight,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { createMetadata } from '@/lib/site-data';

const officialIicUrl = 'https://www.gutech.edu.pk/innovation-and-incubation-centre';
const officialLeapUrl = 'https://www.gutech.edu.pk/leap-innovation-challenge';

const heroImage =
  'https://static.wixstatic.com/media/a93df4_6be3a43554194068872f084a1a862a84~mv2.jpg/v1/crop/x_0,y_57,w_2780,h_2124/fill/w_1600,h_1220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1635_edited.jpg';

const leapArtwork =
  'https://static.wixstatic.com/media/a93df4_7e489169bc9e43f7abe73fd24f8298e8~mv2.jpg/v1/crop/x_665,y_57,w_598,h_738/fill/w_980,h_1200,al_c,q_85,enc_avif,quality_auto/stock-vector-man-stands-on-the-top-of-digital-mountain-company-leader-achieve-victory-chal.jpg';

export const metadata = createMetadata(
  'Innovation & Incubation Centre',
  'Explore the Innovation & Incubation Centre at GU TECH.',
);

const heroMetrics = [
  { label: 'Core sectors', value: 'AI, cybersecurity, fin-tech, healthcare' },
  { label: 'Cohort I signal', value: '9 shortlisted startups, top 3 incubated' },
  { label: 'Industry model', value: 'Consultancy, training, placements, partner R&D' },
  { label: 'Technical base', value: 'LLMs, GenAI, graphs, IoT, vision systems' },
];

const signalTape = [
  'AI resource hub',
  'Startup incubation',
  'Leap Innovation Challenge',
  'Industry consultancy',
  'Collaborative R&D',
  'Student placements',
  'Founder mentoring',
  'Cybersecurity sessions',
];

const operatingSystem = [
  {
    icon: Layers3,
    step: '01',
    title: 'Source real challenge statements',
    text: 'The I.I.C starts from external problems, startup ideas, and applied research opportunities instead of abstract classroom-only prompts.',
    signal: 'Partner briefs, healthcare, cybersecurity, and venture opportunities',
  },
  {
    icon: Users,
    step: '02',
    title: 'Mentor through experts and operators',
    text: 'Students and founders work in an environment shaped by AI professionals, CEOs, consultants, and sector specialists.',
    signal: 'Expert talks, technical sessions, workshops, and guided reviews',
  },
  {
    icon: Workflow,
    step: '03',
    title: 'Prototype with technical depth',
    text: 'The work extends across LLMs, generative AI, knowledge graphs, IoT, cybersecurity, and computer vision with an applied delivery mindset.',
    signal: 'Research activity tied to execution, experimentation, and product direction',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Incubate the strongest ventures',
    text: 'Leap Innovation Challenge gives serious ideas a visible selection loop and moves the strongest teams toward incubation.',
    signal: 'Shortlist, jury review, founder feedback, and incubation progression',
  },
];

const proofStats = [
  {
    value: '9',
    label: 'shortlisted startups',
    detail: 'Official Cohort I shortlist for the Leap Innovation Challenge.',
  },
  {
    value: 'Top 3',
    label: 'selected for incubation',
    detail: 'Final ventures advanced after jury-led evaluation.',
  },
  {
    value: '5+',
    label: 'named ecosystem partners',
    detail: 'Indus, AKU, Threat Cure, KPMG, Geeks of Kolachi, and more.',
  },
  {
    value: '4',
    label: 'visible sector lanes',
    detail: 'AI, cybersecurity, healthcare, and fintech are called out directly.',
  },
];

const partnerNetwork = ['Indus Hospital Network', 'AKU', 'Threat Cure', 'KPMG', 'Geeks of Kolachi'];

const partnerSignals = [
  'AI consultancy for external organizations',
  'Training programs and expert sessions',
  'Student placements and market exposure',
  'Collaborative R&D and technical problem solving',
];

const leapSignals = [
  'Founder pitches before industry professionals',
  'Cohort-based startup mentoring',
  'KPMG startup registration guidance',
  'Cybersecurity and CEO-led technical sessions',
];

const commandCards = [
  {
    icon: BrainCircuit,
    title: 'AI research engine',
    text: 'The I.I.C positions GU TECH around LLMs, generative AI, knowledge graphs, and intelligent product thinking.',
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity lane',
    text: 'Security-facing sessions and partner-linked problem solving move the work beyond theory.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare collaboration',
    text: 'Medical and health-service challenges appear as real environments for applied innovation work.',
  },
  {
    icon: Cpu,
    title: 'IoT and vision systems',
    text: 'Computer vision and connected systems support prototype-driven experimentation.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Consultancy and delivery',
    text: 'Training, external engagement, and commercial problem solving turn the unit into an operating interface.',
  },
  {
    icon: GraduationCap,
    title: 'Student readiness',
    text: 'The strongest signal is practical maturity before graduation, not just a final transcript.',
  },
];

const expertiseCloud = [
  'LLMs',
  'Generative AI',
  'Knowledge Graphs',
  'Computer Vision',
  'Intelligent IoT',
  'Applied Research',
  'Startup Incubation',
  'Industry Problem Solving',
];

const studentOutcomes = [
  {
    title: 'Learn under real pressure',
    text: 'Students work closer to deadlines, external expectations, and usable outputs rather than isolated submissions.',
  },
  {
    title: 'Build venture-ready instincts',
    text: 'The I.I.C creates a mindset around problem selection, execution, iteration, and market-facing clarity.',
  },
  {
    title: 'Leave with stronger proof',
    text: 'Consultancy exposure, challenge participation, and technical collaboration create stronger credibility than standard coursework alone.',
  },
];

export default function IICPage() {
  return (
    <>
      <section className="home-hero home-hero--locked iic-hero">
        <Image
          src={heroImage}
          alt="Students gathered in a GU TECH innovation session"
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
        />
        <div className="home-hero__overlay iic-hero__overlay" />
        <div className="home-hero__noise" />
        <div className="container home-hero__content iic-hero__content">
          <div className="iic-hero__copy fade-in-up">
            <span className="eyebrow eyebrow--light iic-hero__eyebrow">
              Innovation & Incubation Centre
            </span>
            <h1>Where AI research, startup ambition, and industry problems meet.</h1>
            <p>
              The I.I.C connects GU TECH students, founders, and partners through applied AI work,
              venture mentoring, consultancy, training, and cohort-based incubation.
            </p>
            <div className="home-hero__actions iic-hero__actions">
              <a
                className="button button--primary"
                href={officialIicUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open official I.I.C page
              </a>
              <a
                className="button button--ghost"
                href={officialLeapUrl}
                target="_blank"
                rel="noreferrer"
              >
                See Leap cohort
              </a>
            </div>
            <div className="iic-hero__metrics">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="iic-hero__metric">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="home-sheet iic-sheet">
        <section id="iic-signals" className="iic-tape" aria-label="I.I.C signals">
          <div className="iic-tape__rail">
            {[0, 1].map((row) => (
              <div key={row} className="iic-tape__track">
                {signalTape.map((item) => (
                  <span key={`${row}-${item}`} className="iic-tape__item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="iic-system" className="section iic-band">
          <div className="container iic-system-shell">
            <FadeUp className="iic-heading iic-heading--wide">
              <span className="eyebrow">Venture operating system</span>
              <h2>Not a static department page. A visible pipeline from problem to incubation.</h2>
              <p>
                The strongest innovation pages show how the machine actually runs. The I.I.C should
                read like a working operating system for research, founder support, and industry
                delivery.
              </p>
            </FadeUp>

            <StaggerContainer className="iic-system-grid">
              {operatingSystem.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={item.title}
                    className={`iic-system-card ${index === 0 ? 'iic-system-card--featured' : ''}`}
                  >
                    <div className="iic-system-card__top">
                      <span className="iic-system-card__step">{item.step}</span>
                      <div className="iic-system-card__icon">
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <strong>{item.signal}</strong>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section id="iic-proof" className="section iic-band iic-band--light">
          <div className="container iic-proof-shell">
            <FadeUp className="iic-proof-intro">
              <span className="eyebrow">Proof wall</span>
              <h2>Built to work with operators, firms, hospitals, and founders.</h2>
              <p>
                The official I.I.C material already signals consultancy services, training,
                placements, and collaborative R&amp;D. The page should make that look undeniable.
              </p>
            </FadeUp>

            <div className="iic-proof-grid">
              <FadeUp className="iic-proof-media" delay={0.05}>
                <Image
                  src="/about-collaboration.jpg"
                  alt="Collaboration and partnership activity at GU TECH"
                  fill
                  sizes="(max-width: 960px) 100vw, 54vw"
                  className="iic-proof-media__img"
                />
                <div className="iic-proof-media__overlay" />
                <div className="iic-proof-media__float">
                  <span className="eyebrow eyebrow--light">Partner signals</span>
                  <div className="iic-proof-media__tags">
                    {partnerNetwork.map((partner) => (
                      <span key={partner}>{partner}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <div className="iic-proof-side">
                <StaggerContainer className="iic-proof-stats">
                  {proofStats.map((stat) => (
                    <StaggerItem key={stat.label} className="iic-proof-stat">
                      <span className="iic-proof-stat__value">{stat.value}</span>
                      <h3>{stat.label}</h3>
                      <p>{stat.detail}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <FadeUp className="iic-proof-list" delay={0.12}>
                  <span className="eyebrow">Delivery model</span>
                  <div className="iic-proof-list__items">
                    {partnerSignals.map((item) => (
                      <article key={item}>
                        <Handshake size={18} />
                        <span>{item}</span>
                      </article>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        <section id="iic-leap" className="section iic-band iic-band--challenge">
          <div className="container iic-leap-shell">
            <div className="iic-leap-copy">
              <FadeUp>
                <span className="eyebrow eyebrow--light">Leap pipeline</span>
                <h2>The competition layer turns startup energy into a serious selection loop.</h2>
                <p>
                  Cohort I of the Leap Innovation Challenge is the clearest public signal that the
                  I.I.C is not just talking about innovation. It is creating a visible founder
                  pipeline with review, selection, and incubation.
                </p>
              </FadeUp>

              <StaggerContainer className="iic-leap-grid">
                {operatingSystem.slice(1, 4).map((item) => (
                  <StaggerItem key={item.title} className="iic-leap-stage">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeUp className="iic-leap-signals" delay={0.12}>
                {leapSignals.map((signal) => (
                  <span key={signal}>
                    <ArrowUpRight size={16} />
                    {signal}
                  </span>
                ))}
              </FadeUp>
            </div>

            <FadeUp className="iic-leap-poster" delay={0.08}>
              <Image
                src={leapArtwork}
                alt="Leap Innovation Challenge concept artwork"
                fill
                sizes="(max-width: 960px) 100vw, 40vw"
                className="iic-leap-poster__img"
              />
              <div className="iic-leap-poster__overlay" />
              <div className="iic-leap-poster__caption">
                <span className="eyebrow eyebrow--light">Cohort I</span>
                <strong>Shortlist, jury, and incubation progression</strong>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="iic-command" className="section iic-command">
          <div className="container">
            <FadeUp className="iic-heading iic-heading--wide">
              <span className="eyebrow">Command center</span>
              <h2>AI capability, sector focus, and delivery strength in one page layer.</h2>
              <p>
                This is where the I.I.C earns its premium feel. The page should make its technical
                breadth, sector range, and execution posture obvious at a glance.
              </p>
            </FadeUp>

            <div className="iic-command-grid">
              {commandCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <FadeUp
                    key={card.title}
                    className={`iic-command-card ${card.featured ? 'iic-command-card--featured' : ''}`}
                    delay={0.04 * index}
                  >
                    <div className="iic-command-card__icon">
                      <Icon size={22} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    {card.featured ? (
                      <div className="iic-expertise-cloud">
                        {expertiseCloud.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    ) : null}
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        <section id="iic-outcomes" className="section iic-band iic-band--light">
          <div className="container">
            <FadeUp className="iic-heading iic-heading--tight">
              <span className="eyebrow">Student outcomes</span>
              <h2>Students stay close to market reality, not just academic completion.</h2>
              <p>
                The I.I.C adds pressure, legitimacy, and visibility to the work students do before
                they graduate.
              </p>
            </FadeUp>

            <StaggerContainer className="iic-outcome-grid">
              {studentOutcomes.map((outcome) => (
                <StaggerItem key={outcome.title} className="iic-outcome">
                  <Sparkles size={18} />
                  <h3>{outcome.title}</h3>
                  <p>{outcome.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="iic-contact" className="section iic-cta">
          <div className="container">
            <div className="iic-cta-panel">
              <FadeUp className="iic-cta-panel__media">
                <Image
                  src="/campus-hero.jpg"
                  alt="GU TECH campus"
                  fill
                  sizes="(max-width: 960px) 100vw, 46vw"
                  className="iic-cta-panel__img"
                />
                <div className="iic-cta-panel__overlay" />
                <div className="iic-cta-panel__badge">
                  <Building2 size={18} />
                  <span>GU TECH innovation ecosystem</span>
                </div>
              </FadeUp>

              <FadeUp className="iic-cta-panel__copy" delay={0.08}>
                <span className="eyebrow eyebrow--light">Next move</span>
                <h2>Bring a prototype, a startup idea, or a partner brief.</h2>
                <p>
                  Strong innovation pages do one thing clearly: they make the next conversation
                  impossible to miss. This page should point straight to the I.I.C, Leap, and the
                  GU TECH programs feeding that pipeline.
                </p>

                <div className="iic-cta__actions">
                  <Link className="button button--primary" href="/contact">
                    Contact the I.I.C
                  </Link>
                  <Link className="button button--secondary" href="/programs/bs-cs">
                    Explore BS Computer Science
                  </Link>
                  <a
                    className="button button--ghost"
                    href={officialLeapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Open Leap challenge</span>
                    <MoveRight size={16} />
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
