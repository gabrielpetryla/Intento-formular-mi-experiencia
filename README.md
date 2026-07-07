# Intento formular mi experiencia de enseñar tan temprano

Projeto React + TypeScript (Vite) com animações via `framer-motion`.

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy no Vercel via GitHub

1. Suba a pasta inteira (menos `node_modules`) num repositório novo no GitHub.
2. Em vercel.com → **Add New → Project** → conecte o repositório.
3. Framework Preset: Vercel detecta **Vite** automaticamente.
   - Build Command: `npm run build` (já preenchido)
   - Output Directory: `dist` (já preenchido)
4. Clique em **Deploy**.

O `public/robots.txt` e a meta tag `noindex` no `index.html` impedem que buscadores indexem a página — mande o link só pra quem você quiser.

## Estrutura

```
src/
  data.ts               conteúdo tipado de cada fragmento
  App.tsx               layout geral
  components/
    Shard.tsx            um fragmento do mosaico (texto + vídeo + textura)
    TiltCard.tsx          inclinação 3D que segue o cursor
    FinalFragment.tsx     frase final com revelação palavra por palavra
  index.css              grid fragmentado, recortes, papel, fita, etc.
```

Cada novo `git push` na branch principal gera um novo deploy automático.
