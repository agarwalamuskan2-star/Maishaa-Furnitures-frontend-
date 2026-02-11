"use client";

import { motion } from "framer-motion";
import AllProjects from "@/components/sections/all-projects";
import ProjectContactForm from "@/components/sections/project-contact-form";
import ProjectsHero from "@/components/sections/projects-hero";

export default function ProjectsClientWrapper() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
        >
            <ProjectsHero />
            <AllProjects />
            <ProjectContactForm />
        </motion.main>
    );
}
