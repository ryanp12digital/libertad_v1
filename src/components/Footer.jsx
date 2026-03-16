import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { WEBHOOK_URL } from '../lib/webhooks';

const FOOTER_GRADIENT = 'linear-gradient(63.88deg, #063227 0%, #02523E 28.18%, #06614B 52.06%, #02523E 73.55%, #063227 99.33%)';

const Footer = () => {
    const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const payload = {
                ...form,
                id_formulario: 'footer_fale_conosco',
                timestamp: new Date().toISOString(),
            };
            const res = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Erro na requisição');
            setStatus('success');
            setForm({ nome: '', email: '', telefone: '', mensagem: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <footer
            id="formulario"
            className="text-white overflow-hidden"
            style={{ background: FOOTER_GRADIENT }}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-content-mobile md:max-w-content py-12 md:py-16">
                {/* Duas colunas: info (esquerda) + formulário (direita). No mobile: empilhado */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
                    {/* Coluna esquerda: logos, contato, redes, aviso legal */}
                    <div className="flex-1 space-y-6 md:space-y-8 max-w-xl">
                        {/* Logos */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#" >
                            <img src="/logo-v2.svg" alt="Libertad" className="h-10 sm:h-12 w-auto" />
                            </a>
                            
                        </div>

                        {/* Email e telefone */}
                        <div className="space-y-3">
                            <a href="mailto:contato@libertad.com" className="flex max-w-[180px] items-center gap-3 text-white hover:text-brand-gold transition-colors text-sm sm:text-base">
                                <FaEnvelope className="flex-shrink-0 text-lg" />
                                <span>contato@libertad.com</span>
                            </a>
                            <a href="tel:+5521985259999" className="flex max-w-[180px] first-letter:items-center gap-3 text-white hover:text-brand-gold transition-colors text-sm sm:text-base">
                                <FaPhone className="flex-shrink-0 text-lg" />
                                <span>(21) 98525-9999</span>
                            </a>
                        </div>

                        <div className="w-full max-w-[200px] h-px bg-white/30" aria-hidden />

                        {/* Redes sociais */}
                        <div>
                            <p className="text-white text-sm font-medium mb-3">Redes Sociais</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-white hover:text-brand-gold transition-colors p-2 rounded-full border border-white/40 hover:border-brand-gold/60" aria-label="Instagram">
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a href="#" className="text-white hover:text-brand-gold transition-colors p-2 rounded-full border border-white/40 hover:border-brand-gold/60" aria-label="LinkedIn">
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                                <a href="#" className="text-white hover:text-brand-gold transition-colors p-2 rounded-full border border-white/40 hover:border-brand-gold/60" aria-label="WhatsApp">
                                    <FaWhatsapp className="text-lg" />
                                </a>
                            </div>
                        </div>

                        {/* Aviso legal */}
                        <div className="space-y-2 text-white/80 text-xs sm:text-sm font-light leading-relaxed pt-2">
                            <p className="text-balance">
                                A Libertad Capital é um escritório de assessoria de investimentos credenciado à EQI Investimentos.
                            </p>
                            <p className="text-balance">
                                Atuamos na distribuição de produtos de investimento por meio da plataforma EQI, conforme a Resolução CVM nº 178.
                            </p>
                        </div>
                    </div>

                    {/* Coluna direita: formulário Fale conosco */}
                    <div className="flex-1 min-w-0 max-w-xl lg:max-w-md">
                        <h3 className="font-sora text-xl sm:text-2xl font-semibold text-white mb-6">Fale conosco</h3>
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <div>
                                <label htmlFor="footer-name" className="sr-only">Nome</label>
                                <input
                                    id="footer-name"
                                    name="nome"
                                    type="text"
                                    placeholder="Nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="footer-email" className="sr-only">E-mail</label>
                                <input
                                    id="footer-email"
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="footer-phone" className="sr-only">Telefone</label>
                                <input
                                    id="footer-phone"
                                    name="telefone"
                                    type="tel"
                                    placeholder="Telefone"
                                    value={form.telefone}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="footer-message" className="sr-only">Mensagem</label>
                                <textarea
                                    id="footer-message"
                                    name="mensagem"
                                    rows={4}
                                    placeholder="Mensagem"
                                    value={form.mensagem}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none"
                                />
                            </div>
                            {status === 'success' && (
                                <p className="text-green-300 text-sm">Mensagem enviada com sucesso!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-300 text-sm">Erro ao enviar. Tente novamente.</p>
                            )}
                            <div className="flex justify-end">
                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                                    className="bg-brand-gold text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-brand-highlight transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Enviando...' : 'Enviar'}
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 py-6">
                <p className="text-center text-white/80 text-sm">
                    Copyright Libertad Capital ©
                </p>
            </div>
        </footer>
    );
};

export default Footer;
