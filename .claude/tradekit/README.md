# TradeKit

TradeKit is a reusable command-based skill kit for structured project execution.

It uses short `/tk` commands to move from unclear project state to scoped, verified,
handoff-ready action.

**Clean-room, user-owned. Not official ClaudeKit software.** Despite the name, TradeKit v0.1.0 is
a *project-execution* workflow kit — it builds no trading bot and holds no secrets or execution
logic (see Safety Defaults).

## Core Loop

inspect → decide → slice → implement → verify → handoff

## Flagship Command

/tk decide

## First Version

tradekit-v0.1.0-flagship-decide-core-loop

## Commands

- /tk setup
- /tk scan
- /tk decide
- /tk slice
- /tk implement
- /tk verify
- /tk handoff

## Safety Defaults

- Read-only unless explicitly authorized
- Dry-run before destructive actions
- One implementation ticket at a time
- Verify before commit
- Handoff before agent switch
- No live trading actions
- No secrets or credentials
