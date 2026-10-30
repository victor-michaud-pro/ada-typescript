// Script de test pour l'exercice 2, lancé avec : npm run try:api
import { getQuotes } from "./dummyjson";

const data = await getQuotes();
console.log(data);
