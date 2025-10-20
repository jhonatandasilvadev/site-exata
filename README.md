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
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd site-exatasis

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Linting do código

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
