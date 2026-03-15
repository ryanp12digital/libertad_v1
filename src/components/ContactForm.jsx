import { useState } from 'react';
import { motion } from 'framer-motion';
import { WEBHOOK_URL } from '../lib/webhooks';

const ContactForm = () => {
    const [form, setForm] = useState({ nome: '', telefone: '', email: '', mensagem: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Erro na requisição');
            setStatus('success');
            setForm({ nome: '', telefone: '', email: '', mensagem: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="formulario" className="relative py-24 bg-brand-dark text-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-sora text-3xl md:text-5xl mb-6 text-balance">Entre em Contato</h2>
                        <p className="text-gray-300 font-light text-lg text-balance">
                            Agende uma visita e sinta a experiência Libertad.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="col-span-1">
                            <label className="block text-brand-gold text-sm uppercase tracking-wider mb-2">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-light/20 border-b border-brand-gold/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-white/20"
                                placeholder="Seu nome completo"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-brand-gold text-sm uppercase tracking-wider mb-2">Telefone</label>
                            <input
                                type="tel"
                                name="telefone"
                                value={form.telefone}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-light/20 border-b border-brand-gold/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-white/20"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-brand-gold text-sm uppercase tracking-wider mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-light/20 border-b border-brand-gold/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-white/20"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-brand-gold text-sm uppercase tracking-wider mb-2">Mensagem</label>
                            <textarea
                                name="mensagem"
                                value={form.mensagem}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-brand-light/20 border-b border-brand-gold/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-white/20 resize-none"
                                placeholder="Como podemos ajudar?"
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="col-span-2 text-center text-brand-gold text-sm">
                                Mensagem enviada com sucesso! Entraremos em contato em breve.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="col-span-2 text-center text-red-400 text-sm">
                                Ocorreu um erro ao enviar. Tente novamente.
                            </div>
                        )}

                        <div className="col-span-2 flex justify-center mt-8">
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02, backgroundColor: "#E8D4A1", color: "#063227" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-transparent border border-brand-gold text-brand-gold px-12 py-4 rounded-full font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
