if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WA2nBW7hc9uSCvWcp5Ver/_buildManifest.js",revision:"24249500d894944565c666e1f41646da"},{url:"/_next/static/WA2nBW7hc9uSCvWcp5Ver/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/WA2nBW7hc9uSCvWcp5Ver/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1120-cc49169ea93a70a0.js",revision:"cc49169ea93a70a0"},{url:"/_next/static/chunks/1132-60d315462579ba62.js",revision:"60d315462579ba62"},{url:"/_next/static/chunks/1186-8e65c6eb37e21091.js",revision:"8e65c6eb37e21091"},{url:"/_next/static/chunks/1214-0002b19e67168d1b.js",revision:"0002b19e67168d1b"},{url:"/_next/static/chunks/1354-bd713cfec8763e60.js",revision:"bd713cfec8763e60"},{url:"/_next/static/chunks/1779-440d37a518366bb5.js",revision:"440d37a518366bb5"},{url:"/_next/static/chunks/2277-9e92576b8a873f84.js",revision:"9e92576b8a873f84"},{url:"/_next/static/chunks/2281-549cc5be11a5354a.js",revision:"549cc5be11a5354a"},{url:"/_next/static/chunks/2532-7218c242dc04b568.js",revision:"7218c242dc04b568"},{url:"/_next/static/chunks/2641-24a6815dd8a7e3be.js",revision:"24a6815dd8a7e3be"},{url:"/_next/static/chunks/2827-b205775736bf253e.js",revision:"b205775736bf253e"},{url:"/_next/static/chunks/3473-bfaa06cc3fadab8c.js",revision:"bfaa06cc3fadab8c"},{url:"/_next/static/chunks/3677-9b42910f25421e84.js",revision:"9b42910f25421e84"},{url:"/_next/static/chunks/3970-64b4c7cbe31a86e4.js",revision:"64b4c7cbe31a86e4"},{url:"/_next/static/chunks/4070-8dad0d42e37b91d8.js",revision:"8dad0d42e37b91d8"},{url:"/_next/static/chunks/4085-3abb3bde386898f8.js",revision:"3abb3bde386898f8"},{url:"/_next/static/chunks/4235-57cb828490f730c3.js",revision:"57cb828490f730c3"},{url:"/_next/static/chunks/4425-0522285140fdb737.js",revision:"0522285140fdb737"},{url:"/_next/static/chunks/4494-1949087fe127c5f6.js",revision:"1949087fe127c5f6"},{url:"/_next/static/chunks/4750-04411c3a939e9b5b.js",revision:"04411c3a939e9b5b"},{url:"/_next/static/chunks/5406-22976a909af97dd2.js",revision:"22976a909af97dd2"},{url:"/_next/static/chunks/5480-c7dcff84cb0cd2f3.js",revision:"c7dcff84cb0cd2f3"},{url:"/_next/static/chunks/6053-2a09fba46ad39851.js",revision:"2a09fba46ad39851"},{url:"/_next/static/chunks/6059-852570b45772be0b.js",revision:"852570b45772be0b"},{url:"/_next/static/chunks/6201-7aa12c4c19835fa2.js",revision:"7aa12c4c19835fa2"},{url:"/_next/static/chunks/6314-d1ef41d4ea69521e.js",revision:"d1ef41d4ea69521e"},{url:"/_next/static/chunks/6383-f54c4ffe6e626f05.js",revision:"f54c4ffe6e626f05"},{url:"/_next/static/chunks/6544-36743f2c1b54c840.js",revision:"36743f2c1b54c840"},{url:"/_next/static/chunks/6669-c62840aad083d71e.js",revision:"c62840aad083d71e"},{url:"/_next/static/chunks/6798-d7f0ee419fa596a9.js",revision:"d7f0ee419fa596a9"},{url:"/_next/static/chunks/6956-06afd68d027e73a9.js",revision:"06afd68d027e73a9"},{url:"/_next/static/chunks/703-a66c182765a2a16e.js",revision:"a66c182765a2a16e"},{url:"/_next/static/chunks/7031-4fb52bb84b963f7a.js",revision:"4fb52bb84b963f7a"},{url:"/_next/static/chunks/7277-d934885360b4c8a5.js",revision:"d934885360b4c8a5"},{url:"/_next/static/chunks/7282-d0892f9f1aa5cb05.js",revision:"d0892f9f1aa5cb05"},{url:"/_next/static/chunks/7954-aa8ce7c0eebbb043.js",revision:"aa8ce7c0eebbb043"},{url:"/_next/static/chunks/8067-feb64055040182dd.js",revision:"feb64055040182dd"},{url:"/_next/static/chunks/8121-5e1cc7ac3298c0fd.js",revision:"5e1cc7ac3298c0fd"},{url:"/_next/static/chunks/8381-7edf88d2ef43e5aa.js",revision:"7edf88d2ef43e5aa"},{url:"/_next/static/chunks/8399-bc2854af662c2d05.js",revision:"bc2854af662c2d05"},{url:"/_next/static/chunks/8408-96df461b47d51525.js",revision:"96df461b47d51525"},{url:"/_next/static/chunks/8515-e0846b86983e567f.js",revision:"e0846b86983e567f"},{url:"/_next/static/chunks/8647-2a8930e640e957a5.js",revision:"2a8930e640e957a5"},{url:"/_next/static/chunks/8911-75cd1eb829aeac76.js",revision:"75cd1eb829aeac76"},{url:"/_next/static/chunks/8924-be80080382b9152e.js",revision:"be80080382b9152e"},{url:"/_next/static/chunks/9187-ad5e5f409d5da50a.js",revision:"ad5e5f409d5da50a"},{url:"/_next/static/chunks/9376-b90a70ceffff819a.js",revision:"b90a70ceffff819a"},{url:"/_next/static/chunks/952-9abed07ac23d752d.js",revision:"9abed07ac23d752d"},{url:"/_next/static/chunks/9644-3c48c60ecafc7f6f.js",revision:"3c48c60ecafc7f6f"},{url:"/_next/static/chunks/9669-a2e62ffcaafc8542.js",revision:"a2e62ffcaafc8542"},{url:"/_next/static/chunks/9782-6f4f1db83a46b73e.js",revision:"6f4f1db83a46b73e"},{url:"/_next/static/chunks/9877-bbc49c409be77efe.js",revision:"bbc49c409be77efe"},{url:"/_next/static/chunks/9943-8e5652e7e607b93e.js",revision:"8e5652e7e607b93e"},{url:"/_next/static/chunks/framework-79bce4a3a540b080.js",revision:"79bce4a3a540b080"},{url:"/_next/static/chunks/main-08cf44f173147520.js",revision:"08cf44f173147520"},{url:"/_next/static/chunks/pages/Contra-f19b26256d3301e5.js",revision:"f19b26256d3301e5"},{url:"/_next/static/chunks/pages/DatosFacturacion-360545ce613e202b.js",revision:"360545ce613e202b"},{url:"/_next/static/chunks/pages/Direcciones-6d4dafea8a1c50a4.js",revision:"6d4dafea8a1c50a4"},{url:"/_next/static/chunks/pages/Home-4817b3774ad9eb89.js",revision:"4817b3774ad9eb89"},{url:"/_next/static/chunks/pages/Login-70020720df522461.js",revision:"70020720df522461"},{url:"/_next/static/chunks/pages/MisDatos-36e21dc2119888ab.js",revision:"36e21dc2119888ab"},{url:"/_next/static/chunks/pages/RegistroUsuario-5ec48d713c7210d6.js",revision:"5ec48d713c7210d6"},{url:"/_next/static/chunks/pages/_app-84e2691ed4f360bd.js",revision:"84e2691ed4f360bd"},{url:"/_next/static/chunks/pages/_error-d39607a4676a4aa5.js",revision:"d39607a4676a4aa5"},{url:"/_next/static/chunks/pages/articulos/%5Burl%5D-b2945edacba9cb5c.js",revision:"b2945edacba9cb5c"},{url:"/_next/static/chunks/pages/articulos/Breadcrumb-c73d00b697211cdc.js",revision:"c73d00b697211cdc"},{url:"/_next/static/chunks/pages/articulos/ListDescription-cef0f2ff9df856c3.js",revision:"cef0f2ff9df856c3"},{url:"/_next/static/chunks/pages/articulos/Modales/Cotizar-8eff6cb142eb64d7.js",revision:"8eff6cb142eb64d7"},{url:"/_next/static/chunks/pages/articulos/ProductTab-764f39ea30ee1af7.js",revision:"764f39ea30ee1af7"},{url:"/_next/static/chunks/pages/articulos/ReviewItem-023b207072e28e78.js",revision:"023b207072e28e78"},{url:"/_next/static/chunks/pages/busquedas-6a6b0348f30f3299.js",revision:"6a6b0348f30f3299"},{url:"/_next/static/chunks/pages/checkout/Alertas-d44c71709577da82.js",revision:"d44c71709577da82"},{url:"/_next/static/chunks/pages/checkout/Header-1ffd065710a61e54.js",revision:"1ffd065710a61e54"},{url:"/_next/static/chunks/pages/checkout/Process-f358b369e6445625.js",revision:"f358b369e6445625"},{url:"/_next/static/chunks/pages/checkout/Resumen-4c916846c830d09c.js",revision:"4c916846c830d09c"},{url:"/_next/static/chunks/pages/checkout/ResumenConfirmacion-ef360357c403e244.js",revision:"ef360357c403e244"},{url:"/_next/static/chunks/pages/checkout/confirmacion-de-pago-88f61692da963340.js",revision:"88f61692da963340"},{url:"/_next/static/chunks/pages/checkout/confirmacion-de-pago/Transferencia-5267af5c1fe7c569.js",revision:"5267af5c1fe7c569"},{url:"/_next/static/chunks/pages/checkout/direccion-de-envio-245bd5d86ee21232.js",revision:"245bd5d86ee21232"},{url:"/_next/static/chunks/pages/checkout/facturacion-244f1ebe6f58dfdd.js",revision:"244f1ebe6f58dfdd"},{url:"/_next/static/chunks/pages/checkout/facturacion/NotasCredito-70714c87c0a1de7d.js",revision:"70714c87c0a1de7d"},{url:"/_next/static/chunks/pages/checkout/forma-de-envio-e168d2e019d3dd9c.js",revision:"e168d2e019d3dd9c"},{url:"/_next/static/chunks/pages/checkout/forma-de-pago-39c89a5acca8ffed.js",revision:"39c89a5acca8ffed"},{url:"/_next/static/chunks/pages/checkout/forma-de-pago/Fields-c5141b74ba076fae.js",revision:"c5141b74ba076fae"},{url:"/_next/static/chunks/pages/checkout/forma-de-pago/Hostedfields-796e5465ec24c04b.js",revision:"796e5465ec24c04b"},{url:"/_next/static/chunks/pages/checkout/forma-de-pago/SDKPayPalBotones-80645f4f83313f3a.js",revision:"80645f4f83313f3a"},{url:"/_next/static/chunks/pages/checkout/modals/ConFactura-02a9d7b2214abcb0.js",revision:"02a9d7b2214abcb0"},{url:"/_next/static/chunks/pages/checkout/modals/Eliminar-3dd3f9a62c694d04.js",revision:"3dd3f9a62c694d04"},{url:"/_next/static/chunks/pages/checkout/modals/ModalExecutive-9d54591a9c9c08ef.js",revision:"9d54591a9c9c08ef"},{url:"/_next/static/chunks/pages/checkout/verifica-pedido-f352d8c9205ee012.js",revision:"f352d8c9205ee012"},{url:"/_next/static/chunks/pages/checkout/verifica-pedido/Cart-dc8213d0db8a69a7.js",revision:"dc8213d0db8a69a7"},{url:"/_next/static/chunks/pages/checkout/verifica-pedido/ItemFavorites-ef1fa72fb48f234b.js",revision:"ef1fa72fb48f234b"},{url:"/_next/static/chunks/pages/index-b3b152bc5b1d841e.js",revision:"b3b152bc5b1d841e"},{url:"/_next/static/chunks/pages/misFacturas-f2e3f46c812fc2d6.js",revision:"f2e3f46c812fc2d6"},{url:"/_next/static/chunks/pages/misFavoritos-d2b4cfcc38f2938f.js",revision:"d2b4cfcc38f2938f"},{url:"/_next/static/chunks/pages/misNotasCredito-a3718ac005c3a956.js",revision:"a3718ac005c3a956"},{url:"/_next/static/chunks/pages/misPedidos-e27f86096774d3c8.js",revision:"e27f86096774d3c8"},{url:"/_next/static/chunks/pages/pedido-2c5f96ff61245899.js",revision:"2c5f96ff61245899"},{url:"/_next/static/chunks/pages/services/Precios-ad6829ce4c40755d.js",revision:"ad6829ce4c40755d"},{url:"/_next/static/chunks/pages/services/Services-5aba3cbbb5bf5365.js",revision:"5aba3cbbb5bf5365"},{url:"/_next/static/chunks/pages/servicios/express-cdmx-95a616e666157af8.js",revision:"95a616e666157af8"},{url:"/_next/static/chunks/pages/soho/aviso-privacidad-daf1635cc9469e9f.js",revision:"daf1635cc9469e9f"},{url:"/_next/static/chunks/pages/soho/cajas-de-papel-cfa1b246b3ecc5ad.js",revision:"cfa1b246b3ecc5ad"},{url:"/_next/static/chunks/pages/soho/condiciones-de-envio-5ecfef66207d04af.js",revision:"5ecfef66207d04af"},{url:"/_next/static/chunks/pages/soho/devoluciones-garantias-1293acead3044267.js",revision:"1293acead3044267"},{url:"/_next/static/chunks/pages/soho/forma-de-pago-8044941f4548e3ed.js",revision:"8044941f4548e3ed"},{url:"/_next/static/chunks/pages/soho/politicas-59f28c145d2b8196.js",revision:"59f28c145d2b8196"},{url:"/_next/static/chunks/pages/soho/soho-precios-3a8bade35cb274e9.js",revision:"3a8bade35cb274e9"},{url:"/_next/static/chunks/pages/soho/terminos-y-condiciones-c45a3512739c70b5.js",revision:"c45a3512739c70b5"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-eaae93af0b2e8468.js",revision:"eaae93af0b2e8468"},{url:"/_next/static/css/3c795707218ae392.css",revision:"3c795707218ae392"},{url:"/_next/static/css/7905aab8af86abbc.css",revision:"7905aab8af86abbc"},{url:"/_next/static/css/848ca4222cf0dded.css",revision:"848ca4222cf0dded"},{url:"/_next/static/css/8d74f146845bedd8.css",revision:"8d74f146845bedd8"},{url:"/_next/static/css/e56f7f06d0e5a3e8.css",revision:"e56f7f06d0e5a3e8"},{url:"/_next/static/css/f2434fb2be924357.css",revision:"f2434fb2be924357"},{url:"/favicon.ico",revision:"a0197241245909d70973e52227edf5fb"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x128.png",revision:"275bb845da5df95d273c644b9b1ffb3b"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x192.png",revision:"c1dd5b87f052c0044e210c07879660e2"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x384.png",revision:"b6b32fcdef82c9911f7e8c25273ab4d6"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x48.png",revision:"4e49675bc1a2ece8b46a0fd10a8958b8"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x512.png",revision:"d4f2345ab493f5e25c018918373b08d8"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x72.png",revision:"48cf49684b16ad902d30d50a91da2d82"},{url:"/images/manifesto/maskable-icons/pedidos-icon-x96.png",revision:"65179936d0173faa09cd9691ff47cfc6"},{url:"/manifest.json",revision:"d8adf4f9d3ccfba2b22c166e3e1673a7"},{url:"/sp-day.png",revision:"8faab3e0bca93ba5a31226ddfdf29c70"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
