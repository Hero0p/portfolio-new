"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
    const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;

    const formatCategoryName = (key: string) => {
        // camelCase to Title Case
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-6 relative">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-foreground"
                >
                    Tech <span className="text-secondary">Arsenal</span>
                </motion.h2>

                <div className="grid gap-12">
                    {categories.map((category, index) => (
                        <div key={category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-2xl font-medium mb-6 text-primary capitalize pl-4 border-l-4 border-primary"
                            >
                                {formatCategoryName(category)}
                            </motion.h3>

                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills[category].map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, borderColor: "var(--color-secondary)" }}
                                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-foreground hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
