import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { User } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
    const shapeLeft = useParallax(0.15, 'horizontal');
    const shapeRight = useParallax(-0.15, 'horizontal');
    const cardParallax = useParallax(-0.05);

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background accent shapes — opposing parallax */}
            <div
                ref={shapeLeft.ref}
                style={shapeLeft.style}
                className="absolute -left-32 top-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"
            />
            <div
                ref={shapeRight.ref}
                style={shapeRight.style}
                className="absolute -right-32 top-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
                        01. About Me
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50 rounded-full" />
                </motion.div>

                <motion.div
                    ref={cardParallax.ref}
                    style={cardParallax.style}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="glass-strong p-8 sm:p-12 relative group"
                >
                    {/* Hover glow */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                        {/* Oval Profile Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="shrink-0 relative"
                        >
                            {/* Glow behind oval */}
                            <div className="absolute inset-0 rounded-[50%] bg-accent/20 blur-2xl scale-110" />
                            <div className="relative w-52 h-64 rounded-[50%] overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10">
                                <img
                                    src={profileImg}
                                    alt="Profile photo"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Background</h3>
                                    <p className="text-sm text-gray-500 font-mono">B.Tech IT • 2026</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    I am a 2026 IT student at{' '}
                                    <span className="text-white font-medium">
                                        Noorul Islam Centre For Higher Education
                                    </span>{' '}
                                    (CCGP: 8.00) specializing in Python and Backend logic. With hands-on
                                    experience building real-time data web applications and automated ML models,
                                    I excel at system architecture, database design, and end-to-end full stack
                                    execution.
                                </p>
                                <p>
                                    Currently targeting{' '}
                                    <span className="text-accent font-medium">
                                        backend and full stack roles
                                    </span>{' '}
                                    in fast-paced startup environments.
                                </p>
                            </div>

                            {/* Stats row */}
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                {[
                                    { value: '8.00', label: 'CCGP' },
                                    { value: '3+', label: 'Projects' },
                                    { value: '2', label: 'Internship' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5"
                                    >
                                        <div className="text-2xl font-bold text-accent">{stat.value}</div>
                                        <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
