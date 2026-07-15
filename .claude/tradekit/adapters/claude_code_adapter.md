# Adapter — Claude Code

How to run TradeKit inside Claude Code.

- Invoke commands by pasting the relevant `commands/tk_<name>.md` card, or reference it by name
  (e.g. "run /tk decide on this repo").
- Claude Code can read the repo, run git/scripts, and (for `/tk implement` only) edit files within
  the approved ticket scope.
- Respect each card's `write_access` and `risk_level`. Read-only cards must not edit files.
- Honor all Forbidden Actions and Stop Conditions.
