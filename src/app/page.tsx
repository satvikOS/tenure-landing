import { Hero } from "@/components/home/Hero";
import { ProblemReset } from "@/components/home/ProblemReset";
import { WhatItIs } from "@/components/home/WhatItIs";
import { HowHandoff } from "@/components/home/HowHandoff";
import { CarriesForward } from "@/components/home/CarriesForward";
import { Credibility } from "@/components/home/Credibility";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/site/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemReset />
      <WhatItIs />
      <HowHandoff />
      <CarriesForward />
      <Credibility />
      <Faq />
      <CtaBand />
    </>
  );
}
