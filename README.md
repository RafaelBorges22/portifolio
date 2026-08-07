# Portfólio — Rafael Mascarenhas Borges

Portfólio acadêmico e profissional desenvolvido para a disciplina de
**Laboratório de Desenvolvimento Multiplataforma**.

HTML, CSS e JavaScript puros. **Sem build, sem npm, sem dependências de runtime** —
basta abrir o arquivo ou publicar a pasta.

> **Antes de entregar, leia [`PENDENCIAS.md`](PENDENCIAS.md).** Os dados que ainda não
> foram confirmados aparecem destacados em âmbar na página, de propósito.

---

## Estrutura

```
index.html              Página mestra (dados pessoais + cards dos projetos)
projeto.html            Tela de apresentação de um projeto — ?p=<slug>
PENDENCIAS.md           O que falta preencher
assets/
  css/style.css         Design system completo (tokens, componentes, responsivo)
  js/data.js            ← TODO O CONTEÚDO ESTÁ AQUI
  js/ui.js              Helpers: ícones, placeholders, lightbox, reveal, nav
  js/home.js            Renderiza a página mestra
  js/projeto.js         Renderiza a tela de projeto
  img/foto.jpg          Sua foto (4:5)
  img/projetos/         Capas e screenshots dos projetos
docs/superpowers/specs/ Documento de design
context/                Requisito da disciplina e contexto de dados
```

## Como editar o conteúdo

Você **nunca precisa mexer no HTML**. Todo o conteúdo vive em
[`assets/js/data.js`](assets/js/data.js).

### Adicionar um projeto

Copie um objeto do array `projetos` e ajuste. O `slug` define a URL:

```js
{
  slug: "meu-projeto",          // → projeto.html?p=meu-projeto
  nome: "Nome do Projeto",
  semestre: "3º semestre",
  categoria: "Acadêmico",
  periodo: "2024/2",
  resumo: "Uma ou duas frases — aparece no card da home.",
  capa: "assets/img/projetos/meu-projeto-capa.png",
  descricao: ["Parágrafo 1...", "Parágrafo 2..."],
  funcionalidades: ["Funcionalidade A", "Funcionalidade B"],
  tecnologias: ["Java", "Spring Boot", "MySQL"],
  participacao: ["O que eu fiz especificamente..."],
  repo: "https://github.com/usuario/repositorio",
  demo: "",
  screenshots: [
    { src: "assets/img/projetos/meu-projeto-1.png", legenda: "Tela inicial" }
  ]
}
```

O card na home e a tela do projeto são gerados automaticamente.

### Placeholders

Qualquer texto entre colchetes — `"[INFORMAR FACULDADE]"` — é renderizado com
destaque âmbar tracejado. É o sinal de "dado ainda não confirmado". Substitua pelo
dado real; não deixe nenhum na versão entregue.

### Imagens

- **Foto:** `assets/img/foto.jpg`, recorte vertical 4:5 (~800×1000px).
- **Capas dos projetos:** proporção 16:10, ~1200×750px.
- **Screenshots:** qualquer proporção; abrem em lightbox com navegação por teclado.

Se um arquivo de imagem não existir, a página mostra um placeholder discreto em vez
de quebrar o layout.

---

## Rodando localmente

A página usa `?p=` na URL e carrega scripts locais, então prefira um servidor
estático em vez de abrir o arquivo direto:

```bash
# Python (já instalado na maioria das máquinas)
python -m http.server 8000
# depois acesse http://localhost:8000

# ou, com Node instalado
npx serve .
```

Abrir `index.html` com duplo clique também funciona na maioria dos navegadores.

---

## Publicando no GitHub Pages (requisito 10)

```bash
git add .
git commit -m "Portfólio acadêmico"
git push origin main
```

No repositório do GitHub:

1. **Settings** → **Pages** (menu lateral)
2. Em **Source**, selecione **Deploy from a branch**
3. Em **Branch**, escolha `main` e a pasta `/ (root)` → **Save**
4. Aguarde 1–2 minutos. A URL aparece no topo da própria página de Settings:
   `https://<seu-usuario>.github.io/<nome-do-repositorio>/`

O arquivo `.nojekyll` já está no projeto para o GitHub Pages servir a pasta
`assets/` sem processamento do Jekyll.

> Se as imagens ou o CSS não carregarem no Pages, confira se os nomes dos arquivos
> batem exatamente — inclusive maiúsculas e minúsculas. O Pages é case-sensitive;
> o Windows não.

---

## Acessibilidade e compatibilidade

- HTML semântico com landmarks, `skip-link` e foco visível
- Contraste conforme WCAG AA, `alt` em todas as imagens
- Animações desativadas sob `prefers-reduced-motion`
- Lightbox operável por teclado (`Esc`, `←`, `→`)
- Responsivo de 360px a 1440px+
- Navegadores modernos (Chrome, Edge, Firefox, Safari — últimas 2 versões)
