import { useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    IconHome,
    IconLeaf,
    IconMapPin,
    IconShieldLock,
    IconGlass,
    IconBrandEnvato,
    IconDiamond,
    IconHeart,
} from "@tabler/icons-react";

export function Features() {
    const gridRef = useRef(null);
    const features = [
        {
            title: "Arquitetura Orgânica",
            description:
                "Linhas que fluem com a paisagem, integrando concreto e natureza em harmonia perfeita.",
            icon: <IconHome />,
        },
        {
            title: "Integração Natural",
            description:
                "Jardins privativos e áreas verdes que trazem o frescor da mata para dentro de casa.",
            icon: <IconLeaf />,
        },
        {
            title: "Localização Privilegiada",
            description:
                "No coração da região mais nobre, perto de tudo o que importa, longe do caos.",
            icon: <IconMapPin />,
        },
        {
            title: "Segurança Inteligente",
            description: "Monitoramento 24h e controle de acesso de última geração para sua tranquilidade.",
            icon: <IconShieldLock />,
        },
        {
            title: "Lazer Exclusivo",
            description: "Espaços gourmet, spa e piscinas desenhados para momentos inesquecíveis.",
            icon: <IconGlass />,
        },
        {
            title: "Sustentabilidade",
            description:
                "Energia solar, reuso de água e materiais eco-friendly. O futuro começa aqui.",
            icon: <IconBrandEnvato />, // Using Envato leaf as a generic sustainability icon
        },
        {
            title: "Acabamentos Nobres",
            description:
                "Pedras naturais, madeiras certificadas e metais de alto padrão em cada detalhe.",
            icon: <IconDiamond />,
        },
        {
            title: "Bem-estar Pleno",
            description: "Ambientes projetados para elevar sua qualidade de vida e saúde mental.",
            icon: <IconHeart />,
        },
    ];

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        try {
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                const cards = Array.from(grid.children);
                if (!cards.length) return;

                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        stagger: 0.09,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: grid,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }, gridRef);

            return () => ctx.revert();
        } catch (err) {
            throw err;
        }
    }, []);

    return (
        <section id="features" className="bg-white py-16 sm:py-24 md:py-32 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 max-w-content-mobile md:max-w-content">
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-8 sm:py-10 relative group/feature border-brand-light/10 overflow-visible min-h-[180px]",
                (index === 0 || index === 4) && "lg:border-l border-brand-light/10",
                index < 4 && "lg:border-b border-brand-light/10"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-60px w-full bg-gradient-to-t from-brand-light/10 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-60px w-full bg-gradient-to-b from-brand-light/10 to-transparent pointer-events-none" />
            )}
            {/* Barra vertical no hover: sempre a 2.5rem da borda do card para alinhamento igual em todos */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-tr-full rounded-br-full bg-brand-light/50 group-hover/feature:bg-brand-gold opacity-0 group-hover/feature:opacity-100 transition-all duration-200 pointer-events-none z-[1]"
                style={{ height: '80px' }}
                aria-hidden
            />
            <div className="mb-4 relative z-10 pl-6 pr-6 sm:pl-10 sm:pr-10 text-brand-gold">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 pl-6 pr-6 sm:pl-10 sm:pr-10">
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-brand-dark text-balance">
                    {title}
                </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs relative z-10 pl-6 pr-6 sm:pl-10 sm:pr-10 font-light text-balance">
                {description}
            </p>
        </div>
    );
};
