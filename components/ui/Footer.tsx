import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-glass-border bg-black/40 backdrop-blur-sm mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} {portfolioData.basics.name}. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <a
                        href={portfolioData.basics.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={`mailto:${portfolioData.basics.email}`}
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                    {/* Add more social icons as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
