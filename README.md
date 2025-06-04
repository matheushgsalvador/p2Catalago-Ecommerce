# 📚 Catálogo de E-Commerce com Vue.js 3

## 🌟 Visão Geral

Esta aplicação é um catálogo de produtos interativo que consome a API DummyJSON para exibir produtos de e-commerce. Desenvolvida com Vue.js 3, Vite e TailwindCSS, oferece uma experiência de usuário fluida e responsiva.

## 🛠️ Funcionalidades Principais

### �️ **Listagem de Produtos**
- Exibe todos os produtos em um grid responsivo
- Mostra imagem, nome, preço e disponibilidade em estoque
- Layout adaptável para desktop e mobile

### 🔢 **Paginação**
- Navegação entre páginas de produtos
- Carregamento suave dos resultados

### 🔍 **Sistema de Busca**
- Busca em tempo real conforme digitação
- Filtra produtos por nome ou descrição

### 🏷️ **Filtro por Categorias**
- Menu lateral/topo com todas as categorias disponíveis
- Visualização de produtos por categoria selecionada

### 📄 **Detalhes do Produto**
- Página dedicada com informações completas do produto
- Galeria de imagens e descrição detalhada

### 🛒 **Carrinho de Compras (Opcional)**
- Adição/remoção de produtos
- Ajuste de quantidades
- Cálculo automático do total
- Persistência durante a navegação

## 🏗️ Estrutura Técnica

```markdown
├───Componentes
│   ├───Produtos (cards, grid, paginação)
│   ├───Carrinho (ícone, itens, resumo)
│   └───Layout (cabeçalho, menu, rodapé)
│
├───Views/Páginas
│   ├── Listagem principal
│   ├── Detalhes do produto
│   ├── Resultados por categoria
│   └── Página do carrinho
│
├───Gerenciamento de Estado
│   ├── Produtos (lista, filtros)
│   └── Carrinho (itens, total)
│
└───Integração com API
    ├── Busca de produtos
    ├── Filtros e categorias
    └── Detalhes individuais
```

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework principal
- **Vite** - Build tool e servidor de desenvolvimento
- **TailwindCSS** - Estilização responsiva
- **Axios** - Cliente HTTP para chamadas à API
- **Vue Router** - Navegação entre páginas
- **Pinia** - Gerenciamento de estado

## 🔌 API Utilizada

A aplicação consome dados da [DummyJSON](https://dummyjson.com/docs/products), uma API REST simulada que fornece dados de produtos para e-commerce.
