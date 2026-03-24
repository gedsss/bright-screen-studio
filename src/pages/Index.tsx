import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone, MapPin, ChevronDown, PrinterIcon, ImageIcon, CreditCard, Package, Star, Clock, Shield } from "lucide-react";
import heroPrinter from "@/assets/hero-printer.jpg";
import serviceImpressao from "@/assets/service-impressao.jpg";
import serviceBanner from "@/assets/service-banner.jpg";
import serviceCartao from "@/assets/service-cartao.jpg";

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Onde Estamos", href: "#localizacao" },
];

const services = [
  {
    icon: PrinterIcon,
    title: "Impressão Digital",
    description:
      "Serviços de impressão rápida e de alta qualidade para materiais promocionais e empresariais. Atendemos diversos formatos com excelente acabamento e fidelidade de cores.",
    image: serviceImpressao,
  },
  {
    icon: ImageIcon,
    title: "Banners & Roll-ups",
    description:
      "Impressão de banners em alta resolução, ideais para eventos, promoções e sinalização. Materiais duráveis, com cores vivas e acabamento profissional.",
    image: serviceBanner,
  },
  {
    icon: CreditCard,
    title: "Cartões de Visita",
    description:
      "Cartões de visita personalizados com design profissional e impressão de alta qualidade. Transmitimos sua identidade com clareza e elegância em cada detalhe.",
    image: serviceCartao,
  },
];

const products = [
  "Papel A4 premium",
  "Cartuchos originais",
  "Toner para laser",
  "Vinil adesivo",
  "Lona para banner",
  "Papelaria geral",
  "Materiais de informática",
  "Plástico para plastificação",
];

const stats = [
  { value: "20+", label: "Anos de experiência" },
  { value: "5.000+", label: "Clientes atendidos" },
  { value: "100%", label: "Compromisso com qualidade" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="#" className="font-display text-2xl tracking-widest text-gradient-gold">
            INFOCENTER
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-gold"
            >
              <Phone size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
            >
              <nav className="container px-6 py-6 flex flex-col gap-5">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full font-semibold w-fit shadow-gold"
                >
                  <Phone size={16} />
                  Falar no WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroPrinter}
          alt="Impressora de grande formato"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold-light font-semibold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Gráfica Profissional desde 2002
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-7xl md:text-[10rem] leading-none mb-6 text-white"
          >
            PROCURA POR UMA{" "}
            <span className="text-gradient-gold">GRÁFICA?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10"
          >
            Impressão de alta qualidade, banners, cartões e muito mais — tudo com acabamento profissional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#servicos"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-gold hover:scale-105 duration-200"
            >
              Ver Serviços
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="border border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-primary-foreground transition-all duration-200"
            >
              Pedir Orçamento
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#quem-somos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2 text-sm"
        >
          <span className="tracking-widest uppercase text-xs">Conheça-nos</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={20} className="text-gold" />
          </motion.div>
        </motion.a>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 border-y border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <p className="font-display text-5xl text-gradient-gold">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-2 font-medium uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUEM SOMOS ── */}
      <section id="quem-somos" className="py-28 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">Nossa história</p>
            <h2 className="font-display text-6xl md:text-7xl text-foreground leading-none mb-6">
              QUEM SOMOS?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              A Gráfica Infocenter foi fundada em meados de 2002 pelo marido da atual proprietária, inicialmente com foco em recarga de cartuchos e manutenção de impressoras. A primeira sede ficava em frente ao aeroporto, onde permaneceu por cerca de 10 anos.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Com o tempo, perceberam que a modernização do mercado exigia mudanças, o que os motivou a investir em equipamentos voltados para o setor gráfico — e hoje somos referência em impressão digital na região.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Star,
                title: "Nossa Missão",
                text: "Oferecer serviços com qualidade é atender às expectativas dos clientes com eficiência e atenção. Cada etapa deve refletir compromisso e profissionalismo.",
              },
              {
                icon: Shield,
                title: "Nossos Valores",
                text: "Ser transparente na prestação de serviços é agir com respeito e honestidade, construindo relações de confiança com clientes e parceiros.",
              },
              {
                icon: Clock,
                title: "Nosso Compromisso",
                text: "Entregamos dentro do prazo, com excelência técnica e cuidado com cada detalhe. A sua satisfação é o nosso principal resultado.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-gold/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">O que fazemos</p>
            <h2 className="font-display text-6xl md:text-7xl text-foreground">NOSSOS SERVIÇOS</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="group rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-gold bg-background"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-gold text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Solicitar serviço →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUTOS ── */}
      <section id="produtos" className="py-28 container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">O que vendemos</p>
          <h2 className="font-display text-6xl md:text-7xl text-foreground">NOSSOS PRODUTOS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.08}
              className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-gold/40 hover:bg-secondary transition-all group cursor-default"
            >
              <Package size={18} className="text-gold flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              PRONTO PARA COMEÇAR?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-base">
              Entre em contato pelo WhatsApp e receba um orçamento personalizado sem compromisso.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-gold"
            >
              <Phone size={22} />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section id="localizacao" className="py-28 container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">Venha nos visitar</p>
          <h2 className="font-display text-6xl md:text-7xl text-foreground">ONDE ESTAMOS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground text-sm">
                    Rua Principal, 123 — Centro<br />
                    Cidade, Estado — CEP 00000-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Clock size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                  <p className="text-muted-foreground text-sm">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Contato</p>
                  <p className="text-muted-foreground text-sm">
                    WhatsApp: (00) 9 0000-0000<br />
                    Email: contato@infocenter.com.br
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="rounded-2xl overflow-hidden border border-border h-80 bg-card flex items-center justify-center"
          >
            <iframe
              title="Localização Infocenter"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1042296455996!2d-46.6557048!3d-23.5615559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjYiUyA0NsKwMzknMjAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl tracking-widest text-gradient-gold">INFOCENTER</p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gráfica Infocenter. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
