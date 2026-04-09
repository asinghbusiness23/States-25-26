"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────
const fadeUp  = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:0.55,ease:[0.22,1,0.36,1]}} };
const stagger = (d=0.1)=>({ hidden:{}, show:{ transition:{ staggerChildren:d }} });

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ico = ({d,size=22,sw=1.8})=>(
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const UsersIco = ()=><Ico d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>;
const GlobeIco = ()=><Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-1.66 2.6-2.5 5.28-2.5 7.5S10.34 14.9 12 17.5c1.66-2.6 2.5-5.28 2.5-7.5S13.66 4.6 12 2zM2.05 12h19.9"/>;
const SunIco   = ()=><Ico d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 100 14A7 7 0 0012 5z"/>;
const HeartIco = ()=><Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>;
const QuoteIco = ()=><Ico d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" sw={1.5}/>;
const ArrowIco = ()=><Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2}/>;

// ── Animated counter ──────────────────────────────────────────────────────────
const CountUp = ({ end, suffix="" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness:60, damping:20 });
  const [display, setDisplay] = useState(0);
  useEffect(()=>{ if(inView) motionVal.set(end); },[inView,end,motionVal]);
  useEffect(()=> spring.on("change",v=>setDisplay(Math.floor(v))), [spring]);
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
};

// ── Animated progress bar ─────────────────────────────────────────────────────
const ProgressBar = ({ label, pct, color }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-40px" });
  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-[#264653]">{label}</span>
        <span className="text-xs font-black" style={{color}}>{pct}%</span>
      </div>
      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
        <motion.div
          initial={{width:0}} animate={inView?{width:`${pct}%`}:{width:0}}
          transition={{duration:1.2,ease:[0.22,1,0.36,1],delay:0.2}}
          className="h-full rounded-full" style={{background:color}}/>
      </div>
    </div>
  );
};

// ── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name:"Michelle O.", role:"Former First Lady of the U.S.", quote:"Chester Bridge has had a phenomenal impact on its community and needs more praise.", avatar:"MO" },
  { name:"Lebron J.", role:"Professional Basketball Player",    quote:"I want to implement this into my community back in Akron! People need to be aware of their available resources.", avatar:"LJ" },
  { name:"Bill G.", role:"Founder of Microsoft",  quote:"This impact is exactly what I envisioned when I created my first computer. Helping people using the internet.", avatar:"BG" },
];

// ── Photos ────────────────────────────────────────────────────────────────────
const PHOTOS = [
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80",
];

const Impact2 = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // auto-cycle testimonials
  useEffect(()=>{
    const t = setInterval(()=>setActiveTestimonial(i=>(i+1)%TESTIMONIALS.length), 3000);
    return ()=>clearInterval(t);
  },[]);

  return (
    <section ref={ref} className="bg-[#d3efca] px-6 md:px-20 py-24 overflow-hidden">

      {/* ── Top: heading + photo trio ─────────────────── */}
      <div className="max-w-6xl mx-auto">
        <motion.div variants={stagger(0.1)} initial="hidden" animate={inView?"show":"hidden"}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-[#1B6E4F] text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Our Impact
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-[#264653] font-black text-4xl md:text-5xl leading-tight">
              Strengthening Chester<br/>County, Together
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#4a7c6a] text-base mt-3 max-w-md leading-relaxed">
              Every connection we make is a family supported, a crisis averted, a future made a little more stable.
            </motion.p>
          </div>

          {/* 3 stacked community photos */}
          <motion.div variants={fadeUp} className="relative flex-shrink-0 w-64 h-44 hidden md:block">
            {PHOTOS.map((src,i)=>(
              <motion.div key={i}
                initial={{opacity:0,x:20+i*10}} animate={inView?{opacity:1,x:0}:{}}
                transition={{delay:0.3+i*0.15,duration:0.7,ease:[0.22,1,0.36,1]}}
                className="absolute rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_28px_rgba(27,110,79,0.18)]"
                style={{
                  width:110, height:80,
                  left:i*38, top:i*26, zIndex:i,
                  transform:`rotate(${[-3,0,3][i]}deg)`,
                }}>
                <img src={src} alt="" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#1B6E4F]/10"/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Stat cards ────────────────────────────────── */}
        <motion.div variants={stagger(0.12)} initial="hidden" animate={inView?"show":"hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { icon:<UsersIco/>, n:12400, suffix:"+",    label:"Residents Connected", color:"#1B6E4F",  bg:"white",   sub:"and growing every month" },
            { icon:<GlobeIco/>, n:160,   suffix:"+",    label:"Resources Listed",    color:"#264653",  bg:"white",   sub:"across 6 categories" },
            { icon:<SunIco/>,   n:50,    suffix:"",     label:"Active Volunteers",   color:"#2a9d6e",  bg:"white",   sub:"donating their time" },
            { icon:<HeartIco/>, n:4,     suffix:" yrs", label:"Years Serving",       color:"#0cc883",  bg:"#1B6E4F", sub:"Est. 2020" },
          ].map(({ icon, n, suffix, label, color, bg, sub }) => (
            <motion.div key={label} variants={fadeUp}
              whileHover={{ y:-6, boxShadow:"0 16px 40px rgba(27,110,79,0.18)" }}
              className="rounded-2xl py-8 px-6 flex flex-col items-center text-center gap-3 shadow-sm transition-all border border-white/50"
              style={{ background:bg, color:bg==="#1B6E4F"?"white":undefined }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background:bg==="#1B6E4F"?"rgba(255,255,255,0.15)":color+"18", color:bg==="#1B6E4F"?"white":color }}>
                {icon}
              </div>
              <p className="text-4xl font-black leading-none" style={{ color:bg==="#1B6E4F"?"white":color }}>
                <CountUp end={n} suffix={suffix}/>
              </p>
              <div>
                <p className="font-black text-sm" style={{ color:bg==="#1B6E4F"?"white":"#264653" }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color:bg==="#1B6E4F"?"rgba(255,255,255,0.55)":"#9ca3af" }}>{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Progress bars + testimonial ───────────────── */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Progress bars */}
          <motion.div variants={stagger(0.1)} initial="hidden" animate={inView?"show":"hidden"}
            className="bg-white rounded-2xl p-7 border border-[#d3efca]/50 shadow-sm flex flex-col gap-5">
            <motion.p variants={fadeUp} className="text-[#264653] font-black text-lg mb-1">
              Where we've made the most impact
            </motion.p>
            {[
              { label:"Food Assistance",   pct:87, color:"#f59e0b" },
              { label:"Housing & Shelter", pct:74, color:"#3b82f6" },
              { label:"Health Resources",  pct:68, color:"#ec4899" },
              { label:"Jobs & Education",  pct:55, color:"#8b5cf6" },
            ].map((b,i)=>(
              <motion.div key={b.label} variants={fadeUp}>
                <ProgressBar {...b}/>
              </motion.div>
            ))}
            <motion.p variants={fadeUp} className="text-gray-400 text-xs mt-1">
              Based on resource search data from Chester County residents, 2024–2025.
            </motion.p>
          </motion.div>

          {/* Testimonial + photo */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}
            className="flex flex-col gap-5">
            {/* Photo with quote overlay */}
            <div className="relative rounded-2xl overflow-hidden h-52 shadow-[0_8px_32px_rgba(27,110,79,0.14)] border-4 border-white">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80"
                alt="Chester County community" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/80 via-[#1B6E4F]/20 to-transparent"/>
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-black text-sm drop-shadow">"Every dollar raised keeps our directory free for every resident."</p>
                <p className="text-white/60 text-xs mt-1">— Chester Bridge Team</p>
              </div>
            </div>

            {/* Cycling testimonial card */}
            <div className="bg-white rounded-2xl p-6 border border-[#d3efca] shadow-sm relative overflow-hidden">
              <div className="text-[#0cc883] mb-3"><QuoteIco size={28}/></div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial}
                  initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}
                  transition={{duration:0.4,ease:[0.22,1,0.36,1]}}>
                  <p className="text-[#264653] text-sm leading-[1.8] italic mb-4">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center text-white font-black text-xs">
                      {TESTIMONIALS[activeTestimonial].avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#264653] text-sm">{TESTIMONIALS[activeTestimonial].name}</p>
                      <p className="text-gray-400 text-xs">{TESTIMONIALS[activeTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot nav */}
              <div className="flex gap-1.5 mt-4">
                {TESTIMONIALS.map((_,i)=>(
                  <button key={i} onClick={()=>setActiveTestimonial(i)}
                    className="rounded-full transition-all duration-300"
                    style={{ width:i===activeTestimonial?18:6, height:6, background:i===activeTestimonial?"#1B6E4F":"#d3efca" }}/>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact2;
