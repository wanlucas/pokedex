// eslint-disable-next-line max-lines
const pokemons = [
  {
    id: 1,
    nome: 'Bulbasaur',
    tipo: 'Grama / Venenoso',
    hp: 220,
    ataque: 240,
    defesa: 260,
    velocidade: 200,    habilidades: [
      'Folha navalha',
      'Absorver',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 2,
    nome: 'Ivysauro',
    tipo: 'Grama / Venenoso',
    hp: 280,
    ataque: 280,
    defesa: 300,
    velocidade: 240,
    habilidades: [
      'Leech Seed',
      'Stunspore',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  },
  {
    id: 3,
    nome: 'Venossauro',
    tipo: 'Grama / Venenoso',
    hp: 320,
    ataque: 320,
    defesa: 350,
    velocidade: 260,
    habilidades: [
      'Raio de Sol',
      'SleepPowder',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  },
  {
    id: 4,
    nome: 'Charmander',
    tipo: 'Fogo',
    hp: 240,
    ataque: 260,
    defesa: 240,
    velocidade: 260,
    habilidades: [
      'Lança-chamas',
      'Cabeçada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  {
    id: 5,
    nome: 'Charmeleon',
    tipo: 'Fogo',
    hp: 270,
    ataque: 300,
    defesa: 250,
    velocidade: 300,
    habilidades: [
      'Golpe de Chamas',
      'Chamas Furiosas',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  },
  {
    id: 6,
    nome: 'Charizard',
    tipo: 'Fogo',
    hp: 310,
    ataque: 350,
    defesa: 290,
    velocidade: 370,
    habilidades: [
      'Incinerar',
      'Raio de Calor',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },
  {
    id: 7,
    nome: 'Squirtle',
    tipo: 'Água',
    hp: 220,
    ataque: 200,
    defesa: 240,
    velocidade: 210,    habilidades: [
      'Bolha',
      'Revolver de Água',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  },
  {
    id: 8,
    nome: 'Wartotle',
    tipo: 'Água',
    hp: 250,
    ataque: 250,
    defesa: 300,
    velocidade: 240,
    habilidades: [
      'Carapaça Forte',
      'Aqua Corte', 
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
  },
  {
    id: 9,
    nome: 'Blastoise',
    tipo: 'Água',
    hp: 330,
    ataque: 280,
    defesa: 330,
    velocidade: 270,
    habilidades: [
      'Dança da Chuva',
      'Investida de Água',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  },
  {
    id: 10,
    nome: 'Caterpie',
    tipo: 'Inseto',
    hp: 200,
    ataque: 200,
    defesa: 230,
    velocidade: 200,    habilidades: [
      'Bando',
      'Picada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
  },
  {
    id: 11,
    nome: 'Metapod',
    tipo: 'Inseto',
    hp: 240,
    ataque: 220,
    defesa: 240,
    velocidade: 210,    habilidades: [
      'Exoesqueleto',
      'Aríate',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
  },
  {
    id: 12,
    nome: 'Butterfree',
    tipo: 'Inseto / Voador',
    hp: 280,
    ataque: 320,
    defesa: 270,
    velocidade: 290,
    habilidades: [
      'Escamas Tricolores',
      'Lufada de Vento',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
  },
  {
    id: 13,
    nome: 'Weedle',
    tipo: 'Inseto / Venenoso',
    hp: 220,
    ataque: 250,
    defesa: 200,
    velocidade: 200,    habilidades: [
      'Perfurar',
      'Presentimento de Inseto',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
  },
  {
    id: 14,
    nome: 'Kakuna',
    tipo: 'Inseto / Venenoso',
    hp: 250,
    ataque: 220,
    defesa: 280,
    velocidade: 230,    habilidades: [
      'Fortificar',
      'Picada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
  },
  {
    id: 15,
    nome: 'Beedril',
    tipo: 'Inseto / Venenoso',
    hp: 290,
    ataque: 420,
    defesa: 310,
    velocidade: 270,
    habilidades: [
      'Ferroada Persistente',
      'Lança a jato',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
  },
  {
    id: 16,
    nome: 'Pidgey',
    tipo: 'Normal / Voador',
    hp: 210,
    ataque: 220,
    defesa: 210,
    velocidade: 240,    habilidades: [
      'Coleta',
      'Lufada de Vento',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
  },
  {
    id: 17,
    nome: 'Pidgeotto',
    tipo: 'Normal / Voador',
    hp: 240,
    ataque: 260,
    defesa: 240,
    velocidade: 290,
    habilidades: [
      'Correio Aério',
      'Lufada de Vento',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
  },
  {
    id: 18,
    nome: 'Pidgeot',
    tipo: 'Normal / Voador',
    hp: 280,
    ataque: 300,
    defesa: 280,
    velocidade: 330,
    habilidades: [
      'Ataque de Vento',
      'Tempestade Giratória',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
  },
  {
    id: 19,
    nome: 'Ratatta',
    tipo: 'Normal',
    hp: 200,
    ataque: 240,
    defesa: 210,
    velocidade: 230,    habilidades: [
      'Focalizar Energia',
      'Mordida',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
  },
  {
    id: 20,
    nome: 'Raticate',
    tipo: 'Normal',
    hp: 280,
    ataque: 310,
    defesa: 250,
    velocidade: 290,
    habilidades: [
      'Presa Acentuada',
      'Hiperpresa',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
  },
  {
    id: 21,
    nome: 'Spearow',
    tipo: 'Normal / Voador',
    hp: 220,
    ataque: 230,
    defesa: 210,
    velocidade: 240,    habilidades: [
      'Bicada',
      'Mergulo Veloz',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
  },
  {
    id: 22,
    nome: 'Fearow',
    tipo: 'Normal / Voador',
    hp: 270,
    ataque: 300,
    defesa: 240,
    velocidade: 310,
    habilidades: [
      'Bico Broca',
      'Ataque Cortante',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
  },
  {
    id: 23,
    nome: 'Ekans',
    tipo: 'Venenoso',
    hp: 210,
    ataque: 230,
    defesa: 210,
    velocidade: 230,    habilidades: [
      'Aríate',
      'Surpresa de Cauda',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
  },
  {
    id: 24,
    nome: 'Arbok',
    tipo: 'Venenoso',
    hp: 270,
    ataque: 300,
    defesa: 250,
    velocidade: 280,
    habilidades: [
      'Asfixia Pesada',
      'Dente Venenoso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
  },
  {
    id: 25,
    nome: 'Pikachu',
    tipo: 'Elétrico',
    hp: 220,
    ataque: 280,
    defesa: 240,
    velocidade: 280,
    habilidades: [
      'Choque do trovão',
      'Cabeçada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  },
  {
    id: 26,
    nome: 'Raichu',
    tipo: 'Elétrico',
    hp: 280,
    ataque: 300,
    defesa: 260,
    velocidade: 330,
    habilidades: [
      'Carga Veloz',
      'Trovão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
  },
  {
    id: 27,
    nome: 'Sandshrew',
    tipo: 'Terrestre',
    hp: 220,
    ataque: 240,
    defesa: 240,
    velocidade: 220,    habilidades: [
      'Desaterrar',
      'Vamos Botar pra Rolar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
  },
  {
    id: 28,
    nome: 'Sandslash',
    tipo: 'Terrestre',
    hp: 280,
    ataque: 290,
    defesa: 330,
    velocidade: 240,
    habilidades: [
      'Cavar pra Cima',
      'Fosso de Areia',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
  },
  {
    id: 29,
    nome: 'Nidoran',
    tipo: 'Venenoso',
    hp: 240,
    ataque: 220,
    defesa: 240,
    velocidade: 210,    habilidades: [
      'Chamar a Família',
      'Arranhão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
  },
  {
    id: 30,
    nome: 'Nidorina',
    tipo: 'Venenoso',
    hp: 280,
    ataque: 250,
    defesa: 250,
    velocidade: 240,
    habilidades: [
      'Resgatar a Família',
      'Mordida',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
  },
  {
    id: 31,
    nome: 'Nidoqueen',
    tipo: 'Venenoso / Terrestre',
    hp: 300,
    ataque: 300,
    defesa: 300,
    velocidade: 260,
    habilidades: [
      'Chamado da Rainha',
      'Lariat Poderoso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
  },
  {
    id: 32,
    nome: 'Nidoran ♂',
    tipo: 'Venenoso',
    hp: 220,
    ataque: 240,
    defesa: 220,
    velocidade: 220,    habilidades: [
      'Bicada',
      'Ataque de Chifre',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
  },
  {
    id: 33,
    nome: 'Nidorino',
    tipo: 'Venenoso',
    hp: 250,
    ataque: 290,
    defesa: 250,
    velocidade: 250,
    habilidades: [
      'Bicada',
      'Chifre Broca',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
  },
  {
    id: 34,
    nome: 'Nidoking',
    tipo: 'Venenoso / Terrestre',
    hp: 300,
    ataque: 340,
    defesa: 300,
    velocidade: 300,
    habilidades: [
      'Arrastar para Fora',
      'Pancada do Rei',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
  },
  {
    id: 35,
    nome: 'Clefairy',
    tipo: 'Fada',
    hp: 280,
    ataque: 220,
    defesa: 200,
    velocidade: 200,    habilidades: [
      'Pancada',
      'Tiro Mágico',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
  },
  {
    id: 36,
    nome: 'Clefable',
    tipo: 'Fada',
    hp: 320,
    ataque: 260,
    defesa: 230,
    velocidade: 220,
    habilidades: [
      'Milagre Enluarado',
      'Tiro Mágico',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
  },
  {
    id: 37,
    nome: 'Vulpix',
    tipo: 'Fogo',
    hp: 220,
    ataque: 230,
    defesa: 210,
    velocidade: 240,    habilidades: [
      'Carvão Vivo',
      'Chute Poderoso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
  },
  {
    id: 38,
    nome: 'Ninetales',
    tipo: 'Fogo',
    hp: 290,
    ataque: 310,
    defesa: 250,
    velocidade: 320,
    habilidades: [
      'Chamas Sobrenaturais',
      'Calda de Chamas',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
  },
  {
    id: 39,
    nome: 'Jigglypuff',
    tipo: 'Normal / Fada',
    hp: 290,
    ataque: 210,
    defesa: 220,
    velocidade: 220,    habilidades: [
      'Pancada',
      'Vamos Botar pra Rolar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
  },
  {
    id: 40,
    nome: 'Wigglytuff',
    tipo: 'Normal / Fada',
    hp: 420,
    ataque: 250,
    defesa: 250,
    velocidade: 250,
    habilidades: [
      'Encontrar Tesouro',
      'Hiperpancada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
  },
  {
    id: 41,
    nome: 'Zubat',
    tipo: 'Venenoso / Voador',
    hp: 220,
    ataque: 220,
    defesa: 210,
    velocidade: 250,    habilidades: [
      'Esconde nas Sombras',
      'Mergulho Veloz',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
  },
  {
    id: 42,
    nome: 'Golbat',
    tipo: 'Venenoso / Voador',
    hp: 280,
    ataque: 290,
    defesa: 250,
    velocidade: 330,
    habilidades: [
      'Compra Discreta',
      'Golpe de Ar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
  },
  {
    id: 43,
    nome: 'Oddish',
    tipo: 'Grama / Venenoso',
    hp: 230,
    ataque: 240,
    defesa: 250,
    velocidade: 210,    habilidades: [
      'Aroma Doce',
      'Pó Venenoso',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
  },
  {
    id: 44,
    nome: 'Gloom',
    tipo: 'Grama / Venenoso',
    hp: 250,
    ataque: 270,
    defesa: 270,
    velocidade: 220,
    habilidades: [
      'Pó de Sono',
      'Aroma Fétido',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
  },
  {
    id: 45,
    nome: 'Vileplume',
    tipo: 'Grama / Venenoso',
    hp: 270,
    ataque: 290,
    defesa: 290,
    velocidade: 240,
    habilidades: [
      'Jardim de Flores Perfumadas',
      'Florescer Intenso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
  },
  {
    id: 46,
    nome: 'Paras',
    tipo: 'Inseto / Grama',
    hp: 230,
    ataque: 240,
    defesa: 240,
    velocidade: 200,    habilidades: [
      'Talho',
      'Arranhão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
  },
  {
    id: 47,
    nome: 'Parasect',
    tipo: 'Inseto / Grama',
    hp: 250,
    ataque: 340,
    defesa: 260,
    velocidade: 220,
    habilidades: [
      'Colisão de Cogumelo',
      'Raio Solar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
  },
  {
    id: 48,
    nome: 'Venonat',
    tipo: 'Inseto / Venenoso',
    hp: 220,
    ataque: 240,
    defesa: 230,
    velocidade: 220,    habilidades: [
      'Baque',
      'Feixe Psíquico',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
  },
  {
    id: 49,
    nome: 'Venomoth',
    tipo: 'Inseto / Venenoso',
    hp: 280,
    ataque: 290,
    defesa: 250,
    velocidade: 290,
    habilidades: [
      'Voo Agressivo',
      'Pó Venenoso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
  },
  {
    id: 50,
    nome: 'Digglet',
    tipo: 'Terrestre',
    hp: 180,
    ataque: 230,
    defesa: 200,
    velocidade: 260,    habilidades: [
      'Cavar',
      'Arranhão',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
  },

  {
    id: 51,
    nome: 'Dugtrio',
    tipo: 'Terrestre',
    hp: 240,
    ataque: 260,
    defesa: 230,
    velocidade: 380,
    habilidades: [
      'Trio de Caras',
      'Bomba de Lamas',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
  },
  {
    id: 52,
    nome: 'Meowth',
    tipo: 'Normal',
    hp: 240,
    ataque: 240,
    defesa: 240,
    velocidade: 280,
    habilidades: [
      'Dia do Pagamento',
      'Fingimento',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
  },
  {
    id: 53,
    nome: 'Persian',
    tipo: 'Normal',
    hp: 270,
    ataque: 290,
    defesa: 260,
    velocidade: 320,
    habilidades: [
      'Dia do Pagamento',
      'Mordida',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
  },
  {
    id: 54,
    nome: 'Psyduck',
    tipo: 'Água',
    hp: 220,
    ataque: 240,
    defesa: 210,
    velocidade: 240,    habilidades: [
      'Chuva Borrifante',
      'Arranhão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
  },
  {
    id: 55,
    nome: 'Golduck',
    tipo: 'Água',
    hp: 270,
    ataque: 310,
    defesa: 270,
    velocidade: 270,
    habilidades: [
      'Feixe Psíquico',
      'Surfar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
  },
  {
    id: 56,
    nome: 'Mankey',
    tipo: 'Lutador',
    hp: 220,
    ataque: 250,
    defesa: 230,
    velocidade: 250,    habilidades: [
      'Arranhão',
      'Punho Focalizado',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
  },
  {
    id: 57,
    nome: 'Primeape',
    tipo: 'Lutador',
    hp: 250,
    ataque: 310,
    defesa: 260,
    velocidade: 300,
    habilidades: [
      'Soco Tenaz',
      'Destruir',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
  },
  {
    id: 58,
    nome: 'Growlithe',
    tipo: 'Fogo',
    hp: 230,
    ataque: 260,
    defesa: 220,
    velocidade: 230,    habilidades: [
      'Aquecer',
      'Combustão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
  },
  {
    id: 59,
    nome: 'Arcanine',
    tipo: 'Fogo',
    hp: 280,
    ataque: 320,
    defesa: 250,
    velocidade: 280,
    habilidades: [
      'Garras de Fogo',
      'Golpe de Colisão de Fogo',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
  },
  {
    id: 60,
    nome: 'Poliwag',
    tipo: 'Água',
    hp: 220,
    ataque: 220,
    defesa: 220,
    velocidade: 260,    habilidades: [
      "Revolver d'água",
      "Jato D'água",
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
  },
  {
    id: 61,
    nome: 'Poliwhirl',
    tipo: 'Água',
    hp: 240,
    ataque: 240,
    defesa: 240,
    velocidade: 290,
    habilidades: [
      "Tapa Duplo",
      "Onda Borrifante",
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
  },
  {
    id: 62,
    nome: 'Poliwrath',
    tipo: 'Água / Lutador',
    hp: 290,
    ataque: 300,
    defesa: 280,
    velocidade: 270,
    habilidades: [
      "Soco Espiral Dividido",
      "Tapa do Despertar",
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
  },
  {
    id: 63,
    nome: 'Abra',
    tipo: 'Psíquico',
    hp: 200,
    ataque: 250,
    defesa: 180,
    velocidade: 250,    habilidades: [
      "Teleporte",
      "Rugir",
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
  },
  {
    id: 64,
    nome: 'Kadabra',
    tipo: 'Psíquico',
    hp: 220,
    ataque: 290,
    defesa: 200,
    velocidade: 290,
    habilidades: [
      'Psíquico',
      'Raio Psíquico',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
  },
  {
    id: 65,
    nome: 'Alakazam',
    tipo: 'Psíquico',
    hp: 240,
    ataque: 350,
    defesa: 220,
    velocidade: 350,
    habilidades: [
      'Colher Zen',
      'Comando Mental',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
  },
  {
    id: 66,
    nome: 'Machop',
    tipo: 'Lutador',
    hp: 240,
    ataque: 250,
    defesa: 220,
    velocidade: 210,    habilidades: [
      'Rasteira',
      'Soco Firme',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
  },
  {
    id: 67,
    nome: 'Machoke',
    tipo: 'Lutador',
    hp: 260,
    ataque: 270,
    defesa: 240,
    velocidade: 220,    habilidades: [
      'Rasteira',
      'Esmurrar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
  },
  {
    id: 68,
    nome: 'Machamp',
    tipo: 'Lutador',
    hp: 290,
    ataque: 320,
    defesa: 260,
    velocidade: 230,
    habilidades: [
      'Machocante',
      'Soco Dinamite',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
  },
  {
    id: 69,
    nome: 'Bellsprout',
    tipo: 'Grama / Venenoso',
    hp: 230,
    ataque: 240,
    defesa: 220,
    velocidade: 230,    habilidades: [
      'Venochoque',
      'Chicote de Vinha',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
  },
  {
    id: 70,
    nome: 'Weepinbell',
    tipo: 'Grama / Venenoso',
    hp: 250,
    ataque: 270,
    defesa: 240,
    velocidade: 250,
    habilidades: [
      'Mucosa Perigosa',
      'Chicote de Vinha',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
  },
  {
    id: 71,
    nome: 'Victreebel',
    tipo: 'Grama / Venenoso',
    hp: 270,
    ataque: 310,
    defesa: 250,
    velocidade: 250,
    habilidades: [
      'Vinha de Pânico',
      'Raio Solar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
  },
  {
    id: 72,
    nome: 'Tentacool',
    tipo: 'Água / Venenoso',
    hp: 300,
    ataque: 200,
    defesa: 300,
    velocidade: 200,
    habilidades: [
      'Ácido',
      'Arma de Água',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png'
  },
  {
    id: 73,
    nome: 'Tentacruel',
    tipo: 'Água / Venenoso',
    hp: 400,
    ataque: 300,
    defesa: 300,
    velocidade: 250,
    habilidades: [
      'Picada Venenosa',
      'Hidrobomba',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png'
  },
  {
    id: 74,
    nome: 'Geodude',
    tipo: 'Pedra / Terrestre',
    hp: 400,
    ataque: 300,
    defesa: 400,
    velocidade: 300,
    habilidades: [
      'Investida',
      'Espiral de Defesa',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'
  },
  {
    id: 75,
    nome: 'Graveler',
    tipo: 'Pedra / Terrestre',
    hp: 400,
    ataque: 400,
    defesa: 500,
    velocidade: 200,
    habilidades: [
      'Atira Pedras',
      'Autodestruição',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png'
  },
  {
    id: 76,
    nome: 'Golem',
    tipo: 'Pedra / Terrestre',
    hp: 500,
    ataque: 500,
    defesa: 600,
    velocidade: 150,
    habilidades: [
      'Terremoto',
      'Explosão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png'
  },
  {
    id: 77,
    nome: 'Ponyta',
    tipo: 'Fogo',
    hp: 200,
    ataque: 400,
    defesa: 300,
    velocidade: 500,
    habilidades: [
      'Brasa',
      'Ataque de Cauda',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png'
  },
  {
    id: 78,
    nome: 'Rapidash',
    tipo: 'Fogo',
    hp: 300,
    ataque: 500,
    defesa: 300,
    velocidade: 600,
    habilidades: [
      'Roda de Fogo',
      'Desmantelar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png'
  },
  {
    id: 79,
    nome: 'Slowpoke',
    tipo: 'Água / Psíquico',
    hp: 200,
    ataque: 300,
    defesa: 500,
    velocidade: 200,
    habilidades: [
      'Confusão',
      'Inabilitar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png'
  },
  {
    id: 80,
    nome: 'Slowbro',
    tipo: 'Água / Psíquico',
    hp: 300,
    ataque: 400,
    defesa: 500,
    velocidade: 300,
    habilidades: [
      'Ataque Psíquico',
      'Arma de Água',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png'
  },
  {
    id: 81,
    nome: 'Magnemite',
    tipo: 'Elétrico / Metálico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Explosão Sônica',
      'Onda Trovão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png'
  },
  {
    id: 82,
    nome: 'Magneton',
    tipo: 'Elétrico / Metálico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Choque do Trovão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png'
  },
  {
    id: 83,
    nome: "Farfetch'd",
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bicada',
      'Talho',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png'
  },
  {
    id: 84,
    nome: 'Doduo',
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bicada',
      'Ataque de Fúria',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png'
  },
  {
    id: 85,
    nome: 'Dodrio',
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bicada Broca',
      'Tri Ataque',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png'
  },
  {
    id: 86,
    nome: 'Seel',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Cabeçada',
      'Descansar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png'
  },
  {
    id: 87,
    nome: 'Dewgong',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Raio Aurora',
      'Desmantelar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png'
  },
  {
    id: 88,
    nome: 'Grimer',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Pancada',
      'Gás Venenoso',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png'
  },
  {
    id: 89,
    nome: 'Muk',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Lodo',
      'Armadura de Ácido',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png'
  },
  {
    id: 90,
    nome: 'Shellder',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Retirada',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png'
  },
  {
    id: 91,
    nome: 'Cloyster',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Raio Aurora',
      'Canhão de Espinhos',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png'
  },
  {
    id: 92,
    nome: 'Gastly',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Lambida',
      'Raio de Confusão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png'
  },
  {
    id: 93,
    nome: 'Haunter',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Hipnose',
      'Comedor de Sonhos',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png'
  },
  {
    id: 94,
    nome: 'Gengar',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Esfera de Escuridão',
      'Sombra da Noite',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
  },
  {
    id: 95,
    nome: 'Onix',
    tipo: 'Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Prender',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png'
  },
  {
    id: 96,
    nome: 'Drowzee',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Hipnose',
      'Confusão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png'
  },
  {
    id: 97,
    nome: 'Hypno',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Hipnose',
      'Comedor de Sonhos',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png'

  },
  {
    id: 98,
    nome: 'Krabby',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bolha',
      'Encarar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png'
  },
  {
    id: 99,
    nome: 'Kingler',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Agarramento Compressor',
      'Guilhotina',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png'
  },
  {
    id: 100,
    nome: 'Voltorb',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Autodestruição',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png'
  },
  {
    id: 101,
    nome: 'Electrode',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Explosão Sônica',
      'Explosão',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png'
  },
  {
    id: 102,
    nome: 'Exeggcute',
    tipo: 'Grama / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Barricada',
      'Hipnose',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png'
  },
  {
    id: 103,
    nome: 'Exeggutor',
    tipo: 'Grama / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Hipnose',
      'Raio Solar',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png'
  },
  {
    id: 104,
    nome: 'Cubone',
    tipo: 'Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bastão de Osso',
      'Raiva',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png'
  },
  {
    id: 105,
    nome: 'Marowak',
    tipo: 'Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bastão de Osso',
      'Ossomerangue',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png'
  },

  {
    id: 106,
    nome: 'Hitmonlee',
    tipo: 'Lutador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Chute Duplo',
      'Mega Chute',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png'
  },

  {
    id: 107,
    nome: 'Hitmonchan',
    tipo: 'Lutador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Soco de Cometa',
      'Mega Soco',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png'
  },

  {
    id: 108,
    nome: 'Lickitung',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Enrolar',
      'Pisotear',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png'
  },

  {
    id: 109,
    nome: 'Koofing',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Cortina de Fumaça',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png'
  },

  {
    id: 110,
    nome: 'Weezing',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Lodo',
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png'
  },

  {
    id: 111,
    nome: 'Rhyhorn',
    tipo: 'Terrestre / Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Ataque de Chifre',
      'Ataque de Cauda',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
  },

  {
    id: 112,
    nome: 'Rhydon',
    tipo: 'Terrestre / Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Ataque de Chifre',
      'Pisotear',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
  },

  {
    id: 113,
    nome: 'Chansey',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Pancada',
      'Tapa duplo',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
  },

  {
    id: 114,
    nome: 'Tangela',
    tipo: 'Grama',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Contrair',
      'Absorver',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
  },

  {
    id: 115,
    nome: 'Kangaskhan',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Soco Cometa',
      'Raiva',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
  },

  {
    id: 116,
    nome: 'Horsea',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bolha',
      'Cortina de Fumaça',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
  },

  {
    id: 117,
    nome: 'Seadra',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Encarar',
      'Hidro bomba',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
  },

  {
    id: 118,
    nome: 'Goldeen',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Bicada',
      'Ataque de Cauda',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
  },

  {
    id: 119,
    nome: 'Seaking',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Ataque de Chifre',
      'Cachoeira',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
  },

  {
    id: 120,
    nome: 'Staryu',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Investida',
      'Arma de Água',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
  },

  {
    id: 121,
    nome: 'Starmie',
    tipo: 'Água / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Recuperar',
      'Hidro bomba',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
  },

  {
    id: 122,
    nome: 'Mr. Mime',
    tipo: 'Psíquico / Fada',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Confusão',
      'Barreira',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
  },

  {
    id: 123,
    nome: 'Scyther',
    tipo: 'Inseto / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Talho',
      'Dança das Espadas',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
  },

  {
    id: 124,
    nome: 'Jinx',
    tipo: 'Gelo / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Tapa',
      'Soco de Gelo',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
  },

  {
    id: 125,
    nome: 'Electabuzz',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Soco Trovoada',
      'Ataque Rápido',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
  },

  {
    id: 126,
    nome: 'Magmar',
    tipo: 'Fogo',
    hp: 400,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    habilidades: [
      'Soco de Fogo',
      'Lança Chamas',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
  },

  {
    id: 127,
    nome: 'Pinsir',
    tipo: 'Inseto',
    hp: 400,
    ataque: 800,
    defesa: 600,
    velocidade: 500,
    habilidades: [
      'Agarramento Compressor',
      'Arremesso Sísmico',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
  },

  {
    id: 128,
    nome: 'Tauros',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Investida',
      'Pisotear',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
  },

  {
    id: 129,
    nome: 'Magikarp',
    tipo: 'Água',
    hp: 200,
    ataque: 100,
    defesa: 400,
    velocidade: 500,
    habilidades: [
      'Borrifada',
      'Investida',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
  },

  {
    id: 130,
    nome: 'Gyarados',
    tipo: 'Água',
    hp: 300,
    ataque: 600,
    defesa: 500,
    velocidade: 300,
    habilidades: [
      'Fúria do Dragão',
      'Hidro bomba',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
  },

  {
    id: 131,
    nome: 'Lapras',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Arma de Água',
      'Névoa',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
  },

  {
    id: 132,
    nome: 'Ditto',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Transformar',
      'Transformar',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
  },

  {
    id: 133,
    nome: 'Eevee',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Investida',
      'Ataque Rápido',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
  },

  {
    id: 134,
    nome: 'Vaporeon',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Ataque Rápido',
      'Hidro bomba',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
  },

  {
    id: 135,
    nome: 'Jolteon',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Ataque Rápido',
      'Trovão',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
  },

  {
    id: 136,
    nome: 'Flareon',
    tipo: 'Fogo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Ataque Rápido',
      'Lança Chamas',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
  },

  {
    id: 137,
    nome: 'Porygon',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Investida',
      'Conversão',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
  },

  {
    id: 138,
    nome: 'Omanyte',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Arma de Água',
      'Retirada',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
  },

  {
    id: 139,
    nome: 'Omastar',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Arma de Água',
      'Ataque de Chifre',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
  },

  {
    id: 140,
    nome: 'Kabuto',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Arranhão',
      'Endurecer',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
  },

  {
    id: 141,
    nome: 'Kabutops',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Arranhão',
      'Talho',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
  },

  {
    id: 142,
    nome: 'Aerodactyl',
    tipo: 'Pedra / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Ataque de Asa',
      'Agilidade',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
  },

  {
    id: 143,
    nome: 'Snorlax',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Cabeçada',
      'Descansar',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  },

  {
    id: 144,
    nome: 'Articuno',
    tipo: 'Gelo / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Bicada',
      'Raio de Gelo',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
  },

  {
    id: 145,
    nome: 'Zapdos',
    tipo: 'Elétrico / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Choque do Trovão',
      'Bicada Broca',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
  },

  {
    id: 146,
    nome: 'Moltres',
    tipo: 'Fogo / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Bicada',
      'Roda de Fogo',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
  },

  {
    id: 147,
    nome: 'Dratini',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Enrolar',
      'Onda Trovão',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
  },

  {
    id: 148,
    nome: 'Dragonair',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Enrolar',
      'Encarar',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
  },

  {
    id: 149,
    nome: 'Dragonite',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    habilidades: [
      'Dança do Dragão',
      'Velocidade Extrema',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
  },
  {
    id: 150,
    nome: 'Mewtwo',
    tipo: 'Psíquico',
    hp: 700,
    ataque: 700,
    defesa: 600,
    velocidade: 800,
    habilidades: [
      'Confusão',
      'Inabilitar',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
  },

  {
    id: 151,
    nome: 'Mew',
    tipo: 'Psíquico',
    hp: 600,
    ataque: 600,
    defesa: 600,
    velocidade: 600,
    habilidades: [
      'Pancada',
      'Transformação',

    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
  },
];

export default pokemons;
