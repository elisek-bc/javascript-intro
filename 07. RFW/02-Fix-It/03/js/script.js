const movies = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

document.write(`<ol>`);
for (i=14; i>=0; i--) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);
