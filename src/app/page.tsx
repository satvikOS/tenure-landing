import { Hero } from "@/components/home/Hero";
import { SupporterStrip } from "@/components/site/SupporterStrip";
import { Problem } from "@/components/home/Problem";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Modules } from "@/components/home/Modules";
import { AiOnboarding } from "@/components/home/AiOnboarding";
import { WhoFor } from "@/components/home/WhoFor";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/site/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SupporterStrip />
      <Problem />
      <HowItWorks />
      <Modules />
      <AiOnboarding />
      <WhoFor />
      <Faq />
      <CtaBand />
    </>
  );
}
