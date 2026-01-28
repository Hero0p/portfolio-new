"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-6 relative">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-center mb-16"
                >
                    Selected <span className="text-secondary">Work</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
        >
            {/* Abstract Background/Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-heading text-4xl">
                    {project.name.charAt(0)}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.name}
                        </h3>
                        <span className="text-xs text-secondary uppercase tracking-wider font-medium">
                            {project.type}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        {/* Links if available in data (mocking for now since data structure didn't have specific links but I can add placeholder icons) */}
                        <button className="text-foreground/50 hover:text-white transition-colors"><Github size={20} /></button>
                        <button className="text-foreground/50 hover:text-white transition-colors"><ExternalLink size={20} /></button>
                    </div>
                </div>

                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex-1" /> {/* Spacer */}

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/60"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
