import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Film, PenTool, Clapperboard, ArrowRight } from 'lucide-react';
import './index.css';

/* 50 unique images */
const I:Record<number,string>={}; for(let i=1;i<=50;i++) I[i]=`/n${String(i).padStart(2,'0')}.png`;

/* ANIMATION */
const E=[0.22,1,0.36,1] as [number,number,number,number];
const stg={visible:{transition:{staggerChildren:0.09}}};
const wU={hidden:{opacity:0,y:70,rotateX:-40},visible:{opacity:1,y:0,rotateX:0,transition:{duration:0.7,ease:E}}};
const fu=(d=0)=>({hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:d,duration:0.7,ease:E}}});
const si=(d=0)=>({hidden:{opacity:0,scale:0.8},visible:{opacity:1,scale:1,transition:{delay:d,duration:0.6,ease:E}}});
const cr=(d=0)=>({hidden:{clipPath:'inset(100% 0 0 0)',opacity:0},visible:{clipPath:'inset(0 0 0 0)',opacity:1,transition:{delay:d,duration:0.8,ease:E}}});

function W({t,c=''}:{t:string;c?:string}){
  return <motion.span variants={stg} initial="hidden" animate="visible" className={c} style={{display:'flex',flexWrap:'wrap',gap:'0 .4em'}}>
    {t.split(' ').map((w,i)=><motion.span key={i} variants={wU} style={{display:'inline-block'}}>{w}</motion.span>)}
  </motion.span>;
}

function BG({n,alt}:{n:number;alt?:boolean}){
  return <div className={`slide__bg${alt?' slide__bg--alt':''}`}><img src={I[n]} alt=""/></div>;
}

function Stat({num,label,top,left,right,bottom}:{num:string;label:string;top?:string;left?:string;right?:string;bottom?:string}){
  return <motion.div className="infographic float" style={{top,left,right,bottom}} initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}} transition={{delay:1,duration:0.6,ease:E}}>
    <div className="infographic__number">{num}</div><div className="infographic__label">{label}</div>
  </motion.div>;
}

type P={a:boolean};

/* ===== 50 SLIDES ===== */

function S1({a}:P){if(!a)return null;return(<div className="slide"><BG n={1}/><div className="ov ov--r"/><div className="ov ov--v"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">22 April 2026</span></motion.div>
  <h1 className="ttl ttl--hero"><W t="Participation at"/><span className="accent"><W t="EmpowerYouth"/></span></h1>
  <motion.p variants={fu(.8)} className="sub">SA Film Academy • Creative Futures Africa Summit</motion.p>
</motion.div></div></div>);}

function S2({a}:P){if(!a)return null;return(<div className="slide"><BG n={2} alt/><div className="ov ov--r"/>
<Stat num="2025" label="Summit Year" top="12%" left="8%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Global Context</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Creative Futures"/><span className="accent"><W t="Africa Summit"/></span></h2>
  <motion.p variants={fu(.7)} className="sub">The inaugural Creative Futures Africa Summit, convened in Johannesburg on 10 October 2025, identified 3 converging dynamics.</motion.p>
</motion.div></div></div>);}

function S3({a}:P){if(!a)return null;return(<div className="slide"><BG n={3}/><div className="ov ov--r"/><div className="ov ov--d"/>
<Stat num="3" label="Converging Dynamics" top="12%" left="8%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Key Dynamics</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="One of the"/><span className="accent"><W t="Dynamics"/></span></h2>
  <motion.p variants={fu(.7)} className="sub">One of these dynamics is reshaping how Africa engages with the global creative economy...</motion.p>
</motion.div></div></div>);}

function S4({a}:P){if(!a)return null;return(<div className="slide"><BG n={4} alt/><div className="ov ov--r"/><div className="ov ov--d"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">The Global Shift</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="AI & Platform"/><span className="accent"><W t="Economics"/></span></h2>
  <motion.blockquote variants={cr(.6)} className="quote quote--big">
    "Artificial intelligence (AI) and platform economics are reshaping global creative production, creating a critical window for African interests to be embedded in emerging governing frameworks before these structures solidify……"
  </motion.blockquote>
</motion.div></div></div>);}

function S5({a}:P){if(!a)return null;return(<div className="slide"><BG n={5}/><div className="ov ov--r"/><div className="ov ov--v"/>
<Stat num="<20" label="Africa's Median Age" top="10%" left="6%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Youth Advantage</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="Under 20"/></h2>
  <motion.p variants={fu(.7)} className="sub">Africa's median age is under 20 years — compared to 30 years globally. This youth demographic is our greatest asset.</motion.p>
</motion.div></div></div>);}

function S6({a}:P){if(!a)return null;return(<div className="slide"><BG n={6} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">The Convergence</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Unprecedented"/><span className="accent"><W t="Potential"/></span></h2>
  <motion.div variants={cr(.6)} className="gc float" style={{marginTop:'1.5rem'}}>
    <p className="quote" style={{border:'none',padding:0,margin:0}}>
      "The convergence of youth demographic advantage, technological access, African cultural assets achieving global recognition, and opportunities for increasing institutional readiness, creates unprecedented transformation potential. The question is whether stakeholders will act decisively while this alignment persists"
    </p>
  </motion.div>
</motion.div></div></div>);}

function S7({a}:P){if(!a)return null;return(<div className="slide"><BG n={7}/><div className="ov ov--r"/><div className="ov ov--d"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Breaking In</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="Breaking Into"/><span className="accent"><W t="the Industry"/></span></h2>
  <motion.p variants={fu(.8)} className="sub">There are various ways and strategies to break into the film/audiovisual industry, numerous interesting personal stories.</motion.p>
</motion.div></div></div>);}

function S8({a}:P){if(!a)return null;return(<div className="slide"><BG n={8} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Core Technical Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Production"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Etiquette, call sheets, basic camera operation, lighting safety, sound recording basics.</motion.p>
  <motion.p variants={fu(.9)} className="sub" style={{fontWeight:600,color:'var(--white)'}}>Production Assistant. Gaffer. Runner.</motion.p>
</motion.div></div></div>);}

function S9({a}:P){if(!a)return null;return(<div className="slide"><BG n={9}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Core Technical Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Writing"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Screenplay format, 3-act structure, dialogue, pitching.</motion.p>
</motion.div></div></div>);}

function S10({a}:P){if(!a)return null;return(<div className="slide"><BG n={10} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Core Technical Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Sound"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Boom operating, mic placement, recording clean audio, basic mixing.</motion.p>
</motion.div></div></div>);}

function S11({a}:P){if(!a)return null;return(<div className="slide"><BG n={11}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Core Technical Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Art / Design"/><span className="accent"><W t="Department"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Prop sourcing, continuity, set dressing, costume breakdowns.</motion.p>
</motion.div></div></div>);}

function S12({a}:P){if(!a)return null;return(<div className="slide"><BG n={12} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Core Technical Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Post-Production"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Editing basics: DaVinci Resolve / Premiere Pro, file management, codecs, color grading intro.</motion.p>
</motion.div></div></div>);}

function S13({a}:P){if(!a)return null;return(<div className="slide"><BG n={13}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Storytelling</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Visual"/><span className="accent"><W t="Literacy"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Understanding shot composition, framing, 180-degree rule, camera angles — close-up vs wide.</motion.p>
</motion.div></div></div>);}

function S14({a}:P){if(!a)return null;return(<div className="slide"><BG n={14} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Storytelling</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Story"/><span className="accent"><W t="Structure"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">What makes a scene work, pacing, character arc.</motion.p>
</motion.div></div></div>);}

function S15({a}:P){if(!a)return null;return(<div className="slide"><BG n={15}/><div className="ov ov--b"/><div className="ov ov--v"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Storytelling</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Observation"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Noticing light, human behaviour, details — film is about showing, not telling.</motion.p>
</motion.div></div></div>);}

function S16({a}:P){if(!a)return null;return(<div className="slide"><BG n={16} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Soft Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Reliability"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Film runs on deadlines. Show up early, ready to work 12+ hour days.</motion.p>
</motion.div></div></div>);}

function S17({a}:P){if(!a)return null;return(<div className="slide"><BG n={17}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Soft Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Collaboration"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">You'll take notes from directors, work under HODs, solve problems fast.</motion.p>
</motion.div></div></div>);}

function S18({a}:P){if(!a)return null;return(<div className="slide"><BG n={18} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Soft Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Communication"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Clear, calm, no ego. Sets are stressful and hierarchies are strict.</motion.p>
</motion.div></div></div>);}

function S19({a}:P){if(!a)return null;return(<div className="slide"><BG n={19}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Soft Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Resilience"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Lots of "no", unpaid starting gigs, long hours. Thick skin helps.</motion.p>
</motion.div></div></div>);}

function S20({a}:P){if(!a)return null;return(<div className="slide"><BG n={20} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Soft Skills</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Problem"/><span className="accent"><W t="Solving"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Gear fails, weather changes, actor is late. You fix it or find someone who can.</motion.p>
</motion.div></div></div>);}

function S21({a}:P){if(!a)return null;return(<div className="slide"><BG n={21}/><div className="ov ov--l"/>
<Stat num="5+" label="Key Set Roles" top="10%" right="6%"/>
<div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Knowledge</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Set"/><span className="accent"><W t="Roles"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Know what a 1st AD, gaffer, DIT, script supervisor actually do.</motion.p>
</motion.div></div></div>);}

function S22({a}:P){if(!a)return null;return(<div className="slide"><BG n={22} alt/><div className="ov ov--l"/>
<div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Knowledge</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Workflow"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">How a project goes from script → pre-pro → shoot → post → delivery.</motion.p>
</motion.div></div></div>);}

function S23({a}:P){if(!a)return null;return(<div className="slide"><BG n={23}/><div className="ov ov--l"/>
<div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Knowledge</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="SA"/><span className="accent"><W t="Context"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Understand B-BBEE, NFVF funding, who the big production companies are in Joburg/Cape Town.</motion.p>
</motion.div></div></div>);}

function S24({a}:P){if(!a)return null;return(<div className="slide"><BG n={24} alt/><div className="ov ov--l"/>
<div className="cnt cnt--left"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Knowledge</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Safety"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Basic set safety, electrical safety, stunt protocols.</motion.p>
</motion.div></div></div>);}

function S25({a}:P){if(!a)return null;return(<div className="slide"><BG n={25}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Build Your Toolkit</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Short"/><span className="accent"><W t="Courses"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">AFDA, Big Fish School of Digital Filmmaking, CityVarsity, Wits Film & TV offer 6-week to 1-year intro courses.</motion.p>
</motion.div></div></div>);}

function S26({a}:P){if(!a)return null;return(<div className="slide"><BG n={26} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Build Your Toolkit</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Run on"/><span className="accent"><W t="Set"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Volunteer as a PA/runner. You'll learn everything by watching + doing.</motion.p>
</motion.div></div></div>);}

function S27({a}:P){if(!a)return null;return(<div className="slide"><BG n={27}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Build Your Toolkit</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Make"/><span className="accent"><W t="Stuff"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Shoot shorts on your phone. Learn editing. Portfolio {'>'} certificates starting out.</motion.p>
</motion.div></div></div>);}

function S28({a}:P){if(!a)return null;return(<div className="slide"><BG n={28} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Build Your Toolkit</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Network"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Join the SA Film Industry Facebook groups, go to DIFF/Durban FilmMart, NFVF workshops.</motion.p>
</motion.div></div></div>);}

function S29({a}:P){if(!a)return null;return(<div className="slide"><BG n={29}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Build Your Toolkit</span></motion.div>
  <h2 className="ttl ttl--lg"><span className="accent"><W t="Software"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Get comfortable with Celtx for writing, DaVinci Resolve (free) for editing, Zoom recorders for sound.</motion.p>
</motion.div></div></div>);}

function S30({a}:P){if(!a)return null;return(<div className="slide"><BG n={30} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Fastest Entry</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Entry"/><span className="accent"><W t="Points"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Production Assistant, Camera Trainee, Art Department Assistant, Post-production Runner. From there you specialize.</motion.p>
</motion.div></div></div>);}

function S31({a}:P){if(!a)return null;return(<div className="slide"><BG n={31}/><div className="ov ov--d"/><div className="ov ov--v"/>
<div className="cnt cnt--center"><motion.div initial="hidden" animate="visible" style={{textAlign:'center'}}>
  <motion.div variants={fu(.1)}><span className="badge">Training vs Experience</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="What Gets You"/><span className="accent"><W t="Hired?"/></span></h2>
  <motion.p variants={fu(.7)} className="sub" style={{margin:'1rem auto',textAlign:'center'}}>Practical experience beats formal training – the strategy is to use both.</motion.p>
</motion.div></div></div>);}

function S32({a}:P){if(!a)return null;return(<div className="slide"><BG n={32} alt/><div className="ov ov--d"/><div className="ov ov--v"/>
<div className="cnt cnt--center"><motion.div initial="hidden" animate="visible" className="gc" style={{padding:'2.5rem'}}>
  <motion.div variants={cr(.2)} className="tbl-wrap"><table className="tbl"><thead><tr><th>Factor</th><th>Formal Training</th><th>Practical Experience</th></tr></thead><tbody>
    <tr><td><strong>Gets You In</strong></td><td>Sometimes, for internships</td><td>Almost always. Producers care if you've survived 3am wrap times.</td></tr>
    <tr><td><strong>Teaches You</strong></td><td>Theory, film history, safe environment, gear access</td><td>Set etiquette, real pressure, problem-solving</td></tr>
    <tr><td><strong>Industry View</strong></td><td>Nice to have</td><td style={{color:'var(--accent)',fontWeight:700}}>"Must have" — call sheet credits = your CV</td></tr>
    <tr><td><strong>Cost</strong></td><td>R30K – R100K+</td><td>Often unpaid at first, but earning credits + contacts</td></tr>
  </tbody></table></motion.div>
</motion.div></div></div>);}

function S33({a}:P){if(!a)return null;return(<div className="slide"><BG n={33}/><div className="ov ov--b"/>
<div className="cnt cnt--bottom"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Reality</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="No One Asks for Your"/><span className="accent"><W t="Certificate on Set"/></span></h2>
  <motion.p variants={fu(.7)} className="sub" style={{maxWidth:'800px'}}>The 1st AD wants to know you can lock up a set, wrangle background artists, or wrap cables fast.</motion.p>
</motion.div></div></div>);}

function S34({a}:P){if(!a)return null;return(<div className="slide"><BG n={34} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Industry Reality</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Apprenticeship Over"/><span className="accent"><W t="Diplomas"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Many top SA crew never studied film. They started as runners/PAs at 18, worked up to HOD roles.</motion.p>
</motion.div></div></div>);}

function S35({a}:P){if(!a)return null;return(<div className="slide"><BG n={35}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Craft & Software</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Training Helps With"/><span className="accent"><W t="Craft"/></span></h2>
  <motion.div variants={cr(.5)} className="gc gc--accent" style={{marginTop:'1.2rem'}}>
    <p className="gc__p">Some roles need formal study: <strong style={{color:'var(--white)'}}>Writing, directing, editing, sound design.</strong></p>
  </motion.div>
  <motion.div variants={cr(.8)} className="gc" style={{marginTop:'1rem'}}>
    <p className="gc__p"><strong style={{color:'var(--accent)'}}>Camera/grip/electric — you'll learn 80% on set.</strong></p>
  </motion.div>
</motion.div></div></div>);}

function S36({a}:P){if(!a)return null;return(<div className="slide"><BG n={36} alt/><div className="ov ov--r"/><div className="ov ov--d"/>
<Stat num="0" label="Experience Needed" top="10%" left="6%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Foot in the Door</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="Entry"/><span className="accent"><W t="Jobs"/></span></h2>
  <motion.p variants={fu(.7)} className="sub">These need zero experience, just hustle + reliability.</motion.p>
</motion.div></div></div>);}

function S37({a}:P){if(!a)return null;return(<div className="slide"><BG n={37}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Entry Jobs</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Runner /"/><span className="accent"><W t="PA"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Coffee, lockups, driving, wrangling extras. You see every department. Email Joburg production houses: Bomb, Quizzical, Moonlighting, Seriti. Say "Available for free 2 weeks".</motion.p>
</motion.div></div></div>);}

function S38({a}:P){if(!a)return null;return(<div className="slide"><BG n={38} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Entry Jobs</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Camera"/><span className="accent"><W t="Trainee"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Load batteries, carry cases, learn from the 2nd AC. Contact rental houses like Media Film Service, ZSE. They know who needs trainees.</motion.p>
</motion.div></div></div>);}

function S39({a}:P){if(!a)return null;return(<div className="slide"><BG n={39}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Entry Jobs</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Art"/><span className="accent"><W t="Department"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Paint sets, buy props, continuity. Follow SA art directors on Instagram, DM offering to help.</motion.p>
</motion.div></div></div>);}

function S40({a}:P){if(!a)return null;return(<div className="slide"><BG n={40} alt/><div className="ov ov--r"/>
<Stat num="5" label="Phone Numbers / Week" top="10%" left="6%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Key Insight</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Trust &"/><span className="accent"><W t="Connections"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">One week as a runner can get you <strong>5 phone numbers</strong> that may lead to paid work.</motion.p>
</motion.div></div></div>);}

function S41({a}:P){if(!a)return null;return(<div className="slide"><BG n={41}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Rehire Culture</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="Trust"/><span className="accent"><W t="= Rehire"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">SA crews rehire people they trust. Your reputation is your currency.</motion.p>
</motion.div></div></div>);}

function S42({a}:P){if(!a)return null;return(<div className="slide"><BG n={42} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">The Warning</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Don't Just"/><span className="accent"><W t="Study"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Spending 3 years + debt on film school without doing any real practical work — You'll graduate but find yourself competing with younger people who have a portfolio of short films + commercials as PA.</motion.p>
</motion.div></div></div>);}

function S43({a}:P){if(!a)return null;return(<div className="slide"><BG n={43}/><div className="ov ov--b"/><div className="ov ov--v"/>
<div className="cnt cnt--bottom" style={{textAlign:'center'}}><motion.div initial="hidden" animate="visible" style={{maxWidth:'1000px',margin:'0 auto'}}>
  <motion.div variants={fu(.1)}><span className="badge">Bottom Line</span></motion.div>
  <motion.blockquote variants={cr(.4)} className="quote quote--big" style={{borderLeft:'none',textAlign:'center',margin:'0 auto',fontSize:'clamp(1.8rem,3vw,2.8rem)',fontWeight:700,color:'var(--white)',maxWidth:'900px'}}>
    "Training gives you a map. Experience teaches you to drive. In film, they hire drivers."
  </motion.blockquote>
</motion.div></div></div>);}

function S44({a}:P){if(!a)return null;return(<div className="slide"><BG n={44} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Digital Era</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="No More"/><span className="accent"><W t="Barriers"/></span></h2>
  <motion.p variants={fu(.7)} className="sub">Entering the industry now has less barrier of entry if you are determined and focused – it doesn't only take talent.</motion.p>
</motion.div></div></div>);}

function S45({a}:P){if(!a)return null;return(<div className="slide"><BG n={45}/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Opportunities</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="Phone +"/><span className="accent"><W t="Free Software"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Shoot a 1-min short every month. DaVinci Resolve is free. Post to TikTok/YouTube/Instagram. Producers scout there now.</motion.p>
</motion.div></div></div>);}

function S46({a}:P){if(!a)return null;return(<div className="slide"><BG n={46} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Competitions</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="48 Hour"/><span className="accent"><W t="Film Project"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Annual competition where you write/shoot/edit in 48hrs. Winners get seen by industry. Next one usually mid-year.</motion.p>
</motion.div></div></div>);}

function S47({a}:P){if(!a)return null;return(<div className="slide"><BG n={47}/><div className="ov ov--r"/>
<Stat num="R200K" label="Max NFVF Grant" top="10%" left="6%"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Funding</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="NFVF"/><span className="accent"><W t="Funding"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">NFVF Funding for 18-35 yr olds for shorts. R100k–R200k grants. Check NFVF website for calls.</motion.p>
</motion.div></div></div>);}

function S48({a}:P){if(!a)return null;return(<div className="slide"><BG n={48} alt/><div className="ov ov--r"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Social Media</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="TikTok / IG"/><span className="accent"><W t="Reels"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Ad agencies hire creators straight from socials for branded content. That pays, and builds directing/editing reels.</motion.p>
</motion.div></div></div>);}

function S49({a}:P){if(!a)return null;return(<div className="slide"><BG n={49}/><div className="ov ov--r"/><div className="ov ov--v"/>
<div className="cnt cnt--right"><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">SA Film Academy</span></motion.div>
  <h2 className="ttl ttl--lg"><W t="SA FILM"/><span className="accent"><W t="Academy"/></span></h2>
  <motion.p variants={fu(.6)} className="sub">Established in 2006, SA FILM Academy is a MICT SETA-accredited NPC, providing in-service/on-the-job training, skills development, employment generation and career path development in film & digital Media.</motion.p>
</motion.div></div></div>);}

function S50({a}:P){if(!a)return null;return(<div className="slide"><BG n={50} alt/><div className="ov ov--d"/><div className="ov ov--v"/>
<div className="cnt cnt--center" style={{textAlign:'center'}}><motion.div initial="hidden" animate="visible">
  <motion.div variants={fu(.1)}><span className="badge">Your Next Move</span></motion.div>
  <h2 className="ttl ttl--hero"><W t="Which Lane"/><span className="accent"><W t="Appeals Most?"/></span></h2>
  <div className="grid grid--3" style={{marginTop:'2rem'}}>
    {[{icon:<Clapperboard size={36}/>,t:'Set Life'},{icon:<PenTool size={36}/>,t:'Writing / Directing'},{icon:<Film size={36}/>,t:'Post-Production'}].map((c,i)=>(
      <motion.div key={c.t} variants={si(.4+i*.2)} className="gc" style={{textAlign:'center',padding:'2.5rem 1.5rem'}}>
        <div style={{color:'var(--accent)',marginBottom:'1rem'}}>{c.icon}</div>
        <div style={{fontFamily:'Outfit',fontWeight:800,fontSize:'1.6rem'}}>{c.t}</div>
      </motion.div>
    ))}
  </div>
  <motion.p variants={fu(1.2)} style={{marginTop:'2rem',fontSize:'1.2rem',color:'var(--gray-300)'}}>SA Film Academy • EmpowerYouth 2026</motion.p>
</motion.div></div></div>);}

/* ========== MAIN ========== */
const SL=[S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31,S32,S33,S34,S35,S36,S37,S38,S39,S40,S41,S42,S43,S44,S45,S46,S47,S48,S49,S50];

/* ========== MAP DATA ========== */
const M = [
  { s: "Context", i:0, slides: [ {i:0, t:"EmpowerYouth"}, {i:1, t:"Africa Summit"}, {i:2, t:"Dynamics"}, {i:3, t:"AI & Platforms"}, {i:4, t:"Youth"}, {i:5, t:"Potential"} ]},
  { s: "Skills", i:6, slides: [ {i:6, t:"Breaking In"}, {i:7, t:"Production"}, {i:8, t:"Writing"}, {i:9, t:"Sound"}, {i:10, t:"Art Dept"}, {i:11, t:"Post-Prod"} ]},
  { s: "Story", i:12, slides: [ {i:12, t:"Visuals"}, {i:13, t:"Structure"}, {i:14, t:"Observation"} ]},
  { s: "Soft Skills", i:15, slides: [ {i:15, t:"Reliability"}, {i:16, t:"Collab"}, {i:17, t:"Comm"}, {i:18, t:"Resilience"}, {i:19, t:"Problem Solving"} ]},
  { s: "Industry", i:20, slides: [ {i:20, t:"Roles"}, {i:21, t:"Workflow"}, {i:22, t:"SA Context"}, {i:23, t:"Safety"} ]},
  { s: "Toolkit", i:24, slides: [ {i:24, t:"Courses"}, {i:25, t:"Run on Set"}, {i:26, t:"Make Stuff"}, {i:27, t:"Network"}, {i:28, t:"Software"}, {i:29, t:"Entry Points"} ]},
  { s: "Experience", i:30, slides: [ {i:30, t:"What Hires"}, {i:31, t:"Comparison"}, {i:32, t:"No Certs"}, {i:33, t:"Apprentice"}, {i:34, t:"Training"} ]},
  { s: "Jobs", i:35, slides: [ {i:35, t:"Entry Jobs"}, {i:36, t:"Runner"}, {i:37, t:"Cam Trainee"}, {i:38, t:"Art Assist"}, {i:39, t:"Trust"}, {i:40, t:"Rehire"}, {i:41, t:"Don't Just Study"} ]},
  { s: "Access", i:42, slides: [ {i:42, t:"Bottom Line"}, {i:43, t:"No Barriers"}, {i:44, t:"Phones"}, {i:45, t:"48-Hour"}, {i:46, t:"NFVF"}, {i:47, t:"Social Media"}, {i:48, t:"SA Academy"}, {i:49, t:"Next Move"} ]}
];

export default function App(){
  const[c,setC]=useState(0);
  const[d,setD]=useState(0);
  const go=useCallback((i:number)=>{if(i<0||i>=SL.length)return;setD(i>c?1:-1);setC(i)},[c]);
  const nx=useCallback(()=>go(c+1),[c,go]);
  const pv=useCallback(()=>go(c-1),[c,go]);
  useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();nx()}if(e.key==='ArrowLeft'){e.preventDefault();pv()}};window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h)},[nx,pv]);
  const Sl=SL[c];
  const v={
    enter:(dir:number)=>({opacity:0,scale:1.04,filter:'blur(10px)',x:dir>0?100:-100}),
    center:{opacity:1,scale:1,filter:'blur(0px)',x:0},
    exit:(dir:number)=>({opacity:0,scale:0.96,filter:'blur(10px)',x:dir>0?-100:100}),
  };
  return(<div className="pres">
    <AnimatePresence custom={d}>
      <motion.div key={c} custom={d} variants={v} initial="enter" animate="center" exit="exit" transition={{duration:.65,ease:E}} style={{position:'absolute',width:'100%',height:'100%'}}>
        <Sl a={true}/>
      </motion.div>
    </AnimatePresence>
    <nav className="nav">
      <div className="nav__prog" style={{width:`${((c+1)/SL.length)*100}%`}}/>
      <img src="/sa-film-academy-logo.png" alt="SA Film Academy" className="nav__logo" onClick={() => go(0)} title="Return to Context" />
      
      <div className="nav__map">
        <span className="nav__map-label"><strong>NAVIGATION</strong> <ArrowRight size={16}/></span>
        {M.map(grp => {
          const isActive = c >= grp.slides[0].i && c <= grp.slides[grp.slides.length-1].i;
          return (
            <div key={grp.s} className="nav__map-grp">
              <button className={`nav__map-btn ${isActive ? 'active' : ''}`} onClick={() => go(grp.i)}>
                {grp.s}
              </button>
              <div className="nav__map-sub">
                {grp.slides.map(sl => (
                  <button key={sl.i} className={`nav__map-item ${c === sl.i ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); go(sl.i); }}>
                    {String(sl.i + 1).padStart(2, '0')}. {sl.t}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="nav__ctrls">
        <span className="nav__count">{String(c+1).padStart(2,'0')} / {String(SL.length).padStart(2,'0')}</span>
        <button className="nav__btn" onClick={pv} disabled={c===0} aria-label="Previous"><ChevronLeft size={20}/></button>
        <button className="nav__btn" onClick={nx} disabled={c===SL.length-1} aria-label="Next"><ChevronRight size={20}/></button>
      </div>
    </nav>
  </div>);
}
