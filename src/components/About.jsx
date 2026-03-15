import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-content-mobile md:max-w-content">
                <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="font-sora text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark mb-6 sm:mb-8 leading-tight text-balance">
                            Sobre Nós
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light text-balance">
                            A Libertad Capital nasce a partir de mais de 15 anos de atuação no mercado financeiro e da decisão estratégica de consolidar um modelo de atendimento que une <strong className="font-semibold text-brand-dark">proximidade</strong>, <strong className="font-semibold text-brand-dark">excelência técnica</strong> e <strong className="font-semibold text-brand-dark">visão de longo prazo</strong>.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light text-balance">
                            Credenciada à EQI Investimentos, nossa atuação é fundamentada na <strong className="font-semibold text-brand-dark">ética</strong>, <strong className="font-semibold text-brand-dark">transparência</strong> e <strong className="font-semibold text-brand-dark">relacionamento contínuo com o cliente</strong>. Acreditamos em conexões duradouras, que respeitam o momento de cada investidor e oferecem <strong className="font-semibold text-brand-dark">soluções financeiras sob medida</strong>, com <strong className="font-semibold text-brand-dark">inteligência</strong> e <strong className="font-semibold text-brand-dark">responsabilidade</strong>.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-balance">
                            Mais do que um escritório de investimentos, somos especialistas em <strong className="font-semibold text-brand-dark">crescimento patrimonial</strong> com <strong className="font-semibold text-brand-dark">consciência</strong> e <strong className="font-semibold text-brand-dark">estratégia</strong>.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 relative"
                    >
                        {/* Decorative border offset */}
                        <div className="absolute -top-3 -right-3 w-full h-full border-2 border-brand-gold/40 rounded-sm hidden md:block" aria-hidden />

                        <div className="aspect-[4/5] rounded-sm overflow-hidden relative shadow-xl">
                            <img
                                src="/Sobre%20N%C3%B3s-Rafaela.JPG"
                                alt="Rafaela — Libertad Capital"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Subtle gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-brand-dark/30 to-transparent" aria-hidden />
                        </div>

                        {/* Floating accent */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-highlight/30 backdrop-blur-sm z-10 hidden md:block rounded-sm"
                            aria-hidden
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
