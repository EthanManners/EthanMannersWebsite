# DatabaseMart streaming infra

Production IRL streaming infrastructure running on DatabaseMart VPS hosting.

## What it does

SRT ingest server handling live IRL streams from mobile backpacks over unstable cellular connections. Built for reliability — 16 months of continuous uptime serving paying clients.

## The setup

SLS-based ingest with custom failover logic, automated stream health monitoring, and nginx-based HLS distribution. Runs on minimal VPS resources and handles the kind of packet loss and jitter that comes with streaming over bonded LTE connections.

## Status

Shipping. This is the production system that Irlos is being built to replace.
