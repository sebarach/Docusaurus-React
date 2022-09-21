"use strict";(self.webpackChunkreact_docusaurus=self.webpackChunkreact_docusaurus||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Primeros Pasos",p={unversionedId:"intro",id:"intro",title:"Primeros Pasos",description:"Requisitos",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Docusaurus-React/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - React",permalink:"/Docusaurus-React/docs/category/tutorial---react"}},l={},s=[{value:"Requisitos",id:"requisitos",level:3},{value:"Crear un sitio",id:"crear-un-sitio",level:2},{value:"Lanza el proyecto en local",id:"lanza-el-proyecto-en-local",level:2},{value:"Compila el proyecto",id:"compila-el-proyecto",level:2},{value:"Para hostear el proyecto en GitHub Pages",id:"para-hostear-el-proyecto-en-github-pages",level:2},{value:"En el archivo de configuracion",id:"en-el-archivo-de-configuracion",level:2},{value:"Ejemplo de Markdown Pretier",id:"ejemplo-de-markdown-pretier",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"primeros-pasos"},"Primeros Pasos"),(0,r.kt)("h3",{id:"requisitos"},"Requisitos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 o Mayor")),(0,r.kt)("h2",{id:"crear-un-sitio"},"Crear un sitio"),(0,r.kt)("p",null,"Estilo clasico"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest MiProyecto classic\n")),(0,r.kt)("h2",{id:"lanza-el-proyecto-en-local"},"Lanza el proyecto en local"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd MiProyecto\nnpm run start\n")),(0,r.kt)("h2",{id:"compila-el-proyecto"},"Compila el proyecto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("h2",{id:"para-hostear-el-proyecto-en-github-pages"},"Para hostear el proyecto en GitHub Pages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde el bash de GIT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=sebarach yarn deploy\n")),(0,r.kt)("h2",{id:"en-el-archivo-de-configuracion"},"En el archivo de configuracion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde el bash de GIT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  url: 'https://sebarach.github.io',\n  baseUrl: '/Docusaurus-React/',\n  trailingSlash: false,\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ejemplo-de-markdown-pretier"},"Ejemplo de Markdown Pretier"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{title:"Your Title",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),".")))}u.isMDXComponent=!0}}]);