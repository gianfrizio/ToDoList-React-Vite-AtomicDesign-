# ToDoList - React + Vite (Atomic Design)

Piccolo progetto ToDo realizzato con React e Vite, organizzato seguendo il pattern Atomic Design (atoms / molecules /organisms). È pensato come esercizio per imparare componentizzazione e struttura scalabile dei componenti.

Caratteristiche principali
- Interfaccia minimale per aggiungere, filtrare e marcare task completati
- Architettura a componenti secondo Atomic Design
- Configurazione Vite per sviluppo veloce e build leggera

Prerequisiti
- Node.js 16+ o superiore
- npm, yarn o pnpm (qui è presente `yarn.lock`)

Comandi utili

- Installare dipendenze:
```zsh
yarn
```

- Avviare il dev server (con hot reload):
```zsh
yarn dev
```

- Eseguire la build di produzione:
```zsh
yarn build
```

- Avviare il progetto in produzione (dopo `build`):
```zsh
npx serve dist
```

Struttura del progetto

Root
- `index.html` - entry HTML
- `package.json` - dipendenze e script
- `vite.config.js` - configurazione Vite

Cartella `src/`
- `main.jsx` - bootstrap React
- `App.jsx` - componente principale
- `index.css` - stili globali
- `components/`
  - `atoms/` - componenti atomici (Button, Input, Checkbox)
  - `molecules/` - gruppi di atom (es. TodoItem, FilterGroup)
  - `organisms/` - composizioni più grandi (TodoForm, TodoList)
  - `styles/` - CSS organizzati per livello (atoms, molecules, organisms, layout, variables)

Come contribuire
- Apri un branch per la tua feature/bugfix: `git checkout -b feat/nome-feature`
- Fai commit descrittivi: `git commit -m "feat: short description"`
- Apri una pull request verso `master` quando pronta

Note
- Il progetto contiene `node_modules` solo per sviluppo locale; la cartella è ignorata via `.gitignore`.
- Se vuoi usare SSH per il remote, aggiungi la tua chiave pubblica a GitHub e imposta il remote su `git@github.com:gianfrizio/ToDoList-React-Vite-AtomicDesign-.git`.

Contatti
- Autore: `gianfrizio`
