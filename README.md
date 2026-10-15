<div align="center">
  <img src="/images/logo.png" width="80" height="80" alt="Logo Prefeitura de Itanhaém">
  <h1>Mapa dos Pontos de Entrega Voluntária</h1>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/status-ativo-green" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white" alt="Leaflet">
</div>

Sistema web para a consulta de **Pontos de Entrega Voluntária (PEV)** em Itanhaém, permitindo localizar onde descartar materiais recicláveis de forma adequada e traçar rotas de acesso.

---

## Links do Projeto

- **Produção:** [https://logistica-reversa-itanhaem.netlify.app](https://logistica-reversa-itanhaem.netlify.app)
- **Informações Governamentais:** [Logística Reversa - Prefeitura de Itanhaém](https://www.itanhaem.sp.gov.br/secretaria-de-defesa-do-meio-ambiente-e-bem-estar-animal/logistica-reversa/)

---

## Telas do Sistema

<div align="center">
  <table>
    <tr>
      <td align="center">
        <strong>Mapa Interativo</strong><br>
        <img src="./images/inicio.png" width="300" alt="Mapa Interativo"><br>
        <em>Visualização geográfica dos pontos de coleta por cor</em>
      </td>
      <td align="center">
        <strong>Filtros e Detalhes</strong><br>
        <img src="./images/carteirinha_sambaqui.png" width="300" alt="Filtros e Detalhes"><br>
        <em>Busca por bairro, material e botão de rota</em>
      </td>
      <td align="center">
        <strong>Acessibilidade</strong><br>
        <img src="./images/verificacao.png" width="300" alt="Acessibilidade"><br>
        <em>Recursos para ajuste de fonte e alto contraste</em>
      </td>
    </tr>
  </table>
</div>

---

## 📃 Resumo do Projeto

Site de apoio à **logística reversa** em Itanhaém (SP), exibindo em um mapa interativo os pontos de entrega voluntária de materiais que não devem ser descartados no lixo comum, especificando o que cada local aceita e direcionando para rotas.

**Destaques:**

- Interface simplificada
- Mapa interativo com atualização visual rápida
- Ferramentas integradas de acessibilidade (ajuste de fonte e alto contraste)
- Compatível com celulares, tablets e computadores

---

## Funcionalidades Principais

- **Mapa Interativo:** Marcação dos pontos via pinos coloridos agrupados por tipo de resíduo.
- **Detalhamento do Ponto:** Exibição de endereço, itens aceitos e integração com o Google Maps via botão "Como chegar".
- **Filtros Personalizados:** Seleção combinada por tipo de material ou bairro, com opção para redefinir buscas.
- **Tabela Informativa:** Guia de categorias indicando quais materiais pertencem a cada grupo de descarte.
- **Recursos de Acessibilidade:**
  - Alteração do tamanho da fonte (A− / A+)
  - Modo de alto contraste para melhor legibilidade
  - Integração com o VLibras (em desktops)
  - Leitura adaptada via fonte Atkinson Hyperlegible
  - Leitura audível via síntese de voz (TTS)

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estruturação e marcação semântica das páginas
- **CSS3** - Estilização responsiva e suporte ao modo de alto contraste
- **JavaScript (Vanilla)** - Lógica da aplicação, manipulação do mapa e persistência de acessibilidade

### Bibliotecas e APIs
- **Leaflet** - Biblioteca de mapeamento e visualização de coordenadas
- **OpenStreetMap / Esri** - Provedores de mapas base e azulejos de mapa
- **Nominatim / ArcGIS / Photon** - Serviços de geocodificação para conversão de endereços
- **VLibras** - Tradutor automatizado de Libras do governo federal

---

*Projeto desenvolvido para a Secretaria de Defesa do Meio Ambiente e Bem-Estar Animal de Itanhaém - SP (2026)*
