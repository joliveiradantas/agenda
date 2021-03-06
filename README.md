### Agenda ###

by [Janile Dantas](https://www.linkedin.com/in/janile-oliveira-dantas-60211411b/)

## Quick Start

1. Clone o repositório

   ```bash
   git clone https://github.com/joliveiradantas/agenda.git
   cd agenda
   ```

2. Instale as dependências

   ```bash
   npm install
   ```

3. Bote a app pra rodar! :)

   ```bash
   npm run dev
   ```

## Rotas

 ```bash
   /
 ```        
 Página inicial da Agenda;

```bash
   /contatos
```        
Página da lista de contatos da Agenda - (o efeito do highlight para o o contato que é adicionado acontece quando o mesmo é adicionado nesta rota);

## Problemas ou Sugestões

[Abra uma issue aqui](https://github.com/joliveiradantas/agenda/issues)

## Requerimentos

- Listagem sem nenhum contato;
- Listagem com contatos preenchidos;
- Modal de criação de contato;
- Após adicionar um contato, ele deverá apresentar um highlight de 10 segundos;
- Botão salvar deverá estar desabilitado até que qualquer um dos campos seja preenchido;
- Modal de edição de contato;
- Modal de confirmação de exclusão;
- Buscar contatos inseridos na tela.

## Extras

- Quando o usuário pesquisa ou deleta um contato, os elementos que deixam a lista apresentam um efeito;
- A lista de contatos está ordenada por ordem alfabética;
- Os contatos adicionados que tenham a primeira letra dentro do intervalo [i-z] terão a cor do oval igual a orange(#fa8d68);
- Validação do campo "E-mail";
- Os 3 campos (Nome, E-mail, Telefone) são requeridos;
- Máscara para o campo telefone;

## TODO

- Aplicação de testes unitários e e2e;
- Adaptar o layout para o design responsivo;
