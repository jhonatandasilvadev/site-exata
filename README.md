# Site Exatasis - TUDO SORTE

Um site one-page moderno e responsivo desenvolvido em React com Vite, focado em glassmorphism e efeitos visuais metálicos verdes.

## 🚀 Características
tudo aqui
- **Design Moderno**: Estética glassmorphism com verde metálico escuro (#1a3d2f)
- **Totalmente Responsivo**: Mobile-first com breakpoints otimizados
- **Componentizado**: Arquitetura React modular e reutilizável
- **Acessível**: Contraste AA, navegação por teclado, aria-labels
- **Performance**: Animações CSS otimizadas, lazy loading, prefers-reduced-motion
- **One-Page**: Navegação suave entre seções

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── GlassCard.jsx   # Card com efeito de vidro
│   ├── Bubble.jsx      # Bolha com efeito metálico
│   ├── LogoCard.jsx    # Card para logos de clientes
│   ├── SectionTitle.jsx # Título de seção com linha luminosa
│   ├── Header.jsx      # Cabeçalho com navegação
│   └── Footer.jsx      # Rodapé com informações
├── sections/           # Seções da página
│   ├── HeroSection.jsx      # Seção inicial com serviços
│   ├── AreasSection.jsx     # Áreas de atuação
│   ├── DepartmentsSection.jsx # Áreas internas + clientes
│   └── AboutSection.jsx     # Sobre nós
├── styles/             # Estilos globais
│   ├── globals.css     # Estilos base e utilitários
│   └── tokens.css      # Design tokens (cores, espaçamentos)
├── App.jsx             # Componente principal
└── main.jsx           # Ponto de entrada
```

## 🎨 Seções

### 1. Hero Section
- Layout em duas colunas
- Logo centralizada (trevo de quatro folhas)
- Grid 4x2 de serviços com efeitos glassmorphism
- Animações de hover com brilho percorrendo a superfície

### 2. Áreas de Atuação
- Cards flutuantes conectados por linhas de luz
- Partículas animadas de fundo
- 9 áreas: Supermercados, Varejo, Atacados, Congressos, etc.

### 3. Áreas Internas + Clientes
- 6 bolhas fixas em círculo (T.I, Comercial, Financeiro, etc.)
- Efeito bubble metálico com reflexo animado
- Grid 4x10 de logos de clientes (40 slots)
- Responsivo: 4-5 colunas mobile, 6-8 tablet, 10 desktop

### 4. Sobre Nós
- Background com overlay
- Card central com Missão, Visão e Valores
- Botões de ação com efeitos hover

## 🛠️ Tecnologias

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **CSS Modules** - Estilos componentizados
- **CSS Custom Properties** - Design tokens
- **CSS Animations** - Efeitos visuais otimizados

## 📱 Responsividade

- **Mobile**: 480px e abaixo
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px e acima
- **Large Desktop**: 1280px e acima

## ♿ Acessibilidade

- Contraste AA mínimo
- Navegação por teclado completa
- Aria-labels em elementos interativos
- Focus visível em todos os elementos
- Suporte a prefers-reduced-motion
- Tamanhos de toque ≥ 44px

## 🚀 Como Executar

### Pré-requisitos
- **Node.js 16+** (versão recomendada: 20.16.0)
- **npm 8+** (versão recomendada: 10.8.1)
- Terminal PowerShell (Windows) ou Bash (Linux/Mac)

### Instalação e Execução

```bash
# 1. Navegue até o diretório do projeto
cd "C:\Users\EXATAPC\Desktop\Exata Jhonatan\site-exatasis"

# 2. Instale as dependências (apenas na primeira vez)
npm install

# 3. Execute o servidor de desenvolvimento
npm run dev

# 4. Abra o navegador em: http://localhost:3000
```

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento (porta 3000)
- `npm run build` - Build de produção (pasta dist/)
- `npm run preview` - Preview do build de produção
- `npm run lint` - Linting do código (se configurado)

### Configuração do Vite (vite.config.js)

```javascript
{
  server: {
    host: true,        // Permite acesso via rede local
    port: 3000,        // Porta do servidor
    open: true         // Abre navegador automaticamente
  }
}
```

## 🔧 Troubleshooting

### ❌ Problema: "npm error Missing script: dev"

**Causas:**
- Terminal não está no diretório correto do projeto
- Arquivo `package.json` não foi encontrado

**Solução:**
```bash
# 1. Confirme que está no diretório correto
Get-Location  # PowerShell
# ou
pwd           # Bash

# 2. O caminho deve terminar em: \site-exatasis

# 3. Verifique se package.json existe
Test-Path package.json  # PowerShell (deve retornar True)
# ou
ls package.json         # Bash

# 4. Se o caminho estiver errado, navegue para o correto:
cd "C:\Users\EXATAPC\Desktop\Exata Jhonatan\site-exatasis"

# 5. Execute novamente
npm run dev
```

### ❌ Problema: Porta 3000 já está em uso

**Solução:**
```bash
# Windows PowerShell - encerrar processo na porta 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# Ou altere a porta no vite.config.js:
# server: { port: 3001 }
```

### ❌ Problema: Dependências não instaladas ou desatualizadas

**Solução:**
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json  # Bash
# ou
Remove-Item -Recurse -Force node_modules, package-lock.json  # PowerShell

npm install
npm run dev
```

### ❌ Problema: Navegador não abre automaticamente

**Solução manual:**
```bash
# 1. Verifique se o servidor iniciou (deve aparecer no terminal):
# "Local: http://localhost:3000"

# 2. Abra manualmente no navegador:
Start-Process http://localhost:3000  # PowerShell
# ou
open http://localhost:3000           # Mac
# ou
xdg-open http://localhost:3000       # Linux
```

### ✅ Checklist de Verificação Rápida

1. ✅ **Node/NPM instalados?**
   ```bash
   node -v  # deve retornar v20.x ou superior
   npm -v   # deve retornar 10.x ou superior
   ```

2. ✅ **Diretório correto?**
   ```bash
   Get-Location  # deve terminar em \site-exatasis
   Test-Path package.json  # deve retornar True
   ```

3. ✅ **Dependências instaladas?**
   ```bash
   Test-Path node_modules  # deve retornar True
   ```

4. ✅ **Porta 3000 livre?**
   ```bash
   Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
   # Se retornar algo, a porta está ocupada
   ```

## 📂 Estrutura de Diretórios Completa

```
site-exatasis/
├── 📁 dist/                    # Build de produção (gerado por npm run build)
│   ├── assets/                 # JS e CSS otimizados
│   ├── index.html              # HTML final minificado
│   └── vite.svg                # Favicon
│
├── 📁 node_modules/            # Dependências (não commitadas)
│
├── 📁 public/                  # Arquivos estáticos servidos diretamente
│   ├── *.html                  # Páginas HTML estáticas
│   ├── *.png                   # Imagens públicas
│   ├── *.css                   # Estilos de páginas estáticas
│   └── vite.svg                # Favicon
│
├── 📁 src/                     # Código fonte React
│   ├── 📁 assets/              # Assets importados no código
│   │   └── images/             # Imagens do React
│   │       ├── exata-360.png
│   │       ├── exata-footer-logo.png
│   │       ├── exata-head.png
│   │       └── tudo-sorte-logo.png
│   │
│   ├── 📁 components/          # Componentes reutilizáveis
│   │   ├── Bubble.jsx          # Bolha metálica animada
│   │   ├── ExataImage.jsx      # Componente de imagem responsiva
│   │   ├── ExataLogo.jsx       # Logo principal
│   │   ├── Footer.jsx          # Rodapé com informações
│   │   ├── GlassCard.jsx       # Card com efeito glassmorphism
│   │   ├── Header.jsx          # Cabeçalho fixo com navegação
│   │   ├── LogoCard.jsx        # Card para logos de clientes
│   │   ├── ScrollToTop.jsx     # Botão voltar ao topo
│   │   ├── SectionTitle.jsx    # Título com linha luminosa
│   │   └── *.css               # Estilos correspondentes
│   │
│   ├── 📁 sections/            # Seções da página principal
│   │   ├── AboutSection.jsx    # Seção Sobre Nós
│   │   ├── AreasSection.jsx    # Áreas de Atuação
│   │   ├── ClientsSection.jsx  # Grid de clientes
│   │   ├── DepartmentsSection.jsx # Departamentos internos
│   │   ├── HeroSection.jsx     # Seção inicial/hero
│   │   └── *.css               # Estilos correspondentes
│   │
│   ├── 📁 styles/              # Estilos globais
│   │   ├── globals.css         # Reset, utilitários, base
│   │   └── tokens.css          # Design tokens (cores, fontes, etc.)
│   │
│   ├── App.jsx                 # Componente raiz React
│   └── main.jsx                # Entry point React (ReactDOM.render)
│
├── 📄 index.html               # Template HTML principal (Vite)
├── 📄 package.json             # Dependências e scripts NPM
├── 📄 package-lock.json        # Lock file de dependências
├── 📄 vite.config.js           # Configuração do Vite
└── 📄 README.md                # Este arquivo

```

## 🗂️ Parâmetros e Configurações

### package.json - Dependências

```json
{
  "dependencies": {
    "react": "^18.2.0",         // Biblioteca React
    "react-dom": "^18.2.0"      // React DOM
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",  // Plugin Vite para React
    "vite": "^5.0.8"                    // Build tool
  }
}
```

### vite.config.js - Configuração do Servidor

```javascript
{
  plugins: [react()],           // Habilita suporte a React (JSX, Fast Refresh)
  
  server: {
    host: true,                 // Permite acesso via IP da rede local
    port: 3000,                 // Porta do servidor de desenvolvimento
    open: true                  // Abre navegador automaticamente ao iniciar
  },
  
  assetsInclude: [              // Tipos de assets reconhecidos
    '**/*.png',
    '**/*.jpg', 
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg'
  ]
}
```

### index.html - Configuração HTML

- **charset**: UTF-8
- **viewport**: width=device-width, initial-scale=1.0
- **lang**: pt-BR
- **title**: TUDO SORTE - Exatasis
- **favicon**: /vite.svg
- **fonts**: Poppins (400, 500, 600, 700) do Google Fonts
- **root div**: #root (onde React monta a aplicação)
- **script**: ./src/main.jsx (entry point)

### Tokens CSS (src/styles/tokens.css)

```css
--color-primary: #1a3d2f;      /* Verde metálico escuro */
--color-accent: #00ff88;        /* Verde brilhante */
--color-text: #ffffff;          /* Branco */
--color-secondary: #b8c5c0;     /* Cinza claro */

--spacing-xs: 0.5rem;           /* 8px */
--spacing-sm: 1rem;             /* 16px */
--spacing-md: 1.5rem;           /* 24px */
--spacing-lg: 2rem;             /* 32px */
--spacing-xl: 3rem;             /* 48px */
--spacing-2xl: 4rem;            /* 64px */
--spacing-3xl: 6rem;            /* 96px */

--font-size-xs: 0.75rem;        /* 12px */
--font-size-sm: 0.875rem;       /* 14px */
--font-size-base: 1rem;         /* 16px */
--font-size-lg: 1.125rem;       /* 18px */
--font-size-xl: 1.25rem;        /* 20px */
--font-size-2xl: 1.5rem;        /* 24px */
--font-size-3xl: 1.875rem;      /* 30px */
--font-size-4xl: 2.25rem;       /* 36px */
--font-size-5xl: 3rem;          /* 48px */

--breakpoint-mobile: 480px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-large: 1280px;
```

## 🌐 URLs e Endpoints

- **Desenvolvimento**: http://localhost:3000
- **Rede local**: http://[SEU-IP]:3000 (ex: http://192.168.1.10:3000)
- **Produção**: Configurar após deploy

## 📝 Comandos Úteis do Terminal

```bash
# Verificar versões
node -v
npm -v

# Navegar para o projeto
cd "C:\Users\EXATAPC\Desktop\Exata Jhonatan\site-exatasis"

# Instalar dependências
npm install

# Iniciar servidor
npm run dev

# Build de produção
npm run build

# Limpar e reinstalar
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install

# Ver processos na porta 3000 (Windows)
Get-NetTCPConnection -LocalPort 3000

# Matar processo na porta 3000 (Windows)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# Abrir navegador manualmente
Start-Process http://localhost:3000
```

## 🎯 Funcionalidades

### Navegação
- Header fixo com scroll suave
- Detecção automática de seção ativa
- Logo clicável para voltar ao topo

### Animações
- Efeitos glassmorphism com backdrop-filter
- Animações de entrada escalonadas
- Hover effects com transformações 3D
- Partículas flutuantes
- Reflexos animados nas bolhas

### Performance
- Lazy loading de imagens
- Otimização de animações CSS
- Redução de animações em prefers-reduced-motion
- Assets otimizados

## 🎨 Design System

### Cores
- **Primária**: #1a3d2f (verde metálico escuro)
- **Accent**: #00ff88 (verde brilhante)
- **Texto**: #ffffff (branco)
- **Secundário**: #b8c5c0 (cinza claro)

### Tipografia
- **Fonte**: Poppins (Google Fonts)
- **Pesos**: 400, 500, 600, 700
- **Escalas**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl

### Espaçamentos
- **Sistema**: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem
- **Breakpoints**: 480px, 768px, 1024px, 1280px

## 📝 Próximos Passos

- [ ] Integração com CMS para logos de clientes
- [ ] Formulário de contato funcional
- [ ] Otimização de imagens (WebP)
- [ ] Testes automatizados
- [ ] PWA capabilities
- [ ] Analytics integration

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Exatasis - TUDO SORTE**
- Endereço: Rua São Paulo, 3132 Joinville - SC
- Telefone: 47 3043-1586
- Website: [exatasis.com](https://exatasis.com)

---

Desenvolvido com ❤️ pela equipe Exatasis
