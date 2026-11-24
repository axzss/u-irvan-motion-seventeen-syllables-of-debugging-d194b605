// Seventeen Syllables of Debugging — a haiku in 5-7-5.
// Prints exactly three lines to stdout. Node 22, standard library only, no network.
// Syllable count per line: 5-7-5.
//   "Cursor blinks at three"        — Cur-sor (2) blinks (1) at (1) three (1) = 5
//   "the log scrolls red past midnight" — the (1) log (1) scrolls (1) red (1) past (1) mid-night (2) = 7
//   "sleep was the error"           — sleep (1) was (1) the (1) er-ror (2) = 5
const lines = [
  "Cursor blinks at three",
  "the log scrolls red past midnight",
  "sleep was the error",
];

for (const line of lines) {
  console.log(line);
}
