# site-aaa-unesp-bauru

> Site da Associação Atletica Acadêmica da Unesp de Bauru [take 4].


# Tretas
- [ ] Navegação por ID e por FirebaseKey (por id funciona, mas quero por chave para economizar os ids)
- [ ] Seleção de seções (componente post-editor)
- [ ] Editor de seções (componente sections-editor)
- [ ] Guard para posts (firebase rules)
- [ ] Visualizar admins (vuex e firebase api)
- [ ] Promover Usuário (componente, store, firebase)

# TODO (discutido em 4 de agosto, 2017-08-4)

## Itens avaliados pela diretoria

- [x] :question::construction: Retângulo na base do A-AAA + claro que o fundo -> Fundo da imagem era amarelo, agora é transparente;
- [ ] :newspaper: Bateria e texuguetes não são torcida, colocar na 'instituições Unesp Bauru';
- [ ] :construction: Buraco ao lado da foto Gestão 2015;
- [x] :question::newspaper: Judô falta acento;
- [x] :question::newspaper: Grafia correta é Naumteria (no site está errado, [:warning:nauteria:warning:]);
- [ ] :newspaper: Alguns nomes de parceiros estão errados;
- [ ] :newspaper: Foto da gestão 2017 está errada;
- [ ] :newspaper: Secretaria: Beatriz Scursoni (viola)
- [ ] :newspaper: Faltam parceiros;
- [ ] :construction: Demora [mto] para carregar as fotos (na infraestrutura da google);
- [ ] :construction: A foto de 2014 não está alinhada -> problema com o tamanho do tile;
- [x] :question::construction: Localização não está correto -> [Verificar posse no google my business](https://goo.gl/maps/xtQp7bpKhb42);

## Itens avaliados na reunião

- Classificação dos itens da diretoria em:
  - **:newspaper: conteúdo:** serão resolvidos com o editor de conteúdo,
  - **:construction: estrutura:** .
- [x] :construction: Imagem dos posts no [Imgur.com](imgur.com) como parte da solução para o tempo de carregamento da página;
- [ ] :construction: Conteúdo e Componentes em production (www.atleticaunespbauru.com.br):
  - [x] Pagina principal com todas as seções,
  - [ ] Componente Tile:
    - [x] Controle do número de colunas;
    - [x] Fix tamanho das fotos:
      - [x] Tiles com Tamanho padrão [position absolute](http://www.dwuser.com/education/content/creating-responsive-tiled-layout-with-pure-css/);
      - [ ] Cortar as fotos para um tamanho fixo.
    - [ ] Use grid layout;
  - [x] ~~Componente Modal (talvez vire uma página)~~ Componente Postagem,
- [ ] :construction: Editor de conteúdo:
  - [x] Editor de posts,
  - [x] Salvar no banco de dados,
  - [x] Login,
  - [x] Permissão de usuários,
- [ ] **:newspaper: Corrigir conteúdo**;
- [ ] :construction: Otimização de carregamento:
  - [ ] Dados estáticos para o first-load
    - [x] Dados estáticos;
    - [x] Uso do vuex Store;
  - [ ] Bibliotecas em CDN (**?**),
  - [x] Fotos em CDN (imgur),
  - [ ] Fotos responsivas à rede (blur inicial),
- Dead-lines :skull:
  - [ ] Apresentação do funcionamento do site (atulazações) para o pessoal de comunicação da Atlética em 2017-08-18 (em 2 semanas);
  - [ ] Entrega final do site em 2017-08-25 (em 3 semanas);
- Bugs conhecidos:
  - **Menu**
    - [x] Menu não desaparece quando um item é selecionado;
    - [x] Menu fica por cima de alguns items;
  - **Pagina principal**
    - [x] Os Tiles tem tamanhos diferentes;
    - [x] PWA não carrega '/'
    - [x] No celular tem muito espaço depois do logo horizontal

# Lighthouse Reports

 - 28-08-2017:
  - *PWA*: 100%
  - *Performance*: 36%
    - 5.9s para o primeiro desenho;
    - 10+s para carregar;
    - *Onde melhorar*:
      - [ ] Imagens menores (3.8s)
      - [ ] Não carregar imagens fora da tela inicial (2s)
      - [ ] Reduzir estilos que bloqueiam a renderização (1.2s)
  - *a11y*: 100%
  - *Best Practices*: 92% (google maps)


# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
