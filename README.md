# Intento formular mi experiencia de enseñar tan temprano

Arquivo único, sem build, sem npm. Só HTML/CSS/JS puro.

## Deploy mais simples possível (sem terminal, sem git)

1. Vá em vercel.com → **Add New → Project**.
2. Se aparecer opção de **importar do computador** / "Deploy without Git" nessa tela, arraste os dois arquivos (`index.html` e `robots.txt`) direto ali.
3. Se não aparecer essa opção, use o GitHub: entre no seu repositório existente, apague os arquivos antigos, e use o botão **Add file → Upload files** para arrastar `index.html` e `robots.txt` direto pela interface web do GitHub (sem terminal). Depois é só confirmar o commit pela própria página.
4. No Vercel, Framework Preset: **Other** (é HTML estático).
5. Deploy.

Sem `package.json`, sem etapa de build — não tem como dar erro de TypeScript ou de dependência quebrada.
