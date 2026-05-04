import{C as e,K as t,Q as n,S as r,T as i,V as a,X as o,Y as s,_ as c,_t as l,d as u,ht as d,lt as f,m as p,p as m,ut as h}from"../chunks/cYQtxUHy.js";import{n as g}from"../chunks/odPIQbtb.js";import"../chunks/CsaauQz1.js";import{t as _}from"../chunks/kmgcbWcT.js";import{t as v}from"../chunks/Cj2lRgzO.js";import{t as y}from"../chunks/ozqvp2YD.js";var b=`# 150M views

Selected work from 11 years of video editing.

## The body of work

Eleven years of editing across YouTube, Twitch, and social platforms. From early gaming edits to professional-grade content that collectively reached over 150 million views. The editing work predates and informs everything else — understanding video at the frame level is what led to building streaming infrastructure.

## What it taught me

Compression artifacts, codec behavior, bitrate tradeoffs, audience retention curves — all of this is intuition now, not theory. When I'm writing streaming server code, I know exactly what the viewer sees when packets drop.

## Status

Archived. The editing career evolved into systems work.
`,x=`# Backpack streamer rig

Custom hardware build for IRL streaming.

## The hardware

Orange Pi 5 Plus running belabox firmware, bonding multiple cellular connections for reliable uplink from anywhere. Small enough to fit in a backpack, powerful enough to encode and stream simultaneously.

## Why build it

Commercial IRL streaming rigs cost thousands and lock you into proprietary software. This build runs open firmware, costs a fraction, and gives full control over the encoding pipeline. Already deployed and streaming live.

## Status

Shipping. Currently in active use.
`,S=`# DatabaseMart streaming infra

Production IRL streaming infrastructure running on DatabaseMart VPS hosting.

## What it does

SRT ingest server handling live IRL streams from mobile backpacks over unstable cellular connections. Built for reliability — 16 months of continuous uptime serving paying clients.

## The setup

SLS-based ingest with custom failover logic, automated stream health monitoring, and nginx-based HLS distribution. Runs on minimal VPS resources and handles the kind of packet loss and jitter that comes with streaming over bonded LTE connections.

## Status

Shipping. This is the production system that Irlos is being built to replace.
`,C=`# Irlos

Open-source streaming server stack purpose-built for IRL streamers.

## The problem

Every IRL streamer today runs the same duct-taped stack: SLS for ingest, noalbs for failover, OBS for encoding, obs-websocket for remote control. Four separate processes, three config files, zero coordination. When something breaks mid-stream — and it always does — you're SSH-ing into a VPS while your audience watches a frozen frame.

## The solution

One binary. irlosd is a C++ daemon that handles SRT ingest, transcoding, failover, and relay in a single process. irlos-tui is a Rust terminal interface for real-time monitoring. The whole stack is GPL and designed to run on hardware you own.

## Stack

- **irlosd** — C++ daemon, libsrt, sdbus-cpp
- **irlos-tui** — Rust, ratatui, Unix socket RPC
- **OBS plugin** — replaces obs-websocket with ~200 lines and 7 operations

## Status

Actively building. Core SRT ingest and relay working. RPC protocol in draft.
`,w=`# SwankySMP

Customized Minecraft survival multiplayer server with original plugins.

## What it was

A community-run Minecraft SMP with custom Java plugins for unique gameplay mechanics. Ran for two seasons with a dedicated player base.

## The work

Server administration, plugin development in Java, community management, and content creation around the server. Built custom mechanics that made the server distinct from the thousands of other SMPs out there.

## Status

Archived. Two seasons completed.
`;function T(e,t){throw new g(e,t)}var E=l({load:()=>O}),D=Object.assign({"/src/content/work/150m-views.md":b,"/src/content/work/backpack-rig.md":x,"/src/content/work/databasemart.md":S,"/src/content/work/irlos.md":C,"/src/content/work/swankysmp.md":w}),O=({params:e})=>{let t=y.find(t=>t.slug===e.slug);t||T(404,`Project not found`);let n=D[`/src/content/work/${e.slug}.md`];return n||T(404,`Case study not found`),{project:t,html:v.parse(n,{async:!1})}},k=i(`<div class="page svelte-9hm5jc"><header class="page-header svelte-9hm5jc"><a href="/work" class="back-link svelte-9hm5jc">Work</a> <div class="title-row svelte-9hm5jc"><h1 class="page-title svelte-9hm5jc"> </h1> <span class="status-pill svelte-9hm5jc"> </span></div></header> <article class="prose svelte-9hm5jc"></article></div>`);function A(i,l){h(l,!0);let g={building:`var(--accent)`,shipping:`var(--fg)`,archived:`var(--fg-subtle)`};var v=k();p(`9hm5jc`,e=>{a(()=>{s.title=`${l.data.project.title??``} — Ethan Manners`})});var y=o(v),b=n(o(y),2),x=o(b),S=o(x,!0);d(x);var C=n(x,2),w=o(C,!0);d(C),d(b),d(y),m(y,e=>_?.(e));var T=n(y,2);c(T,()=>l.data.html,!0),d(T),m(T,e=>_?.(e)),d(v),t(()=>{r(S,l.data.project.title),u(C,`color: ${g[l.data.project.status]??``}; border-color: ${g[l.data.project.status]??``};`),r(w,l.data.project.status)}),e(i,v),f()}export{A as component,E as universal};