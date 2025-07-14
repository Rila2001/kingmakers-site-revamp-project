import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import AnimatedCounters from "@/components/AnimatedCounters";
import CoursesSection from "@/components/CoursesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import SubscribeSection from "@/components/SubscribeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroBanner />
      <AboutSection />
      <AnimatedCounters />
      <CoursesSection />
      <TestimonialSlider />
      <SubscribeSection />
    </div>
  );
};

export default Index;
