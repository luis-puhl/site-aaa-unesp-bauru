Termo de Abertura de Projeto
============================

# Título

**Site Associação Atlética Acadêmica Unesp Bauru**

---
# Descrição do Projeto

Construção do Site Informativo da AAA Unesp Bauru.

O motivo desta construção é que ainda não existe um site que apresente informações
aos atletas e interessados.

Com ele temos o objetivo de transmitir as informações sobre Treinos, Fotos de Eventos,
Administração, Parceiros e Produtos.

---
# Envolvidos

## Desenvolvedor

Neste documento o **Desenvolvedor** se refere à **Luís Henrique Puhl de Souza**, Brasileiro,
identificado no Cadastro de Pessoa Física (CPF) do Ministério da Fazenda sob o número: <input
type="text">, residente à <input type="text" size="140">, Jd. Brasil, Município de Bauru, Estado de
São Paulo, acessível pelo email <input type="text"> e pelo número de telefone, *WhatsApp* e
*Telegram* <input type="text">.

## Contratante

Da mesma forma, neste documento a **Contratante** se refere à **Associação Atlética Acadêmica da
Unesp Bauru**, ~~organização estudantil e desportiva~~, inscrita no Cadastro Nacional de Pessoas
Jurídicas (CNPJ) do Ministério da Fazenda sob o número: ~~CNPJ~~, com  sede no Prédio dos Centros
Acadêmicos da Unesp Bauru, Av. Eng. Luiz Edmundo Carrijo Coube, 14-01, Núcleo Residencial Presidente
Geisel, CEP 17033-360, Município de Bauru, Estado de São Paulo.

A Contratante é representada por ~~Nome dos Diretores~~.

---
# Condições de Entrega

Para que o projeto seja considerado concluído, os seguintes pontos devem ser realizados:

- Atender os Requisitos de Design, estipulados pela Contratante em documento;
- URL do site hospedado, acessível também por busca no *Google*;
- Definição formal de como o conteúdo do mesmo será mantido após a entrega.

## Requisitos Iniciais

<p id="requisitos-iniciais">
Este tópico descreve a estrutura inicial solicitada pela Contratante.
</p>

- Conteúdo Informativo do site:
	- Sobre AAA Unesp Bauru;
	- Gestões:
		- Atual;
		- Velha Guarda.
	- Treinos:
		- Atletismo
		- Handebol
		- Tênis Mesa
		- Basquete
		- Judô
		- Vôlei
		- Futcampo
		- Natação
		- Vôlei de Praia
		- Futsal
		- Tênis Campo
		- Xadrez
	- Torcidas:
		- Naumteria;
		- Febre Amarela;
		- Texuguetes;
	- Produtos;
	- Clube de Parceiros;
	- Galeria de Eventos:
		- Baticun;
		- Texugo da Páscoa;
		- Doa Unesp;
	- Contato:
		- Endereço e Mapa;
		- Mídias Sociais.
- Aquisição do Domínio (http://www.atleticaunespbauru.com.br/);
- Google Analytics;

# Recursos

Este tópico descreve os recursos que deverão ser fornecidos para a execução do projeto.

## da Contratante

- Identidade Visual Existente AAA Unesp Bauru
	- Logo Vetorial "A azul e branco";
	- Fontes do logotipo;
	- Paleta de cores;
	- Ícones de Mídia social.
- Fotos dos:
	- Quadro de explicação;
	- Gestões:
		- Atual;
		- Velha Guarda:
			- Uma Foto por gestão;
	- Modalidades (Treinos);
	- Torcidas (logo de cada instituição):
		- Naumteria;
		- Febre Amarela;
		- Texuguetes;
	- Produtos;
	- Logotipos do "Clube de Parceiros";
	- Galerias de eventos;
- Textos de Apresentação:
	- Sobre AAA;
	- Gestão Atual;
	- Velha Guarda:
		- Uma por gestão;
		- *"nome e diretoria dos membros e velha guarda"*;
	- Treinos:
		- *"informações sobre os treinos de cada modalidade"*;
	- Torcidas:
		- Um texto por torcida;
	- Galeria de Eventos:
		- Nome de cada evento/album;
- Informação de Contato:
	- Localização
		- Endereço;
		- Mapa;
		- Foto fachada;
	- Mídias Sociais (URLs);

## do Desenvolvedor

Site com os conteúdos descritos em [Requisitos Iniciais](#requisitos-iniciais) hospedado na
plataforma escolhida pela Contratante.

### Aquisição de Plataformas / Servidores

Os passos considerados para aquisição de uma plataforma são:

- Compra do domínio:
	- Registro do nome;
	- Registro de certificado SSL.
- Serviço de hospedagem para o site:
	- Custo de hospedagem;
	- Custo de manutenção (CMS).
- Serviço de hospedagem para Fotos e Documentos (CDN):
	- Juntamente com o site, maior consumo de banda;
	- Google Photos: 100 GB de armazenamento gratis.

Para a escolha de hospedagem do site e os seus recursos associados, 3 plataformas são propostas. Em
cada uma delas existe variação de custo de aquisição, hospedagem, modelo de desenvolvimento e custo
de desenvolvimento.

Os custos a partir de hospedagem gratuita são:

| Plataformas				| GitHub-Pages			| Hostinger				| Google FireBase		|
| ----------------- 		|:-------------------:	|:--------------:		|:---------------------:|
| Domínio					| .github.io			| .com.br				| .com.br				|
| Custo hospedagem¹			| Grátis (100 GB/m)		| Grátis (100 GB/m)		| Grátis (10 GB/m)		|
| Registro Domínio			| não oferece			| R$ 67.58 (Hostinger)	| R$ 45.90 (godaddy)	|
| Registro SSL				| Grátis (github)		| R$ 23.99 (Comodo)		| Grátis (google)		|
| CMS 						| Jekyll (github)		| WP (PHP)				| Polymer (firebase)	|
| CDN (fotos, documentos)	| Google Drive/Photos	| GD/GP ou uso de banda	| GD/GP ou firebase <br> (Grátis 1GB/dia, 50k op)	|
| Tempo Desenvolvimento		| 20 horas				| 100 horas				| 100 horas				|

**¹:** *Cada acesso único utiliza aproximadamente 1 MB de transmissão de dados, portanto nas camadas
grátis das plataformas acima são 100 mil, 100 mil e 10 mil acessos grátis por mês, respectivamente.*

Estes limites de acesso na hospedagem gratuita indicam que  após o uso da franquia máxima desses
recursos é necessário pagar o serviço de hospedagem. A plataforma GitHub-Pages não oferece uma opção de hospedagem paga.

| Plataformas	| Hostinger	| Google Flame (USD)| Google Blaze (USD)|
| -----------	|:---------:|:---------:		|:---------:		|
| Custo mensal	| R$ 7		| USD $ 25			| Pay as you go		|
| Armazenamento	| ilimitado	| 10 GB				| $ 0,026/GB		|
| Rede			| ilimitado	| 50 GB/m			| $ 0,15/GB			|
| CDN Arm.		| ilimitado	| 50 GB				| $ 0,026/GB		|
| CDN Rede		| ilimitado	| 50 GB/m			| $ 0,12/GB			|
| Desenvolvimento| 500 horas| 100 horas			| 100 horas			|

---
# Restrições

## Open-Source / NDA

Escolher a opção Open Source significa deixar o código fonte do site disponível para outras pessoas
verem e acessar. Algumas das vantagens dessa escolha são: o serviço de hospedagem do Github totalmente gratuito e com
as coberturas de segurança (SSL) e diminuir o tempo de desenvolvimento.

Escolher a opção de privado acarreta em custos e maior esforço e tempo de desenvolvimento. A escolha
do Github como hospedagem privada possui custos, a outra saída que seria hospedar o site em outro
lugar, como o Firebase, acarreta em menores custos, porém num esforço e tempo de desenvolvimento
maior.

## Suporte pós-projeto

Em contrato separado.

---
# Pontos de Entrega

Em aberto.

---
# Orçamento / Prazo

| Plataforma					| Github				|	Hostinger				|	Google Firebase 				|
| ----------					| :----------:			| :----------:				| :----------:						|
| CMS							| Jekyll				| WordPress / PHP / Angular	| Polymer / Angular					|
| Tempo de desenvolvimento		| 20 horas				| 100 horas					| 100 horas							|
| Custo por hora				| R$ 15/hora			| R$ 20/hora				| R$ 10/hora						|
| **Custo de desenvolvimento**	| **R$ 300,00**			| **R$ 2 000,00**			| **R$ 1 000,00**					|
| Domínio (anual)				| R$ 0					| R$ 91,57					| R$ 44,99							|
| Servidores Free				| R$ 0 *(100k acessos)*	| R$ 0 *(100k acessos)*		| R$ 0	*(10k acessos)*				|
| Servidores Pagos (mensal)		| Não disponível		| R$ 6,99 					| R$ 80	(USD $25) ou *On-Demand*	|
