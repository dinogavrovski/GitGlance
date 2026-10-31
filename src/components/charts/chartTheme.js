// The colors GitHub itself uses for each language (from github/linguist)
const LANGUAGE_COLORS = {
  Assembly: "#6E4C13",
  Astro: "#ff5a03",
  C: "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  Clojure: "#db5855",
  CoffeeScript: "#244776",
  CSS: "#663399",
  Dart: "#00B4AB",
  Dockerfile: "#384d54",
  Elixir: "#6e4a7e",
  Elm: "#60B5CC",
  "Emacs Lisp": "#c065db",
  Go: "#00ADD8",
  Haskell: "#5e5086",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  Kotlin: "#A97BFF",
  Lua: "#000080",
  Makefile: "#427819",
  MDX: "#fcb32c",
  Nix: "#7e7eff",
  "Objective-C": "#438eff",
  OCaml: "#ef7a08",
  OpenSCAD: "#e5cd45",
  Perl: "#0298c3",
  PHP: "#4F5D95",
  Python: "#3572A5",
  R: "#198CE7",
  Ruby: "#701516",
  Rust: "#dea584",
  Scala: "#c22d40",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Svelte: "#ff3e00",
  Swift: "#F05138",
  TeX: "#3D6117",
  TypeScript: "#3178c6",
  "Vim Script": "#199f4b",
  Vue: "#41b883",
  Zig: "#ec915c",
};

// Used for languages missing from the list above
const FALLBACK_COLORS = [
  "#0969da",
  "#1f883d",
  "#9a6700",
  "#cf222e",
  "#8250df",
  "#bf3989",
  "#1b7c83",
  "#bc4c00",
];

export function getLanguageColor(language, index = 0) {
  return (
    LANGUAGE_COLORS[language] ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length]
  );
}

// GitHub's green, as used in the contribution graph
export const BAR_COLOR = "#2da44e";

// Inline styles accept CSS variables, so the tooltip follows the theme
export const tooltipStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 6,
  color: "var(--text-h)",
  fontSize: 13,
};
