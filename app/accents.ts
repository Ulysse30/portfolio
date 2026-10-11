// Contra's style guide treats {iris, orchid, wine, coral, lime} as a fixed
// rotating deck for card fills (never plain accent text/borders, never Lilac —
// that one's reserved for decorative washes only). The "Do" rules say to
// rotate the deck across card slots but never place two vivid cards next to
// each other without a neutral spacer in between.
//
// Projects.tsx renders project cards in a 3-column grid, so adjacency here
// is linear: card 1 touches card 2, card 2 touches card 3, but card 1 and
// card 3 don't touch — no two consecutive entries repeat the same color.
export const cardAccents: Array<"iris" | "orchid" | "wine" | "coral" | "lime"> = [
  "iris",
  "coral",
  "wine",
];
