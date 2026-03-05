import { Github, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative py-12 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="flex justify-center gap-5 mb-6">
                    <a
                        href="https://github.com/mohideen2825-ux"
                        aria-label="GitHub"
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-500 hover:text-accent hover:border-accent/20 transition-all duration-300"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/mohideenaws"
                        aria-label="LinkedIn"
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-500 hover:text-accent hover:border-accent/20 transition-all duration-300"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>

                <p className="text-sm text-gray-500 mb-2">
                    Built by <span className="text-gray-400 font-medium">Mohideen Pichai</span>.
                    <br />
                    Designed for speed and scalability.
                </p>

                <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                    <MapPin size={12} />
                    Tenkasi, India
                </p>
            </div>
        </footer>
    );
}
