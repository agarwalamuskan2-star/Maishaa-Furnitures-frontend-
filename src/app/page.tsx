import Header from "@/components/sections/header";
import HeroImages from "@/components/sections/hero-images";
import NewArrivalsTagline from "@/components/sections/new-arrivals-tagline";
import FeaturedCategories from "@/components/sections/featured-categories";
import RoomsSection from "@/components/sections/rooms";
import FurnitureImages from "@/components/sections/furniture-images";
import DesignMasters from "@/components/sections/design-masters";
import CuratedGalleries from "@/components/sections/curated-galleries";
import FeaturesGrid from "@/components/sections/features-grid";
import Footer from "@/components/sections/footer";
import FloatingContactButtons from "@/components/ui/floating-contact-buttons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroImages />
        <NewArrivalsTagline />
        <FeaturedCategories />
        <RoomsSection />
        <FurnitureImages />
        <DesignMasters />
        <CuratedGalleries />
        <FeaturesGrid />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
