import Hero from "@/components/home/Hero";
import ServiceGrid from "@/components/home/ServiceGrid";
import TrackRecord from "@/components/home/TrackRecord";
import SafetyCompliance from "@/components/home/SafetyCompliance";
import InquirySection from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <TrackRecord />
      <SafetyCompliance />
      <InquirySection />
    </>
  );
}
