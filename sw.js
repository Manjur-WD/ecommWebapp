if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>n(e,c),f={module:{uri:c},exports:t,require:o};i[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ltpnDCoy.js",revision:null},{url:"assets/index-rWS2mMvG.css",revision:null},{url:"index.html",revision:"b95490d025d3218c55adc0361c9ef144"},{url:"registerSW.js",revision:"93598cd0f89afcf34a1479435cfdf036"},{url:"icons/icon-192x192.png",revision:"0006060319d162cbd8cca02cf8418f36"},{url:"manifest.webmanifest",revision:"2be5dcc3fbf4c02cc4cef7272ac35b39"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
