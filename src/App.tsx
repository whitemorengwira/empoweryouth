import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, CheckCircle, Film, Camera, Palette,
  Mic, PenTool, Clapperboard, Users, Shield, Smartphone, Award,
  Zap, Globe, BookOpen, Briefcase, TrendingUp, ArrowRight
} from 'lucide-react';
import './index.css';

/* 32 images — one per slide */
const I: Record<number,string> = {};
for (let i = 1; i <= 16; i++) I[i] = `/slide${String(i).padStart(2,'0')}.png`;
for (let i = 17; i <= 31; i++) I[i] = `/s${i}.png`;
I[32] = '/slide16.png'; // reuse final group shot for closing

/* ========== ANIMATION HELPERS ========== */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const wordUp = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE } },
};
const fu = (d=0)=>({ hidden:{opacity:0,y:40}, visible:{opacity:1,y:0,transition:{delay:d,duration:0.7,ease:EASE}} });
const fl = (d=0)=>({ hidden:{opacity:0,x:-50}, visible:{opacity:1,x:0,transition:{delay:d,duration:0.7,ease:EASE}} });
const fr = (d=0)=>({ hidden:{opacity:0,x:50}, visible:{opacity:1,x:0,transition:{delay:d,duration:0.7,ease:EASE}} });
const si = (d=0)=>({ hidden:{opacity:0,scale:0.85}, visible:{opacity:1,scale:1,transition:{delay:d,duration:0.6,ease:EASE}} });
const cr = (d=0)=>({ hidden:{clipPath:'inset(100% 0 0 0)',opacity:0}, visible:{clipPath:'inset(0 0 0 0)',opacity:1,transition:{delay:d,duration:0.8,ease:EASE}} });

/* Word-by-word animated text */
function W({ text, cls='' }: { text:string; cls?:string }) {
  return (
    <motion.span variants={stagger} initial="hidden" animate="visible" className={cls} style={{ display:'flex', flexWrap:'wrap', gap:'0 0.35em' }}>
      {text.split(' ').map((w,i)=>(<motion.span key={i} variants={wordUp} style={{ display:'inline-block' }}>{w}</motion.span>))}
    </motion.span>
  );
}

/* Background with Ken Burns */
function BG({ n, alt=false }: { n:number; alt?:boolean }) {
  return (
    <div className={`slide__bg${alt?' slide__bg--out':''}`}>
      <img src={I[n]} alt="" />
    </div>
  );
}

/* Infographic stat bubble */
function Stat({ num, label, top, left, right, bottom }: { num:string; label:string; top?:string; left?:string; right?:string; bottom?:string }) {
  return (
    <motion.div className="infographic float" style={{ top, left, right, bottom }}
      initial={{ opacity:0, scale:0.7 }} animate={{ opacity:1, scale:1 }} transition={{ delay:1.2, duration:0.6, ease:EASE }}>
      <div className="infographic__number">{num}</div>
      <div className="infographic__label">{label}</div>
    </motion.div>
  );
}

interface SP { isActive:boolean }

/* ===== SLIDES ===== */

function S1({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={1}/><div className="ov ov--r"/><div className="ov ov--v"/>
    <Stat num="2026" label="Summit Year" top="15%" left="8%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">22 April 2026</span></motion.div>
      <h1 className="ttl ttl--hero"><W text="Participation at"/><span className="accent"><W text="EmpowerYouth"/></span></h1>
      <motion.p variants={fu(0.8)} className="sub">SA Film Academy • Creative Futures Africa Summit</motion.p>
    </motion.div></div></div>
); }

function S2({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={17} alt/><div className="ov ov--r"/>
    <Stat num="3" label="Converging Dynamics" top="12%" left="10%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Global Context</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Creative Futures"/><span className="accent"><W text="Africa Summit"/></span></h2>
      <motion.p variants={fu(0.7)} className="sub">The inaugural Creative Futures Africa Summit, convened in Johannesburg on 10 October 2025, identified 3 converging dynamics, one of the dynamics is that:</motion.p>
    </motion.div></div></div>
); }

function S3({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={2}/><div className="ov ov--r"/><div className="ov ov--d"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">The Global Shift</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="AI & Platform"/><span className="accent"><W text="Economics"/></span></h2>
      <motion.blockquote variants={cr(0.7)} className="quote quote--big glitch">
        "Artificial intelligence (AI) and platform economics are reshaping global creative production, creating a critical window for African interests to be embedded in emerging governing frameworks before these structures solidify……"
      </motion.blockquote>
    </motion.div></div></div>
); }

function S4({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={18} alt/><div className="ov ov--r"/><div className="ov ov--v"/>
    <Stat num="<20" label="Africa's Median Age" top="12%" left="8%"/>
    <Stat num="30" label="Global Median Age" top="12%" right="52%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Youth Advantage</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Unprecedented"/><span className="accent"><W text="Transformation"/></span></h2>
      <motion.div variants={cr(0.7)} className="gc float" style={{ marginTop:'1.5rem' }}>
        <p className="quote" style={{ border:'none', padding:0, margin:0 }}>
          "The convergence of youth demographic advantage (with Africa's median age under 20 years compared to 30 years globally), technological access, African cultural assets achieving global recognition, and opportunities for increasing institutional readiness, creates unprecedented transformation potential. The question is whether stakeholders will act decisively while this alignment persists"
        </p>
      </motion.div>
    </motion.div></div></div>
); }

function S5({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={4}/><div className="ov ov--r"/><div className="ov ov--d"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Breaking In</span></motion.div>
      <h2 className="ttl ttl--hero"><W text="Breaking Into the"/><span className="accent"><W text="Industry"/></span></h2>
      <motion.p variants={fu(0.7)} className="sub">There are various ways and strategies to break into the film/audiovisual industry, numerous interesting personal stories.</motion.p>
    </motion.div></div></div>
); }

function S6({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={19} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Core Technical Skills</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Production"/><span className="accent"><W text="Foundations"/></span></h2>
      <motion.p variants={fu(0.5)} className="sub" style={{fontSize:'1rem'}}>Pick one area to start, but understand the basics of all:</motion.p>
      <motion.div variants={fl(0.7)} className="gc gc--accent" style={{marginTop:'1rem'}}>
        <div className="gc__t"><Clapperboard size={18} className="accent"/> Production</div>
        <p className="gc__p">Etiquette, call sheets, basic camera operation, lighting safety, sound recording basics. Production Assistant. Gaffer, Runner.</p>
      </motion.div>
      <motion.div variants={fl(0.9)} className="gc" style={{marginTop:'.8rem'}}>
        <div className="gc__t"><PenTool size={18} className="accent"/> Writing</div>
        <p className="gc__p">Screenplay format, 3-act structure, dialogue, pitching.</p>
      </motion.div>
    </motion.div></div></div>
); }

function S7({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={20}/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Technical Specialisations</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Sound & Creative"/><span className="accent"><W text="Departments"/></span></h2>
      {[
        { icon:<Mic size={18}/>, t:'Sound', d:'Boom operating, mic placement, recording clean audio, basic mixing.' },
        { icon:<Palette size={18}/>, t:'Art/Design Department', d:'Prop sourcing, continuity, set dressing, costume breakdowns.' },
        { icon:<Film size={18}/>, t:'Post-Production', d:'Editing basics: DaVinci Resolve / Premiere Pro, file management, codecs, color grading intro.' },
      ].map((c,i)=>(<motion.div key={c.t} variants={si(0.5+i*0.2)} className="gc" style={{marginTop:'.8rem'}}><div className="gc__t">{c.icon} {c.t}</div><p className="gc__p">{c.d}</p></motion.div>))}
    </motion.div></div></div>
); }

function S8({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={21} alt/><div className="ov ov--r"/><div className="ov ov--v"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Storytelling Mastery</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Visual"/><span className="accent"><W text="Literacy"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.5)} className="lst__i"><Camera className="lst__ic"/><span><strong>Shot Composition:</strong> Understanding framing, 180-degree rule, camera angles — close-up vs wide.</span></motion.li>
        <motion.li variants={fl(0.65)} className="lst__i"><BookOpen className="lst__ic"/><span><strong>Story Structure:</strong> What makes a scene work, pacing, character arc.</span></motion.li>
        <motion.li variants={fl(0.8)} className="lst__i"><Zap className="lst__ic"/><span><strong>Observation:</strong> Noticing light, human behaviour, details — film is about showing, not telling.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S9({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={7}/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Soft Skills — Part 1</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="These Matter"/><span className="accent"><W text="As Much"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Reliability:</strong> Film runs on deadlines. Show up early, ready to work 12+ hour days.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Collaboration:</strong> You'll take notes from directors, work under HODs, solve problems fast.</span></motion.li>
        <motion.li variants={fl(0.7)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Communication:</strong> Clear, calm, no ego. Sets are stressful and hierarchies are strict.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S10({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={22} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Soft Skills — Part 2</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Resilience &"/><span className="accent"><W text="Problem Solving"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Resilience:</strong> Lots of "no", unpaid starting gigs, long hours. Thick skin helps.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Problem Solving:</strong> Gear fails, weather changes, actor is late. You fix it or find someone who can.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S11({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={23}/><div className="ov ov--l"/>
    <Stat num="5+" label="Key Set Roles" top="12%" right="8%"/>
    <div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Industry Knowledge</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Set Roles &"/><span className="accent"><W text="Workflow"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fr(0.4)} className="lst__i"><Users className="lst__ic"/><span><strong>Set Roles:</strong> Know what a 1st AD, gaffer, DIT, script supervisor actually do.</span></motion.li>
        <motion.li variants={fr(0.55)} className="lst__i"><ArrowRight className="lst__ic"/><span><strong>Workflow:</strong> How a project goes from script → pre-pro → shoot → post → delivery.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S12({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={8} alt/><div className="ov ov--l"/>
    <div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">SA Context & Safety</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Know the"/><span className="accent"><W text="System"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fr(0.4)} className="lst__i"><Globe className="lst__ic pulse"/><span><strong>SA Context:</strong> Understand B-BBEE, NFVF funding, who the big production companies are in Joburg/Cape Town.</span></motion.li>
        <motion.li variants={fr(0.55)} className="lst__i"><Shield className="lst__ic pulse"/><span><strong>Safety:</strong> Basic set safety, electrical safety, stunt protocols.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S13({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={24}/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Build Your Toolkit — Part 1</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Practical Ways to"/><span className="accent"><W text="Build Skills"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Short Courses:</strong> AFDA, Big Fish School of Digital Filmmaking, CityVarsity, Wits Film & TV offer 6-week to 1-year intro courses.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Run on Set:</strong> Volunteer as a PA/runner. You'll learn everything by watching + doing.</span></motion.li>
        <motion.li variants={fl(0.7)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Make Stuff:</strong> Shoot shorts on your phone. Learn editing. Portfolio {'>'} certificates starting out.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S14({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={25} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Build Your Toolkit — Part 2</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Network &"/><span className="accent"><W text="Software"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Network:</strong> Join the SA Film Industry Facebook groups, go to DIFF/Durban FilmMart, NFVF workshops.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Software:</strong> Get comfortable with Celtx for writing, DaVinci Resolve (free) for editing, Zoom recorders for sound.</span></motion.li>
        <motion.li variants={fl(0.7)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>Fastest Entry:</strong> Production Assistant, Camera Trainee, Art Department Assistant, Post-production Runner. From there you specialize.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S15({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={10}/><div className="ov ov--d"/><div className="ov ov--v"/>
    <div className="cnt cnt--center"><motion.div initial="hidden" animate="visible" className="gc" style={{padding:'3rem'}}>
      <motion.div variants={fu(0.1)}><span className="badge">Training vs Experience</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="What Gets You"/> <span className="accent"><W text="Hired"/></span></h2>
      <motion.p variants={fu(0.5)} className="sub">Practical experience beats formal training – the strategy is to use both.</motion.p>
    </motion.div></div></div>
); }

function S16({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={10} alt/><div className="ov ov--d"/><div className="ov ov--v"/>
    <div className="cnt cnt--center"><motion.div initial="hidden" animate="visible" className="gc" style={{padding:'3rem'}}>
      <motion.div variants={fu(0.1)}><span className="badge">Comparison Table</span></motion.div>
      <motion.div variants={cr(0.4)} className="tbl-wrap">
        <table className="tbl"><thead><tr><th>Factor</th><th>Formal Training</th><th>Practical Experience</th></tr></thead><tbody>
          <tr><td><strong>Gets You In</strong></td><td>Sometimes, for internships or trainee programs at big studios</td><td>Almost always. A producer cares if you've survived 3am wrap times, not your GPA or credits.</td></tr>
          <tr><td><strong>Teaches You</strong></td><td>Theory, film history, safe environment to fail, access to gear, networking with lecturers</td><td>Set etiquette, real pressure, problem-solving, how departments talk to each other</td></tr>
          <tr><td><strong>Industry View</strong></td><td>Nice to have</td><td style={{color:'var(--accent)',fontWeight:700}}>"Must have". Your call sheet credits & who can vouch for you = your CV</td></tr>
          <tr><td><strong>Cost</strong></td><td>R30K – over R100K</td><td>Often unpaid at first, but you're earning credits + contacts and creating relationships — connections.</td></tr>
        </tbody></table>
      </motion.div>
    </motion.div></div></div>
); }

function S17({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={11}/><div className="ov ov--b"/><div className="ov ov--v"/>
    <div className="cnt cnt--bottom"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Industry Reality — Part 1</span></motion.div>
      <h2 className="ttl ttl--lg" style={{maxWidth:'900px'}}><W text="No One Asks for Your"/> <span className="accent"><W text="Certificate on Set"/></span></h2>
      <div className="grid grid--2" style={{maxWidth:'1000px',marginTop:'1.2rem'}}>
        <motion.div variants={fu(0.6)} className="gc"><p className="gc__p">The 1st AD wants to know you can lock up a set, wrangle background artists, or wrap cables fast.</p></motion.div>
        <motion.div variants={fu(0.8)} className="gc"><p className="gc__p">Film schools help with network + foundation. Students often crew on each other's projects. Lecturers recommend students for runner jobs. That first break is huge.</p></motion.div>
      </div>
    </motion.div></div></div>
); }

function S18({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={12} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Industry Reality — Part 2</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Apprenticeship Over"/><span className="accent"><W text="Diplomas"/></span></h2>
      <motion.p variants={fu(0.5)} className="sub">Many top SA crew never studied film. They started as runners/PAs at 18, worked up to HOD roles. Departments like grip, lighting, and art dept value apprenticeship over diplomas.</motion.p>
      <motion.div variants={cr(0.8)} className="gc gc--accent" style={{marginTop:'1.2rem'}}>
        <p className="gc__p" style={{fontSize:'1.15rem'}}>Some roles need formal study more than others: <strong style={{color:'var(--white)'}}>Writing, directing, editing, sound design.</strong></p>
      </motion.div>
      <motion.div variants={cr(1.0)} className="gc" style={{marginTop:'.8rem'}}>
        <p className="gc__p" style={{fontSize:'1.15rem'}}>Training helps with craft + software. <strong style={{color:'var(--accent)'}}>Camera/grip/electric — you'll learn 80% on set.</strong></p>
      </motion.div>
    </motion.div></div></div>
); }

function S19({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={13}/><div className="ov ov--r"/>
    <Stat num="0" label="Experience Needed" top="12%" left="10%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Foot in the Door</span></motion.div>
      <h2 className="ttl ttl--hero"><W text="Entry"/><span className="accent"><W text="Jobs"/></span></h2>
      <motion.p variants={fu(0.7)} className="sub">The classic "foot in the door" — these need zero experience, just hustle + reliability.</motion.p>
    </motion.div></div></div>
); }

function S20({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={26} alt/><div className="ov ov--d"/><div className="ov ov--b"/>
    <div className="cnt cnt--center"><motion.div initial="hidden" animate="visible">
      <div className="grid grid--3" style={{marginTop:'0'}}>
        {[
          { icon:<Briefcase size={24}/>, t:'Runner / PA', d:'Coffee, lockups, driving, wrangling extras. You see every department. Email Joburg production houses: Bomb, Quizzical, Moonlighting, Seriti. Say "Available for free 2 weeks".' },
          { icon:<Camera size={24}/>, t:'Camera Trainee', d:'Load batteries, carry cases, learn from the 2nd AC. Contact rental houses like Media Film Service, ZSE. They know who needs trainees.' },
          { icon:<Palette size={24}/>, t:'Art Department', d:'Paint sets, buy props, continuity. Follow SA art directors on Instagram, DM offering to help.' },
        ].map((j,i)=>(<motion.div key={j.t} variants={si(0.3+i*0.2)} className="gc" style={{textAlign:'center',padding:'2rem 1.5rem'}}>
          <div style={{color:'var(--accent)',marginBottom:'.8rem'}}>{j.icon}</div>
          <div className="gc__t" style={{justifyContent:'center',fontSize:'1.2rem'}}>{j.t}</div>
          <p className="gc__p">{j.d}</p>
        </motion.div>))}
      </div>
    </motion.div></div></div>
); }

function S21({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={27}/><div className="ov ov--r"/>
    <Stat num="5" label="Phone Numbers / Week" top="15%" left="8%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Key Insight</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Trust &"/><span className="accent"><W text="Connections"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fu(0.4)} className="lst__i"><CheckCircle className="lst__ic"/><span>One week as a runner can get you <strong>5 phone numbers</strong> that may lead to paid work.</span></motion.li>
        <motion.li variants={fu(0.55)} className="lst__i"><CheckCircle className="lst__ic"/><span><strong>SA crews rehire people they trust.</strong></span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S22({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={14} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">The Warning</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Don't Just"/><span className="accent"><W text="Study"/></span></h2>
      <motion.p variants={fu(0.5)} className="sub">Spending 3 years + debt on film school without doing any real practical work — You'll graduate but find yourself competing with younger than yourself who have a portfolio of short films + commercials as PA.</motion.p>
    </motion.div></div></div>
); }

function S23({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={28}/><div className="ov ov--b"/><div className="ov ov--v"/>
    <div className="cnt cnt--bottom"><motion.div initial="hidden" animate="visible" style={{textAlign:'center',maxWidth:'900px',margin:'0 auto'}}>
      <motion.div variants={fu(0.1)}><span className="badge">Bottom Line</span></motion.div>
      <motion.blockquote variants={cr(0.5)} className="quote quote--big" style={{borderLeft:'none',textAlign:'center',margin:'0 auto',fontSize:'clamp(1.5rem,2.5vw,2.2rem)',fontWeight:700,color:'var(--white)',maxWidth:'800px'}}>
        "Training gives you a map. Experience teaches you to drive. In film, they hire drivers."
      </motion.blockquote>
    </motion.div></div></div>
); }

function S24({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={9} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Digital Era</span></motion.div>
      <h2 className="ttl ttl--hero"><W text="No More"/><span className="accent"><W text="Barriers"/></span></h2>
      <motion.p variants={fu(0.7)} className="sub">Entering the industry now has less barrier of entry if you are determined and focused – it doesn't only take talent.</motion.p>
    </motion.div></div></div>
); }

function S25({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={29}/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Opportunities</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Phone + Free"/><span className="accent"><W text="Software"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><Smartphone className="lst__ic"/><span><strong>Phone + Free Software:</strong> Shoot a 1-min short every month. DaVinci Resolve is free. Post to TikTok/YouTube/Instagram. Producers scout there now.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><Zap className="lst__ic"/><span><strong>48 Hour Film Project:</strong> Annual comp where you write/shoot/edit in 48hrs. Winners get seen by industry. Next one usually mid-year.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S26({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={15} alt/><div className="ov ov--r"/>
    <Stat num="R200K" label="Max NFVF Grant" top="12%" left="8%"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Funding & Social</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="NFVF &"/><span className="accent"><W text="Social Media"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.4)} className="lst__i"><Award className="lst__ic"/><span><strong>NFVF Funding</strong> for 18-35 yr olds for shorts. R100k–R200k grants. Check NFVF website for calls.</span></motion.li>
        <motion.li variants={fl(0.55)} className="lst__i"><TrendingUp className="lst__ic"/><span><strong>TikTok/IG Reels — Verticals:</strong> Ad agencies hire creators straight from socials for branded content. That pays, and builds directing/editing reels.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S27({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={30}/><div className="ov ov--r"/><div className="ov ov--v"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Youth Programmes</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Programmes That"/><span className="accent"><W text="Target Youth"/></span></h2>
      <motion.div variants={si(0.5)} className="gc gc--accent" style={{marginTop:'1rem'}}>
        <div className="gc__t"><Award size={18} className="accent"/> SA FILM Academy</div>
        <p className="gc__p">Established in 2006, SA FILM Academy is a MICT SETA-accredited, Non-Profit Company (NPC), providing in-service/on-the-job training, skills development, employment generation and career path development in the film & digital Media industries.</p>
      </motion.div>
    </motion.div></div></div>
); }

function S28({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={3} alt/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">More Programmes</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Industry"/><span className="accent"><W text="Initiatives"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        {['Multichoice Talent Factory','Ikasi Media','Film Commissions Training Workshops','Film Festivals & Markets Information programmes','Various Academies, Universities, Private schools'].map((t,i)=>(
          <motion.li key={t} variants={fl(0.4+i*0.12)} className="lst__i"><CheckCircle className="lst__ic"/><span>{t}</span></motion.li>
        ))}
      </ul>
    </motion.div></div></div>
); }

function S29({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={31}/><div className="ov ov--r"/>
    <div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Entrepreneurship</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Industries That"/><span className="accent"><W text="Feed Into Film"/></span></h2>
      <motion.p variants={fu(0.5)} className="sub" style={{fontSize:'1rem'}}>Easier to enter, same skills, then jump across:</motion.p>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fl(0.5)} className="lst__i"><Briefcase className="lst__ic"/><span><strong>Commercials/Music videos:</strong> Faster turnaround, always need PAs.</span></motion.li>
        <motion.li variants={fl(0.6)} className="lst__i"><Briefcase className="lst__ic"/><span><strong>Corporate video:</strong> Every company needs content. Shoot events on weekends, learn client work.</span></motion.li>
        <motion.li variants={fl(0.7)} className="lst__i"><Briefcase className="lst__ic"/><span><strong>YouTube/Twitch creators:</strong> Edit for SA YouTubers. Builds cutting speed + story skills.</span></motion.li>
        <motion.li variants={fl(0.8)} className="lst__i"><Briefcase className="lst__ic"/><span><strong>Weddings, Community and Industry events:</strong> Teaches you to shoot under pressure, handle clients, manage audio. Pays well.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S30({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={25} alt/><div className="ov ov--l"/>
    <div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
      <motion.div variants={fu(0.1)}><span className="badge">Online Entry Points</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="Network &"/><span className="accent"><W text="Connect"/></span></h2>
      <ul className="lst" style={{marginTop:'1rem'}}>
        <motion.li variants={fr(0.4)} className="lst__i"><Globe className="lst__ic"/><span><strong>Facebook groups:</strong> "SA Film Industry", "Call Sheet SA", "Joburg Film Crew". Jobs posted daily.</span></motion.li>
        <motion.li variants={fr(0.55)} className="lst__i"><Globe className="lst__ic"/><span><strong>Crew/Freelance Groups:</strong> Free profile, producers search it.</span></motion.li>
        <motion.li variants={fr(0.7)} className="lst__i"><Globe className="lst__ic"/><span><strong>Film Festivals/Markets:</strong> JFF, DIFF / Durban FilmMart. Student accreditation is cheap. Volunteer = free access to panels + meet producers.</span></motion.li>
        <motion.li variants={fr(0.85)} className="lst__i"><Globe className="lst__ic"/><span><strong>Global film Discords</strong> often have #hiring channels for remote editing/motion graphics. <strong>Wrapped</strong> — new kid on the block.</span></motion.li>
      </ul>
    </motion.div></div></div>
); }

function S31({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={5}/><div className="ov ov--b"/><div className="ov ov--v"/>
    <div className="cnt cnt--bottom"><motion.div initial="hidden" animate="visible" style={{textAlign:'center',maxWidth:'900px',margin:'0 auto'}}>
      <motion.div variants={fu(0.1)}><span className="badge">Biggest Myth</span></motion.div>
      <h2 className="ttl ttl--lg"><W text="You Don't Need"/><span className="accent"><W text="Expensive Gear"/></span></h2>
      <motion.p variants={fu(0.6)} className="sub" style={{textAlign:'center',margin:'1rem auto',maxWidth:'700px'}}>
        You just need proof you can work hard and <strong style={{color:'var(--accent)'}}>1 person to trust you</strong>. After that, film is a "who knows you" industry.
      </motion.p>
    </motion.div></div></div>
); }

function S32({isActive}:SP) { if(!isActive) return null; return (
  <div className="slide"><BG n={32} alt/><div className="ov ov--d"/><div className="ov ov--v"/>
    <div className="cnt cnt--center" style={{textAlign:'center'}}>
      <motion.div initial="hidden" animate="visible">
        <motion.div variants={fu(0.1)}><span className="badge">Your Next Move</span></motion.div>
        <h2 className="ttl ttl--hero"><W text="Which Lane"/><span className="accent"><W text="Appeals Most?"/></span></h2>
        <div className="grid grid--3" style={{marginTop:'2rem'}}>
          {[
            { icon:<Clapperboard size={32}/>, t:'Set Life' },
            { icon:<PenTool size={32}/>, t:'Writing / Directing' },
            { icon:<Film size={32}/>, t:'Post-Production' },
          ].map((c,i)=>(<motion.div key={c.t} variants={si(0.4+i*0.2)} className="gc" style={{textAlign:'center',padding:'2.5rem 1.5rem'}}>
            <div style={{color:'var(--accent)',marginBottom:'1rem'}}>{c.icon}</div>
            <div style={{fontFamily:'Outfit',fontWeight:800,fontSize:'1.4rem'}}>{c.t}</div>
          </motion.div>))}
        </div>
        <motion.p variants={fu(1.2)} style={{marginTop:'2rem',fontSize:'1rem',color:'var(--gray-300)'}}>SA Film Academy • EmpowerYouth 2026</motion.p>
      </motion.div>
    </div>
  </div>
); }

/* ========== MAIN APP ========== */
const SLIDES = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31,S32];

export default function App() {
  const [cur,setCur] = useState(0);
  const [dir,setDir] = useState(0);

  const go = useCallback((i:number)=>{
    if(i<0||i>=SLIDES.length) return;
    setDir(i>cur?1:-1); setCur(i);
  },[cur]);

  const next = useCallback(()=>go(cur+1),[cur,go]);
  const prev = useCallback(()=>go(cur-1),[cur,go]);

  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{
      if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next();}
      if(e.key==='ArrowLeft'){e.preventDefault();prev();}
    };
    window.addEventListener('keydown',h);
    return ()=>window.removeEventListener('keydown',h);
  },[next,prev]);

  const Slide = SLIDES[cur];

  /* Beautiful cinematic transition: crossfade + scale + blur */
  const variants = {
    enter: (d:number) => ({
      opacity: 0,
      scale: 1.04,
      filter: 'blur(8px)',
      x: d > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      x: 0,
    },
    exit: (d:number) => ({
      opacity: 0,
      scale: 0.96,
      filter: 'blur(8px)',
      x: d > 0 ? -80 : 80,
    }),
  };

  return (
    <div className="pres">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div key={cur} custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration:0.65, ease:EASE }}
          style={{ position:'absolute', width:'100%', height:'100%' }}>
          <Slide isActive={true}/>
        </motion.div>
      </AnimatePresence>

      <nav className="nav">
        <div className="nav__prog" style={{ width:`${((cur+1)/SLIDES.length)*100}%` }}/>
        <img src="/sa-film-academy-logo.png" alt="SA Film Academy" className="nav__logo"/>
        <div className="nav__ctrls">
          <span className="nav__count">{String(cur+1).padStart(2,'0')} / {String(SLIDES.length).padStart(2,'0')}</span>
          <button className="nav__btn" onClick={prev} disabled={cur===0} aria-label="Previous"><ChevronLeft size={20}/></button>
          <button className="nav__btn" onClick={next} disabled={cur===SLIDES.length-1} aria-label="Next"><ChevronRight size={20}/></button>
        </div>
      </nav>
    </div>
  );
}
