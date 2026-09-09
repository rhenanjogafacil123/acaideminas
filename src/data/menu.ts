export type CategoryId =
  | "destaques"
  | "copos"
  | "potes"
  | "vitaminas"
  | "caixas"
  | "xaropes"
  | "complementos"
  | "lacteos"
  | "congelados"
  | "salgados";

export type ProductVariant = { id: string; label: string; price: number };

export type ProductOptionGroup = {
  id: string;
  label: string;
  options: string[];
  min?: number;
  max?: number;
  hint?: string;
  /** Exibe o grupo apenas quando uma destas variantes estiver selecionada. */
  onlyVariantIds?: string[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Exclude<CategoryId, "destaques">;
  variants?: ProductVariant[];
  flavors?: string[];
  variantLabel?: string;
  customGroups?: ProductOptionGroup[];
  badge?: "Destaque" | "Promoção" | undefined;
  featured?: boolean;
  priceLabel?: string;
  consultOnly?: boolean;
};

export const categories: { id: CategoryId; label: string }[] = [
  { id: "copos", label: "Açaí no copo" },
  { id: "potes", label: "Potes 1L" },
  { id: "vitaminas", label: "Vitaminas" },
  { id: "caixas", label: "Caixas de açaí" },
  { id: "xaropes", label: "Xaropes" },
  { id: "complementos", label: "Complementos" },
  { id: "lacteos", label: "Lácteos e misturas" },
  { id: "congelados", label: "Frutas e polpas" },
  { id: "salgados", label: "Pães de queijo" },
];

const image = "/acai-hero.webp";

export const products: Product[] = [
  {
    id: "copo-300",
    name: "Copo 300 ml",
    description: "A medida certa para matar a vontade de açaí.",
    price: 10.5,
    category: "copos",
    image,
    featured: true,
  },
  {
    id: "copo-500",
    name: "Copo 500 ml",
    description: "Mais açaí para deixar a pausa ainda melhor.",
    price: 13,
    category: "copos",
    image,
  },
  {
    id: "copo-700",
    name: "Copo 700 ml",
    description: "Para quem gosta de aproveitar sem pressa.",
    price: 17,
    category: "copos",
    image,
  },

  {
    id: "pote-tradicional",
    name: "Pote 1L Tradicional",
    description: "Açaí tradicional para ter sempre por perto.",
    price: 15,
    category: "potes",
    image,
    featured: true,
  },
  {
    id: "pote-banana",
    name: "Pote 1L com banana",
    description: "Açaí batido com banana, cremoso e equilibrado.",
    price: 15,
    category: "potes",
    image,
  },
  {
    id: "pote-morango",
    name: "Pote 1L com morango",
    description: "Açaí com morango para um sabor mais frutado.",
    price: 15,
    category: "potes",
    image,
  },

  {
    id: "vitamina-300",
    name: "Vitamina de açaí 300 ml",
    description: "Cremosa, gelada e perfeita para uma pausa rápida.",
    price: 9,
    category: "vitaminas",
    image,
    featured: true,
  },
  {
    id: "vitamina-500",
    name: "Vitamina de açaí 500 ml",
    description: "Uma vitamina caprichada para acompanhar o seu dia.",
    price: 11,
    category: "vitaminas",
    image,
  },
  {
    id: "vitamina-700",
    name: "Vitamina de açaí 700 ml",
    description: "Mais cremosidade e sabor em um tamanho generoso.",
    price: 12.5,
    category: "vitaminas",
    image,
  },

  {
    id: "caixa-2l",
    name: "Caixa 2L",
    description: "Boa pedida para dividir ou deixar no freezer.",
    price: 27,
    category: "caixas",
    image,
  },
  {
    id: "caixa-5l",
    name: "Caixa 5L",
    description: "Mais volume para casa, eventos ou revenda.",
    price: 60,
    category: "caixas",
    image,
  },
  {
    id: "caixa-premium-10l",
    name: "Caixa Premium 10L",
    description: "Açaí premium em volume maior para quem precisa de rendimento.",
    price: 135,
    category: "caixas",
    image,
  },
  {
    id: "caixa-cremosao-10l",
    name: "Caixa Cremosão 10L",
    description: "Opção cremosa em caixa de 10 litros.",
    price: 115,
    category: "caixas",
    image,
  },
  {
    id: "creme-acai-bom-10l",
    name: "Creme de açaí Bom 10L",
    description: "Creme de açaí em volume grande para servir mais.",
    price: 125,
    category: "caixas",
    image,
  },
  {
    id: "creme-acai-black",
    name: "Creme de açaí Black",
    description: "Uma opção intensa de creme de açaí para o seu estoque.",
    price: 105,
    category: "caixas",
    image,
  },

  {
    id: "xarope-guarana-1l",
    name: "Xarope de guaraná 1L",
    description: "Para completar receitas e deixar o sabor no ponto.",
    price: 13,
    category: "xaropes",
    image,
  },
  {
    id: "xarope-guarana-5l",
    name: "Xarope de guaraná 5L",
    description: "Mais rendimento para uso frequente ou comercial.",
    price: 35,
    category: "xaropes",
    image,
  },

  {
    id: "granola-1kg",
    name: "Granola fruta e sabor 1 kg",
    description: "Crocância que combina com açaí, frutas e vitaminas.",
    price: 16,
    category: "complementos",
    image,
  },
  {
    id: "aveia-tradicao-minas",
    name: "Aveia Tradição de Minas",
    description: "Um complemento simples e versátil para montar do seu jeito.",
    price: 7,
    category: "complementos",
    image,
  },
  {
    id: "pacoca-100",
    name: "Paçoca c/100 unidades",
    description: "Pacote com 100 unidades para completar seus pedidos.",
    price: 23,
    category: "complementos",
    image,
  },
  {
    id: "cereal-50",
    name: "Cereal cx c/50 unidades",
    description: "Caixa com 50 unidades. Consulte os sabores disponíveis.",
    price: 30,
    category: "complementos",
    image,
  },

  {
    id: "composto-lacteo-purelac",
    name: "Composto lácteo - Purelac",
    description: "Mistura prática para dar mais cremosidade às receitas.",
    price: 35.9,
    category: "lacteos",
    image,
  },
  {
    id: "composto-lacteo-pro-m",
    name: "Composto lácteo - Pro m...",
    description: "Composto lácteo para preparo e finalização de receitas.",
    price: 28,
    category: "lacteos",
    image,
  },
  {
    id: "mistura-lactea-condensada",
    name: "Mistura láctea condensada...",
    description: "Uma opção cremosa para complementar açaís e sobremesas.",
    price: 6,
    category: "lacteos",
    image,
  },

  {
    id: "acerola-1kg",
    name: "Acerola congelado 1KG",
    description: "Fruta congelada para sucos, vitaminas e receitas.",
    price: 15,
    category: "congelados",
    image,
  },
  {
    id: "maracuja-congelado",
    name: "Maracujá congelado",
    description: "Sabor marcante e praticidade para o preparo do dia a dia.",
    price: 22.5,
    category: "congelados",
    image,
  },
  {
    id: "morango-congelado",
    name: "Morango fruta congelada",
    description: "Morango congelado pronto para receitas e acompanhamentos.",
    price: 16,
    category: "congelados",
    image,
  },
  {
    id: "amora-congelada",
    name: "Amora fruta congelada",
    description: "Fruta congelada com sabor intenso e ótima versatilidade.",
    price: 23,
    category: "congelados",
    image,
  },
  {
    id: "mirtilo-500g",
    name: "Mirtilo 500g",
    description: "Porção de mirtilo congelado para receitas e combinações.",
    price: 20,
    category: "congelados",
    image,
  },
  {
    id: "abacaxi-1kg",
    name: "Abacaxi congelado 1KG",
    description: "Abacaxi congelado, prático para sucos e vitaminas.",
    price: 14,
    category: "congelados",
    image,
  },
  {
    id: "mamao-1kg",
    name: "Mamão congelado 1KG",
    description: "Mamão congelado pronto para bater e servir.",
    price: 10,
    category: "congelados",
    image,
  },
  {
    id: "polpas-variadas",
    name: "Polpas de frutas variadas",
    description: "Consulte os sabores disponíveis e os preços de cada opção.",
    price: 0,
    priceLabel: "Consultar",
    consultOnly: true,
    category: "congelados",
    image,
  },

  {
    id: "pao-queijo-1kg",
    name: "Pães de queijo de 1KG",
    description: "Um acompanhamento prático e gostoso para qualquer hora.",
    price: 20,
    category: "salgados",
    image,
  },
];

export const pizzaNotices: string[] = [];
