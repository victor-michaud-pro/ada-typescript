// Exercice 2 : client typé pour l'API https://dummyjson.com/docs/quotes

const BASE_URL = "https://dummyjson.com";

// TODO : déclarer le type Quote

// TODO : déclarer le type de la réponse de GET /quotes (liste + pagination)

export async function getQuotes() {
  const res = await fetch(`${BASE_URL}/quotes`);
  return res.json();
}

// TODO : getQuote(id) qui réutilise le type Quote
