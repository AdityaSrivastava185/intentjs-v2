"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Pattern from "@/components/pattern/Pattern";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Companies from "@/components/Companies/Companies";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import FeatureCards from "@/components/Feature-Cards/FeatureCards";
import Chart from "@/components/Chart/Chart";
import Integrations from "@/components/Integration/Integration";
import Testimonials from "@/components/Testimonials/Testimonials";
import Community from "@/components/Community/Community";
// import Lenis from "lenis";

const sections = [
  { component: Hero, withPatter: true },
  { component: Companies, withPattern: true },
  { component: About, withPattern: true },
  { component: Features, withPattern: true },
  { component: FeatureCards, withPattern: true },
  // { component: Chart, withPattern: true },
  // { component: Integrations, withPattern: true },
  { component: Testimonials, withPattern: true },
  { component: Community },
];

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    // const lenis = new Lenis();
    // function raf(time:any){
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <Header visible={menuVisible} setVisible={setMenuVisible} />
      <div>
        {sections.map(({ component: Section, withPattern }, index) => (
          <div key={index} className="relative overflow-hidden">
            {Section === Hero ? (
              <Hero visible={menuVisible} />
            ) : (
              <Section visible={menuVisible} />
            )}
            {withPattern && <Pattern />}
          </div>
        ))}
      </div>

      {/* Black container that overlaps half of the footer */}
      <div className=" w-full h-20 bg-gradient-to-b from-[#111111] to-[#111111] bg-blend-overlay z-20 relative filter blur-3xl "></div>
      <div className=" w-full bg-gradient-to-b from-[#111111] to-[#111111] bg-blend-overlay z-40 relative filter blur-3xl "></div>
      <Footer />
    </>
  );
}
