import{d as b,E as j,C as L,o as N,c as z,F as P,$ as V,v as y,a0 as m,a1 as M,l as a,R as O,a2 as G,b as J,e as s,f as v,i as C,k as e,m as f,A as l,q as R,s as K,B as F}from"../modules/vue-D-5OJ3uH.js";import{m as W,K as q,L as H,C as U,_ as X}from"../index-BdCeVkIj.js";import{u as I,f as Q}from"./context-BnSo1u1s.js";import{_ as Y}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BuJBClSF.js";import"../modules/shiki-CG3ahwfx.js";import"../modules/unplugin-icons-DMP0qpQr.js";const Z=b({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(g){const h=g,{$clicksContext:n}=I(),A=W();let u=+h.size;return Number.isNaN(u)&&(console.warn(`[slidev] Invalid size for VClickGap: ${h.size}`),u=1),j(()=>{const c=n.currentOffset+u-1;n.register(A,{max:c,delta:u})}),L(()=>{n.unregister(A)}),(c,d)=>(N(),z(P))}}),w=["ul","ol"],ss=b({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var B,x;const g=+this.every,h=q(this.at),n=typeof h=="string";if(!h){console.warn("[slidev] Invalid at prop for v-clicks component:",h);return}const A=V("click"),u=(o,t)=>O(o,[[A,t,"",{hide:this.hide,fade:this.fade}]]),c=o=>o.flatMap(t=>m(t)&&typeof t.type=="symbol"&&Array.isArray(t.children)?c(t.children):[t]);let d=(x=(B=this.$slots).default)==null?void 0:x.call(B);if(!d)return;d=c(H(d));const E=(o,t=1)=>c(o).map(r=>{if(!m(r))return r;if(w.includes(r.type)&&Array.isArray(r.children)){const D=p(r.children,t+1);return y(r,{},D)}return y(r)});let _=1,i=0;const p=(o,t=1)=>c(o).map(r=>{if(!m(r)||r.type===M)return r;const D=+h+Math.ceil(_++/g)-1;let $;t<+this.depth&&Array.isArray(r.children)?$=y(r,{},E(r.children,t)):$=y(r);const S=D-i;return i=D,u($,n?S>=0?`+${S}`:`${S}`:D)}),k=()=>a(Z,{size:+h+Math.ceil((_-1)/g)-1-i});if(this.handleSpecialElements){if(d.length===1&&w.includes(d[0].type)&&Array.isArray(d[0].children))return y(d[0],{},[...p(d[0].children),k()]);if(d.length===1&&d[0].type==="table"){const o=d[0];if(Array.isArray(o.children))return y(o,{},o.children.map(t=>m(t)?t.type==="tbody"&&Array.isArray(t.children)?y(t,{},[...p(t.children),k()]):y(t):t))}}return[...p(d),k()]}}),is=b({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:g=>y("span",g)}},render(){return y(ss,{every:U,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var g,h;return(h=(g=this.$slots).default)==null?void 0:h.call(g).map(n=>n.type===G?this.wrapText(n):n)}})}}),es={class:"col-header"},as=b({__name:"two-cols-header",props:{class:{type:String},layoutClass:{type:String}},setup(g){const h=g;return(n,A)=>(N(),J("div",{class:C(["slidev-layout two-cols-header w-full h-full",g.layoutClass])},[s("div",es,[v(n.$slots,"default",{},void 0,!0)]),s("div",{class:C(["col-left",h.class])},[v(n.$slots,"left",{},void 0,!0)],2),s("div",{class:C(["col-right",h.class])},[v(n.$slots,"right",{},void 0,!0)],2),s("div",{class:C(["col-bottom",h.class])},[v(n.$slots,"bottom",{},void 0,!0)],2)],2))}}),ts=X(as,[["__scopeId","data-v-d9d910a6"]]),ps={__name:"script.md__slidev_3",setup(g){const{$slidev:h,$nav:n,$clicksContext:A,$clicks:u,$page:c,$renderContext:d,$frontmatter:E}=I();return A.setup(),(_,i)=>{const p=Y,k=is;return N(),z(ts,R(K(F(Q)(F(E),2))),{left:e(B=>[a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// context")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," file"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," def"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"FILE"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," env"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"files"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," endsWith"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},".pdf"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")])])],-1)])),_:1},16)]),_:1}),a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[1]||(i[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// task")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Analyze "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"${"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"file"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"}"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," and extract data."),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`")])])],-1)])),_:1},16)]),_:1}),a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[2]||(i[2]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// output")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Save data to '<file>.json' where <file> is the filename."),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`")])])],-1)])),_:1},16)]),_:1}),a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[3]||(i[3]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// schemas")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," schema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," defSchema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DATA"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [{"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"name"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }])")])])],-1)])),_:1},16)]),_:1}),a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[4]||(i[4]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// structured output")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Format results as JSON using the "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"${"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"schema"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"}"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," schema."),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`")])])],-1)])),_:1},16)]),_:1}),a(k,null,{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[5]||(i[5]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// tools, agents")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"defTool"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"read_file"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"reads a file"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," async"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ({"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," filename"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    await"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," workspace"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"readText"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"filename"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))")])])],-1)])),_:1},16)]),_:1})]),right:e(B=>[i[12]||(i[12]=s("h1",null,null,-1)),a(k,{at:"1"},{default:e(()=>i[6]||(i[6]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},'FILE: "example.pdf"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Lorem ipsum...")])])],-1)])),_:1}),a(k,{at:"2"},{default:e(()=>i[7]||(i[7]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Analyze FILE and extract data.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}},"+"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," system.cot")])])],-1)])),_:1}),a(k,{at:"3"},{default:e(()=>i[8]||(i[8]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Save data to '"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"file"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},".json' where "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"file"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," is the filename.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}},"+"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," system.files")])])],-1)])),_:1}),a(k,{at:"4"},{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[9]||(i[9]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"SCHEMA:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"type DATA = Array<{ name: string; value: number }>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}},"+"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," system.schemas")])])],-1)])),_:1},16)]),_:1}),a(k,{at:"5"},{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[10]||(i[10]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Format results as JSON using the DATA schema.")])])],-1)])),_:1},16)]),_:1}),a(k,{at:"6"},{default:e(()=>[a(p,f({},{ranges:[]}),{default:e(()=>i[11]||(i[11]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-json"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// OpenAI tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{"),s("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic","--shiki-light":"#B31D28","--shiki-light-font-style":"italic"}}," ...,"),s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},' "'),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"tools"),s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'        "'),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"name"),s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"read_file"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'        "'),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"description"),s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"reads a file"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'        "'),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"parameters"),s("span",{style:{"--shiki-dark":"#B8A96577","--shiki-light":"#99841877"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic","--shiki-light":"#B31D28","--shiki-light-font-style":"italic"}},"..."),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")])])],-1)])),_:1},16)]),_:1})]),default:e(()=>[i[13]||(i[13]=s("h1",null,"PDF analyzer",-1)),i[14]||(i[14]=s("p",null,"Analyze a PDF file and extract data to schematized JSON file.",-1))]),_:1},16)}}};export{ps as default};