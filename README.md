# site-aaa-unesp-bauru

> Site da Associação Atletica Acadêmica da Unesp de Bauru [take 4].

# TODO (discutido em 4 de agosto, 2017-08-4)

## Itens avaliados pela diretoria

- [ ] :construction: Retângulo na base do A-AAA + claro que o fundo -> Fundo da imagem era amarelo, agora é transparente;
- [ ] :newspaper: Bateria e texuguetes não são torcida, colocar na 'instituições Unesp Bauru';
- [ ] :construction: Buraco ao lado da foto Gestçao 2015;
- [ ] :newspaper: Judô falta acento;
- [ ] :newspaper: Grafia correta é Naumteria (no site está errado, [:warning:nauteria:warning:]);
- [ ] :newspaper: Alguns nomes de parceiros estão errados;
- [ ] :newspaper: Foto da gestão 2017 está errada;
- [ ] :newspaper: Secretaria: Beatriz Scursoni (viola)
- [ ] :newspaper: Faltam parceiros;
- [ ] :construction: Demora [mto] para carregar as fotos (na infraestrutura da google);
- [ ] :construction: A foto de 2014 não está alinhada -> problema com o tamanho do tile;
- [x] :construction: Localização não está correto -> [Verificar posse no google my business](https://goo.gl/maps/xtQp7bpKhb42);

## Itens avaliados na reunião

- Cassificação dos itens da diretoria em:
  - **:newspaper: conteúdo:** serão resolvidos com o editor de conteúdo,
  - **:construction: estrutura:** .
- [ ] :construction: Imagem dos posts no [Imgur.com](imgur.com) como parte da solução para o tempo de carregamento da página;
- [ ] :construction: Conteúdo e Componentes em production (www.atleticaunespbauru.com.br):
  - [ ] Componente Tile,
  - [ ] Pagina principal com todas as seções,
  - [ ] Componente Modal (talvez vire uma página),
- [ ] :construction: Editor de conteúdo:
  - [ ] Editor de posts,
  - [ ] Login,
  - [ ] Pemissão de usuários,
- [ ] **:newspaper: Corrigir conteúdo**;
- [ ] :construction: Otimização de carregamento:
  - [ ] Dados estáticos para o first-load (placeholders na store),
  - [ ] Bibliotecas em CDN,
  - [ ] Fotos em CDN (imgur),
  - [ ] Fotos responsivas à rede (blur inicial),
- Dead-lines :skull:
  - [ ] Apresentação do funcionamento do site (atulazações) para o pessoal de comunicação da Atlética em 2017-08-18 (em 2 semanas);
  - [ ] Entrega final do site em 2017-08-25 (em 3 semanas);

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
