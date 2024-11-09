import{o as n,c as h,k,e as s,A as i,q as r,s as d,B as t}from"./modules/vue-D9m5leGk.js";import{I as p}from"./slidev/default-5qoZ9AaS.js";import{u as g,f as o}from"./slidev/context-ZD1rdTWA.js";import"./index-FFxmxmTX.js";import"./modules/shiki-CYmrU0cZ.js";const x={__name:"tla-plus.md__slidev_11",setup(c){const{$slidev:y,$nav:f,$clicksContext:e,$clicks:A,$page:u,$renderContext:m,$frontmatter:l}=g();return e.setup(),(B,a)=>(n(),h(p,r(d(t(o)(t(l),10))),{default:k(()=>a[0]||(a[0]=[s("h1",null,"Example: TLA+ Linter",-1),s("p",null,[s("a",{href:"https://lamport.azurewebsites.net/tla/tla.html",target:"_blank"},"TLA+"),i(" is a high-level language for modeling programs and systems–especially concurrent and distributed ones. "),s("strong",null,"TLA+ does not come with a traditional linter or formatter.")],-1),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-txt"},[s("span",{class:"line"},[s("span",null,"  define {")]),i(`
`),s("span",{class:"line"},[s("span",null,"    (*")]),i(`
`),s("span",{class:"line"},[s("span",null,"      The passMsg operator is not implementable -at least not without using extra synchronization- because it atomically reads a message")]),i(`
`),s("span",{class:"line"},[s("span",null,"      from the nic's in-buffer and writes to its out-buffer!")]),i(`
`),s("span",{class:"line"},[s("span",null,"    *)")]),i(`
`),s("span",{class:"line"},[s("span",null,"    passMsg(net, from, oldMsg, to, newMsg) == [ net EXCEPT ![from] = BagRemove(@, oldMsg), ![to] = BagAdd(@, newMsg) ]")])])],-1),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"def"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"TLA+"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," env"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"files"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"filter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"f"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," f"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"filename"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"endsWith"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},".tla"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")),"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"lineNumbers"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"You are an expert at TLA+/TLAPLUS. Your task is to check if the prose comments and their TLA+ declarations and definitions are syntactically and semantically consistent!!!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Explain any consistencies and inconsistencies you may find.  Report inconsistent and consistent pairs in a single ANNOTATION section.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"## TLA+ Syntax Hints")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"- A formula [A]_v is called a temporal formula, ..."),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`")])])],-1),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Run GenAIscript on the TLA+ specs that are added in this pull request.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  run"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," npx --yes genaiscript run tlAI-Linter.genai.js $(git diff --name-only HEAD^ | grep '.tla') -oa results.sarif")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Upload SARIF file")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  uses"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," github/codeql-action/upload-sarif@v3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  with"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    sarif_file"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," results.sarif")])])],-1)])),_:1},16))}};export{x as default};
