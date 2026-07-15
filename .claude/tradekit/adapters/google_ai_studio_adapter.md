# Adapter — Google AI Studio

How to run TradeKit in a prompt-only environment (no file writes).

- Prompt-only: paste the command card + the project context; the model returns the required
  output sections as text.
- Since there is no file write access, `/tk setup`, `/tk implement`, and `/tk handoff` output
  their artifacts as text for the user to save manually.
- Ideal for `/tk decide` and `/tk scan` (both read-only by design).
