import { motion } from 'framer-motion';
import { Mail, FileCheck } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Aurora background */}
            <div className="absolute inset-0 aurora-bg pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
                        05. Get In Touch
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50 rounded-full mx-auto mb-8" />

                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Let's Build Something<br />
                        <span className="text-accent">Together.</span>
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                        I am actively looking for new opportunities in Backend and Full Stack roles.
                        Whether you have a question or just want to say hi, my inbox is always open.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&to=mohideen2825@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-navy-950 font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-shadow duration-300"
                        >
                            <Mail size={20} />
                            Email Me
                        </motion.a>

                        <motion.a
                            href="resume.pdf"
                            download
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-8 py-4 rounded-xl glass text-gray-300 font-semibold text-lg hover:text-white hover:border-accent/30 transition-all duration-300"
                        >
                            <FileCheck size={20} />
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
