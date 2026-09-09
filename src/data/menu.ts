export type CategoryId = "destaques" | "copos" | "potes" | "vitaminas" | "caixas" | "complementos" | "congelados" | "salgados";
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
};


export const categories: {id:CategoryId;label:string}[] = [{"id": "copos", "label": "Açaí no copo"}, {"id": "potes", "label": "Potes 1L"}, {"id": "vitaminas", "label": "Vitaminas"}, {"id": "caixas", "label": "Caixas de açaí"}, {"id": "complementos", "label": "Complementos"}, {"id": "congelados", "label": "Frutas congeladas"}, {"id": "salgados", "label": "Pães de queijo"}];
export const products: Product[] = [{"id": "copo-300", "name": "Copo 300 ml", "description": "Seu açaí no tamanho da sua vontade.", "price": 10.5, "category": "copos", "image": "/acai-hero.webp", "featured": true}, {"id": "pote-tradicional", "name": "Pote 1L Tradicional", "description": "Açaí tradicional para saborear em casa.", "price": 15, "category": "potes", "image": "/acai-hero.webp", "featured": true}, {"id": "vitamina-300", "name": "Vitamina de açaí 300 ml", "description": "Uma pausa cheia de sabor.", "price": 9, "category": "vitaminas", "image": "/acai-hero.webp", "featured": true}, {"id": "caixa-2l", "name": "Caixa 2L", "description": "Açaí para compartilhar.", "price": 27, "category": "caixas", "image": "/acai-hero.webp", "featured": false}, {"id": "granola-1kg", "name": "Granola fruta e sabor 1 kg", "description": "Um toque crocante para acompanhar.", "price": 16, "category": "complementos", "image": "/acai-hero.webp", "featured": false}, {"id": "acerola-1kg", "name": "Acerola congelada 1 kg", "description": "Fruta congelada para suas receitas.", "price": 15, "category": "congelados", "image": "/acai-hero.webp", "featured": false}, {"id": "pao-queijo-1kg", "name": "Pães de queijo 1 kg", "description": "Para acompanhar sua pausa.", "price": 20, "category": "salgados", "image": "/acai-hero.webp", "featured": false}];
export const pizzaNotices: string[] = [];
