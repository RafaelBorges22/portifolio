# Pendências — o que falta preencher antes de publicar

Atualizado com base em `context/Pendencias Restantes.md`.

Tudo que aparece na página com **destaque âmbar tracejado** é dado ainda não
confirmado. Todos os campos estão em um único arquivo: **`assets/js/data.js`**.

---

## ✅ Já preenchido e confirmado

| Campo | Valor |
|---|---|
| Nome | Rafael Mascarenhas Borges |
| E-mail | rafaelmascarenhasborges@gmail.com |
| Local | São Paulo, SP |
| LinkedIn | linkedin.com/in/rafael-mascarenhas-borges |
| Instituição | Fatec Itaquera |
| Curso | Desenvolvimento de Software Multiplataforma |
| Início | 2024 |
| Previsão de conclusão | 2026 |
| Semestre atual | 6º semestre |
| Empresa | STIGMA SYSTEM |
| Cargo | Desenvolvedor Full Stack |
| Início na empresa | Outubro de 2025 (atual) |
| Local do trabalho | São Paulo, SP |

---

## 🔴 Bloqueia a entrega

### 1. Foto do aluno — requisito 2

- [ ] Adicionar `assets/img/foto.jpg` — recorte vertical **4:5**, ~800×1000px.

Sem o arquivo, a página mostra um avatar com as iniciais "RB". Funciona, mas o
requisito pede foto do aluno explicitamente.

### 2. Confirmar o GitHub — requisito 4

- [ ] Confirmar que `https://github.com/RafaelBorges22` é o seu perfil.

Esse endereço foi lido da configuração local do Git, não foi confirmado por você.
Se estiver errado, corrija em **dois lugares** no `data.js`: `perfil.github` e o
array `links` (no final do arquivo).

### 3. Projetos 3, 4 e 5 — requisito 9

Os três blocos estão vazios de propósito: nenhum projeto foi identificado ainda.
Não foram inventados nomes nem tecnologias.

Para cada um (slugs atuais: `projeto-03`, `projeto-04`, `projeto-05`):

- [ ] Identificar qual projeto real entra. Prioridade: projetos acadêmicos da
      Fatec → interdisciplinares → profissionais apresentáveis → pessoais
- [ ] `nome` e `slug` (só minúsculas e hífens — é o que vai na URL)
- [ ] `semestre` e `periodo`
- [ ] `resumo` — 1 a 2 frases (aparece no card da home)
- [ ] `descricao` — problema, objetivo, funcionamento e contexto
- [ ] `funcionalidades`
- [ ] `tecnologias` — **só o que foi realmente usado naquele projeto**
- [ ] `participacao` — **o item mais avaliado**: o que VOCÊ fez, não o que o
      projeto tem
- [ ] `repo`, `capa` e `screenshots`

### 4. Projeto 1 — Sistema de Gerenciamento de Projetos

Conteúdo já escrito. Falta:

- [ ] `semestre` e `periodo`
- [ ] Confirmar `categoria: "Profissional"`
- [ ] `repo` — link do repositório. **Se for privado, use `repo: ""`** (o botão
      simplesmente não aparece). Não deixe o placeholder.
- [ ] Screenshots em `assets/img/projetos/`:
      `gerenciamento-capa.png`, `gerenciamento-login.png`,
      `gerenciamento-projetos.png`, `gerenciamento-alocacoes.png`,
      `gerenciamento-relatorios.png`

### 5. Projeto 2 — API REST em FastAPI

Conteúdo já escrito. Falta:

- [ ] `semestre` e `periodo`
- [ ] `categoria` — acadêmico ou profissional
- [ ] `repo` (ou `""` se privado)
- [ ] Screenshots: `api-fastapi-capa.png`, `api-swagger.png`, `api-postman.png`

### 6. Publicação — requisito 10

- [ ] Publicar no GitHub Pages seguindo o passo a passo do `README.md`
- [ ] Conferir a URL final e testar em um celular

---

## 🟡 Decisões que você já tomou — vale reconsiderar

Estes dois itens **não estão quebrados**: as seções simplesmente não aparecem no
site, conforme você pediu. O alerta é sobre a nota, não sobre o código.

### Idiomas — requisito 8 da disciplina

`idiomas: []` — seção removida do site, como você pediu (fala apenas português).

**Risco:** o requisito 8 pede literalmente *"Línguas que fala e nível em cada
língua"*. Uma seção ausente pode ser lida como item não entregue. Para exibir a
seção só com o português, é uma linha:

```js
idiomas: [{ idioma: "Português", nivel: "Nativo", pct: 100, nota: "" }],
```

### Cursos de extensão — requisito 7 da disciplina

`cursos: []` — seção removida do site, porque nenhum curso foi informado.

**Risco:** o requisito 7 pede os cursos de extensão. Se você tiver **qualquer**
curso ou certificado (Alura, Udemy, Fatec, Senai, bootcamp, treinamento da
empresa), vale muito adicionar. O template está comentado no `data.js`, logo
acima de `cursos: []`.

### Experiência anterior — requisito 6

Só a STIGMA SYSTEM está cadastrada. O requisito pede *"o trabalho atual e
anteriores"*. Se você tiver um emprego anterior que queira mostrar, há um bloco
comentado no `data.js` logo depois da experiência atual — basta descomentar e
preencher.

---

## Checagem final antes de entregar

1. Abrir `index.html` e procurar por **qualquer marca âmbar tracejada** — se
   ainda houver alguma, é dado faltando.
2. Abrir cada um dos 5 projetos pelos cards e repetir a checagem.
3. Testar todos os links (GitHub, LinkedIn, e-mail, repositórios).
4. Reduzir a janela até a largura de celular e verificar o layout.
5. Publicar e testar a URL final no celular.
