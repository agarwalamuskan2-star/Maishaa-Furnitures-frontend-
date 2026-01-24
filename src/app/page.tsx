import Header from "@/components/sections/header";
import HeroImages from "@/components/sections/hero-images";
import NewArrivalsTagline from "@/components/sections/new-arrivals-tagline";
import FeaturedCategories from "@/components/sections/featured-categories";
import FurnitureImages from "@/components/sections/furniture-images";
import RoomsSection from "@/components/sections/rooms";
import VideoBanner from "@/components/sections/video-banner";
import DesignMasters from "@/components/sections/design-masters";
import SingleBigImage from "@/components/sections/single-big-image";
import CuratedGalleries from "@/components/sections/curated-galleries";
import FeaturesGrid from "@/components/sections/features-grid";
import SEOContent from "@/components/sections/seo-content";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf7f2]">
      <Header />
      <main className="flex-1">
        <HeroImages />
        <NewArrivalsTagline />
        <FeaturedCategories />
        <FurnitureImages />
        <RoomsSection />
        <VideoBanner />
        <DesignMasters />
        <SingleBigImage />
        <CuratedGalleries />
        <FeaturesGrid />
        <SEOContent />
      </main>
      <Footer />
    </div>
  );
}
