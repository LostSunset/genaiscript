function r(e){return e.startsWith("/")?"/genaiscript/slides/pnw-plse-may2024/"+e.slice(1):e}function n(e,s=!1,o="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),i={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${r(e)})`:`url("${r(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:o};return i.background||delete i.background,i}export{n as h};