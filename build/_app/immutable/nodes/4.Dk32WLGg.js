import{C as e,H as t,K as n,O as r,P as i,Q as a,T as o,X as s,Y as c,_ as l,_t as u,et as d,f,ht as p,k as m,lt as h,m as g,nt as _,p as v,ut as y,v as b,x,y as S}from"../chunks/cYQtxUHy.js";import"../chunks/CsaauQz1.js";import{t as C}from"../chunks/kmgcbWcT.js";import{t as w}from"../chunks/Cj2lRgzO.js";var T=`## Week of May 3, 2025

- Drafting the irlosd ↔ IrlosStudio RPC protocol over Unix socket
- Reading ripgrep and Tokio source as Rust style calibration before writing irlos-tui
- Writing the OBS plugin that replaces obs-websocket (~200 lines, 7 ops)
- Lifting in the morning, DJing afro house at night

---

## Week of April 26, 2025

- Got SRT ingest working end-to-end in irlosd with retransmit handling
- Benchmarked libsrt vs custom UDP — libsrt wins, not close
- Rebuilt the backpack rig with better thermal management for summer streams
- Started outlining the Irlos product page copy
`,E=u({load:()=>O}),D=Object.assign({"/src/content/now.md":T}),O=()=>{let e=(D[`/src/content/now.md`]??``).split(/\n---\n/).map(e=>e.trim()).filter(Boolean);return{current:e[0]?w.parse(e[0],{async:!1}):``,archive:e.slice(1).map(e=>w.parse(e,{async:!1}))}},k=o(`<div class="prose archive-entry svelte-1hd9bsn"></div>`),A=o(`<div class="archive-entries svelte-1hd9bsn"></div>`),j=o(`<section class="archive svelte-1hd9bsn"><button class="archive-toggle svelte-1hd9bsn"><span class="archive-label svelte-1hd9bsn">Previous weeks</span> <span></span></button> <!></section>`),M=o(`<div class="page svelte-1hd9bsn"><header class="page-header svelte-1hd9bsn"><h1 class="page-title svelte-1hd9bsn">Now</h1> <p class="page-sub svelte-1hd9bsn">What I'm working on right now. Updated weekly.</p></header> <section class="current prose svelte-1hd9bsn"></section> <!> <footer class="now-footer svelte-1hd9bsn"><p class="now-footer-text svelte-1hd9bsn">Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" class="now-link svelte-1hd9bsn">nownownow.com</a>. Edit this page at <code class="svelte-1hd9bsn">src/content/now.md</code>.</p></footer></div>`);function N(r,o){y(o,!0);let u=_(!1);var w=M();g(`1hd9bsn`,e=>{t(()=>{c.title=`Now — Ethan Manners`})});var T=s(w);v(T,e=>C?.(e));var E=a(T,2);l(E,()=>o.data.current,!0),p(E),v(E,e=>C?.(e));var D=a(E,2),O=t=>{var r=j(),c=s(r),h=a(s(c),2);let g;p(c);var _=a(c,2),y=t=>{var n=A();b(n,21,()=>o.data.archive,S,(t,n)=>{var r=k();l(r,()=>i(n),!0),p(r),e(t,r)}),p(n),e(t,n)};x(_,e=>{i(u)&&e(y)}),p(r),v(r,e=>C?.(e)),n(()=>g=f(h,1,`archive-chevron svelte-1hd9bsn`,null,g,{open:i(u)})),m(`click`,c,()=>d(u,!i(u))),e(t,r)};x(D,e=>{o.data.archive.length>0&&e(O)}),v(a(D,2),e=>C?.(e)),p(w),e(r,w),h()}r([`click`]);export{N as component,E as universal};