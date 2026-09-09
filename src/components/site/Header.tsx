import {ShoppingBag} from "lucide-react";
import {useCart} from "@/hooks/useCart";
export function Header(){const {count,setOpen}=useCart();return <header className="brand-header"><a href="#topo" className="wordmark" aria-label="Açaí Bom Gosto, início"><span>Açaí</span><strong>BOM GOSTO</strong></a><nav aria-label="Menu principal"><a href="#cardapio">Cardápio</a><a href="#sobre">Bom Gosto</a><a href="#contato">Contato</a></nav><button className="cart-button" onClick={()=>setOpen(true)}><ShoppingBag size={19}/><span>Meu pedido</span><b>{count}</b></button></header>}
