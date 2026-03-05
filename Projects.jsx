import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { Folder, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Turf Booking System',
        desc: 'Web-based smart turf booking system with real-time slot availability, user authentication, and role-based access without server-side infrastructure.',
        tech: ['JavaScript', 'Firebase', 'Firestore'],
        github: '#',
        live: '#',
    },
    {
        title: 'Resume Shortlist ML',
        desc: 'Automated resume screening system utilizing TF-IDF vectorization and cosine similarity to extract relevant skills and improve candidate matching accuracy.',
        tech: ['Python', 'Machine Learning', 'TF-IDF'],
        github: '#',
    },
    {
        title: 'Responsible Tourist Portal',
        desc: 'Interactive web application designed to promote responsible tourism. Features dynamic UI elements and a responsive component architecture.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        live: '#',
    },
];

function ProjectCard({ project, index }) {
    const speed = -0.03 - (index % 3) * 0.015;
    const { ref, style } = useParallax(speed);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -8, y: x * 8 });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            style={{
                ...style,
                perspective: '1000px',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: 'transform 0.15s ease-out',
                    transformStyle: 'preserve-3d',
                }}
                className="glass-strong p-6 h-full group hover:border-accent/20 transition-all duration-500 relative overflow-hidden cursor-default"
            >
                {/* Spotlight gradient that follows mouse */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${(tilt.y / 8 + 0.5) * 100}% ${(tilt.x / -8 + 0.5) * 100}%, rgba(62,207,142,0.08) 0%, transparent 50%)`,
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                            <Folder size={22} />
                        </div>
                        <div className="flex items-center gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    aria-label="GitHub"
                                    className="text-gray-500 hover:text-accent transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    aria-label="Live Demo"
                                    className="text-gray-500 hover:text-accent transition-colors"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Body */}
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                        {project.desc}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs font-mono text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 overflow-hidden mesh-gradient">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
                        04. Featured Projects
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
