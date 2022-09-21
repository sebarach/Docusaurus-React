"use strict";(self.webpackChunkreact_docusaurus=self.webpackChunkreact_docusaurus||[]).push([[7214],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2755:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={id:"microsoft-intro",title:"Inicio",slug:"microsoft/intro",sidebar_position:1},i=void 0,c={unversionedId:"microsoft-learn/microsoft-intro",id:"microsoft-learn/microsoft-intro",title:"Inicio",description:"\x3c!-- Syntax highlighting",source:"@site/docs/microsoft-learn/intro.md",sourceDirName:"microsoft-learn",slug:"/microsoft-learn/microsoft/intro",permalink:"/docs/microsoft-learn/microsoft/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"microsoft-intro",title:"Inicio",slug:"microsoft/intro",sidebar_position:1},sidebar:"microsoftSidebar"},l={},u=[],s={toc:u};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduccion"},"Introduccion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se comenzara el curso para la certificacion de microsoft en la nube")),(0,o.kt)("strong",null,(0,o.kt)("h2",null,"Modulo 1 Arquitectura de Azure Virtual Desktop ")," "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"1. Durante la implementaci\xf3n de Azure Virtual Desktop, \xbfqu\xe9 se usa para integrar Active Directory Domain Services (AD DS) con Azure Active Directory (Azure AD)?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"R: Azure AD Connect es una herramienta de Microsoft que se ha dise\xf1ado para cumplir y lograr una identidad h\xedbrida en la organizaci\xf3n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"2. Durante la implementaci\xf3n de Azure Virtual Desktop, \xbfqu\xe9 se usa para integrar Active Directory Domain Services (AD DS) con Azure Active Directory (Azure AD)?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"R: El servicio puerta de enlace de conexi\xf3n remota conecta usuarios remotos a aplicaciones y escritorios de Azure Virtual Desktop desde cualquier dispositivo conectado a Internet que pueda ejecutar un cliente de Azure Virtual Desktop. El cliente se conecta a una puerta de enlace que, a continuaci\xf3n, orquesta una conexi\xf3n desde una m\xe1quina virtual (VM) de vuelta a la puerta de enlace."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"3. Una compa\xf1\xeda de seguros tiene un equipo de trabajadores remotos que necesitan usar software basado en Windows para desarrollar aplicaciones de la empresa. Los miembros del equipo usan diversos sistemas operativos, como macOS, Linux y Windows. \xbfQu\xe9 servicio de programaci\xf3n de Azure le ayudar\xeda a resolver este escenario?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"R: Azure Virtual Desktop permite que los miembros del equipo ejecuten Windows en la nube, con acceso a las aplicaciones requeridas para las necesidades de la empresa.."))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,(0,o.kt)("h2",null,"Modulo 2  Planificaci\xf3n de una implementaci\xf3n de Azure Virtual Desktop ")," "),(0,o.kt)("br",null),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);