# ANOTAÇÕES DAS AULAS GRAVADAS

**05 / 01 / 2024 - Vinicius Passos**

## KANBAN: Exercício de Kanban


### Iniciando o UTILS:

Aqui, crio uma pasta 'utils' e dentro dela um arquivo 'typedRequest.ts', onde desenvolvo uma 'interface'. Basicamente, estamos aplicando tipagem ao 'request', criando parâmetros que têm inferência passada anteriormente:

Inferencia:
```
Body extends ISchema<any, any, any, any> = any,
```

Parametro:
```
  body: yup.InferType<Body>
```

### Iniciando o MIDDLEWARE:

No middleware, construímos o 'validate.ts', onde na minha rota eu passo um 'schema' para validar. O meu 'schema' precisa estar dentro da tipagem do 'UTILS', pois quero validar o body, query e os params. Se a validação for bem-sucedida, ela passará para o 'Next()'. Exportamos e utilizamos na rota:

```
router.post('/', validate(Passando o meu 'namespace.create.User.schema.ts'), async (request, response) => { ... } );
```

Com isso, estou validando o meu schema.Yup, eliminando a necessidade do meu bloco 'tryCatch'.

Ao retirar o 'tryCatch', meu servidor quebra em caso de cadastro, por exemplo, de um email que já está no banco de dados.

**^ Video 00:23:01 ^**

**DICA : GIT - Padronização de commits**

 - feat : Uma nova feature (recurso) que você está adicionando a uma aplicação específica.
 - fix : A resolução de um bug.
 - style : Recurso e atualizações relacionadas à estilização.
 - refactor : Refatoração de uma seção específica da base de código.
 - test : Tudo o que for relacionado a testes.
 - docs : Tudo o que for relacionado à documentação.
 - chore : Manutenção regular do código.

(Você também pode usar emojis para representar os tipos de commit).

!!Pesquisar sobre commitlint!!

### Iniciando a AUTETICAÇÃO:

Aqui ja partimos com a criação de uma rota especifica para isso, em um arquivo seprado, pois estamos priorizando deixar movimentos que seja diretos com o usúario, tipo: criar, deletar, editar e e listar, apenas na rota de user, como autenticar é mais generico, fazemos em outra rota, podendo ter o logalty junto que ficaria mais separado as funções de cada um.

**BCRYPT**: Tambem iremos utilizar a biblioteca 'bcrypt', para pegar a nossa senha e cryptografar ela, trazendo mais segurança ao nosso user. Utilizando a função 'hash', passando a senha e a quantidade de vezes que sera "embaralhada", numero padrão é 8, mas pode ser mais ou menos.

**JWT**: Após, iremos utilizar a biblioteca jsonwebtoken, para criar um token usando para as demais requisições.

**^ Video finalizado ^**
