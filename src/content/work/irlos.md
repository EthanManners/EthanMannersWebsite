# Irlos

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
