import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["o extraordinário.", "o exclusivo.", "o inesquecível.", "o seu refúgio."],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <section className="relative min-h-[100dvh] sm:min-h-screen w-full overflow-hidden bg-brand-dark flex flex-col items-center justify-center pt-20 pb-12 sm:pt-0 sm:pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Libertad Hero Background"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark z-10" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center justify-center min-h-[70vh] sm:h-full max-w-content-mobile md:max-w-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-brand-highlight tracking-[0.2em] text-base md:text-lg font-semibold uppercase mb-4 mt-11">
                        Bem-vindo ao Libertad
                    </h2>
                    <h1 className="font-sora text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6 sm:mb-8 text-balance">
                        Liberdade para viver <br />
                        <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em]">
                            {titles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute font-semibold text-brand-gold italic whitespace-nowrap"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={
                                        titleNumber === index
                                            ? { y: 0, opacity: 1 }
                                            : { y: titleNumber > index ? -50 : 50, opacity: 0 }
                                    }
                                    transition={{ type: "spring", stiffness: 50 }}
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-300 text-lg mb-10 font-light leading-relaxed text-balance">
                        Um refúgio de sofisticação e natureza, desenhado para quem busca mais do que morar: busca sentir.
                    </p>

                    <motion.a
                        href="#formulario"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(232,212,161,0.3)]"
                    >
                        Conheça o Projeto
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
