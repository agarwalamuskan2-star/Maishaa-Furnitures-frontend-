import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ProjectsClientWrapper from "@/components/sections/projects-client-wrapper";

export const metadata = {
    title: "Projects | Maishaa Furnitures",
    description: "Explore our premium furniture projects worldwide.",
};

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <ProjectsClientWrapper />
            <Footer />
        </div>
    );
}
