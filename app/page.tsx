import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { FeaturesSection } from "@/components/features-section"
import { VideoSection } from "@/components/video-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TrustSection } from "@/components/trust-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <VideoSection />
      <ComparisonSection />
      <RoadmapSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
