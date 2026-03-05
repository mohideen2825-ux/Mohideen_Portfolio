import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { Code2, Server, Layout, Wrench } from 'lucide-react';

const skillGroups = [
    {
        title: 'Languages',
        icon: Code2,
        tags: ['Python', 'JavaScript', 'Java'],
        color: 'from-yellow-400/20 to-orange-500/20',
    },
    {
        title: 'Backend & DB',
        icon: Server,
        tags: ['Firebase', 'Firestore', 'SQL', 'Authentication'],
        color: 'from-green-400/20 to-emerald-500/20',
    },
    {
        title: 'Frontend',
        icon: Layout,
        tags: ['HTML5', 'CSS3', 'React', 'Responsive Design'],
        color: 'from-blue-400/20 to-cyan-500/20',
    },
    {
        title: 'Core Concepts',
        icon: Wrench,
        tags: ['Data Structures', 'DBMS','Networking','System Design', 'Git'],
        color: 'from-purple-400/20 to-pink-500/20',
    },
];

function SkillCard({ group, index }) {
    // Each card floats upward at a different speed — staggered "rising bubbles" feel
    const speed = -0.04 - index * 0.02;
    const { ref, style } = useParallax(speed);
    const Icon = group.icon;

    return (
        <motion.div
            ref={ref}
            style={style}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="glass-strong p-6 group hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
        >
            {/* Gradient hover overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-accent/20 group-hover:text-gray-300 transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(62,207,142,0.1)' }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-32 overflow-hidden">
            {/* Background decoration */}
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
                        02. Technical Stack
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skillGroups.map((group, index) => (
                        <SkillCard key={group.title} group={group} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
