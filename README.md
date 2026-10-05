# Portfólio — Felipe Frade

Portfólio de desenvolvedor feito com HTML, CSS e JavaScript puros, sem frameworks nem etapa de build. Está disponível em português e inglês.

O tema é **construção e arquitetura**: construir sistemas e soluções como quem constrói um prédio, da fundação à fachada.

## A ideia

O projeto serve a dois propósitos ao mesmo tempo:

1. **Vitrine de ideias engenhosas.** Cada efeito da página é uma pequena ideia de interface que eu quis explorar.
2. **Currículo.** O conteúdo (perfil, habilidades, experiência e contato) vem do meu currículo, apresentado através desses efeitos.

Ou seja, a página é um portfólio e também uma demonstração do que gosto de construir.

## Como surgiu

Tudo começou com ideias minhas. Antes de existir a página, explorei cada uma isoladamente, em scripts independentes, e fui refinando em várias versões:

- [scripts/earth-quake/](./scripts/earth-quake): o efeito de terremoto, que evoluiu em três versões.
  1. Tremer um elemento isolado, com diferentes estilos de movimento.
  2. Tremer um container inteiro, com duração, intensidade e tipo configuráveis.
  3. Disparar o terremoto a partir de um menu lateral.
- [scripts/construction-beam/](./scripts/construction-beam): a viga de construção vermelha, suspensa por correntes de ferro, feita só com CSS.

Com as ideias validadas, usei **IA** para dar vida ao conjunto: unir os scripts numa página única, criar a identidade visual e ajustar os detalhes em conversa, mudando posição, tamanho e proporção da viga e das correntes. As ideias e as decisões são minhas; a IA ajudou a transformar tudo em um produto coeso.

## O que a página tem

- **Menu lateral em forma de prédio.** Ao abrir, o prédio é empurrado para o lado e causa um terremoto que sacode o conteúdo, o fundo e a viga. Cada andar é um link.
- **Viga suspensa.** Uma viga com correntes sobe lentamente do fundo da página até o topo e desce de novo.
- **Cursor atrás da viga.** O cursor é personalizado e passa por trás da viga e das correntes, como se desaparecesse atrás delas.
- **Fundo de fim de tarde.** Um céu de pôr do sol desenhado em canvas, com prédios em camadas, guindastes, esqueletos de obra e janelas acesas.
- **Português e inglês.** Um botão alterna o idioma. A escolha fica salva no navegador e, na primeira visita, segue o idioma dele.
- **Acessibilidade.** Quem usa "reduzir movimento" no sistema não vê o terremoto e vê a viga mais lenta. A tecla `Esc` fecha o menu.

## Estrutura

```
index.html        estrutura e conteúdo
css/style.css     estilo, viga, correntes e menu-prédio
js/main.js        terremoto, menu, cursor e fundo em canvas
js/i18n.js        textos em português e inglês
scripts/          experimentos originais que deram origem aos efeitos
```

## Como rodar

Não há dependências. Abra o `index.html` no navegador.

## Editar o conteúdo

Os textos ficam em [js/i18n.js](./js/i18n.js), nos dois idiomas. Datas, nomes de empresas e listas de tecnologias ficam em [index.html](./index.html).

---

# Portfolio — Felipe Frade

A developer portfolio built with plain HTML, CSS and JavaScript, with no frameworks or build step. It is available in Portuguese and English.

The theme is **construction and architecture**: building systems and solutions the way you build a building, from foundation to façade.

## The idea

The project has two goals at once:

1. **A showcase of clever ideas.** Each effect on the page is a small interface idea I wanted to explore.
2. **A résumé.** The content (profile, skills, experience and contact) comes from my résumé, presented through those effects.

So the page is a portfolio and also a demonstration of what I enjoy building.

## How it started

It all began with my own ideas. Before the page existed, I explored each one on its own, in standalone scripts, refining them over several versions:

- [scripts/earth-quake/](./scripts/earth-quake): the earthquake effect, which evolved over three versions.
  1. Shaking a single element, with different movement styles.
  2. Shaking a whole container, with configurable duration, intensity and type.
  3. Triggering the earthquake from a side menu.
- [scripts/construction-beam/](./scripts/construction-beam): the red construction beam hanging from iron chains, done in CSS only.

Once the ideas were proven, I used **AI** to bring it all to life: merging the scripts into a single page, creating the visual identity and fine-tuning details in conversation, such as the position, size and proportions of the beam and chains. The ideas and decisions are mine; the AI helped turn everything into a cohesive product.

## What the page has

- **Side menu shaped like a building.** When opened, the building is pushed in from the side and causes an earthquake that shakes the content, the background and the beam. Each floor is a link.
- **Hanging beam.** A beam with chains slowly rises from the bottom of the page to the top and comes back down.
- **Cursor behind the beam.** The custom cursor passes behind the beam and chains, as if disappearing behind them.
- **Late-afternoon background.** A sunset sky drawn on a canvas, with layered buildings, cranes, building frames under construction and lit windows.
- **Portuguese and English.** A button switches the language. The choice is saved in the browser and, on the first visit, follows the browser language.
- **Accessibility.** Users who prefer reduced motion see no earthquake and a slower beam. The `Esc` key closes the menu.

## Structure

```
index.html        structure and content
css/style.css     styling, beam, chains and building menu
js/main.js        earthquake, menu, cursor and canvas background
js/i18n.js        Portuguese and English texts
scripts/          original experiments that gave rise to the effects
```

## Running

There are no dependencies. Open `index.html` in a browser.

## Editing the content

The texts live in [js/i18n.js](./js/i18n.js), in both languages. Dates, company names and technology lists are in [index.html](./index.html).
