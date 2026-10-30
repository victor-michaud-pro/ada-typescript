// Ce fichier "fonctionne" : avec la config actuelle, TypeScript ne signale aucune erreur.
// Pourtant, plusieurs bugs s'y cachent. Le typage permet de les faire apparaître.

const quotes: any = [
  {
    id: 1,
    quote: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
];

export function findQuoteById(id) {
  return quotes.find((q) => q.id == id);
}

export function findQuotesByAuthor(author) {
  return quotes.filter((q) => q.autor === author);
}

export function formatQuote(quote) {
  return `"${quote.quote}" — ${quote.author.toUpperCase()}`;
}

export function addQuote(text, author) {
  const newQuote = { id: quotes.length + 1, text: text, author: author };
  quotes.push(newQuote);
  return newQuote;
}

export function log(level, message) {
  const prefix = level === "error" ? "[ERREUR]" : level === "warning" ? "[ATTENTION]" : "[INFO]";
  console.log(`${prefix} ${message}`);
}

export function parseQuote(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    log("eror", "JSON invalide : " + error.mesage);
    return null;
  }
}
