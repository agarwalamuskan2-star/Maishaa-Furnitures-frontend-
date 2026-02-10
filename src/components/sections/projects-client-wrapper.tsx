"use client";

import { motion } from "framer-motion";
import AllProjects from "@/components/sections/all-projects";
import ProjectContactForm from "@/components/sections/project-contact-form";

export default function ProjectsClientWrapper() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 mt-20"
        >
            <AllProjects />
            <ProjectContactForm />
        </motion.main>
    );
}
