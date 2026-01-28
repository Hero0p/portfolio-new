"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center relative py-20 px-6"
        >
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    style={{ y }}
                    className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-card border border-glass-border bg-glass-bg"
                >
                    {/* Profile Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <Image
                        src="/images/about.jpeg"
                        alt="Profile"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                </motion.div>

                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-heading text-primary"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-foreground/80 space-y-4"
                    >
                        <p>
                            Hi, I'm <span className="text-secondary font-medium">{portfolioData.basics.name}</span>.
                            Based in {portfolioData.basics.location.country}, I am a passionate developer with a deep interest in
                            building scalable web applications and exploring the frontiers of AI.
                        </p>
                        <p>
                            Currently pursuing my {portfolioData.education[0].degree} at {portfolioData.education[0].institution}, I combine academic rigor with practical project building.
                            Whether it's creating full-stack platforms or experimenting with agentic AI, I love pushing boundaries.
                        </p>
                        <p>
                            When I'm not coding, you can find me solving DSA problems or playing chess.
                        </p>
                    </motion.div>

                    {/* Stats or Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4"
                    >
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-accent">350+</div>
                            <div className="text-sm text-foreground/60">LeetCode Problems</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-secondary">3★</div>
                            <div className="text-sm text-foreground/60">CodeChef Rating</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-primary">2027</div>
                            <div className="text-sm text-foreground/60">Graduation Year</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
