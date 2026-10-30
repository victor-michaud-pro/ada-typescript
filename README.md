# Séquence TypeScript — exercices

Ce repo contient les quatre cas pratiques de la séquence TypeScript. Le fil rouge est l'API de citations de [DummyJSON](https://dummyjson.com/docs/quotes).

```text
ada-typescript/
├── exo-1-corriger-les-types/   # Exercice 1 : projet Node + TypeScript
└── app/                        # Exercices 2, 3 et 4 : application React + TypeScript (Vite)
    └── src/
        ├── api/                # Exercice 2 : client typé
        ├── components/         # Exercice 3 : composants typés
        └── hooks/              # Exercices 3 et 4 : hooks typés
```

## Prérequis

- Node.js 20 ou version ultérieure (`node -v`)
- VS Code
- Un compte GitHub

## Mise en place

1. **Forker** ce repo depuis GitHub (bouton "Fork").
2. Cloner le fork :

```bash
git clone https://github.com/<pseudo>/ada-typescript.git
cd ada-typescript
```

3. Créer la branche de travail :

```bash
git switch -c <prenom>/typescript
```

4. Installer les dépendances des deux projets :

```bash
cd exo-1-corriger-les-types && npm install && cd ..
cd app && npm install && cd ..
```

## Commandes

| Dossier | Commande | Rôle |
|---|---|---|
| `exo-1-corriger-les-types` | `npm start` | Exécute `src/main.ts` |
| `exo-1-corriger-les-types` | `npm run typecheck` | Vérifie les types sans exécuter le code |
| `app` | `npm run dev` | Lance l'application sur http://localhost:5173 |
| `app` | `npm run typecheck` | Vérifie les types de l'application |
| `app` | `npm run try:api` | Exécute `src/api/try-api.ts` dans Node (exercice 2) |

## Rendu : une Pull Request par apprenante

1. À la fin de chaque exercice, créer un commit et le pousser :

```bash
git add .
git commit -m "exo 1: corriger les types"
git push -u origin <prenom>/typescript
```

2. Après le premier push, ouvrir une Pull Request en mode **draft** depuis la branche de travail vers le repo d'origine, avec le titre `[Prénom] TypeScript`.
3. Pour les exercices suivants, un commit suivi d'un push suffit : la Pull Request est mise à jour automatiquement.
4. Cocher les cases de la description de la Pull Request au fur et à mesure.
5. Une fois les exercices terminés, passer la Pull Request en "Ready for review".

Avant chaque push, vérifier que `npm run typecheck` ne signale aucune erreur dans le dossier concerné.
