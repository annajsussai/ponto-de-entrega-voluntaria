const ICONS = {"bottle": "<path d=\"M10 2h4\"/><path d=\"M10 2v4l-2 3v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-3V2\"/><path d=\"M8 13h8\"/>", "carbattery": "<rect x=\"2\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M22 11v3\"/><path d=\"M11 10l-2 3h4l-2 3\"/>", "tire": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v6M12 16v6M2 12h6M16 12h6\"/>", "droplet": "<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"/>", "pill": "<path d=\"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z\"/><path d=\"m8.5 8.5 7 7\"/>", "coffee": "<path d=\"M10 2v2\"/><path d=\"M14 2v2\"/><path d=\"M6 2v2\"/><path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"/>", "paint": "<rect width=\"16\" height=\"6\" x=\"2\" y=\"2\" rx=\"2\"/><path d=\"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"/><rect width=\"4\" height=\"6\" x=\"8\" y=\"16\" rx=\"1\"/>", "tv": "<rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\"/><path d=\"m17 2-5 5-5-5\"/>", "drum": "<path d=\"M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z\"/><path d=\"M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6\"/><path d=\"M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3\"/>", "plug": "<path d=\"M12 22v-5\"/><path d=\"M9 8V2\"/><path d=\"M15 8V2\"/><path d=\"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z\"/>", "bulb": "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/>", "sprout": "<path d=\"M7 20h10\"/><path d=\"M10 20c5.5-2.5.8-6.4 3-10\"/><path d=\"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z\"/><path d=\"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z\"/>", "compass": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z\"/>", "volume": "<path d=\"M11 5 6 9H2v6h4l5 4z\"/><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"/><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14\"/>", "stop": "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"1\"/>", "alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>", "contrast": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 18a6 6 0 0 0 0-12z\" fill=\"currentColor\"/>", "chevron": "<path d=\"m6 9 6 6 6-6\"/>", "check": "<path d=\"M20 6 9 17l-5-5\"/>"};
const ico = (n,c="") => `<svg class="i ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const MATERIALS = [
  { id:1, icon:"bottle", name:"Embalagens em geral", intro:"Materiais recicláveis:", items:[
    "Papel e papelão: caixas de papelão, jornais, revistas, cadernos, folhas de sulfite e embalagens longa vida (Tetra Pak)","Plásticos: garrafas PET, potes de margarina, embalagens de produtos de limpeza, sacolas e saquinhos","Metais: latas de alumínio (refrigerante, cerveja), latas de aço (conservas, molho de tomate) e tampas metálicas","Vidros: garrafas, potes de conserva e copos"],
    note:"Leve o vidro sem quebrar. Se estiver trincado, embale bem para proteger quem faz a coleta."},
  { id:2, icon:"carbattery", name:"Baterias", intro:"Baterias grandes, de veículos e de equipamentos:", items:[
    "Baterias de carros, motos e caminhões","Baterias de sistemas de energia solar","Baterias de emergência (nobreak/UPS)","Baterias de empilhadeiras elétricas","Baterias industriais"]},
  { id:3, icon:"tire", name:"Pneus", intro:"Pneus usados, inservíveis, de qualquer veículo:", items:[
    "Pneus de carros, motos e caminhões","Pneus de tratores e bicicletas","Pneus de empilhadeiras e carrinhos"]},
  { id:4, icon:"droplet", name:"Óleo comestível", intro:"Óleo de cozinha já usado:", items:[
    "Óleo vegetal usado (soja, girassol, canola etc.), guardado em garrafa PET bem fechada"]},
  { id:5, icon:"pill", name:"Medicamentos", intro:"Remédios vencidos ou que sobraram:", items:[
    "Comprimidos, xaropes e pomadas","Cartelas e frascos de soluções","Embalagens de colírios"],
    note:"Não jogue remédio no vaso sanitário nem na pia: isso contamina a água."},
  { id:6, icon:"coffee", name:"Cápsulas de café", intro:"Cápsulas usadas de máquinas de café:", items:[
    "Cápsulas de alumínio","Cápsulas de plástico","Embalagens flexíveis e selos de vedação das cápsulas"]},
  { id:7, icon:"paint", name:"Tintas", intro:"Latas e galões de tinta, mesmo vazios:", items:[
    "Latas de tinta acrílica e esmalte","Galões plásticos de tintas de parede","Baldes de vernizes e impermeabilizantes","Latas de tinta spray e solventes"]},
  { id:8, icon:"tv", name:"Eletrônicos", intro:"Aparelhos que usam tomada ou bateria e não funcionam mais:", items:[
    "TVs, computadores e celulares","Liquidificadores e ventiladores","Micro-ondas, videogames e cabos","Batedeiras, cafeteiras, secadores e pranchas de cabelo"]},
  { id:9, icon:"drum", name:"Óleo lubrificante, filtro e embalagens", intro:"Itens da troca de óleo do carro ou da moto:", items:[
    "Óleo usado de motores de veículos","Óleo de direção hidráulica","Fluido de freio","Filtros de óleo usados","Embalagens e frascos de óleo lubrificante"]},
  { id:10, icon:"plug", name:"Pilhas e baterias", intro:"Pilhas e baterias de uso doméstico:", items:[
    "Pilhas comuns (AA, AAA, 9V)","Baterias de celular e notebook","Baterias de brinquedos e relógios"]},
  { id:11, icon:"bulb", name:"Lâmpadas", intro:"Lâmpadas queimadas. Leve inteiras, sem quebrar:", items:[
    "Lâmpadas de geladeira e fogão","Lâmpadas fluorescentes compactas","Lâmpadas de eletrodomésticos"]},
  { id:12, icon:"sprout", name:"Agrotóxico", intro:"Embalagens vazias de produtos usados na lavoura:", items:[
    "Frascos plásticos e tambores","Sacos plásticos de defensivos em pó","Sacarias de fertilizantes com defensivos","Tampas, lacres e caixas de papelão das embalagens"]},
];

/* Pontos de entrega. Se souber lat/lng exatos, preencha para o pino ficar 100% preciso;
   sem lat/lng o app localiza o endereço automaticamente. */
const TIPO_9 = "Óleo lubrificante, filtro e suas embalagens";
const PONTOS = [
  { nome:"MANUEL R PERDIGAO & CIA LTDA", endereco:"RUA JOÃO MARIANO FERREIRA, 331", bairro:"VILA SAO PAULO", materiais:[9], lat:-24.178466, lng:-46.786587 },
  { nome:"AUTO POSTO POR DO SOL LTDA", endereco:"RUA JOÃO MARIANO FERREIRA, 370", bairro:"VILA SAO PAULO", materiais:[9], lat:-24.179033, lng:-46.7865502 },
  { nome:"AUTO POSTO IBERA LTDA", endereco:"RUA PAPA JOÃO PAULO II, 291", bairro:"GUARDA CIVIL", materiais:[9] },
  { nome:"AUTO POSTO PRAIAS DO SUL LTDA", endereco:"AVENIDA HARRY FORSSEL, 340", bairro:"BELAS ARTES", materiais:[9], busca:"Auto Posto Praias do Sul, Avenida Harry Forssel, 340, Belas Artes, Itanhaém - SP, 11740-000" },
  { nome:"AUTO POSTO PORTO SEGURO LTDA", endereco:"ESTRADA GENTIL PEREZ, 231", bairro:"JD SABAUNA", materiais:[9] },
  { nome:"MOBY RASTREAMENTO E MANUTENÇÃO AUTOMOTIVA LTDA", endereco:"RUA DIANA, 544", bairro:"SATELITE", materiais:[9] },
  { nome:"ATACADAO S.A.", endereco:"RUA JORDÃO BRAMBILLA, 2061", bairro:"BELAS ARTES", materiais:[11,10] },
  { nome:"ELÉTRICA RAMIRO LTDA", endereco:"RUA ANTONIO OLIVIO DE ARAUJO, 4", bairro:"CENTRO", materiais:[11,10], busca:"Elétrica Ramiro Ltda, Rua Antonio Olivio de Araujo, 04, Centro, Itanhaém - SP, 11740-034" },
  { nome:"LOJAS CEM AS", endereco:"AVENIDA CONDESSA DE VIMIEIROS, 84", bairro:"CENTRO", materiais:[10,8] },
  { nome:"RAIA DROGASIL S/A", endereco:"AVENIDA RUI BARBOSA, S/N", bairro:"CENTRO", materiais:[5] },
  { nome:"RAIA DROGASIL S/A", endereco:"AVENIDA CONDESSA DE VIMIEIROS, 154", bairro:"CENTRO", materiais:[5] },
  { nome:"RAIA DROGASIL S/A", endereco:"AVENIDA HARRY FORSSELL, 98", bairro:"BELAS ARTES", materiais:[5] },
  { nome:"DROGARIA CRAICE ITANHAEM II LTDA", endereco:"AVENIDA RUI BARBOSA, 247", bairro:"CENTRO", materiais:[5] },
  { nome:"PLATERO & LIMA DROGARIA LTDA", endereco:"AVENIDA HARRY FORSSELL, 726", bairro:"BELAS ARTES", materiais:[5] },
  { nome:"FARMACIA E DROGARIA NISSEI S.A", endereco:"PRAÇA NARCISO DE ANDRADE, 74", bairro:"CENTRO", materiais:[5] },
  { nome:"DROGARIA SAO PAULO S.A.", endereco:"AVENIDA HARRY FORSSELL, 866", bairro:"BELAS ARTES", materiais:[5] },
  { nome:"DROGARIA SAO PAULO S.A.", endereco:"AVENIDA RUI BARBOSA, 26", bairro:"CENTRO", materiais:[5] },
  { nome:"DEBORA CONCEICAO DE FREITAS", endereco:"RUA ANTONIO OLIVIO DE ARAUJO, 74", bairro:"CENTRO", materiais:[5] },
  { nome:"REDE KRILL SUPERMERCADOS LTDA", endereco:"RUA DOS FUNDADORES, 463", bairro:"PRAIA DOS SONHOS", materiais:[10] },
  { nome:"TENDA ATACADO SA", endereco:"AVENIDA PADRE MANOEL DA NÓBREGA", bairro:"JD SABAUNA", materiais:[4], lat:-24.1817269, lng:-46.8133982, link:"https://www.google.com/maps/place/Tenda+Atacado+-+Itanha%C3%A9m/@-24.1828701,-46.8213425,16.25z/data=!4m21!1m14!4m13!1m4!2m2!1d-46.7894272!2d-24.182784!4e1!1m6!1m2!1s0x94ce2aa80aefbb47:0x9d2f948f913ce777!2sTenda+Atacado+-+Itanha%C3%A9m,+Rua+Jos%C3%A9+S.+Bechelli,+1351+Jardim+-+Saba%C3%BAna,+Itanha%C3%A9m+-+SP,+11740-000!2m2!1d-46.8133982!2d-24.1817269!3e0!3m5!1s0x94ce2aa80aefbb47:0x9d2f948f913ce777!8m2!3d-24.1817269!4d-46.8133982!16s%2Fg%2F11b75gh9r1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D" },
  { nome:"TELEFONICA BRASIL S.A. (VIVO)", endereco:"RUA ANTONIO OLIVIO DE ARAUJO, 78", bairro:"CENTRO", materiais:[8], busca:"Loja Vivo, Rua Antonio Olivio de Araujo, 78, Centro, Itanhaém - SP, 11740-000" },
  { nome:"IMAGEM TELECOM COMERCIO E SERVICOS DE TELEFONIA LTDA (TIM)", endereco:"AVENIDA CONDESSA DE VIMIEIROS, 193", bairro:"CENTRO", materiais:[8] },
  { nome:"MAGAZINE LUIZA S/A", endereco:"AVENIDA CONDESSA DE VIMIEIROS, 48", bairro:"CENTRO", materiais:[8] },
  {nome:"Creche Carlos Mayer Filho",endereco:"Rua Jaime Lino dos Santos, 158",bairro:"JARDIM ITANHAÉM",materiais:[10],lat:-24.165982,lng:-46.776702,link:"https://www.google.com/maps/dir//CARLOS+MAYER+FILHO+%E2%80%93+EM+ANA+C%C3%82NDIDA,+R.+Jaime+Lino+dos+Santos,+158+-+Jardim,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1790936,-46.7786973,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2b68af5b6aef:0x1ac80ed3c524af08!2m2!1d-46.7767025!2d-24.1659822"},
  {nome:"Creche Marcos Vinícius de Almeida Batista",endereco:"Rua Raimundo Batista de Andrade, 1045",bairro:"CIBRATEL 1",materiais:[10],lat:-24.202451,lng:-46.821576,link:"https://www.google.com/maps/dir//R.+Raimundo+Batista+de+Andrade,+1045+-+Cibratel+I,+Itanha%C3%A9m+-+SP,+11740-000/@-24.202299,-46.821696,15z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x94d1d54bcabf5685:0x6f0dde24d99675fd!2m2!1d-46.8215764!2d-24.2024506!3e2"},
  {nome:"Creche Mário Tisuyoshi Ginoza",endereco:"Rua Jose Roberio dos Santos, 1616",bairro:"JARDIM SÃO JOÃO",materiais:[10],lat:-24.227395,lng:-46.887719,link:"https://www.google.com/maps/dir//R.+Jose+Roberio+Dos+Santos,+1616+-+Balneario+California,+Itanha%C3%A9m+-+SP,+11740-000/@-24.2273408,-46.8883764,19.25z/data=!4m18!1m8!3m7!1s0x94d02a15e56f55d5:0x7cff3500eff72530!2sR.+Jose+Roberio+Dos+Santos,+1616+-+Balneario+California,+Itanha%C3%A9m+-+SP,+11740-000!3b1!8m2!3d-24.2273947!4d-46.8877194!16s%2Fg%2F11hv0_3vsj!4m8!1m0!1m5!1m1!1s0x94d02a15e56f55d5:0x7cff3500eff72530!2m2!1d-46.8877194!2d-24.2273947!3e2"},
  {nome:"Creche Nádia Rezek Barbosa",endereco:"Rua Padre Afonso Maria Ratisbone, 4839",bairro:"JARDIM SUARÃO",materiais:[10],lat:-24.160771,lng:-46.753195,link:"https://www.google.com/maps/place/R.+Padre+Afonso+Maria+Ratisbone,+4.839+-+Jardim+Suar%C3%A3o+-+Interior,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1607658,-46.7557704,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce2a07488ad591:0xb4f1048e1bf706cb!8m2!3d-24.1607707!4d-46.7531955!16s%2Fg%2F11s8dvf4f4"},
  {nome:"Creche Renata Cianbroni",endereco:"Avenida Condessa de Vimieiros, 1459",bairro:"CENTRO",materiais:[10],lat:-24.178735,lng:-46.776041,link:"https://www.google.com/maps/dir//Av.+Condessa+de+Vimieiros,+1459+-+Centro,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1788324,-46.7760492,15z/data=!4m18!1m8!3m7!1s0x94d1d58fef35101f:0x17b4e4c5829bc710!2sAv.+Condessa+de+Vimieiros,+1459+-+Centro,+Itanha%C3%A9m+-+SP,+11740-000!3b1!8m2!3d-24.1787351!4d-46.7760411!16s%2Fg%2F11v0_3ql3f!4m8!1m0!1m5!1m1!1s0x94d1d58fef35101f:0x17b4e4c5829bc710!2m2!1d-46.7760411!2d-24.1787351!3e2"},
  {nome:"E.M. Ana Cândida Ebling de Oliveira",endereco:"Rua Otacílio Dantas, 606",bairro:"SAVOY",materiais:[10],lat:-24.166415,lng:-46.776113,link:"https://www.google.com/maps/dir//EM+Ana+C%C3%A2ndida+Ebling+de+Oliveira,+R.+Otac%C3%ADlio+Dantas,+606+-+Savoy,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1790863,-46.7780924,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a774242a17f:0x5030bae4f48c4dbf!2m2!1d-46.7761131!2d-24.166415"},
  {nome:"E.M. Benedita Matias Gonçalves",endereco:"Rua João Andrade Júnior, 400",bairro:"JARDIM GAIVOTA",materiais:[10],lat:-24.213891,lng:-46.861931,link:"https://www.google.com/maps/dir//BENEDITA+MATIAS+%E2%80%93+EM+PROF.%C2%AA+FILOMENA+DIAS+APELIAN%2C+Avenida+Europa%2C+1253+Cidade+-+Santa+J%C3%BAlia%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.213891,-46.861931,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02b0fc70b5705:0xdfda640c2368b211!2m2!1d-46.861931!2d-24.213891"},
  {nome:"E.M. Bernardino de Souza Pereira",endereco:"Rua Urisez de Oliveira, S/N",bairro:"JARDIM CORUMBÁ",materiais:[10],lat:-24.1913314,lng:-46.8237098,link:"https://www.google.com/maps/dir//EM+Bernardino+de+Souza+Pereira%2C+R.+Igua%C3%A7u%2C+s%2Fn+-+Jardim+Corumb%C3%A1%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1913314,-46.8237098,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02aa50877b161:0x5a3a2fc98bd6dc5c!2m2!1d-46.8237098!2d-24.1913314"},
  {nome:"E.M. Carlos Augusto Guimarães da Silva",endereco:"Avenida Brasil, 32",bairro:"UMUARAMA",materiais:[10],lat:-24.192861,lng:-46.8142183,link:"https://www.google.com/maps/dir//EM+Prof.+Carlos+Augusto+Guimar%C3%A3es+da+Silva%2C+R.+Ant%C3%B4nio+Parreiras%2C+650+-+Belas+Artes%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.192861,-46.8142183,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a7b9a9bd0e9:0x77a722c586bef91f!2m2!1d-46.8142183!2d-24.192861"},
  {nome:"E.M. Célia Marina Dal Pozzo Borges",endereco:"Rua Vítor Meireles, 60",bairro:"JARDIM RIO BRANCO",materiais:[10],lat:-24.1805068,lng:-46.8216238,link:"https://www.google.com/maps/dir//EM+C%C3%A9lia+Marina+Dal+Pozzo+Borges%2C+R.+Ver.+Jos%C3%A9+Calvo%2C+30+-+Jardim+Umuarama%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1805068,-46.8216238,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2aac0d180d37:0xa514fa20fe843c85!2m2!1d-46.8216238!2d-24.1805068"},
  {nome:"E.M. Dalva Dati Ruivo",endereco:"Rua José Antônio da Silva, 26",bairro:"JARDIM BOPSEN",materiais:[10],lat:-24.1655016,lng:-46.7578671,link:"https://www.google.com/maps/dir//EM+Prof%C2%AA+Dalva+Dati+Ruivo%2C+R.+das+Oliveiras%2C+27+-+Nova+Itanha%C3%A9m+-+Interior%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1655016,-46.7578671,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a084be893fb:0x6aa8b38166d09ff9!2m2!1d-46.7578671!2d-24.1655016"},
  {nome:"E.M. Diva do Carmo Alves de Lima",endereco:"Rua Alziro Lebrão, S/N",bairro:"JARDIM GUAPURÁ",materiais:[10],lat:-24.1828513,lng:-46.8304375,link:"https://www.google.com/maps/dir//EM+Prof%C2%AA+Diva+do+Carmo+Alves+de+Lima%2C+R.+Manuel+Avelino+dos+Santos%2C+s%2Fn+-+Jardim+Tanise%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1828513,-46.8304375,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd553d8d52ef7:0xfe3b5fadf896d5ac!2m2!1d-46.8304375!2d-24.1828513"},
  {nome:"E.M. Divani Maria Cardoso",endereco:"Rua 15, S/N",bairro:"JARDIM OÁSIS",materiais:[10],lat:-24.1386958,lng:-46.719658,link:"https://www.google.com/maps/dir//Escola+Municipal+Prof%C2%BA+Divani+Maria+Cardoso+-+Loty%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1386958,-46.719658,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce29abf0faa41f:0x9a6ca64b9658ad1c!2m2!1d-46.719658!2d-24.1386958"},
  {nome:"E.M. Edson Baptista de Andrade",endereco:"Rua Flávio Magalhães, 885",bairro:"JARDIM MARILU",materiais:[10],lat:-24.1691827,lng:-46.7873286,link:"https://www.google.com/maps/dir//EM+Edson+Baptista+de+Andrade%2C+Rua+Jo%C3%A3o+Andrade+J%C3%BAnior%2C+50+-+Jardim+O%C3%A1sis%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1691827,-46.7873286,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a86f9a6c26b:0x264982a9f83438!2m2!1d-46.7873286!2d-24.1691827"},
  {nome:"E.M. Elga Reis",endereco:"Rua José dos Santos, S/N",bairro:"JARDIM OÁSIS",materiais:[10],lat:-24.179106,lng:-46.8171306,link:"https://www.google.com/maps/dir//EM+Elga+Reis%2C+R.+Ant%C3%B4nio+Assun%C3%A7%C3%A3o+Filho%2C+310+-+Jardim+Umuarama%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.179106,-46.8171306,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2aaf5d2c9d01:0x93332dc61137487f!2m2!1d-46.8171306!2d-24.179106"},
  {nome:"E.M. Eugênia Pitta Rangel Veloso",endereco:"Avenida Portugal, 260",bairro:"JARDIM BELAS ARTES",materiais:[10],lat:-24.1693995,lng:-46.7850891,link:"https://www.google.com/maps/dir//EM+Eug%C3%AAnia+Pitta+Rangel+Veloso%2C+Av.+Jos%C3%A9+Batista+Campos%2C+1320+-+Cidade+Anchieta%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1693995,-46.7850891,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a7dcf6e278b:0x963f35a335cdf73b!2m2!1d-46.7850891!2d-24.1693995"},
  {nome:"E.M. Filomena Dias Apelian",endereco:"Rua dos Expedicionários, 160",bairro:"BOPIRANGA",materiais:[10],lat:-24.213891,lng:-46.861931,link:"https://www.google.com/maps/dir//BENEDITA+MATIAS+%E2%80%93+EM+PROF.%C2%AA+FILOMENA+DIAS+APELIAN%2C+Avenida+Europa%2C+1253+Cidade+-+Santa+J%C3%BAlia%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.213891,-46.861931,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02b0fc70b5705:0xdfda640c2368b211!2m2!1d-46.861931!2d-24.213891"},
  {nome:"E.M. Gioconda Fagá",endereco:"Rua Dom Idílio José Soares, S/N",bairro:"JARDIM GRANDESP",materiais:[10],lat:-24.1541821,lng:-46.7921804,link:"https://www.google.com/maps/dir//Creche+Municipal+Prof+Gioconda+Fag%C3%A1+-+O%C3%A1sis%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1541821,-46.7921804,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2af379a3330d:0xc7a7106f7382f85b!2m2!1d-46.7921804!2d-24.1541821"},
  {nome:"E.M. Harry Forssell",endereco:"Rua Urcezino Ferreira, 80",bairro:"SABAÚNA",materiais:[10],lat:-24.1630882,lng:-46.7925406,link:"https://www.google.com/maps/dir//EM+Harry+Forssell%2C+R.+Em%C3%ADdio+de+Souza%2C+2688+-+Jardim+O%C3%A1sis%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1630882,-46.7925406,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a7f369c7f97:0x1aadbd5f6f4e0a9b!2m2!1d-46.7925406!2d-24.1630882"},
  {nome:"E.M. Ignez Martins",endereco:"Rua das Palmeiras, 150",bairro:"JARDIM LARANJEIRAS",materiais:[10],lat:-24.1527187,lng:-46.7335812,link:"https://www.google.com/maps/dir//E.M.+Ignez+Martins%2C+R.+Oito%2C+6137+-+Santa+Terezinha%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1527187,-46.7335812,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d1d58145f15359:0xf397bc6ea10ee88d!2m2!1d-46.7335812!2d-24.1527187"},
  {nome:"E.M. Itaílde Silva Castro Bragante",endereco:"Rua Principal, S/N",bairro:"CHÁCARAS DAS TÂMARAS",materiais:[10],lat:-24.1624151,lng:-46.7965161,link:"https://www.google.com/maps/dir//E.+M.+Prof+Itailde+Silva+Castro+Bragante+-+O%C3%A1sis%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1624151,-46.7965161,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2bcd8c7bc693:0x42d150a65156b933!2m2!1d-46.7965161!2d-24.1624151"},
  {nome:"E.M. José Teixeira Rosas",endereco:"Rua das Flores, S/N",bairro:"JARDIM CORONEL",materiais:[10],lat:-24.1846056,lng:-46.9407069,link:"https://www.google.com/maps/dir//E.M.+Jos%C3%A9+Teixeira+Rosas%2C+Av.+Um%2C+6834-7014+-+Jamaica+-+Interior%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1846056,-46.9407069,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd6195174c145:0x8731f9488f0fe5b8!2m2!1d-46.9407069!2d-24.1846056"},
  {nome:"E.M. Leonor Mendes de Barros",endereco:"Rua Cesário Bastos, 150",bairro:"VILA NOVA ITANHAÉM",materiais:[10],lat:-24.1808947,lng:-46.7879708,link:"https://www.google.com/maps/dir//EM+Leonor+Mendes+de+Barros%2C+R.+Cuba%2C+180+-+Jardim+Mosteiro%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1808947,-46.7879708,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd547defd095f:0xa2a5af294e6b9f78!2m2!1d-46.7879708!2d-24.1808947"},
  {nome:"E.M. Lídia Martha Ferriello Gianotti",endereco:"Rua Padre Afonso Maria Ratisbone, 4839",bairro:"JARDIM SUARÃO",materiais:[10],lat:-24.160771,lng:-46.753195,link:"https://www.google.com/maps/place/R.+Padre+Afonso+Maria+Ratisbone,+4.839+-+Jardim+Suar%C3%A3o+-+Interior,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1607658,-46.7557704,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce2a07488ad591:0xb4f1048e1bf706cb!8m2!3d-24.1607707!4d-46.7531955!16s%2Fg%2F11s8dvf4f4"},
  {nome:"E.M. Lilian Aparecida Borges Prado",endereco:"Rua José Batista de Campos, S/N",bairro:"JARDIM OÁSIS",materiais:[10],lat:-24.1661594,lng:-46.7770641,link:"https://www.google.com/maps/dir//EM+Lilian+Aparecida+Borges+Prado%2C+R.+Jaime+Lino+dos+Santos%2C+320+-+Savoy%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1661594,-46.7770641,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2b1ba0d2396b:0xf3f125c3ac8b91dc!2m2!1d-46.7770641!2d-24.1661594"},
  {nome:"E.M. Lions Clube",endereco:"Rua dos Estudantes, S/N",bairro:"JARDIM SAVOY",materiais:[10],lat:-24.1761127,lng:-46.7904872,link:"https://www.google.com/maps/dir//EM+Lions+Clube%2C+Rua+Joaquim+Pedro+do+Nascimento%2C+285+Jardim+-+Ivoty%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1761127,-46.7904872,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd547defd095f:0x64374fb2fd85258!2m2!1d-46.7904872!2d-24.1761127"},
  {nome:"E.M. Luiz Gonzaga Silva Fonseca",endereco:"Rua das Palmeiras, 100",bairro:"JARDIM REGINA",materiais:[10],lat:-24.1537775,lng:-46.7831523,link:"https://www.google.com/maps/dir//E.M.+Luiz+Gonzaga+Silva+Fonseca%2C+Av.+Santos+-+Tropical%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1537775,-46.7831523,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a60977c8cd7:0x9ca3e50dbfc6cfff!2m2!1d-46.7831523!2d-24.1537775"},
  {nome:"E.M. Maria Aparecida Soares Amêndola",endereco:"Rua Dom José Gaspar, S/N",bairro:"JARDIM IVOTY",materiais:[10],lat:-24.1568737,lng:-46.769666,link:"https://www.google.com/maps/dir//E.M.+Maria+Aparecida+Soares+Amendola%2C+Av.+Cabu%C3%A7u%2C+Vila+-+Nossa+Sra.+do+Sion%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1568737,-46.769666,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a6d9f982347:0x112a39309b09577b!2m2!1d-46.769666!2d-24.1568737"},
  {nome:"E.M. Maria Conceição Luz",endereco:"Rua Benedito Celso de Oliveira, S/N",bairro:"JARDIM RIO BRANCO",materiais:[10],lat:-24.219082,lng:-46.859443,link:"https://www.google.com/maps/dir//EM+Prof%C2%AA+Maria+Concei%C3%A7%C3%A3o+Luz%2C+Avenida+Chile%2C+s%2Fn+Balne%C3%A1rio+-+S%C3%A3o+Fernando%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.219082,-46.859443,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02b642c008517:0x2b85152dfe09ea4f!2m2!1d-46.859443!2d-24.219082"},
  {nome:"E.M. Maria Cristina de Macedo Gomes",endereco:"Rua Emídio de Souza, S/N",bairro:"JARDIM OÁSIS",materiais:[10],lat:-24.1772108,lng:-46.8272598,link:"https://www.google.com/maps/dir//E.M.+Maria+Cristina+Macedo+Gomes%2C+R.+Jos%C3%A9+Augusto+Rodrigues%2C+30+-+Parque+Novaro%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1772108,-46.8272598,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2ab3dad68331:0xebfbc5c2559bc99e!2m2!1d-46.8272598!2d-24.1772108"},
  {nome:"E.M. Maria da Penha Correa Sanches",endereco:"Rua Raimundo Batista de Andrade, S/N",bairro:"CIBRATEL 2",materiais:[10],lat:-24.2068593,lng:-46.8376652,link:"https://www.google.com/maps/dir//EM+Prof%C2%AA+Maria+da+Penha+Correa+Sanches%2C+Av.+Sorocabana%2C+s%2Fn+-+Cibratel+II%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.2068593,-46.8376652,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce29d9392a5fbf:0xff7283ce911833ef!2m2!1d-46.8376652!2d-24.2068593"},
  {nome:"E.M. Maria das Graças Alves Santos",endereco:"Rua Guapiranga, S/N",bairro:"JARDIM GUAPIRANGA",materiais:[10],lat:-24.152705,lng:-46.7802058,link:"https://www.google.com/maps/dir//EM+Maria+das+Gra%C3%A7as+Alves+Santos%2C+R.+Leme%2C+270+-+Jardim+Magalh%C3%A3es%2C+Itanha%C3%A9m+-+SP%2C+11743-536/@-24.152705,-46.7802058,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2b3b85c38d29:0xeaa17c296765a71b!2m2!1d-46.7802058!2d-24.152705"},
  {nome:"E.M. Maria do Carmo Sodré",endereco:"Rua Guaratuba, 100",bairro:"JARDIM AMÉRICA",materiais:[10],lat:-24.161202,lng:-46.7588846,link:"https://www.google.com/maps/dir//EM+Maria+do+Carmo+Abreu+Sodr%C3%A9%2C+R.+Dom+Jos%C3%A9+Varani%2C+399+-+Nossa+Sra.+do+Sion%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.161202,-46.7588846,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a085ffa13cd:0x7f3718ebd4525b2c!2m2!1d-46.7588846!2d-24.161202"},
  {nome:"E.M. Maria Graciette Dias",endereco:"Rua Portugal, S/N",bairro:"JARDIM BELAS ARTES",materiais:[10],lat:-24.1906478,lng:-46.8112301,link:"https://www.google.com/maps/dir//E.M.+Professora+Maria+Graciette+Dias+-+R.+Ant%C3%B4nio+Parreiras%2C+202+-+Belas+Artes%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1906478,-46.8112301,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d1d544d3c07303:0x2ae239f4d62f6943!2m2!1d-46.8112301!2d-24.1906478"},
  {nome:"E.M. Maria Patrocina Condota",endereco:"Rua João Andrade Júnior, S/N",bairro:"JARDIM GAIVOTA",materiais:[10],lat:-24.1560417,lng:-46.7895302,link:"https://www.google.com/maps/dir//EM+Prof%C2%AA+Maria+Patrocina+Condota+-+Rua+P%2C+s%2Fn+Guapur%C3%A1%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1560417,-46.7895302,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2b142146e221:0xd60c8d5a663e8de5!2m2!1d-46.7895302!2d-24.1560417"},
  {nome:"E.M. Nildemar de Souza Oliveira",endereco:"Rua São Fernando, 200",bairro:"JARDIM SÃO FERNANDO",materiais:[10],lat:-24.1789336,lng:-46.8147186,link:"https://www.google.com/maps/dir//EM+Nildemar+de+Souza+Oliveira+-+R.+Aristeu+Rodrigues+da+Silva%2C+s%2Fn+-+Guapiranga%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1789336,-46.8147186,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2be67984f0c3:0xaedf1565614b59e2!2m2!1d-46.8147186!2d-24.1789336"},
  {nome:"E.M. Noemia Salles Padovan",endereco:"Rua dos Fundadores, S/N",bairro:"JARDIM GUAPIRANGA",materiais:[10],lat:-24.181237,lng:-46.815029,link:"https://www.google.com/maps/dir//EM+No%C3%AAmia+Salles+Padovan%2C+R.+Em%C3%ADdio+Pereira+de+Castro%2C+s%2Fn+-+Guapiranga%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.181237,-46.815029,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2bf7cf2ed02b:0x273c43594c12931d!2m2!1d-46.815029!2d-24.181237"},
  {nome:"E.M. Olga Lopes de Mendonça",endereco:"Rua das Flores, 50",bairro:"JARDIM CORONEL",materiais:[10],lat:-24.2361924,lng:-46.9009774,link:"https://www.google.com/maps/dir//Escola+Municipal+Olga+Lopes+de+Mendon%C3%A7a+-+R.+S%C3%A3o+Lu%C3%ADs%2C+136+-+Balneario+Gaivotas%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.2361924,-46.9009774,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02a211adf2fbf:0xf9a6ce2641263237!2m2!1d-46.9009774!2d-24.2361924"},
  {nome:"E.M. Osmar Rodrigues",endereco:"Rua Flávio Magalhães, S/N",bairro:"JARDIM GAIVOTA",materiais:[10],lat:-24.2409873,lng:-46.8964553,link:"https://www.google.com/maps/dir//E.M.+Osmar+Rodrigues+-+Balneario+Gaivotas%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.2409873,-46.8964553,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d02b47830fa97b:0x2508c5fb5d9d20a6!2m2!1d-46.8964553!2d-24.2409873"},
  {nome:"E.M. Pedrina Pompeu Bastos",endereco:"Rua Brasil, 120",bairro:"JARDIM MARILU",materiais:[10],lat:-24.1593053,lng:-46.835151,link:"https://www.google.com/maps/dir//EM+Pedrina+Pompeu+Bastos%2C+Itanha%C3%A9m+-+SP/@-24.1593053,-46.835151,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd531af4679f3:0x742b85e5c1489347!2m2!1d-46.835151!2d-24.1593053"},
  {nome:"E.M. Silvia Regina Schiavon Marasca",endereco:"Avenida Condessa de Vimieiros, S/N",bairro:"JARDIM GRANDESP",materiais:[10],lat:-24.184997,lng:-46.7916229,link:"https://www.google.com/maps/dir//E.M.+PROF%C2%AA+SILVIA+REGINA+SCHIAVON+MARASCA%2C+Av.+Jo%C3%A3o+Batista+Leal%2C+241+-+Centro%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.184997,-46.7916229,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d1d570aa80aec1:0x64f360e47c5e87db!2m2!1d-46.7916229!2d-24.184997"},
  {nome:"E.M. Tia Pombinha",endereco:"Rua José Batista de Campos, 55",bairro:"JARDIM OÁSIS",materiais:[10],lat:-24.1534659,lng:-46.7747301,link:"https://www.google.com/maps/dir//Escola+Municipal+Tia+Pombinha+-+69%2C+R.+Silvio+Figueiredo%2C+1+-+Nossa+Sra.+do+Sion%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1534659,-46.7747301,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce2a68e175cb87:0xcf65c0630e291c8!2m2!1d-46.7747301!2d-24.1534659"},
  {nome:"E.M. Walter Arduini",endereco:"Rua Sorocaba, 185",bairro:"CIBRATEL 2",materiais:[10],lat:-24.2339067,lng:-46.9031833,link:"https://www.google.com/maps/dir//EM+Walter+Arduini%2C+Av.+Fl%C3%A1cides+Ferreira%2C+1450+-+Balneario+Gaivotas%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.2339067,-46.9031833,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d029c707f99da9:0x2766314a34f712b7!2m2!1d-46.9031833!2d-24.2339067"},
  {nome:"E.M. Zuleica Barros de Assis",endereco:"Rua Três, 150",bairro:"JARDIM SAVOY",materiais:[10],lat:-24.1828983,lng:-46.8291527,link:"https://www.google.com/maps/dir//Escola+Municipal+Zuleica+Barros+de+Assis%2C+R.+Bias+Fortes%2C+205+-+Jd+Tanise%2C+Itanha%C3%A9m+-+SP%2C+11740-000/@-24.1828983,-46.8291527,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cfd5538b959f1f:0xbbb4745c0d6ee780!2m2!1d-46.8291527!2d-24.1828983"},
  {nome:"CEA - Centro de Pesquisa e Educação Ambiental",endereco:"Rua Dom Sebastião Leme, 192",bairro:"GUARAÚ",materiais:[10],lat:-24.17954,lng:-46.795126,link:"https://www.google.com/maps/dir//CEA+-+Centro+de+Pesquisa+e+Educa%C3%A7%C3%A3o+Ambiental,+R.+Dom+Sebasti%C3%A3o+Leme,+192+-+Guara%C3%BA,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1790863,-46.7780924,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d1d54f7157cbeb:0x25d552f26ac02231!2m2!1d-46.7951255!2d-24.1795397"},
  {nome:"Parque Turístico Amazônia Paulista",endereco:"Rua Urcezino Ferreira, 140",bairro:"BAIXIO",materiais:[1],lat:-24.184008,lng:-46.791925,link:"https://www.google.com/maps/dir//Parque+Tur%C3%ADstico+Amaz%C3%B4nia+Paulista,+Rua+Urcezino+Ferreira,+140+-+Baixio,+Itanha%C3%A9m+-+SP,+11740-000/@-24.1790863,-46.7780924,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d1d5000a20714f:0xcaad30e0973f62da!2m2!1d-46.7919248!2d-24.1840077"},
];

/* só mostra em "O que posso levar?" as categorias que têm ao menos um ponto no mapa */
const USED_MAT = new Set(PONTOS.flatMap((p) => p.materiais));
/* ordem dos cartões em "O que posso levar?" */
const CARD_ORDER = [11,10,1,4,9,5,8];
const LEG = {1:"Embalagens em geral",9:"Óleo lubrificante e filtro",5:"Medicamentos",10:"Pilhas e baterias",11:"Lâmpadas",8:"Eletrônicos",4:"Óleo de cozinha"};
/* Uma cor única e distinta por material [cor, texto sobre a cor]: pinos, legenda, etiquetas e cartões. */
const PAL = {1:["#3949AB","#fff"],2:["#00796B","#fff"],3:["#37474F","#fff"],4:["#F57C00","#111"],5:["#7B1FA2","#fff"],6:["#6D4C41","#fff"],7:["#D81B60","#fff"],8:["#C62828","#fff"],9:["#0277BD","#fff"],10:["#2E7D32","#fff"],11:["#FBC02D","#111"],12:["#9E9D24","#111"]};
const COLORS = Object.fromEntries(Object.entries(PAL).map(([k,v]) => [k,v[0]]));
const ON = Object.fromEntries(Object.entries(PAL).map(([k,v]) => [k,v[1]]));
const state = { materials:new Set(), bairros:new Set() };
let matMs, bairroMs;
const matName = (id) => MATERIALS.find((m) => m.id === id).name;
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const SPECIAL = {"E.M.":"E.M.",CESP:"CESP",CEA:"CEA",II:"II",TIM:"TIM",LTDA:"Ltda.",CIA:"Cia.",SA:"S.A.","S/A":"S.A.","S.A":"S.A.","S.A.":"S.A.","S/N":"sem número",JD:"Jardim",SAO:"São",PERDIGAO:"Perdigão",SATELITE:"Satélite",ATACADAO:"Atacadão",CONCEICAO:"Conceição",DEBORA:"Débora",COMERCIO:"Comércio",SERVICOS:"Serviços",FARMACIA:"Farmácia",ITANHAEM:"Itanhaém",SABAUNA:"Sabaúna"};
const SMALL = new Set(["de","da","do","dos","das","e"]);
const titleCase = (s) => String(s).trim().split(/\s+/).map((w,i) => {
  const lead = (w.match(/^\(+/)||[""])[0], trail = (w.match(/[),]+$/)||[""])[0];
  const core = w.slice(lead.length, w.length - trail.length), up = core.toUpperCase(), low = core.toLowerCase();
  const out = SPECIAL[up] || (i && SMALL.has(low) ? low : up.length === 1 ? up : low.charAt(0).toUpperCase() + low.slice(1));
  return lead + out + trail;
}).join(" ");
const tipoTxt = (p) => p.materiais.map((id) => id === 9 ? TIPO_9 : matName(id)).join(", ");
const chips = (p) => `<div class="tags">${p.materiais.map((id) => `<span class="tag" style="--k:${COLORS[id]}"><i style="background:${COLORS[id]}"></i>${ico(MATERIALS.find((m) => m.id === id).icon)} ${esc(LEG[id]||matName(id))}</span>`).join("")}</div>`;
const stripe = (p) => { const c = p.materiais.map((i) => COLORS[i]), n = c.length; return `linear-gradient(90deg,${c.map((x,i) => `${x} ${i*100/n}% ${(i+1)*100/n}%`).join(",")})`; };

/* Ouvir (leitura em voz alta) */
const canSpeak = "speechSynthesis" in window;
const speakLabel = (p, on) => `${ico(on ? "stop" : "volume")} ${on ? "Parar a leitura" : "Ouvir os dados"}<span class="sr"> de ${esc(titleCase(p.nome))}</span>`;
const speakBtn = (p) => canSpeak ? `<button type="button" class="btn-speak" data-speak="${PONTOS.indexOf(p)}">${speakLabel(p,false)}</button>` : "";
const speakText = (p) => `${titleCase(p.nome).replace(/^E\.M\./,"Escola Municipal")}. Endereço: ${titleCase(p.endereco)}. Bairro: ${titleCase(p.bairro)}, Itanhaém. Recebe: ${p.materiais.map((id) => LEG[id]||matName(id)).join(", ")}.`;
function toggleSpeak(btn){
  const s = window.speechSynthesis, was = btn.dataset.on === "1", p = PONTOS[+btn.dataset.speak];
  s.cancel(); if (was) return;
  const u = new SpeechSynthesisUtterance(speakText(p)); u.lang = "pt-BR"; u.rate = .9;
  btn.dataset.on = "1"; btn.dataset.speakOn = "1"; btn.innerHTML = speakLabel(p,true);
  const done = () => { btn.dataset.on = ""; btn.innerHTML = speakLabel(p,false); };
  u.onend = done; u.onerror = done; s.speak(u);
}
const bindSpeak = (root) => root && root.querySelectorAll("[data-speak]").forEach((b) => b.onclick = () => toggleSpeak(b));

function routeUrl(p){
  if (p.link) return p.link;
  const dest = p.busca || (p.lat != null && !p.approx ? `${p.lat},${p.lng}` : `${p.endereco}, ${p.bairro}, Itanhaém, SP, Brasil`);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}&travelmode=driving`;
}
const routeBtn = (p) => `<a class="btn-route" href="${esc(routeUrl(p))}" target="_blank" rel="noopener">${ico("compass")} Como chegar<span class="sr"> a ${esc(titleCase(p.nome))}, abre o Google Maps em nova aba</span></a>`;

/* mapa */
let map, layer;
let pinSeq = 0;
function pinIcon(ids,n){
  const cols = ids.map((i) => COLORS[i]).filter(Boolean), id = "pc" + (++pinSeq), w = 24 / cols.length;
  const body = cols.map((c,i) => `<rect x="${i*w}" y="0" width="${w+.1}" height="28" fill="${c}"/>`).join("");
  const d = "M12 1C7 1 3 5 3 10c0 6.7 8 16 9 17 1-1 9-10.3 9-17 0-5-4-9-9-9z";
  return L.divIcon({className:"pin",iconSize:[48,56],iconAnchor:[24,54],popupAnchor:[0,-50],
    html:`<svg viewBox="0 0 24 28" aria-hidden="true"><defs><clipPath id="${id}"><path d="${d}"/></clipPath></defs><g clip-path="url(#${id})">${body}</g><path fill="none" stroke="#fff" stroke-width="1.6" d="${d}"/><circle cx="12" cy="10" r="6" fill="#fff"/><text x="12" y="13.4" text-anchor="middle" font-size="9" font-weight="800" font-family="Arial,sans-serif" fill="#111">${n}</text></svg>`});
}
function popupHtml(p){
  return `<h3 class="pop__head">${esc(titleCase(p.nome))}</h3><div class="pop__body"><dl class="info">
    <dt>Tipo de resíduo</dt><dd>${chips(p)}</dd>
    <dt>Endereço</dt><dd>${esc(titleCase(p.endereco))}</dd>
    <dt>Bairro</dt><dd>${esc(titleCase(p.bairro))}</dd>
    <dt>Cidade</dt><dd>Itanhaém, São Paulo</dd>${p.approx ? `<dt>Atenção</dt><dd>Posição aproximada no mapa. Use “Como chegar”, que busca pelo endereço.</dd>` : ""}</dl><div class="pop__go">${routeBtn(p)}${speakBtn(p)}</div></div>`;
}

/* Dica de velocidade: depois que o mapa carregar uma vez, rode  copiarCoordenadas()  no console do navegador
   e cole o resultado no lugar de  const PONTOS = [...]  (já vem com lat/lng). Assim os pinos aparecem na hora para todo mundo, sem consultar o Nominatim. */
window.copiarCoordenadas = () => {
  const falta = PONTOS.filter((p) => p.lat == null || p.approx).length;
  if (falta) console.warn(falta + " ponto(s) ainda sem posição real. Espere o mapa terminar de localizar e rode de novo.");
  const L2 = PONTOS.map((p) => { const o = {nome:p.nome,endereco:p.endereco,bairro:p.bairro,materiais:p.materiais}; if (p.busca) o.busca = p.busca; if (p.link) o.link = p.link; if (p.lat != null && !p.approx){ o.lat = +p.lat.toFixed(6); o.lng = +p.lng.toFixed(6); } return o; });
  const t = "const PONTOS = [\n" + L2.map((o) => "  " + JSON.stringify(o).replace(/"(\w+)":/g,"$1:")).join(",\n") + "\n];";
  console.log(t); return t;
};
const GEO_KEY = "itanhaem-geo-v2";
let geoCache = {}; try{ geoCache = JSON.parse(localStorage.getItem(GEO_KEY)||"{}"); }catch(e){}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const CENTER = [-24.1830,-46.7890];
const nearCity = (lat,lng) => Math.abs(lat-CENTER[0]) < .14 && Math.abs(lng-CENTER[1]) < .16;
const withTimeout = (url, ms=6000) => { const c = new AbortController(), t = setTimeout(() => c.abort(), ms); return fetch(url,{signal:c.signal}).finally(() => clearTimeout(t)); };
let nomErr = 0, phoErr = 0, nomUntil = 0, phoUntil = 0, esriUntil = 0;   /* se uma fonte falhar 2 vezes seguidas, ela é pulada para não travar o mapa */
let nomChain = Promise.resolve();
/* só consulta o Nominatim para pontos que estão visíveis agora (evita fila enorme ao trocar de filtro) */
const nominatim = (q,p) => (nomChain = nomChain.then(() => (p && !visible.has(p)) ? null : nominatimOne(q)));
async function nominatimOne(q){
  if (nomErr >= 2 && Date.now() < nomUntil) return null;
  const url = "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=br&accept-language=pt-BR&viewbox=-46.95,-24.05,-46.65,-24.30&q=" + encodeURIComponent(q);
  try{ const r = await withTimeout(url); if (r.ok){ nomErr = 0; const j = await r.json(); await sleep(1000); const x = j[0]; return x && nearCity(+x.lat,+x.lon) ? [+x.lat,+x.lon] : null; } }catch(e){}
  nomErr++; if (nomErr >= 2) nomUntil = Date.now() + 30000; return null;
}
async function photon(q){
  if (phoErr >= 2 && Date.now() < phoUntil) return null;
  const url = "https://photon.komoot.io/api/?limit=1&lat=" + CENTER[0] + "&lon=" + CENTER[1] + "&bbox=-46.95,-24.30,-46.65,-24.05&q=" + encodeURIComponent(q);
  try{ const r = await withTimeout(url); if (r.ok){ phoErr = 0; const j = await r.json(), c = j.features && j.features[0] && j.features[0].geometry.coordinates; return c && nearCity(c[1],c[0]) ? [c[1],c[0]] : null; } }catch(e){}
  phoErr++; if (phoErr >= 2) phoUntil = Date.now() + 30000; return null;
}
let esriErr = 0;
async function esri(q){
  if (esriErr >= 2 && Date.now() < esriUntil) return null;
  const url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&maxLocations=1&countryCode=BRA&outFields=Score&location=" + CENTER[1] + "," + CENTER[0] + "&searchExtent=-46.95,-24.30,-46.65,-24.05&SingleLine=" + encodeURIComponent(q);
  try{ const r = await withTimeout(url); if (r.ok){ esriErr = 0; const j = await r.json(), c = j.candidates && j.candidates[0]; return c && c.score >= 80 && nearCity(c.location.y,c.location.x) ? [c.location.y,c.location.x] : null; } }catch(e){}
  esriErr++; if (esriErr >= 2) esriUntil = Date.now() + 30000; return null;
}
async function geocode(p){
  if (p.lat != null) return true;
  const key = p.endereco + "|" + p.bairro;
  if (geoCache[key]){ [p.lat,p.lng] = geoCache[key]; return true; }
  const street = titleCase(p.endereco).replace(/,?\s*sem número/i,""), base = street.replace(/,.*$/,""), bairro = titleCase(p.bairro);
  const queries = [`${street}, ${bairro}, Itanhaém, SP`,`${street}, Itanhaém, SP`,`${base}, ${bairro}, Itanhaém, SP`,`${base}, Itanhaém, SP`];
  const job = p.job || (p.job = (async () => {
    let pos = null;
    const eq = (p.busca ? [p.busca] : []).concat(queries);
    for (const q of eq){ pos = await esri(q); if (pos) break; }
    if (!pos) for (const q of queries){ pos = await photon(q); if (pos) break; }
    if (!pos) for (const q of queries){ pos = await nominatim(q,p); if (pos) break; }
    if (pos){
      [p.lat,p.lng] = pos; p.approx = false; geoCache[key] = pos; try{ localStorage.setItem(GEO_KEY, JSON.stringify(geoCache)); }catch(e){}
      if (p.mk){ p.mk.setLatLng(pos); const pp = p.mk.getPopup(); if (pp) pp.setContent(popupHtml(p)); fitPins(); }
      setStatus();
    }
    return pos;
  })().finally(() => { p.job = null; }));
  /* Se a busca demorar, o pino aparece aproximado na hora e é corrigido sozinho quando a posição real chegar. */
  const first = await Promise.race([job, sleep(8000).then(() => "late")]);
  if (first && first !== "late") return true;
  /* Plano B: o pino aparece perto do centro (aproximado) para o filtro continuar funcionando; a rota usa o endereço. */
  if (p.lat != null) return true;
  if (!visible.has(p)) return false;   /* ponto filtrado para fora: não gera posição falsa */
  const i = PONTOS.indexOf(p), ang = i * 2.39996, rad = .004 + .0016 * (i % 5);
  p.lat = CENTER[0] + rad * Math.sin(ang); p.lng = CENTER[1] + rad * Math.cos(ang); p.approx = true;
  return false;
}

const REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function initMap(){
  if (typeof L === "undefined"){ document.getElementById("mapError").textContent = "Não foi possível carregar o mapa. Os filtros e a lista continuam disponíveis."; return false; }
  map = L.map("map",{scrollWheelZoom:false,zoomControl:false,zoomAnimation:!REDUCED,fadeAnimation:!REDUCED,markerZoomAnimation:!REDUCED}).setView([-24.1830,-46.7890],13);
  L.control.zoom({zoomInTitle:"Aproximar o mapa",zoomOutTitle:"Afastar o mapa"}).addTo(map);
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:"Tiles &copy; Esri"}).addTo(map);
  layer = L.layerGroup().addTo(map);
  map.on("popupopen",() => popupOpen = true); map.on("popupclose",() => popupOpen = false);
  return true;
}
/* Popup acessível: diálogo rotulado, recebe o foco, fecha com Esc e devolve o foco ao pino */
function preparePopup(popup, nome){
  const el = popup.getElement(); if (!el) return;
  if (!el.dataset.ready){
    el.dataset.ready = "1"; el.tabIndex = -1; el.setAttribute("role","dialog");
    const close = el.querySelector(".leaflet-popup-close-button");
    if (close){ close.setAttribute("aria-label","Fechar os dados deste ponto"); close.title = "Fechar"; }
    el.addEventListener("keydown",(ev) => { if (ev.key === "Escape"){ ev.stopPropagation(); map.closePopup(); } });
  }
  el.setAttribute("aria-label",`Dados de ${nome}`);
  el.focus({preventScroll:true});
}

let markers = [], visible = new Set(), popupOpen = false, geoQueue = [];
function addMarker(p){
  p.drawn = true;
  const nome = titleCase(p.nome) + (p.approx ? " (posição aproximada)" : "");
  const mk = L.marker([p.lat,p.lng],{icon:pinIcon(p.materiais,p.num),title:`${nome} · ${tipoTxt(p)}`,alt:nome}).bindPopup(() => popupHtml(p)).addTo(layer);
  p.mk = mk; markers.push(mk);
  const el = mk.getElement();
  if (el){ el.setAttribute("aria-label",`Ponto ${p.num}: ${nome}, bairro ${titleCase(p.bairro)}. Recebe ${tipoTxt(p)}. Pressione Enter para abrir os dados.`); el.setAttribute("aria-haspopup","dialog"); }
  mk.on("popupopen",(e) => { bindSpeak(e.popup.getElement()); preparePopup(e.popup, nome); });
  mk.on("popupclose",() => setTimeout(() => {
    const a = document.activeElement, pe = mk.getPopup() && mk.getPopup().getElement(), m = mk.getElement();
    if (m && mk._map && (!a || a === document.body || (pe && pe.contains(a)))) m.focus({preventScroll:true});
  },0));
}
let fitT;
function fitPins(){ clearTimeout(fitT); fitT = setTimeout(doFit, 250); }
function doFit(){
  if (popupOpen || !markers.length) return;
  const pts = markers.map((m) => m.getLatLng());
  if (pts.length === 1) map.setView(pts[0], 15, {animate:!REDUCED}); else map.fitBounds(pts,{padding:[50,50],maxZoom:15,animate:!REDUCED});
}
function setStatus(){
  const v = [...visible], pend = v.filter((p) => p.lat == null).length, appr = v.filter((p) => p.approx).length;
  document.getElementById("mapNote").textContent = pend ? `Localizando os pontos no mapa… faltam ${pend}` : "";
  document.getElementById("mapError").textContent = !pend && appr ? `${appr} ${appr === 1 ? "ponto está" : "pontos estão"} com posição aproximada no mapa. O botão “Como chegar” usa o endereço correto.` : "";
}
let geoActive = 0;
async function geoLoop(){
  while (geoQueue.length){
    const p = geoQueue.shift();
    if (p.lat == null) await geocode(p);
    if (visible.has(p) && p.lat != null && !p.drawn){ addMarker(p); fitPins(); }
    setStatus();
  }
}
function geoWorker(){
  while (geoActive < 6 && geoQueue.length){ geoActive++; geoLoop().finally(() => geoActive--); }
}
function updateMap(pts){
  if (!map) return;
  layer.clearLayers(); markers = []; visible = new Set(pts); pts.forEach((p) => p.drawn = false);
  pts.filter((p) => p.lat != null).forEach(addMarker); fitPins();
  const pend = PONTOS.filter((p) => p.lat == null);
  geoQueue = [...pend.filter((p) => visible.has(p)), ...pend.filter((p) => !visible.has(p))];
  setStatus(); geoWorker();
}

/* página */
function makeMulti(el, {allText, plural, options, onChange}){
  const id = el.id;
  let opts = options, sig = options.map((o) => o.value).join("|");
  el.innerHTML = `<button type="button" class="select ms-btn" aria-haspopup="true" aria-expanded="false" aria-controls="${id}-panel" aria-labelledby="${id}-lbl ${id}-val" aria-describedby="filtrosHelp"><span id="${id}-val"></span>${ico("chevron","chev")}</button>
  <div class="ms-panel" id="${id}-panel" tabindex="-1" role="group" aria-labelledby="${id}-lbl" hidden></div>`;
  const btn = el.querySelector(".ms-btn"), panel = el.querySelector(".ms-panel"), val = el.querySelector(`#${id}-val`);
  const boxes = () => [...panel.querySelectorAll("input")];
  const chosen = () => boxes().filter((b) => b.checked);
  const draw = (sel) => { panel.innerHTML = opts.map((o) => `<label class="ms-opt"><input type="checkbox" value="${esc(o.value)}"${sel.has(String(o.value)) ? " checked" : ""}><span class="ms-box">${ico("check")}</span>${o.color ? `<i class="ms-dot" style="background:${o.color}"></i>` : ""}<span>${esc(o.label)}</span></label>`).join(""); };
  const summary = () => { const c = chosen(); val.textContent = c.length === 0 ? allText : c.length === 1 ? opts.find((o) => String(o.value) === c[0].value).label : `${c.length} ${plural} selecionados`; };
  const open = (v) => { panel.hidden = !v; btn.setAttribute("aria-expanded", v); };
  btn.onclick = () => open(panel.hidden);
  panel.addEventListener("change", () => { summary(); onChange(new Set(chosen().map((x) => x.value))); });
  el.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden){ e.stopPropagation(); open(false); btn.focus(); } });
  el.addEventListener("focusout", (e) => { if (e.relatedTarget && !el.contains(e.relatedTarget)) open(false); });
  document.addEventListener("click", (e) => { if (!el.contains(e.target)) open(false); });
  draw(new Set()); summary();
  return {
    set(vals){ const v = new Set([...vals].map(String)); boxes().forEach((b) => b.checked = v.has(b.value)); summary(); },
    setOptions(next){
      const s2 = next.map((o) => o.value).join("|"); if (s2 === sig) return;
      const keep = new Set(chosen().map((b) => b.value)); opts = next; sig = s2; draw(keep); summary();
    }
  };
}

const bairroOpts = (M) => [...new Set(PONTOS.filter((p) => M.size === 0 || p.materiais.some((id) => M.has(id))).map((p) => p.bairro))]
  .sort((a,b) => titleCase(a).localeCompare(titleCase(b),"pt-BR")).map((b) => ({ value:b, label:titleCase(b) }));

function buildFilters(){
  const matIds = Object.keys(LEG).map(Number).filter((id) => PONTOS.some((p) => p.materiais.includes(id)));
  matMs = makeMulti(document.getElementById("matMs"), {
    allText:"Todos os materiais", plural:"materiais",
    options: matIds.map((id) => ({ value:id, label:LEG[id], color:COLORS[id] })),
    onChange:(v) => { state.materials = new Set([...v].map(Number)); render(); }
  });
  bairroMs = makeMulti(document.getElementById("bairroMs"), {
    allText:"Todos os bairros", plural:"bairros",
    options: bairroOpts(new Set()),
    onChange:(v) => { state.bairros = new Set(v); render(); }
  });
  document.getElementById("clearFilters").onclick = () => { state.materials.clear(); state.bairros.clear(); matMs.set([]); bairroMs.set([]); render(); };
}

function buildLegend(){
  const prev = document.activeElement, keep = prev && prev.classList && prev.classList.contains("lg") ? prev.dataset.id : null;
  const used = Object.keys(LEG).map(Number).filter((id) => PONTOS.some((p) => p.materiais.includes(id)));
  document.getElementById("legend").innerHTML = used.map((id) => `<li><button type="button" class="lg" data-id="${id}" style="--k:${COLORS[id]};--on:${ON[id]}" aria-pressed="${state.materials.has(id)}"><i style="background:${COLORS[id]}"></i>${ico(MATERIALS.find((m) => m.id === id).icon)} ${LEG[id]}</button></li>`).join("");
  if (keep){ const nb = document.querySelector(`#legend .lg[data-id="${keep}"]`); if (nb) nb.focus(); }
  document.querySelectorAll("#legend .lg").forEach((b) => b.onclick = () => {
    const id = +b.dataset.id;
    if (state.materials.has(id)) state.materials.delete(id); else state.materials.add(id);
    matMs.set(state.materials); render();
  });
}

const A11Y_KEY = "itanhaem-a11y-v1", FS_NAMES = ["normal","grande","muito grande","máximo"];
let a11y = {fs:0, hc:false}, savedA11y = null;
try{ savedA11y = JSON.parse(localStorage.getItem(A11Y_KEY)||"null"); }catch(e){}
if (savedA11y) a11y = Object.assign(a11y, savedA11y);
else if (window.matchMedia && matchMedia("(prefers-contrast: more)").matches) a11y.hc = true;
const say = (t) => { document.getElementById("a11yStatus").textContent = t; };
function applyA11y(){
  const h = document.documentElement; h.dataset.fs = a11y.fs; h.classList.toggle("hc", a11y.hc);
  document.getElementById("hcBtn").setAttribute("aria-checked", a11y.hc);
  document.getElementById("fsName").textContent = FS_NAMES[a11y.fs];
  document.querySelectorAll(".a11y-dots i").forEach((d, i) => d.classList.toggle("on", i <= a11y.fs));
  document.getElementById("fsDown").setAttribute("aria-disabled", a11y.fs <= 0);
  document.getElementById("fsUp").setAttribute("aria-disabled", a11y.fs >= 3);
  try{ localStorage.setItem(A11Y_KEY, JSON.stringify(a11y)); }catch(e){}
  if (map) setTimeout(() => map.invalidateSize(), 60);
}
function initA11y(){
  document.getElementById("fsDown").onclick = () => { if (a11y.fs <= 0) return say("A letra já está no tamanho mínimo."); a11y.fs--; applyA11y(); say("Tamanho da letra: " + FS_NAMES[a11y.fs] + "."); };
  document.getElementById("fsUp").onclick = () => { if (a11y.fs >= 3) return say("A letra já está no tamanho máximo."); a11y.fs++; applyA11y(); say("Tamanho da letra: " + FS_NAMES[a11y.fs] + "."); };
  document.getElementById("hcBtn").onclick = () => { a11y.hc = !a11y.hc; applyA11y(); say(a11y.hc ? "Alto contraste ligado." : "Alto contraste desligado."); };
  document.getElementById("a11yReset").onclick = () => { a11y.fs = 0; a11y.hc = false; applyA11y(); say("Configurações restauradas."); };
  document.getElementById("a11yClose").onclick = () => { toggle(false); fab.focus(); };
  const fab = document.getElementById("a11yFab"), panel = document.getElementById("a11yPanel"), box = document.getElementById("a11y");
  const toggle = (v) => { panel.hidden = !v; fab.setAttribute("aria-expanded", v); };
  fab.onclick = () => toggle(panel.hidden);
  box.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden){ toggle(false); fab.focus(); } });
  document.addEventListener("click", (e) => { if (!box.contains(e.target)) toggle(false); });
  applyA11y();
}

function render(){
  if (canSpeak) window.speechSynthesis.cancel();
  buildLegend();
  const M = state.materials, B = state.bairros;
  const mats = CARD_ORDER.map((id) => MATERIALS.find((m) => m.id === id)).filter((m) => m && USED_MAT.has(m.id) && (M.size === 0 || M.has(m.id)));
  document.getElementById("cardGrid").innerHTML = mats.map((m) => `
    <details class="mat" style="--c:${COLORS[m.id]};--on:${ON[m.id]}"${ON[m.id] === "#111" ? " data-dark" : ""}${M.size > 0 ? " open" : ""}>
      <summary><span class="ico" aria-hidden="true">${ico(m.icon)}</span><span>${esc(m.name)}</span><span class="more" aria-hidden="true">+</span></summary>
      <div class="body"><p class="intro">${esc(m.intro)}</p><ul role="list">${m.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      ${m.note ? `<p class="note">${ico("alert")}<span>${esc(m.note)}</span></p>` : ""}</div>
    </details>`).join("");

  const ofertados = new Set(bairroOpts(M).map((o) => o.value));
  B.forEach((b) => { if (!ofertados.has(b)) B.delete(b); });
  bairroMs.setOptions(bairroOpts(M));
  const pts = PONTOS.filter((p) => (M.size === 0 || p.materiais.some((id) => M.has(id))) && (B.size === 0 || B.has(p.bairro)));
  pts.forEach((p,i) => p.num = i + 1);
  document.getElementById("resultCount").textContent = pts.length === 0 ? "Nenhum ponto encontrado com esses filtros." : `${pts.length} ${pts.length === 1 ? "ponto encontrado" : "pontos encontrados"}`;
  updateMap(pts);
}

function buildFooter(){
  const set = (id, h) => { const e = document.getElementById(id); if (e) e.innerHTML = h; };
  set("footIco", ico("sprout")); document.getElementById("year").textContent = new Date().getFullYear();
  set("footMap", ico("compass") + " Mapa e filtros"); set("footMat", ico("bottle") + " O que posso levar?"); set("footTop", ico("chevron","up") + " Voltar ao topo");
}
document.addEventListener("DOMContentLoaded", () => {
  buildFilters(); initA11y(); buildFooter();
  try{ initMap(); }catch(e){ map = null; document.getElementById("mapError").textContent = "Não foi possível iniciar o mapa."; }
  render();
});

/* VLibras (tradutor para Libras do governo federal): carrega em computador e tablet */
(function(){
  var desktop = window.matchMedia && matchMedia("(min-width:760px)").matches;
  if (!desktop){ var v = document.getElementById("vlibras"); if (v) v.remove(); return; }
  var load = function(){
    var s = document.createElement("script");
    s.src = "https://vlibras.gov.br/app/vlibras-plugin.js"; s.async = true;
    s.onload = function(){ try{ new window.VLibras.Widget("https://vlibras.gov.br/app"); }catch(e){} };
    document.body.appendChild(s);
  };
  var idle = function(){ if ("requestIdleCallback" in window) requestIdleCallback(load,{timeout:4000}); else setTimeout(load,1500); };
  if (document.readyState === "complete") idle(); else window.addEventListener("load", idle, {once:true});
})();
