import { ArrowRight, ShoppingBag } from "lucide-react";
import "./Hero.css";

export function Hero() {
  return (
    <section id="topo" className="minas-hero" aria-labelledby="minas-hero-title">
      <div className="minas-hero-inner">
        <div className="minas-hero-copy">
          <p className="minas-hero-eyebrow">AÇAÍ DE MINAS</p>
          <h1 id="minas-hero-title">Mais sabor em<br /><em>cada momento.</em></h1>
          <p className="minas-hero-description">Açaí cremoso e seus complementos favoritos.<br />Uma pausa gostosa, do seu jeito.</p>
          <a href="#cardapio" className="minas-hero-button">
            <ShoppingBag size={20} />
            Escolher meu açaí
            <ArrowRight size={20} />
          </a>
          <p className="minas-hero-price">Seu favorito a partir de <strong>R$ 10,50</strong></p>
        </div>
        <div className="minas-hero-art">
          <img src="/açai de mina HERO WEBP.webp" width={1719} height={915} alt="Açaí de Minas com banana, morango e granola" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
