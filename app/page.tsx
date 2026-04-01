import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AgentsGallery } from "@/components/agents-gallery";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUs } from "@/components/why-us";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AgentsGallery />
        <HowItWorks />
        <WhyUs />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
