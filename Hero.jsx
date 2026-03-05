import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const floatingShapes = [
    { size: 300, x: '10%', y: '20%', speed: -0.15, delay: 0 },
    { size: 200, x: '75%', y: '15%', speed: -0.1, delay: 0.5 },
    { size: 150, x: '60%', y: '70%', speed: -0.2, delay: 1 },
    { size: 100, x: '85%', y: '60%', speed: -0.12, delay: 1.5 },
    { size: 80, x: '25%', y: '75%', speed: -0.18, delay: 0.8 },
];

function FloatingShape({ size, x, y, speed, delay }) {
    const { ref, style } = useParallax(speed);
    return (
        <div
            ref={ref}
            style={{
                ...style,
                position: 'absolute',
                left: x,
                top: y,
                width: size,
                height: size,
                pointerEvents: 'none',
            }}
        >
            <motion.div
                className="w-full h-full rounded-full"
                style={{
                    background: `radial-gradient(circle, rgba(62,207,142,${0.06 + Math.random() * 0.04}) 0%, transparent 70%)`,
                }}
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
                }}
            />
        </div>
    );
}

function TypeWriter({ texts, speed = 80, pause = 2000 }) {
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(current.slice(0, charIndex + 1));
                    setCharIndex((c) => c + 1);
                    if (charIndex + 1 === current.length) {
                        setTimeout(() => setIsDeleting(true), pause);
                    }
                } else {
                    setCurrentText(current.slice(0, charIndex - 1));
                    setCharIndex((c) => c - 1);
                    if (charIndex - 1 === 0) {
                        setIsDeleting(false);
                        setTextIndex((t) => (t + 1) % texts.length);
                    }
                }
            },
            isDeleting ? speed / 2 : speed,
        );
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return (
        <span>
            {currentText}
            <span className="text-accent animate-pulse">|</span>
        </span>
    );
}

export default function Hero() {
    const bgParallax = useParallax(-0.3);
    const textParallax = useParallax(-0.08);
    const ctaParallax = useParallax(0.05);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background gradient blob — slowest layer */}
            <div
                ref={bgParallax.ref}
                style={bgParallax.style}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 via-blue-500/5 to-purple-500/5 blur-3xl" />
            </div>

            {/* Floating shapes */}
            {floatingShapes.map((shape, i) => (
                <FloatingShape key={i} {...shape} />
            ))}

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* Main content — mid speed */}
            <div
                ref={textParallax.ref}
                style={textParallax.style}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent font-mono text-sm tracking-widest uppercase mb-4"
                >
                    Hi, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4"
                >
                    Mohideen Pichai<span className="text-accent">.</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-400 mb-6 h-10"
                >
                    <TypeWriter
                        texts={[
                            'Python Developer',
                            'Backend Engineer',
                            'Full Stack Builder',
                            'System Architect',
                        ]}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I build scalable backend systems, robust APIs, and real-time web
                    applications. Focused on clean code, database design, and solving
                    operational inefficiencies.
                </motion.p>

                {/* CTA buttons — fastest layer */}
                <motion.div
                    ref={ctaParallax.ref}
                    style={ctaParallax.style}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="https://github.com/mohideen2825-ux"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl glass text-gray-300 hover:text-white hover:border-accent/30 transition-all duration-300"
                    >
                        <Github size={18} className="group-hover:text-accent transition-colors" />
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/mohideenaws"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl glass text-gray-300 hover:text-white hover:border-accent/30 transition-all duration-300"
                    >
                        <Linkedin size={18} className="group-hover:text-accent transition-colors" />
                        LinkedIn
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/90 text-navy-950 font-semibold hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                    >
                        <Mail size={18} />
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-accent rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
