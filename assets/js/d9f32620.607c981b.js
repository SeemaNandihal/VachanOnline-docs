"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||g[m]||a;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,s={permalink:"/VachanOnline-docs/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/VachanOnline-docs/blog/tags/facebook"},{label:"hello",permalink:"/VachanOnline-docs/blog/tags/hello"},{label:"docusaurus",permalink:"/VachanOnline-docs/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/VachanOnline-docs/blog/mdx-blog-post"}},u={authorsImageUrls:[void 0,void 0]},c=[],i={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.kt)("p",null,"Regular blog authors can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:n(4810).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"The blog supports tags as well!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}p.isMDXComponent=!0},4810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);