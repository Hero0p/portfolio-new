"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Trophy, Users } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 px-6 relative flex flex-col justify-center">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-center mb-16"
                >
                    My <span className="text-primary">Journey</span>
                </motion.h2>

                <div className="space-y-12">

                    {/* Education Group */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-secondary">
                            <GraduationCap /> Education
                        </h3>
                        <div className="relative border-l-2 border-white/10 ml-3 space-y-10 pl-8 pb-4">
                            {portfolioData.education.map((edu, index) => (
                                <TimelineItem key={index} title={edu.degree} subtitle={edu.institution} date={`${edu.startYear} - ${edu.endYear}`} description={edu.location} delay={index * 0.1} />
                            ))}
                        </div>
                    </div>

                    {/* Extracurricular Group */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent transition-colors mt-12">
                            <Users /> Leadership & Activities
                        </h3>
                        <div className="relative border-l-2 border-white/10 ml-3 space-y-10 pl-8 pb-4">
                            {portfolioData.extracurricular.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    title={item.role || item.achievement || ""}
                                    subtitle={undefined}
                                    date={item.duration || ""}
                                    description={item.description}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ title, subtitle, date, description, delay }: { title: string, subtitle?: string, date: string, description?: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="relative"
        >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-4 border-primary shadow-[0_0_10px_var(--color-primary)]" />

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-xl font-bold text-foreground">{title}</h4>
                    <span className="text-sm text-foreground/50 font-mono">{date}</span>
                </div>
                {subtitle && <div className="text-secondary font-medium mb-2">{subtitle}</div>}
                {description && <p className="text-foreground/70 text-sm">{description}</p>}
            </div>
        </motion.div>
    )
}

export default Experience;
