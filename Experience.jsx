import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useParallax';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
    {
        date: 'July 2025',
        title: 'Frontend Developer Intern',
        org: 'Oqtis Private Limited',
        desc: 'Designed user-friendly interfaces with a focus on usability, accessibility, and cross-browser compatibility. Integrated interactive features and handled debugging to improve performance and elevate the user experience.',
        icon: Briefcase,
        side: 'left',
    },
    {
        date: '2022 – 2026',
        title: 'B.Tech Information Technology',
        org: 'Noorul Islam Centre For Higher Education',
        desc: 'CCGP: 8.00. Deep focus on core CS subjects including Data Structures and Algorithms, Database Management Systems, and programming paradigms.',
        icon: GraduationCap,
        side: 'right',
    },
];

function TimelineCard({ item, index }) {
    const isLeft = item.side === 'left';
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
            className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
        >
            {/* Content card */}
            <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                <div className="glass-strong p-6 group hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-3">
                            {item.date}
                        </span>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <h4 className="text-sm font-medium text-accent/80 mb-3">{item.org}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            </div>

            {/* Center dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-navy-950 border-2 border-accent/50 flex items-center justify-center z-10 group-hover:border-accent">
                <Icon size={16} className="text-accent" />
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block w-5/12" />
        </motion.div>
    );
}

export default function Experience() {
    const { ref, progress } = useScrollProgress();

    return (
        <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
                        03. Experience & Education
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50 rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Growing timeline line */}
                    <div
                        className="timeline-line"
                        style={{
                            height: `${Math.min(progress * 1.3, 1) * 100}%`,
                            transition: 'height 0.1s linear',
                        }}
                    />

                    {timelineItems.map((item, index) => (
                        <TimelineCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
