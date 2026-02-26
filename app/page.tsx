
"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/**
 * RealSoLex.com — single-page personal website
 * Founder / tech entrepreneur vibe
 * Edit the DATA object to customize content.
 */

const DATA = {
  story: {
    title: "My story",
    content: `I didn’t start with capital, connections, or a big team. I started with curiosity, a laptop, and the belief that technology can change lives.

Growing up in Africa, I saw how simple problems, payments, logistics, access to services, were everyday struggles for millions of people. Instead of waiting for solutions, I decided to build them.

Every company I’ve built came from real pain points: helping restaurants sell more, helping people move money easier, helping businesses go digital. There were failures, long nights, and many versions that never shipped, but each one taught me how to build better.

Today, I’m focused on building companies that create real value, real jobs, and real impact. This is not just about tech, it’s about proving that world class businesses can be built from Africa, for the world.`,
  },
  brand: {
    name: "SoLex",
    domain: "realsolex.com",
    tagline: "Tech Entrepreneur • Founder • Business Builder",
    oneLiner:
      "I build companies and help startups grow, Africa first, built to scale globally.",
    location: "Accra, Ghana",
    email: "hello@realsolex.com",
    portfolioValue: "$400K+",
    image:
      "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/hudff-vxsqwx/assets/ao0bcnvn8v2p/WhatsApp_Image_2025-07-27_at_01.15.55_b688c890.jpg",
  },
  socials: [
    { label: "LinkedIn", href: "#", icon: ExternalLink },
    { label: "X (Twitter)", href: "#", icon: ExternalLink },
    {
      label: "Instagram",
      href: "https://instagram.com/realsolexofficial",
      icon: ExternalLink,
    },
  ],
  highlights: [
    {
      title: "Africa first companies",
      desc: "Building businesses that fit real local realities, payments, logistics, and commerce.",
      icon: Globe,
    },
    {
      title: "Speed + execution",
      desc: "From idea → launch → growth with tight feedback loops and measurable results.",
      icon: Sparkles,
    },
    {
      title: "Brand + trust",
      desc: "Clear positioning, strong operations, and products people actually love.",
      icon: Star,
    },
  ],
  now: {
    title: "What I’m building now",
    bullets: [
      "Launching and scaling companies in commerce, logistics, and fintech.",
      "Building partnerships, teams, and systems that deliver reliably.",
      "Driving growth with distribution, retention, and strong customer experience.",
    ],
  },
  companies: [
    {
      name: "DropDeli",
      status: "Live / Expanding",
      desc: "A commerce and delivery brand helping customers order faster and businesses sell more.",
      tags: ["Commerce", "Delivery", "Operations"],
      href: "https://www.dropdeli.com",
    },
    {
      name: "Snift IQ",
      status: "Tech Company",
      desc: "A technology company building mobile apps, websites, and digital platforms for startups and businesses.",
      tags: ["Mobile Apps", "Web", "Software"],
      href: "https://www.sniftiq.com",
    },
    {
      name: "SoLexWallet",
      status: "In Progress",
      desc: "A digital wallet and financial platform focused on seamless payments, cross,border value, and everyday transactions.",
      tags: ["Fintech", "Wallet", "Payments"],
      href: "https://www.solexwallet.com",
    },
  ],
  values: [
    {
      title: "Build for impact",
      desc: "If it doesn’t improve lives, it’s not worth building.",
    },
    {
      title: "Speed with quality",
      desc: "Move fast, but never break trust.",
    },
    {
      title: "Simple wins",
      desc: "Clarity beats complexity. Make it obvious and reliable.",
    },
  ],
  testimonials: [
    {
      quote:
        "SoLex moves fast and thinks clearly. He turns messy problems into focused execution.",
      name: "Partner / Client",
      role: "Operations Lead",
    },
    {
      quote:
        "Strong communication, serious delivery, and always focused on outcomes.",
      name: "Product Collaborator",
      role: "Designer",
    },
  ],
  faq: [
    {
      q: "What do you do?",
      a: "I build and grow companies, and I help startups move from idea to traction with strategy, execution, and distribution.",
    },
    {
      q: "Are you open to partnerships?",
      a: "Yes, if it’s a serious business with clear goals and decision makers involved. Email me with context.",
    },
    {
      q: "Do you work with startups?",
      a: "Yes, selectively. I take a small number of high impact opportunities at a time.",
    },
  ],
};

// -------- Scroll-reveal animations (loads on scroll) --------
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardHover = {
  hover: { y: -5, transition: { duration: 0.2, ease: "easeOut" } }
};

const socialHover = {
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <Reveal delay={0.1}>
          <div className="mb-2 text-sm font-medium text-white/60">{eyebrow}</div>
        </Reveal>
      ) : null}
      <Reveal delay={0.2}>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.3}>
          <p className="mt-2 max-w-2xl text-white/70">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

function TopNav() {
  const items = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Story", href: "#story" },
      { label: "Now", href: "#now" },
      { label: "Companies", href: "#companies" },
      { label: "Values", href: "#values" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="h-9 w-9 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10"
          >
            <Image
              src={DATA.brand.image}
              alt={DATA.brand.name}
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
            />
          </motion.div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{DATA.brand.name}</div>
            <div className="text-xs text-white/60">{DATA.brand.domain}</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {it.label}
            </a>
          ))}
        </div>

        <Button asChild variant="secondary" className="rounded-2xl">
          <a href="#contact">
            Contact <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

function Hero() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 left-1/3 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Pill>
                <MapPin className="mr-2 h-4 w-4" /> {DATA.brand.location}
              </Pill>
              <Pill>
                <Star className="mr-2 h-4 w-4" /> Built companies valued at {DATA.brand.portfolioValue}
              </Pill>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {DATA.brand.name}
            </h1>
            <p className="mt-3 text-base text-white/70 md:text-lg">{DATA.brand.tagline}</p>
            <p className="mt-5 max-w-2xl text-white/80 md:text-lg">{DATA.brand.oneLiner}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="rounded-2xl group">
                <a href="#companies">
                  Explore my companies <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="secondary"
                className="rounded-2xl"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(DATA.brand.email);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1400);
                  } catch {
                    setCopied(false);
                  }
                }}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Email copied" : DATA.brand.email}
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {DATA.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover="hover"
                    variants={socialHover}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {s.label}
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-white/10 blur-2xl" />
              <Image
                src={DATA.brand.image}
                alt={DATA.brand.name}
                width={288}
                height={288}
                className="relative h-72 w-72 rounded-3xl border border-white/10 object-cover shadow-2xl shadow-white/5"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle
        eyebrow="ABOUT"
        title="Hi, I'm Ephraim Solomon"
        subtitle="But I'm called SoLex. RealSoLex.com is my official home online, companies, principles, and what I’m building next."
      />

      <StaggerIn className="grid gap-6 md:grid-cols-3">
        {DATA.highlights.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div key={h.title} whileHover="hover" variants={cardHover}>
              <Card className="rounded-3xl border-white/10 bg-white/5 text-white h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{h.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-white/70">{h.desc}</CardContent>
              </Card>
            </motion.div>
          );
        })}
      </StaggerIn>

      <Reveal className="mt-6" delay={0.4}>
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle className="text-base">Quick intro</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {[
              { label: "What I do", content: "I build companies and help startups grow, with strategy, execution, and strong distribution." },
              { label: "What I care about", content: "Trust, speed, and building brands that win in the real world." },
              { label: "Collaboration", content: "Partnerships, pilots, and high impact opportunities." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70 transition-colors"
              >
                <div className="font-medium text-white/90">{item.label}</div>
                <div className="mt-1">{item.content}</div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </Reveal>
    </motion.section>
  );
}

function Story() {
  return (
    <motion.section
      id="story"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle
        eyebrow="STORY"
        title={DATA.story.title}
        subtitle="Why I build what I build."
      />

      <Reveal delay={0.4}>
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white overflow-hidden">
          <CardContent className="space-y-4 pt-6 text-white/75 leading-relaxed relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-white/10" />
            {DATA.story.content.split("\n\n").map((p, i) => (
              <p key={i} className="pl-4">{p}</p>
            ))}
          </CardContent>
        </Card>
      </Reveal>
    </motion.section>
  );
}

function Now() {
  return (
    <motion.section
      id="now"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-20 h-20" />
          </div>
          <SectionTitle eyebrow="NOW" title={DATA.now.title} />
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <StaggerIn className="space-y-3 text-white/75">
              {DATA.now.bullets.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-white/70" />
                  <div>{b}</div>
                </motion.div>
              ))}
            </StaggerIn>
            <Reveal delay={0.5}>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm font-medium text-white/90">Focus areas</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Strategy",
                    "Growth",
                    "Brand",
                    "Operations",
                    "Partnerships",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-4 bg-white/10" />
                <div className="text-sm text-white/70">
                  If you want to partner, send a short note with context and what success looks like.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </motion.section>
  );
}

function Companies() {
  return (
    <motion.section
      id="companies"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle
        eyebrow="COMPANIES"
        title="Companies & brands"
        subtitle="A few companies and brands I’m building and growing."
      />

      <StaggerIn className="grid gap-6 md:grid-cols-3">
        {DATA.companies.map((c) => (
          <motion.div key={c.name} whileHover="hover" variants={cardHover}>
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-base">{c.name}</CardTitle>
                    <div className="mt-1 text-xs text-white/60">{c.status}</div>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="rounded-2xl shrink-0">
                    <a href={c.href} target="_blank" rel="noreferrer">
                      Visit <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <p className="text-sm text-white/70">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 text-white/80"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </StaggerIn>
    </motion.section>
  );
}

function Values() {
  return (
    <motion.section
      id="values"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle eyebrow="VALUES" title="Principles I build by" />

      <StaggerIn className="grid gap-6 md:grid-cols-3">
        {DATA.values.map((v) => (
          <motion.div key={v.title} whileHover="hover" variants={cardHover}>
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white h-full">
              <CardHeader>
                <CardTitle className="text-base">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/70">{v.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </StaggerIn>
    </motion.section>
  );
}

function Testimonials() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle
        eyebrow="PROOF"
        title="What people say"
        subtitle="Real experiences and partnerships that deliver results."
      />

      <StaggerIn className="grid gap-6 md:grid-cols-2">
        {DATA.testimonials.map((t, idx) => (
          <motion.div key={idx} whileHover="hover" variants={cardHover}>
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white h-full">
              <CardContent className="pt-6 relative">
                <div className="absolute top-4 left-4 opacity-5 pointer-events-none">
                  <Sparkles className="w-10 h-10" />
                </div>
                <p className="text-white/80 italic">“{t.quote}”</p>
                <div className="mt-4 text-sm flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white/90">{t.name}</div>
                    <div className="text-white/60">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </StaggerIn>
    </motion.section>
  );
}

function FAQ() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle eyebrow="FAQ" title="Quick answers" />

      <StaggerIn className="grid gap-6 md:grid-cols-3">
        {DATA.faq.map((f) => (
          <motion.div key={f.q} whileHover="hover" variants={cardHover}>
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white h-full">
              <CardHeader>
                <CardTitle className="text-base">{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/70">{f.a}</CardContent>
            </Card>
          </motion.div>
        ))}
      </StaggerIn>
    </motion.section>
  );
}

function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white md:p-10">
        <SectionTitle
          eyebrow="CONTACT"
          title="Partnerships & opportunities"
          subtitle="If you want to collaborate, invest, or build together, send a short message with context."
        />

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5 group hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Mail className="h-4 w-4" /> Email
                </div>
                <div className="mt-2 text-white/80">{DATA.brand.email}</div>
                <div className="mt-3 text-sm text-white/60">
                  Keep it short: who you are, what you want to build, and why it matters.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    className="rounded-2xl group"
                    onClick={() => {
                      const subject = "Partnership with SoLex";
                      const body =
                        "Hi SoLex,%0A%0A" +
                        "My name is:%0A" +
                        "I’m reaching out about:%0A" +
                        "Goal / opportunity:%0A" +
                        "Timeline:%0A" +
                        "Links (optional):%0A%0A" +
                        "Thanks.";
                      window.location.href = `mailto:${DATA.brand.email}?subject=${encodeURIComponent(
                        subject
                      )}&body=${body}`;
                    }}
                  >
                    Email SoLex <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-2xl"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(DATA.brand.domain);
                      } catch {}
                    }}
                  >
                    Copy domain
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5 group hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Sparkles className="h-4 w-4" /> Updates (optional)
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Occasional updates, launches, lessons, and opportunities.
                </div>
                <div className="mt-4 flex gap-2">
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/20"
                  />
                  <Button
                    className="rounded-2xl"
                    onClick={() => {
                      if (!email.trim()) return;
                      setSent(true);
                      setTimeout(() => setSent(false), 1500);
                      setEmail("");
                    }}
                  >
                    {sent ? "Saved" : "Join"}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.3}>
              <Card className="rounded-3xl border-white/10 bg-black/30 text-white overflow-hidden group hover:border-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base">Good fit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-white/70">
                  {[
                    "Clear goal",
                    "Decision maker involved",
                    "Timeline",
                    "Budget or distribution plan",
                  ].map((it) => (
                    <div key={it} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-white/40" />
                      <span>{it}</span>
                    </div>
                  ))}
                  <Separator className="my-2 bg-white/10" />
                  <div className="text-white/60">
                    If you’re building in Africa, I’m especially interested.
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.4}>
              <Card className="rounded-3xl border-white/10 bg-black/30 text-white group hover:border-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base">Availability</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-white/70">
                  I take a small number of high impact opportunities at a time. Email is the best way to reach me.
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-white/60 md:flex-row md:justify-between md:px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
            <Image
              src={DATA.brand.image}
              alt={DATA.brand.name}
              width={32}
              height={32}
              className="h-8 w-8 object-cover"
            />
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} {DATA.brand.name} • {DATA.brand.domain}
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {[
            { label: "About", href: "#about" },
            { label: "Story", href: "#story" },
            { label: "Companies", href: "#companies" },
            { label: "Contact", href: "#contact" }
          ].map((link) => (
            <a key={link.label} className="hover:text-white transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function RealSoLexSite() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <TopNav />
      <Hero />
      <About />
      <Story />
      <Now />
      <Companies />
      <Values />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
