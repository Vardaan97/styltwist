import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import OpeningSequence from "@/components/OpeningSequence";
import TheShift from "@/components/TheShift";
import MeetYourStylist from "@/components/MeetYourStylist";
import TheProcess from "@/components/TheProcess";
import WardrobeShowcase from "@/components/WardrobeShowcase";
import StylingBox from "@/components/StylingBox";
import Testimonials from "@/components/Testimonials";
import TheInvitation from "@/components/TheInvitation";
import Footer from "@/components/Footer";
import FabricParticles from "@/components/FabricParticles";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <FabricParticles />
      <main>
        <OpeningSequence />
        <TheShift />
        <MeetYourStylist />
        <TheProcess />
        <WardrobeShowcase />
        <StylingBox />
        <Testimonials />
        <TheInvitation />
      </main>
      <Footer />
    </LenisProvider>
  );
}
