# Como usar o sistema de imagens da EXATA

## Estrutura de arquivos necessária:

```
src/assets/images/
├── exata-main-logo.png    # Logo principal para a seção Hero
├── exata-head-logo.png    # Logo para o header
├── exata-footer-logo.png  # Logo para o footer (opcional)
└── exata-360.png          # Imagem do conceito 360° para a seção de estrutura
```

## Como funciona:

1. **Coloque as imagens** na pasta `src/assets/images/` com os nomes exatos
2. **O sistema detecta automaticamente** e usa as imagens quando disponíveis
3. **Fallback automático** para o componente de texto se a imagem não for encontrada
4. **Tamanhos responsivos** adaptados para cada contexto

## Tamanhos disponíveis:

- `small` - Para header (120x40px)
- `medium` - Para footer (200x80px) 
- `large` - Para seções (300x120px)
- `xlarge` - Para hero (400x160px)

## Exemplo de uso:

```jsx
// Logo principal
<ExataImage type="main" size="xlarge" />

// Logo do header
<ExataImage type="head" size="small" />

// Logo do footer
<ExataImage type="footer" size="medium" />

// Imagem 360° (carregada automaticamente na seção de estrutura)
// Apenas coloque o arquivo exata-360.png na pasta de imagens
```

O sistema irá automaticamente:
- Tentar carregar a imagem PNG
- Se falhar, mostrar o fallback de texto
- Aplicar os tamanhos e efeitos corretos
