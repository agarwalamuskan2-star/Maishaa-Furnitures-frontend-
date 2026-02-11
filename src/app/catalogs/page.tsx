import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CatalogHero from "@/components/sections/catalog-hero";
import CatalogList from "@/components/sections/catalog-list";

export const metadata = {
    title: "Catalog | Maishaa Furnitures",
    description: "Explore our premium furniture catalogs and find your inspiration.",
};

export default function CatalogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-1">
                <CatalogHero />
                <CatalogList />
            </main>
            <Footer />
        </div>
    );
}
