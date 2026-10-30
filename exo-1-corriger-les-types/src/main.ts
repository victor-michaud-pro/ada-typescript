import { addQuote, findQuoteById, findQuotesByAuthor, formatQuote, log, parseQuote } from "./quotes";

log("info", "Citation n°2 :");
log("info", formatQuote(findQuoteById("2")));

log("info", "Citations d'Albert Einstein :");
log("info", findQuotesByAuthor("Albert Einstein").length + " trouvée(s)");

log("info", "Ajout d'une citation :");
const added = addQuote("Simplicity is the soul of efficiency.", "Austin Freeman");
log("info", formatQuote(added));

log("info", "Lecture d'une citation reçue en JSON :");
const parsed = parseQuote('{"id": 10, "quote": "Hello world", "author": "Ada Lovelace"}');
log("info", formatQuote(parsed));

log("info", "Lecture d'un JSON cassé :");
const broken = parseQuote("{ pas du json }");
log("info", formatQuote(broken));
