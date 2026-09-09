import {
  ArrowRight,
  BookOpen,
  Crown,
  Heart,
  Leaf,
  Package,
  ShoppingBag,
  Truck,
  Zap,
} from "lucide-react";
import "./Hero.css";

export function Hero() {
  return (
    <section id="topo" className="acai-hero">
      <div className="hero-copy">
        <div className="hero-badge">
          <Crown size={18} strokeWidth={2.4} />
          <span>O AÇAÍ <strong>MAIS PEDIDO</strong> DA REGIÃO</span>
        </div>

        <h1>
          Açaí de Minas.<br />
          <em>Mais sabor em</em><br />
          cada momento!
        </h1>

        <p className="hero-description">
          Açaí cremoso, gelado e feito com ingredientes selecionados<br className="hero-desktop-break" />
          para deixar seu dia mais leve e muito mais gostoso.<br />
          <strong>Monte do seu jeito e peça online em poucos cliques!</strong>
        </p>

        <div className="hero-benefits" aria-label="Benefícios">
          <span><Leaf size={24} />Ingredientes<br />selecionados</span>
          <span><Zap size={24} />Pedido rápido<br />pelo site</span>
          <span><Truck size={25} />Entrega<br />na sua região</span>
          <span><Heart size={24} />Sabor que<br />conquista</span>
        </div>

        <div className="hero-actions">
          <a href="#cardapio" className="hero-primary-button">
            <ShoppingBag size={23} />
            Peça agora
            <ArrowRight size={24} />
          </a>
          <a href="#cardapio" className="hero-secondary-button">
            <BookOpen size={22} />
            Ver cardápio
          </a>
        </div>

        <span className="handwritten">Seu açaí favorito, do seu jeito!</span>
      </div>

      <div className="hero-art-note" aria-hidden="true">
        Uma colherada<br />de felicidade.
        <Heart size={32} />
      </div>

      <div className="hero-price-badge" aria-label="A partir de dez reais e cinquenta centavos">
        <small>A PARTIR DE</small>
        <strong>R$ 10,50</strong>
      </div>

      <div className="hero-life-note" aria-hidden="true">
        Aqui<br />tem mais<br /><strong>vida!</strong>
        <Heart size={30} />
      </div>

      <div className="hero-size-strip" aria-label="Tamanhos disponíveis">
        <div className="hero-size-label">
          <Package size={31} />
          <strong>ESCOLHA<br />O TAMANHO</strong>
        </div>
        <div><strong>300ml</strong><span>Pequeno</span></div>
        <div><strong>500ml</strong><span>Médio</span></div>
        <div><strong>700ml</strong><span>Grande</span></div>
        <div className="hero-size-potes"><Package size={28} /><p><strong>Potes</strong><span>1L e 2L</span></p></div>
      </div>
    </section>
  );
}
