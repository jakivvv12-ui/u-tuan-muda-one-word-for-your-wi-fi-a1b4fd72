# One Word for Your Wi-Fi

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?ref=0vka1qv8)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/jakivvv12-ui/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?ref=0vka1qv8)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/jakivvv12-ui/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?ref=0vka1qv8)

Entry for the [One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?ref=0vka1qv8) bounty on make.fun.

## The word

**Flaky** — five letters, and the truest description of home Wi-Fi: it works, then it doesn't, for no reason at all. A network name a real person would actually pick.

## How it works

`main.ts` (pure Node 22, no dependencies) validates the word against the hard gate — 1–20 characters, no whitespace — and writes it, exactly and with no trailing newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Output: `entry.txt` containing `Flaky` (5 bytes).
