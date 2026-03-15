import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'O Conceito', href: '#about' },
        { name: 'Diferenciais', href: '#features' },
        { name: 'Contato', href: '#formulario' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-content-mobile md:max-w-content flex justify-between items-center">
                    {/* Logo */}
                    <a href="#">
                        <img
                            src="/logo-v2.svg"
                            alt="Libertad"
                            className="h-12 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-brand-gold text-sm uppercase tracking-wider transition-colors font-light"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#formulario" className="bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors">
                            Agendar Visita
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween" }}
                        className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white text-xl uppercase tracking-widest hover:text-brand-gold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#formulario"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-semibold text-lg mt-4"
                            >
                                Agendar Visita
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
