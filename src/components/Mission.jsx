import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section id="mission" className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-content-mobile md:max-w-content">
                {/* Nossa missão */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative inline-block">
                        <h2 className="relative z-10 font-sora text-xl sm:text-2xl md:text-4xl font-bold text-brand-dark text-balance">
                            Nossa missão
                        </h2>
                    </div>
                    <p className="mt-6 text-gray-700 text-lg max-w-2xl font-light text-balance">
                        Guiar nossos clientes rumo à liberdade financeira, com uma assessoria próxima, personalizada e fundamentada em estratégia de longo prazo.
                    </p>
                </motion.div>

                {/* Bloco EQI */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col md:flex-row rounded-tl-3xl rounded-tr-3xl rounded-br-3xl overflow-hidden bg-brand-dark text-white"
                >
                    <div className="md:w-48 flex-shrink-0 flex items-center justify-start py-8 sm:py-12 md:py-16 pl-6 sm:pl-8 md:pl-12">
                        <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            EQI
                        </span>
                    </div>
                    {/* Linha horizontal no mobile, vertical no desktop */}
                    <div className="block md:hidden h-px mx-6 sm:mx-8 bg-white/30 flex-shrink-0" aria-hidden />
                    <div className="hidden md:block w-px bg-white/30 flex-shrink-0 self-stretch" aria-hidden />
                    <div className="flex-1 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 flex items-center">
                        <p className="text-white/95 text-lg leading-relaxed font-light max-w-2xl text-balance">
                            Na EQI nosso objetivo é dar autonomia para que os clientes possam investir em suas escolhas. É conversando que se encontra os melhores caminhos e resultados. Sabemos que cada pessoa tem um plano e a gente tem as ferramentas para ajudar a chegar até lá. Porque se é bom para você, é perfeito pra EQI.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
