import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

import { HomeModule } from './home-module'
import { PostsModule } from './posts-module'

export const AtleticaStore = new Vuex.Store({
  state: {
    posts: [
      {
        'id': 'gestao-2017',
        'conteudoModal': `Gestão Vivá - 2017\n\n**Presidente:** Flávio dos Santos (Negão)\n\n**Vice-Presidente:** Danilo Lysei (Dan)\n\n**Secretaria:** Helena Ortega\n\n**Tesouraria:** Matheus Gomyde (Tati)\n\n**Gestão de Pessoas:** Amanda Geraldini (Feb)\n\n**Diretoria de Esportes:** Ana Júlia Delgado (Donzela), Arthur Monteiro Costa (México), Bianca Velo (Produção), Bruno Sartori, Luiz Alberto Domingos (Dodô), Rômulo Dantas (Grillo)\n\n**Diretoria de Comunicação:** Ana Carolina M. Alves (Anac), Ana Flores, Ariele Lobo (Dendê), Gabriela Staffa (Gabi), Matheus Souza (Math)\n\n**Diretoria de Ação Social:** Isabella Carvalho (Isa), Larissa Duarte (Botafogo)\n\n**Diretoria de Patrocínio:** Aline Begiato, Beatriz Santos (Alci), Giulia Mello (Dilma)\n\n**Diretoria de Patrimônio:** Laura Bernardi (Samara), Maria Eduarda Delfino (Borel)\n\n**Diretoria de Eventos:** Marcos Rezende (Veneno), Pedro Paulo Freire (Pedroca), Vanessa Kato (Tango), Vinícius Confessor (Dibre), Vinícius Silano (Cunhado)\n\n**Diretoria de Externos:** Bruna Moura (Bru), Felipe Xavier (Walesca), Gabriel Mazzafera (Galo), Guilherme Saito Gobbi (Pacu), Helena Salla (Lena), Henrique Alcântara (Raí), Manuela Sanches (Manu), Pedro Mendonça (Lugano)`,
        'img': 'https://i.imgur.com/QMD4iHm.jpg',
        'nome': 'Gestão 2017'
      }, {
        'id': 'gestao-2016',
        'conteudoModal': `Gestão Gaia - 2016:\n\n**Presidente:** Henrique Alcântara (Raí);\n\n**Vice-Presidente:** Manuela Sanches (Manu);\n\n**Secretaria:** Gabriela Monteiro (Lala);\n\n**Tesouraria:** Matheus Gomyde (Tati)\n\n**Gestão de Pessoas:** Jaqueline Yumi Seki (Jaque), Maria Luísa Mangiolardo (Malú);\n\n**Diretoria de Esportes:** Flávio dos Santos (Negão), Guilherme Silano (Silano), Rômulo Dantas (Grillo), José Vinícius Bonfim (Zé);\n\n**Diretoria de Comunicação:** Amanda Geraldini (Feb), Ana Carolina M. Alves (Anac), Ariele Lobo Gomes (Dendê), Danilo Lysei (Dan), Nícolas Alves (Messias);\n\n**Diretoria de Ação Social:** Isabella Carvalho (Isa);\n\n**Diretoria de Patrocínio:** Fernanda Trostdorf (Beyblade), Thiago Cosin (Thiago);\n\n**Diretoria de Patrimônio:** Jacqueline Nusch (Holla);\n\n**Diretoria de Eventos:** Bianca Velo (Produção), Bruno Leite (Xorume), Gabriel Rebolla (Ex-Gordo), Lucas Rocha (Popô)\n\n**Diretoria de Externos:** Bruna Moura (Bru), Caroline Guerra (Carol), Guilherme Saito (Pacu).`,
        'img': 'https://i.imgur.com/cXNO6D1.jpg',
        'img2': 'https://i.imgur.com/PHD0Ur5.jpg',
        'nome': 'Gestão 2016'
      },
      {
        'id': 'produto-Blusa',
        'img': 'https://i.imgur.com/Rep4GdT.png',
        'nome': 'Blusa'
      },
      {
        'id': 'produto-Moletom',
        'img': 'https://i.imgur.com/7JJkjR9.png',
        'nome': 'Moletom'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    HomeModule,
    PostsModule
  },
  strict: debug
})
