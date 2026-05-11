# Projeto Social Benjamin Monteiro da Silva - V2

Protótipo estático do site institucional do Projeto Social Benjamin Monteiro da Silva, desenvolvido em HTML5, CSS3 e JavaScript puro.

A versão 2 reúne as melhorias solicitadas após revisão com a equipe do projeto: atualização de conteúdo, novas imagens reais, galeria interativa, pop-ups de doação, recursos de acessibilidade, links institucionais, páginas secundárias e ajustes para publicação no GitHub Pages.

## Visão Geral

O site apresenta o Projeto Social Benjamin Monteiro da Silva - Construindo os Pilares para a Eternidade, com foco em cuidado, educação, fortalecimento familiar, solidariedade e apoio a crianças, adolescentes e famílias em situação de vulnerabilidade social.

## Estrutura Do Projeto

```text
.
├── index.html
├── politica-de-privacidade.html
├── transparencia.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── hero-criancas.png
│       ├── galeria-consulta.png
│       ├── galeria-injecao.png
│       ├── galeria-jogos.png
│       ├── galeria-oracao.png
│       ├── galeria-refeicao.png
│       ├── pop-up-pix.png
│       ├── pop-up-alimentos.png
│       ├── logo-transparent.png
│       ├── logo-compassion-transparent.png
│       ├── logo-mesa-brasil-transparent.png
│       └── logo-pib-transparent.png
└── docs/
    └── screenshots/
```

## Funcionalidades Implementadas

- Layout responsivo para desktop e celular.
- Menu mobile com botão hambúrguer.
- Banner principal com imagem do projeto.
- Seção "Sobre o Projeto" com missão, público atendido e valores.
- Cards de ações com efeito visual ao passar o mouse.
- Indicadores/KPIs do projeto.
- Galeria automática e manual com imagens e vídeo do YouTube.
- Ampliação de imagens e vídeo em modal.
- Setas para navegar entre mídias ampliadas.
- Seção "Como você pode ajudar" com pop-ups informativos.
- Pop-up de doação via imagem `pop-up-pix.png`.
- Opções de compartilhamento por dispositivo, WhatsApp, Instagram, e-mail e copiar link.
- Formulário de contato com validação HTML5.
- Botão para voltar ao topo.
- Rodapé com dados institucionais, links rápidos, Instagram e parceiros.
- Páginas secundárias de Política de Privacidade e Transparência e Compromisso Social.
- Integração com VLibras.

## Acessibilidade

Foram aplicadas melhorias para tornar a navegação mais inclusiva:

- Uso de tags semânticas como `header`, `nav`, `main`, `section` e `footer`.
- Textos alternativos em imagens relevantes.
- Labels associados aos campos do formulário.
- Foco visível para navegação por teclado.
- Botões da galeria acessíveis por teclado.
- Controle de pausar/reproduzir a galeria.
- Setas visíveis de anterior/próximo na galeria.
- Pausa automática da galeria ao passar o mouse ou focar por teclado.
- Respeito à preferência `prefers-reduced-motion`.
- Correções de contraste apontadas por ferramentas de acessibilidade.
- VLibras para suporte de tradução em Libras.

Testes realizados durante o desenvolvimento:

- Navegação manual por teclado.
- Teste com NVDA.
- Lighthouse.
- Accessibility Insights for Web.
- Validação visual em desktop e mobile.

## Performance

O Lighthouse indicou que a performance ainda pode melhorar, principalmente pelo peso das imagens em PNG.

Principais pontos identificados:

- Imagens grandes na galeria e no banner.
- Pop-ups com imagens pesadas.
- Scripts externos, como VLibras e YouTube.
- Possibilidade de minificar CSS.
- Necessidade de informar `width` e `height` em algumas imagens.

Melhorias recomendadas para uma próxima versão:

- Converter imagens grandes para WebP.
- Criar miniaturas menores para a galeria.
- Manter imagens maiores apenas para visualização ampliada.
- Otimizar `hero-criancas.png`.
- Avaliar se o pop-up inicial deve abrir automaticamente.
- Minificar CSS e JavaScript antes da publicação final.

## Formulário De Contato

Atualmente o formulário usa validação no navegador e pode abrir o aplicativo de e-mail do usuário.

Para envio direto pelo site publicado no GitHub Pages, recomenda-se integrar um serviço externo, pois o GitHub Pages hospeda apenas arquivos estáticos e não executa backend.

Serviço recomendado:

- Formspree

Fluxo sugerido:

1. Criar uma conta no Formspree.
2. Criar um novo formulário.
3. Definir o e-mail de recebimento.
4. Copiar o endpoint gerado.
5. Substituir o envio atual do formulário pelo endpoint do Formspree.

## Publicação No GitHub Pages

Este projeto pode ser publicado diretamente pelo GitHub Pages.

Passos básicos:

1. Criar um repositório no GitHub.
2. Enviar todos os arquivos e pastas do projeto.
3. Acessar `Settings > Pages`.
4. Selecionar a branch principal.
5. Escolher a pasta raiz como origem.
6. Salvar e aguardar a geração do link.

Após publicado, os links de compartilhamento deixam de usar `127.0.0.1` e passam a usar o endereço real do GitHub Pages, por exemplo:

```text
https://seuusuario.github.io/nome-do-repositorio/
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- SVG inline para ícones
- VLibras
- YouTube Embed

## Páginas

- `index.html`: página principal.
- `politica-de-privacidade.html`: página de política de privacidade.
- `transparencia.html`: página de transparência e compromisso social.

## Status

Versão: V2

Status: protótipo funcional pronto para revisão final, publicação no GitHub Pages e futura integração do formulário com serviço externo.
