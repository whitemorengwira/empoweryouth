import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, CheckCircle, Film, Camera, Palette,
  Mic, PenTool, Clapperboard, Users, Shield, Smartphone, Award,
  Zap, Globe, BookOpen, Briefcase, TrendingUp, ArrowRight
} from 'lucide-react';
import './index.css';

/* ============================================================
   16 UNIQUE images — one per slide, no repeats
   ============================================================ */
const IMG: Record<number, string> = {
  1: '/slide01.png',  2: '/slide02.png',  3: '/slide03.png',  4: '/slide04.png',
  5: '/slide05.png',  6: '/slide06.png',  7: '/slide07.png',  8: '/slide08.png',
  9: '/slide09.png', 10: '/slide10.png', 11: '/slide11.png', 12: '/slide12.png',
 13: '/slide13.png', 14: '/slide14.png', 15: '/slide15.png', 16: '/slide16.png',
};

/* ============================================================
   ANIMATION VARIANTS — Socinga-style staggered word reveals
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const wordUp = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: EASE } },
});
const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.7, ease: EASE } },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.7, ease: EASE } },
});
const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { delay, duration: 0.6, ease: EASE } },
});
const clipReveal = (delay = 0) => ({
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0 0 0 0)', opacity: 1, transition: { delay, duration: 0.8, ease: EASE } },
});

/* Animated text line — each word fades up like Socinga */
function AnimWords({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span variants={stagger} initial="hidden" animate="visible" className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.35em' }}>
      {text.split(' ').map((w, i) => (
        <motion.span key={i} variants={wordUp} style={{ display: 'inline-block' }}>
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* Background image with Ken Burns zoom */
function SlideBG({ src, pos = 'center' }: { src: string; pos?: string }) {
  return (
    <div className="slide__bg slide__bg--zooming">
      <img src={src} alt="" style={{ objectPosition: pos }} />
    </div>
  );
}

interface SP { isActive: boolean }

/* ===================== SLIDE 1 — Title & Global Context ===================== */
function S1({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[1]} pos="center 30%" />
      <div className="ov ov--r" /><div className="ov ov--v" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">22 April 2026</span></motion.div>
          <h1 className="ttl ttl--hero"><AnimWords text="Participation at" /><span className="accent"><AnimWords text="EmpowerYouth" /></span></h1>
          <motion.p variants={fadeUp(0.8)} className="sub">
            The inaugural Creative Futures Africa Summit, convened in Johannesburg on 10 October 2025, identified 3 converging dynamics, one of the dynamics is that:
          </motion.p>
          <motion.div variants={fadeUp(1.1)} style={{ display:'flex', alignItems:'center', gap:'.6rem', marginTop:'1.5rem' }}>
            <Globe size={20} className="accent" />
            <span style={{ fontSize:'1rem', color:'var(--gray-300)' }}>Creative Futures Africa Summit</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 2 — The Global Shift ===================== */
function S2({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[2]} pos="center 40%" />
      <div className="ov ov--r" /><div className="ov ov--d" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">The Global Shift</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="AI & Platform" /><span className="accent"><AnimWords text="Economics" /></span></h2>
          <motion.blockquote variants={clipReveal(0.7)} className="quote quote--big glitch">
            "Artificial intelligence (AI) and platform economics are reshaping global creative production, creating a critical window for African interests to be embedded in emerging governing frameworks before these structures solidify……"
          </motion.blockquote>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 3 — The Youth Advantage ===================== */
function S3({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[3]} pos="center 50%" />
      <div className="ov ov--r" /><div className="ov ov--v" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Youth Advantage</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Unprecedented" /><span className="accent"><AnimWords text="Transformation" /></span></h2>
          <motion.div variants={clipReveal(0.7)} className="gc float" style={{ marginTop:'1.5rem' }}>
            <p className="quote" style={{ border:'none', padding:0, margin:0 }}>
              "The convergence of youth demographic advantage (with Africa's median age under 20 years compared to 30 years globally), technological access, African cultural assets achieving global recognition, and opportunities for increasing institutional readiness, creates unprecedented transformation potential. The question is whether stakeholders will act decisively while this alignment persists"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 4 — Breaking In: Technical Foundations ===================== */
function S4({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[4]} pos="center 20%" />
      <div className="ov ov--r" /><div className="ov ov--d" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Technical Foundations</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Breaking Into the" /><span className="accent"><AnimWords text="Film/Audiovisual Industry" /></span></h2>
          <motion.p variants={fadeUp(0.7)} className="sub">There are various ways and strategies to break into the industry, numerous interesting personal stories. Core technical skills — Pick one area to start, but understand the basics of all:</motion.p>
          <motion.div variants={fadeLeft(0.9)} className="gc gc--accent" style={{ marginTop:'1rem' }}>
            <div className="gc__t"><Clapperboard size={18} className="accent" /> Production</div>
            <p className="gc__p">Etiquette, call sheets, basic camera operation, lighting safety, sound recording basics. Production Assistant. Gaffer, Runner.</p>
          </motion.div>
          <motion.div variants={fadeLeft(1.1)} className="gc" style={{ marginTop:'.8rem' }}>
            <div className="gc__t"><PenTool size={18} className="accent" /> Writing</div>
            <p className="gc__p">Screenplay format, 3-act structure, dialogue, pitching.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 5 — Technical Specialisations ===================== */
function S5({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[5]} pos="center" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Specialisations</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Technical" /><span className="accent"><AnimWords text="Depth" /></span></h2>
          {[
            { icon: <Mic size={18} />, t: 'Sound', d: 'Boom operating, mic placement, recording clean audio, basic mixing.' },
            { icon: <Palette size={18} />, t: 'Art/Design Department', d: 'Prop sourcing, continuity, set dressing, costume breakdowns.' },
            { icon: <Film size={18} />, t: 'Post-Production', d: 'Editing basics: DaVinci Resolve / Premiere Pro, file management, codecs, color grading intro.' },
          ].map((c, i) => (
            <motion.div key={c.t} variants={scaleIn(0.5 + i * 0.2)} className="gc" style={{ marginTop:'.8rem' }}>
              <div className="gc__t">{c.icon} {c.t}</div>
              <p className="gc__p">{c.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 6 — Creative & Storytelling ===================== */
function S6({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[6]} pos="center 60%" />
      <div className="ov ov--b" /><div className="ov ov--v" />
      <div className="cnt cnt--center">
        <motion.div initial="hidden" animate="visible" className="gc" style={{ padding:'3rem' }}>
          <motion.div variants={fadeUp(0.1)}><span className="badge">Storytelling Mastery</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Creative &" /> <span className="accent"><AnimWords text="Storytelling Skills" /></span></h2>
          <div className="grid grid--3" style={{ marginTop:'1.5rem' }}>
            {[
              { icon: <Camera size={24} />, t: 'Visual Literacy', d: 'Understanding shot composition, framing, 180-degree rule, camera angles — close-up vs wide.' },
              { icon: <BookOpen size={24} />, t: 'Story Structure', d: 'What makes a scene work, pacing, character arc.' },
              { icon: <Zap size={24} />, t: 'Observation', d: 'Noticing light, human behaviour, details — film is about showing, not telling.' },
            ].map((c, i) => (
              <motion.div key={c.t} variants={scaleIn(0.4 + i * 0.2)} style={{ textAlign:'center', padding:'1.5rem' }}>
                <div style={{ color:'var(--accent)', marginBottom:'1rem' }}>{c.icon}</div>
                <h4 style={{ fontFamily:'Outfit', fontWeight:800, marginBottom:'.6rem', fontSize:'1.15rem' }}>{c.t}</h4>
                <p className="gc__p">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 7 — Critical Soft Skills ===================== */
function S7({ isActive }: SP) {
  if (!isActive) return null;
  const items = [
    { l: 'Reliability', t: 'Film runs on deadlines. Show up early, ready to work 12+ hour days.' },
    { l: 'Collaboration', t: "You'll take notes from directors, work under HODs, solve problems fast." },
    { l: 'Communication', t: 'Clear, calm, no ego. Sets are stressful and hierarchies are strict.' },
    { l: 'Resilience', t: 'Lots of "no", unpaid starting gigs, long hours. Thick skin helps.' },
    { l: 'Problem Solving', t: 'Gear fails, weather changes, actor is late. You fix it or find someone who can.' },
  ];
  return (
    <div className="slide">
      <SlideBG src={IMG[7]} pos="center 35%" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Critical Soft Skills</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="These Matter" /><span className="accent"><AnimWords text="As Much As Creative" /></span></h2>
          <ul className="lst" style={{ marginTop:'1.2rem' }}>
            {items.map((it, i) => (
              <motion.li key={it.l} variants={fadeLeft(0.4 + i * 0.15)} className="lst__i">
                <CheckCircle className="lst__ic" />
                <span><strong>{it.l}:</strong> {it.t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 8 — Industry Knowledge & Safety ===================== */
function S8({ isActive }: SP) {
  if (!isActive) return null;
  const items = [
    { icon: <Users size={18} />, l: 'Set Roles', t: 'Know what a 1st AD, gaffer, DIT, script supervisor actually do.' },
    { icon: <ArrowRight size={18} />, l: 'Workflow', t: 'How a project goes from script → pre-pro → shoot → post → delivery.' },
    { icon: <Globe size={18} />, l: 'SA Context', t: 'Understand B-BBEE, NFVF funding, who the big production companies are in Joburg/Cape Town.' },
    { icon: <Shield size={18} />, l: 'Safety', t: 'Basic set safety, electrical safety, stunt protocols.' },
  ];
  return (
    <div className="slide">
      <SlideBG src={IMG[8]} pos="right center" />
      <div className="ov ov--l" />
      <div className="cnt cnt--left">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Industry Knowledge</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Know the" /><span className="accent"><AnimWords text="System" /></span></h2>
          <ul className="lst" style={{ marginTop:'1.2rem' }}>
            {items.map((it, i) => (
              <motion.li key={it.l} variants={fadeRight(0.4 + i * 0.15)} className="lst__i">
                <span className="lst__ic pulse">{it.icon}</span>
                <span><strong>{it.l}:</strong> {it.t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 9 — Building Your Toolkit ===================== */
function S9({ isActive }: SP) {
  if (!isActive) return null;
  const items = [
    { l: 'Short Courses', t: 'AFDA, Big Fish School of Digital Filmmaking, CityVarsity, Wits Film & TV offer 6-week to 1-year intro courses.' },
    { l: 'Run on Set', t: "Volunteer as a PA/runner. You'll learn everything by watching + doing." },
    { l: 'Make Stuff', t: 'Shoot shorts on your phone. Learn editing. Portfolio > certificates starting out.' },
    { l: 'Network', t: 'Join the SA Film Industry Facebook groups, go to DIFF/Durban FilmMart, NFVF workshops.' },
    { l: 'Software', t: 'Get comfortable with Celtx for writing, DaVinci Resolve (free) for editing, Zoom recorders for sound.' },
    { l: 'Fastest Entry', t: 'Production Assistant, Camera Trainee, Art Department Assistant, Post-production Runner. From there you specialize.' },
  ];
  return (
    <div className="slide">
      <SlideBG src={IMG[9]} pos="center 70%" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Build Your Toolkit</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Practical Ways to" /><span className="accent"><AnimWords text="Build Skills" /></span></h2>
          <ul className="lst" style={{ marginTop:'1rem' }}>
            {items.map((it, i) => (
              <motion.li key={it.l} variants={fadeLeft(0.35 + i * 0.12)} className="lst__i">
                <CheckCircle className="lst__ic" />
                <span><strong>{it.l}:</strong> {it.t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 10 — Training Comparison ===================== */
function S10({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[10]} pos="center" />
      <div className="ov ov--d" /><div className="ov ov--v" />
      <div className="cnt cnt--center">
        <motion.div initial="hidden" animate="visible" className="gc" style={{ padding:'3rem' }}>
          <motion.div variants={fadeUp(0.1)}><span className="badge">Training Comparison</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="What Gets You" /> <span className="accent"><AnimWords text="Hired" /></span></h2>
          <motion.p variants={fadeUp(0.6)} className="sub">Practical experience beats formal training – the strategy is to use both.</motion.p>
          <motion.div variants={clipReveal(0.8)} className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Factor</th><th>Formal Training</th><th>Practical Experience</th></tr></thead>
              <tbody>
                <tr><td><strong>Gets You In the Door</strong></td><td>Sometimes, for internships or trainee programs at big studios</td><td>Almost always. A producer cares if you've survived 3am wrap times, not your GPA or credits.</td></tr>
                <tr><td><strong>Teaches You</strong></td><td>Theory, film history, safe environment to fail, access to gear, networking with lecturers</td><td>Set etiquette, real pressure, problem-solving, how departments talk to each other</td></tr>
                <tr><td><strong>Industry View</strong></td><td>Nice to have</td><td style={{ color:'var(--accent)', fontWeight:700 }}>"Must have". Your call sheet credits & who can vouch for you = your CV</td></tr>
                <tr><td><strong>Cost</strong></td><td>R30K – over R100K</td><td>Often unpaid at first, but you're earning credits + contacts and creating relationships — connections.</td></tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 11 — Industry Reality ===================== */
function S11({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[11]} pos="center 45%" />
      <div className="ov ov--b" /><div className="ov ov--v" />
      <div className="cnt cnt--bottom">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Industry Reality</span></motion.div>
          <h2 className="ttl ttl--lg" style={{ maxWidth:'900px' }}><AnimWords text="No One Asks for Your" /> <span className="accent"><AnimWords text="Certificate on Set" /></span></h2>
          <div className="grid grid--2" style={{ maxWidth:'1000px', marginTop:'1.2rem' }}>
            <motion.div variants={fadeUp(0.6)} className="gc">
              <p className="gc__p">The 1st AD wants to know you can lock up a set, wrangle background artists, or wrap cables fast.</p>
            </motion.div>
            <motion.div variants={fadeUp(0.8)} className="gc">
              <p className="gc__p">Many top SA crew never studied film. They started as runners/PAs at 18, worked up to HOD roles. Departments like grip, lighting, and art dept value apprenticeship over diplomas.</p>
            </motion.div>
          </div>
          <motion.p variants={fadeUp(1.0)} className="sub" style={{ marginTop:'1rem', maxWidth:'900px' }}>
            Film schools help with network + foundation. Students often crew on each other's projects. Lecturers recommend students for runner jobs. That first break is huge. Some roles need formal study more than others: Writing, directing, editing, sound design. Training helps with craft + software. Camera/grip/electric — you'll learn 80% on set.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 12 — Specialisations & Software ===================== */
function S12({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[12]} pos="center 30%" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Craft & Software</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Specialisations &" /><span className="accent"><AnimWords text="Software" /></span></h2>
          <motion.div variants={clipReveal(0.6)} className="gc gc--accent" style={{ marginTop:'1.5rem' }}>
            <p className="gc__p" style={{ fontSize:'1.15rem' }}>
              Some roles need formal study more than others: <strong style={{ color:'var(--white)' }}>Writing, directing, editing, sound design.</strong>
            </p>
          </motion.div>
          <motion.div variants={clipReveal(0.9)} className="gc" style={{ marginTop:'1rem' }}>
            <p className="gc__p" style={{ fontSize:'1.15rem' }}>
              Training helps with craft + software. <strong style={{ color:'var(--accent)' }}>Camera/grip/electric — you'll learn 80% on set.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 13 — Entry Jobs ===================== */
function S13({ isActive }: SP) {
  if (!isActive) return null;
  const jobs = [
    { icon: <Briefcase size={24} />, t: 'Runner / PA', d: 'Coffee, lockups, driving, wrangling extras. You see every department. Email Joburg production houses: e.g Bomb, Quizzical, Moonlighting, Seriti. Say "Available for free 2 weeks".' },
    { icon: <Camera size={24} />, t: 'Camera Trainee', d: 'Load batteries, carry cases, learn from the 2nd AC. Contact rental houses like Media Film Service, ZSE. They know who needs trainees.' },
    { icon: <Palette size={24} />, t: 'Art Department', d: 'Paint sets, buy props, continuity. Follow SA art directors on Instagram, DM offering to help.' },
  ];
  return (
    <div className="slide">
      <SlideBG src={IMG[13]} pos="center" />
      <div className="ov ov--d" /><div className="ov ov--b" />
      <div className="cnt cnt--center">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Foot in the Door</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Entry Jobs —" /> <span className="accent"><AnimWords text="Zero Experience Needed" /></span></h2>
          <motion.p variants={fadeUp(0.6)} className="sub">These need zero experience, just hustle + reliability:</motion.p>
          <div className="grid grid--3" style={{ marginTop:'1rem' }}>
            {jobs.map((j, i) => (
              <motion.div key={j.t} variants={scaleIn(0.6 + i * 0.2)} className="gc" style={{ textAlign:'center', padding:'2rem 1.5rem' }}>
                <div style={{ color:'var(--accent)', marginBottom:'.8rem' }}>{j.icon}</div>
                <div className="gc__t" style={{ justifyContent:'center', fontSize:'1.2rem' }}>{j.t}</div>
                <p className="gc__p">{j.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 14 — The Bottom Line ===================== */
function S14({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[14]} pos="center 60%" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">The Bottom Line</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="They Hire" /><span className="accent"><AnimWords text="Drivers" /></span></h2>
          <ul className="lst" style={{ marginTop:'1.2rem' }}>
            <motion.li variants={fadeUp(0.5)} className="lst__i"><CheckCircle className="lst__ic" /><span>One week as a runner can get you <strong>5 phone numbers</strong> that may lead to paid work.</span></motion.li>
            <motion.li variants={fadeUp(0.65)} className="lst__i"><CheckCircle className="lst__ic" /><span><strong>SA crews rehire people they trust.</strong></span></motion.li>
            <motion.li variants={fadeUp(0.8)} className="lst__i"><CheckCircle className="lst__ic" /><span>Spending 3 years + debt on film school without doing any real practical work — You'll graduate but find yourself competing with younger than yourself who have a portfolio of short films + commercials as PA.</span></motion.li>
          </ul>
          <motion.blockquote variants={clipReveal(1.0)} className="quote quote--big" style={{ marginTop:'1.8rem', color:'var(--white)', fontWeight:700 }}>
            "Training gives you a map. Experience teaches you to drive. In film, they hire drivers."
          </motion.blockquote>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 15 — No More Barriers ===================== */
function S15({ isActive }: SP) {
  if (!isActive) return null;
  const items = [
    { icon: <Smartphone size={18} />, t: 'Phone + free software: Shoot a 1-min short every month. DaVinci Resolve is free. Post to TikTok/YouTube/Instagram. Producers scout there now.' },
    { icon: <Zap size={18} />, t: '48 Hour Film Project: Annual comp where you write/shoot/edit in 48hrs. Winners get seen by industry. Next one usually mid-year.' },
    { icon: <Award size={18} />, t: 'NFVF Funding for 18-35 yr olds for shorts. R100k–R200k grants. Check NFVF website for calls.' },
    { icon: <TrendingUp size={18} />, t: 'TikTok/IG Reels — Verticals: Ad agencies hire creators straight from socials for branded content. That pays, and builds directing/editing reels.' },
  ];
  return (
    <div className="slide">
      <SlideBG src={IMG[15]} pos="center" />
      <div className="ov ov--r" />
      <div className="cnt cnt--right">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Digital Era</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="No More Barriers" /><span className="accent"><AnimWords text="to Entry" /></span></h2>
          <motion.p variants={fadeUp(0.6)} className="sub">Entering the industry now has less barrier of entry if you are determined and focused – it doesn't only take talent.</motion.p>
          <ul className="lst" style={{ marginTop:'1rem' }}>
            {items.map((it, i) => (
              <motion.li key={i} variants={fadeLeft(0.6 + i * 0.15)} className="lst__i">
                <span className="lst__ic">{it.icon}</span>
                <span>{it.t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 16 — Programmes, Entrepreneurship & Networking ===================== */
function S16({ isActive }: SP) {
  if (!isActive) return null;
  return (
    <div className="slide">
      <SlideBG src={IMG[16]} pos="center 50%" />
      <div className="ov ov--d" /><div className="ov ov--v" />
      <div className="cnt cnt--center" style={{ textAlign:'center' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.1)}><span className="badge">Programmes & Entrepreneurship</span></motion.div>
          <h2 className="ttl ttl--lg"><AnimWords text="Programmes, Entrepreneurship &" /> <span className="accent"><AnimWords text="Networking" /></span></h2>
          <div className="grid grid--2" style={{ marginTop:'1.5rem', textAlign:'left' }}>
            <motion.div variants={scaleIn(0.4)} className="gc gc--accent">
              <div className="gc__t"><Award size={18} className="accent" /> Youth Programmes</div>
              <p className="gc__p">SA FILM Academy: Established in 2006, MICT SETA-accredited NPC, providing in-service/on-the-job training, skills development, employment generation and career path development in film & digital Media. Multichoice Talent Factory. Ikasi Media. Film Commissions Training Workshops. Film Festivals & Markets. Various Academies, Universities, Private schools.</p>
            </motion.div>
            <motion.div variants={scaleIn(0.6)} className="gc">
              <div className="gc__t"><Briefcase size={18} className="accent" /> Entrepreneurship</div>
              <p className="gc__p">Commercials/Music videos: Faster turnaround, always need PAs. Corporate video: Every company needs content. YouTube/Twitch creators: Edit for SA YouTubers. Weddings, Community and Industry events: Teaches you to shoot under pressure, handle clients, manage audio. Pays well.</p>
            </motion.div>
            <motion.div variants={scaleIn(0.8)} className="gc">
              <div className="gc__t"><Globe size={18} className="accent" /> Online/Networking Entry Points</div>
              <p className="gc__p">Free Facebook groups: "SA Film Industry", "Call Sheet SA", "Joburg Film Crew". Jobs posted daily. Crew/Freelance Groups: Free profile, producers search it. Film Festivals/Markets: JFF, DIFF/Durban FilmMart. Global film Discords with #hiring channels. Wrapped — new kid on the block.</p>
            </motion.div>
            <motion.div variants={scaleIn(1.0)} className="gc gc--accent">
              <div className="gc__t"><Zap size={18} className="accent" /> Biggest Myth</div>
              <p className="gc__p">You need expensive gear or connections. You just need proof you can work hard and <strong style={{ color:'var(--accent)' }}>1 person to trust you</strong>. After that, film is a "who knows you" industry. Which lane appeals most — set life, writing/directing, or post-production?</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN PRESENTATION — 16 slides, keyboard nav, SA FILM ACADEMY logo
   ============================================================ */
const SLIDES = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16];

const slideTransition = {
  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
};

export default function App() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);

  const go = useCallback((i: number) => {
    if (i < 0 || i >= SLIDES.length) return;
    setDir(i > cur ? 1 : -1);
    setCur(i);
  }, [cur]);

  const next = useCallback(() => go(cur + 1), [cur, go]);
  const prev = useCallback(() => go(cur - 1), [cur, go]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [next, prev]);

  const Slide = SLIDES[cur];

  return (
    <div className="pres">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={cur}
          custom={dir}
          variants={slideTransition}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: EASE }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Slide isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* NAV BAR with SA Film Academy logo instead of Ndeko Presentations */}
      <nav className="nav">
        <div className="nav__prog" style={{ width: `${((cur + 1) / SLIDES.length) * 100}%` }} />
        <img src="/sa-film-academy-logo.png" alt="SA Film Academy" className="nav__logo" />
        <div className="nav__ctrls">
          <span className="nav__count">{String(cur + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
          <button className="nav__btn" onClick={prev} disabled={cur === 0} aria-label="Previous"><ChevronLeft size={20} /></button>
          <button className="nav__btn" onClick={next} disabled={cur === SLIDES.length - 1} aria-label="Next"><ChevronRight size={20} /></button>
        </div>
      </nav>
    </div>
  );
}
