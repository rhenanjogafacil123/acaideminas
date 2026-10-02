import { useMemo, useState, type ReactNode } from "react";
import { Check, Plus, Sparkles } from "lucide-react";

type Position = "fundo" | "meio" | "topo" | "borda" | "todas";
type Category = "frutas" | "coberturas" | "extras";
type Ingredient = { id:string; name:string; price:number; category:Category; emoji:string; color:string };

const sizes = [{ml:300,price:14.9},{ml:500,price:18.9},{ml:700,price:22.9}];
const bases = [
  {id:"acai",name:"Açaí",emoji:"🫐"},
  {id:"cupuacu",name:"Cupuaçu",emoji:"🥭"},
  {id:"ninho",name:"Creme de Ninho",emoji:"🥛"},
];

const ingredients: Ingredient[] = [
  {id:"morango",name:"Morango",price:2,category:"frutas",emoji:"🍓",color:"#e84545"},
  {id:"banana",name:"Banana",price:1.5,category:"frutas",emoji:"🍌",color:"#f4d35e"},
  {id:"kiwi",name:"Kiwi",price:2.5,category:"frutas",emoji:"🥝",color:"#80b918"},
  {id:"manga",name:"Manga",price:2,category:"frutas",emoji:"🥭",color:"#ffb703"},
  {id:"uva",name:"Uva",price:2,category:"frutas",emoji:"🍇",color:"#7b2cbf"},
  {id:"abacaxi",name:"Abacaxi",price:2,category:"frutas",emoji:"🍍",color:"#ffd166"},
  {id:"nutella",name:"Nutella",price:3,category:"coberturas",emoji:"🍫",color:"#6f351d"},
  {id:"condensado",name:"Leite condensado",price:2,category:"coberturas",emoji:"🥛",color:"#fff3d6"},
  {id:"mel",name:"Mel",price:1.5,category:"coberturas",emoji:"🍯",color:"#e9a319"},
  {id:"ninho-extra",name:"Leite Ninho",price:2,category:"extras",emoji:"🥛",color:"#f7ead0"},
  {id:"granola",name:"Granola",price:2,category:"extras",emoji:"🌾",color:"#bc7b35"},
  {id:"pacoca",name:"Paçoca",price:2,category:"extras",emoji:"🥜",color:"#d4a373"},
];

const positionLabels: Record<Position,string> = {fundo:"Fundo",meio:"Meio",topo:"Topo",borda:"Borda",todas:"Todas"};

function money(v:number){ return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }

function layerStyle(pos: Exclude<Position,"todas">) {
  if(pos==="fundo") return {bottom:"0%",height:"19%"};
  if(pos==="meio") return {bottom:"39%",height:"18%"};
  if(pos==="topo") return {bottom:"77%",height:"17%"};
  return {bottom:"86%",height:"10%"};
}

export function AcaiBuilder(){
  const [size,setSize]=useState(sizes[1]!);
  const [base,setBase]=useState(bases[0]!);
  const [category,setCategory]=useState<Category>("frutas");
  const [position,setPosition]=useState<Position>("meio");
  const [selected,setSelected]=useState<Array<{id:string;position:Position}>>([
    {id:"morango",position:"meio"},
    {id:"granola",position:"topo"},
  ]);

  const visible = ingredients.filter(i=>i.category===category);
  const selectedItems = useMemo(()=>selected.map(s=>{
    const i=ingredients.find(x=>x.id===s.id);
    return i ? {...i,position:s.position} : null;
  }).filter(Boolean) as Array<Ingredient & {position:Position}>,[selected]);

  const total=size.price+selectedItems.reduce((sum,i)=>sum+i.price,0);
  const active=(id:string)=>selected.some(i=>i.id===id);
  const toggle=(id:string)=>setSelected(curr=>curr.some(i=>i.id===id)?curr.filter(i=>i.id!==id):[...curr,{id,position}]);

  const baseGradient = base.id==="acai"
    ? "linear-gradient(180deg,#44104f 0%,#61166b 48%,#300936 100%)"
    : base.id==="cupuacu"
      ? "linear-gradient(180deg,#f6d68a 0%,#e7b653 55%,#c9902e 100%)"
      : "linear-gradient(180deg,#fffaf0 0%,#f0ddbb 55%,#dec49d 100%)";

  return <section id="monte-seu-copo" className="relative overflow-hidden bg-[#120817] px-4 py-14 text-white sm:px-6 lg:px-8">
    <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-700/20 blur-3xl"/>
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[.22em] text-fuchsia-300">Açaí do seu jeito</p>
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Monte seu copo em <span className="text-fuchsia-400">tempo real</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base">Clique nos ingredientes e veja o copo mudar na hora.</p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[430px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-white/10 bg-white/[.045] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <Step number="1" title="Escolha o tamanho">
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(i=><button type="button" key={i.ml} onClick={()=>setSize(i)}
                className={"relative rounded-2xl border px-2 py-4 text-center transition "+(size.ml===i.ml?"border-fuchsia-400 bg-fuchsia-500/15":"border-white/10 bg-black/15 hover:border-white/25")}>
                {size.ml===i.ml&&<Check className="absolute right-2 top-2 h-4 w-4 text-fuchsia-300"/>}
                <div className="mx-auto mb-2 h-8 w-6 rounded-b-lg border-2 border-white/60"/>
                <strong className="block text-sm sm:text-base">{i.ml} ml</strong>
                <span className="text-xs text-white/55">{money(i.price)}</span>
              </button>)}
            </div>
          </Step>

          <Step number="2" title="Escolha a base">
            <div className="grid grid-cols-3 gap-2">
              {bases.map(i=><button type="button" key={i.id} onClick={()=>setBase(i)}
                className={"rounded-2xl border p-3 text-center transition "+(base.id===i.id?"border-fuchsia-400 bg-fuchsia-500/15":"border-white/10 bg-black/15 hover:border-white/25")}>
                <span className="block text-3xl">{i.emoji}</span>
                <span className="mt-2 block text-xs font-bold sm:text-sm">{i.name}</span>
              </button>)}
            </div>
          </Step>

          <Step number="3" title="Adicione os ingredientes">
            <div className="mb-3 grid grid-cols-3 rounded-xl bg-black/25 p-1 text-xs font-semibold">
              {([["frutas","Frutas"],["coberturas","Coberturas"],["extras","Extras"]] as Array<[Category,string]>).map(([id,label])=>
                <button type="button" key={id} onClick={()=>setCategory(id)}
                  className={"rounded-lg px-2 py-2.5 transition "+(category===id?"bg-fuchsia-500 text-white":"text-white/55 hover:text-white")}>{label}</button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {visible.map(i=><button type="button" key={i.id} onClick={()=>toggle(i.id)}
                className={"group relative overflow-hidden rounded-2xl border p-3 text-left transition "+(active(i.id)?"border-fuchsia-400 bg-fuchsia-500/10":"border-white/10 bg-black/20 hover:-translate-y-0.5 hover:border-white/25")}>
                <div className="mb-2 flex h-16 items-center justify-center rounded-xl text-4xl" style={{background:"linear-gradient(145deg,"+i.color+"33,"+i.color+"12)"}}>{i.emoji}</div>
                <strong className="block truncate text-sm">{i.name}</strong>
                <span className="text-xs text-white/55">{money(i.price)}</span>
                <span className={"absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full "+(active(i.id)?"bg-fuchsia-500":"bg-white/10 group-hover:bg-fuchsia-500")}>
                  {active(i.id)?<Check size={15}/>:<Plus size={15}/>}
                </span>
              </button>)}
            </div>
          </Step>

          <Step number="4" title="Onde colocar?">
            <div className="grid grid-cols-5 gap-1.5">
              {(Object.keys(positionLabels) as Position[]).map(id=><button type="button" key={id} onClick={()=>setPosition(id)}
                className={"rounded-xl border px-1 py-2.5 text-xs font-bold transition "+(position===id?"border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-200":"border-white/10 bg-black/15 text-white/60 hover:text-white")}>
                {positionLabels[id]}
              </button>)}
            </div>
            <p className="mt-2 text-[11px] text-white/40">A posição escolhida vale para o próximo ingrediente adicionado.</p>
          </Step>
        </aside>

        <div className="relative min-h-[680px] overflow-hidden rounded-[32px] border border-white/10 bg-[#180b1d] p-5 shadow-2xl sm:p-8">
          <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs text-white/60">
            <Sparkles className="mr-1 inline h-4 w-4 text-fuchsia-300"/> preview ao vivo
          </div>
          <div className="flex h-full flex-col items-center justify-center pt-14">
            <div className="relative flex min-h-[530px] w-full max-w-[650px] items-center justify-center">
              <div className="absolute left-2 top-16 hidden max-w-[150px] rounded-2xl border border-white/10 bg-black/20 p-3 text-xs text-white/65 sm:block">
                <strong className="mb-1 block text-white">Seu copo</strong>
                {selectedItems.length ? selectedItems.length+" ingrediente"+(selectedItems.length>1?"s":"")+" selecionado"+(selectedItems.length>1?"s":"") : "Escolha um ingrediente"}
              </div>

              <div className="relative">
                <div className="absolute -left-5 -right-5 -top-2 z-30 h-8 rounded-[50%] border-4 border-white/45 bg-white/10"/>
                <div className="relative h-[480px] w-[280px] overflow-hidden border-x-[5px] border-b-[6px] border-white/35 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,.55)] sm:h-[520px] sm:w-[315px]"
                  style={{clipPath:"polygon(4% 0%,96% 0%,83% 100%,17% 100%)"}}>
                  <div className="absolute inset-0" style={{background:baseGradient}}/>
                  {selectedItems.flatMap((item,index)=>{
                    const ps:Array<Exclude<Position,"todas">>=item.position==="todas"?["fundo","meio","topo"]:[item.position];
                    return ps.map((pos,r)=>{
                      const st=layerStyle(pos);
                      return <div key={item.id+"-"+index+"-"+r}
                        className={"absolute inset-x-0 z-10 flex items-center justify-center overflow-hidden transition-all duration-500 "+(pos==="borda"?"rounded-b-[55%]":"")}
                        style={{...st,background:"linear-gradient(180deg,"+item.color+"dd,"+item.color+"aa)",boxShadow:"inset 0 2px 8px rgba(255,255,255,.16)"}}>
                        <div className="flex flex-wrap items-center justify-center gap-1 px-6 text-3xl">
                          {Array.from({length:pos==="borda"?4:7}).map((_,e)=><span key={e}>{item.emoji}</span>)}
                        </div>
                      </div>
                    });
                  })}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-white/10 via-transparent to-white/5"/>
                </div>
                <div className="absolute -bottom-4 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[50%] bg-black/45 blur-md"/>
              </div>

              <div className="absolute right-0 top-20 hidden w-[170px] space-y-2 sm:block">
                {selectedItems.slice(-4).reverse().map(item=><div key={item.id} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                  <div className="flex items-center gap-2"><span className="text-xl">{item.emoji}</span><div className="min-w-0">
                    <strong className="block truncate text-xs">{item.name}</strong>
                    <span className="text-[11px] text-fuchsia-300">{positionLabels[item.position]}</span>
                  </div></div>
                </div>)}
              </div>
            </div>

            <div className="mt-2 flex w-full max-w-xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
              <div><span className="block text-xs uppercase tracking-[.15em] text-white/45">{size.ml} ml • {base.name}</span><strong className="mt-1 block text-2xl">{money(total)}</strong></div>
              <button type="button" onClick={()=>setSelected([])} className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-white/65 hover:text-white">Limpar copo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

function Step({number,title,children}:{number:string;title:string;children:ReactNode}){
  return <div className="border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
    <div className="mb-3 flex items-center gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fuchsia-500 text-sm font-black">{number}</span>
      <h3 className="text-base font-extrabold sm:text-lg">{title}</h3>
    </div>
    {children}
  </div>
}
