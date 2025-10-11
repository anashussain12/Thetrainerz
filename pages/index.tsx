import Head from "next/head";
import React, { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "923706237313";
const WA_MESSAGE = encodeURIComponent("Hi Thetrainerz, I’d like to book a lesson.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Thetrainerz | Professional Driving School</title>
        <meta
          name="description"
          content="Flexible schedules, expert instructors, and high first-time pass rates in Lahore."
        />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Courses />
        <Roadmap />
        <Benefits />
        <Steps />
        <Why />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.12c-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.06-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.62-1.53-1.89-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.83-2.02-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.62-.66 1.85-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.38 3 4 8.38 4 15c0 2.12.57 4.12 1.57 5.85L4 29l8.33-1.49C14.12 28.43 15.03 28.5 16 28.5 22.62 28.5 28 23.12 28 16.5S22.62 3 16 3zm0 23.5c-.83 0-1.65-.11-2.45-.33l-.18-.05-4.87.87.9-4.75-.06-.19C8.44 20.07 8 18.31 8 16.5 8 10.71 12.71 6 18.5 6S29 10.71 29 16.5 23.29 26.5 17.5 26.5z" />
        </svg>
      </a>
    </>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#courses", label: "Courses" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#benefits", label: "Benefits" },
    { href: "#why", label: "Why Us" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white font-bold">
            TT
          </span>
          <span className="font-bold">Thetrainerz</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
          >
            WhatsApp
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow w-full text-center"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 0%, rgba(13,148,136,0.10) 0%, rgba(13,148,136,0) 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-xs font-semibold">
            City Traffic Certified Instructors
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Learn to Drive with Confidence
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
            >
              Chat on WhatsApp
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600 max-w-lg">
            <li className="flex items-center gap-2">
              <Dot /> Manual & automatic
            </li>
            <li className="flex items-center gap-2">
              <Dot /> Weekend classes available
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/015/658/427/small_2x/drive-learn-road-sign-illustration-png.png"
            alt="Driving lesson"
            className="rounded-2xl shadow w-full "
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow border border-slate-100">
            <p className="text-sm font-semibold">98% student satisfaction</p>
            <p className="text-xs text-slate-600">Based on 2,000+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="inline-block h-2 w-2 rounded-full bg-teal-600" />;
}
function Stats() {
  const data = [
    { k: "1k+", v: "Students Trained" },
    { k: "4.9★", v: "Average Rating" },
    { k: "5+", v: "Years Experience" },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((d) => (
            <div
              key={d.v}
              className="rounded-2xl bg-white shadow border border-slate-100 p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-teal-600">{d.k}</div>
              <div className="text-sm text-slate-600 mt-1">{d.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Courses ---------------- */
function Courses() {
  const course = {
    title: "Driving Course",
    desc: "Perfect for first-time drivers covering basics, traffic rules, and practical lessons.",
    items: [
      "10 lessons",
      "1 hour practical class per day",
      "Single Control Car",
      "Home Service Available",
      "Qualified Trainers",
      "License Included Course",
    ],
    icon: "🚗",
  };
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Driving Course</h2>
        <p className="text-slate-600 mt-3">Choose our complete package designed for first-time drivers.</p>

        <div className="mt-10 rounded-3xl bg-white shadow-lg border border-slate-100 p-8 hover:shadow-xl transition">
          <div className="text-5xl mb-4">{course.icon}</div>
          <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
          <p className="text-slate-600 mt-2">{course.desc}</p>

          <ul className="mt-6 space-y-3 text-slate-700 text-sm ">
            {course.items.map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    "Lesson 1: On-Road Training from Day 1 (Non-crowded areas)",
    "Lesson 2: Practice in Little Crowded Areas",
    "Lesson 3: Reverse Training",
    "Lesson 4: Parallel, Reverse, and Straight Parking",
    "Lesson 5: Practice on Main Roads",
    "Lesson 6: U-Turns and Roundabouts",
    "Lesson 7: Lane Change, Signals, and Traffic Handling",
    "Lesson 8: Revision of Parking Training",
    "Lesson 9: Long Route Training in Crowded Areas",
    "Lesson 10: Theory and Technical Class",
  ];
  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Roadmap</h2>
        <p className="text-slate-600 mt-2">A structured plan to make you road-ready.</p>
        <ol className="mt-8 grid md:grid-cols-2 gap-4">
          {steps.map((t, idx) => (
            <li
              key={t}
              className="rounded-2xl bg-white shadow border border-slate-100 p-5 flex gap-3"
            >
              <span className="h-8 w-8 shrink-0 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <span className="text-slate-800">{t}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits (added) ---------------- */
function Benefits() {
  const benefits = [
    "Personalized attention with single control car",
    "Flexible home service",
    "Certified trainers",
    "Comprehensive roadmap to ensure you're road-ready",
  ];
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Course Benefits</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <li key={b} className="rounded-2xl bg-white shadow border border-slate-100 p-5 flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                ✓
              </span>
              <span className="text-slate-800">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Steps ---------------- */
function Steps() {
  const steps = [
    { n: 1, t: "Register", d: "Tap WhatsApp and tell us your schedule." },
    { n: 2, t: "Assessment", d: "We evaluate your current skills to craft your plan." },
    { n: 3, t: "Lessons", d: "Attend flexible sessions with certified instructors." },
    { n: 4, t: "Pass", d: "Ace your tests and get licensed faster." },
  ];
  return (
    <section id="process" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
        <p className="text-slate-600 mt-2">A simple path from first lesson to license.</p>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white shadow border border-slate-100 p-6">
              <div className="h-10 w-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                {s.n}
              </div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
          >
            Start on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const bullets = [
    { t: "High first-time pass rate", d: "Focused test routes practice and mock tests." },
    { t: "Flexible schedules", d: "Evening & weekend slots to fit your routine." },
  ];
  return (
    <section id="why" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why choose Thetrainerz</h2>
          <p className="text-slate-600 mt-2">Trusted by thousands of new drivers across UAE & Pakistan.</p>
          <ul className="mt-6 space-y-4">
            {bullets.map((b) => (
              <li key={b.t} className="flex gap-4">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-teal-700">✓</span>
                <div>
                  <h4 className="font-semibold">{b.t}</h4>
                  <p className="text-sm text-slate-600">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <img src="/pkg.jpeg" alt="Instructor with student" className="rounded-2xl shadow " />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    { q: "How many lessons do I need?", a: "Beginners usually take 5-10 lessons. After an assessment, we suggest a tailored plan." },
    { q: "Can I choose manual or automatic?", a: "Absolutely. We support both transmissions for all packages." },
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {qs.map((item) => (
            <details key={item.q} className="rounded-2xl bg-white shadow border border-slate-100 p-5 open:shadow-lg">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-slate-600 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA (added "Book Your Course Today!") ---------------- */
function CTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Book Your Course Today!</h2>
        <p className="text-slate-600 mt-2">Start this week and follow the complete roadmap to become road-ready.</p>
        <div className="mt-6">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact (WhatsApp only) ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="text-slate-600 mt-2">We only use WhatsApp for bookings and questions.</p>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              <b>WhatsApp:</b>{" "}
              <a className="text-green-600 underline" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                +{WHATSAPP_NUMBER}
              </a>
            </p>
            <p className="text-sm text-slate-600">Tap the floating button or any “WhatsApp” button on this page.</p>
          </div>
          <div className="mt-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-green-500 text-white hover:bg-green-600 shadow"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow border border-slate-100 p-6">
          <h3 className="text-xl font-bold">Why WhatsApp?</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Fast replies</li>
            <li>• Share location for pickup</li>
            <li>• Voice notes and quick rescheduling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 py-12">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white font-bold">
              TT
            </span>
            <span className="font-bold">Thetrainerz</span>
          </div>
          <p className="text-slate-600 mt-3 text-sm">
            Professional driving lessons. Flexible schedules, expert instructors, and high first-time pass rates.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">WhatsApp</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <a className="text-green-600 underline" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                +{WHATSAPP_NUMBER}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <a href="#courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:underline">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Service Areas</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Lahore</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Thetrainerz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
