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