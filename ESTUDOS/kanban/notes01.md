# ANOTAÇÕES DAS AULAS GRAVADAS

**04 / 01 / 2024 - Vinicius Passos**

## KANBAN: Exercício de Kanban

*DICA:* O ideal é começar pelo modelo que não dependa de nada. Neste exemplo, começamos pelo 'User', e depois criamos a 'Task'. Aqui, o preenchimento (populate) está sendo feito na 'Task' para sabermos qual 'User' está trabalhando naquela tarefa cadastrada.

Podemos começar pelo 'package.json', que cuida do gerenciamento de pacotes:

```
npm init -y
```

Com isso, podemos instalar o TypeScript, além de instalar o ts-node-dev para escutar a aplicação rodar:

```
npm install typescript -D

# e

npm install ts-node-dev -D
```

Logo após instalar da parte do TypeScript, podemos inicializar o TS com o seguinte código:

```
npx tsc --init
```

Configure o "Script" no arquivo 'package.json' usando o seguinte código:

```
"scripts": {
  "dev": "tsnd --respawn pasta_do_arquivo/nome_do_arquivo(server / index / app).extensao_arquivo(ts)"
}
```

*DICA:* Aqui, já podemos criar nossa pasta 'src', onde podemos iniciar o primeiro arquivo (server / index / app).ts.

**CURIOSIDADE:** '--respawn' serve para monitorar todos os arquivos do projeto, não apenas o que você especificou.

Agora faz mais sentido configurar o ESLint, Prettier e EditorConfig.

### ESLINT + PRETTIER + EDITORCONFIG:
Adicione ao arquivo 'package.json', na seção de devDependencies, os seguintes códigos:

```
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "^6.13.2",
  "eslint": "^8.55.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-config-standard-with-typescript": "40.0.0",
  "eslint-plugin-import": "^2.29.0",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^6.1.1",
  "prettier": "3.1.0"
}
```

Depois de colar no arquivo, execute no terminal o código de instalação para adquirir essas bibliotecas inseridas manualmente:

```
npm i

# ou

npm install
```

Com todas essas dependências instaladas, crie um arquivo na raiz do projeto chamado '.prettierrc' e insira estas configurações:

```
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}
```

Também é necessário criar o '.editorconfig', passando essas configurações:

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

E, por fim, crie o arquivo, também na raiz do projeto, '.eslintrc.json', inserindo estas configurações:

```
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": ["standard-with-typescript", "prettier"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/consistent-type-imports": "off"
  }
}
```

*OBS.* : Todos os arquivos de config, estão na raiz do projeto.

**^ Video 00:23:01 ^**

### Iniciando o SERVIDOR:

Para começarmos esta etapa, é necessário instalar o Express. A biblioteca do Express precisa ser tipada para funcionar corretamente, então também precisamos baixar os tipos de express. Utilize os seguintes códigos no terminal:

```
npm install express

#e

  npm install @types/express -D

#ou

npm i --save-dev @types/express
```

Após a instalação da biblioteca e das tipagens, podemos iniciar a configuração do servidor.

Criamos o aplicativo do Express e utilizamos app.use para fazer o servidor entender arquivos '.json'. Isso é feito no arquivo 'app.ts', exportamos para o 'server.ts' e configuramos a parte de escutar o servidor com app.listen(porta, (conexão) => console.log('Tudo OK')).

Podemos rodar para teste com:

```
npm run dev
```

*DICA* : Sempre que formos instalar uma nova biblioteca, é altamente recomendável parar o servidor com 'Ctrl ^ C' ou 'Crtl ^ Z', e após a instalação, reiniciar o servidor.

*OBS.* : Os arquivos de servidor, estão na pasta src/app.ts e server.ts.

### Iniciando o BANCO DE DADOS:

Para trabalharmos com banco de dados, precisamos instalar o Mongoose. Utilize este código no seu terminal:

```
npm install mongoose --save
```

*DICA* : Podemos também baixar a biblioteca 'dotenv' para armazenar dados confidenciais do nosso projeto. Utilize este código no terminal para instalar a biblioteca:

```
npm install dotenv --save
```

Após a instalação, criamos um arquivo '.env', no qual podemos inserir, por exemplo, uma URL do MongoDB. Para utilizarmos o arquivo, devemos importá-lo usando 'import 'dotenv/config';', e para acessar as variáveis armazenadas nele, utilizamos assim: 'process.env.PORT'. Neste caso, 'PORT' é a variável, e as variáveis de ambiente são escritas totalmente em letras maiúsculas.

Após a instalação do 'mongoose', criamos um arquivo 'index.js' na pasta de 'database'.

**^ Video 00:35:50 ^**

Após a criação do arquivo, estabeleço a conexão com o banco de dados e exporto o objeto 'mongoose' para uso em outras partes do meu projeto.

*OBS.* : A abordagem adotada ao criar o 'mongoose' no 'src/database/index.ts' é projetada para permitir o uso em todo o projeto. Desta forma, tenho em toda a minha aplicação apenas uma instância da conexão com o meu banco de dados. Estou essencialmente encapsulando a conexão em uma variável, mantendo apenas uma instância.

### Iniciando os MODELS:

Vamos começar com o modelo 'Users', pois, como já anotamos, como ele não depende da 'Task', é mais simples começar por ele. Importamos o mongoose do módulo de database, construímos o Schema e, em seguida, criamos o model, fornecendo o nome da 'collection' e o schema.

Podemos criar o modelo para 'Tasks', seguindo os mesmos princípios do primeiro modelo.

*DICA* : Os modelos podem ser verificados neste caminho - ARNIA/kanban/src/models/Tasks.ts ou Users.ts.

**^ Video 01:04:14 ^**

### Iniciando os ROUTES:

Neste estágio, começamos criando um arquivo 'index.ts' e a rota do usuário 'user.routes.ts'. Dentro de 'routes', utilizo a função 'Router' do 'express' para criar uma rota de post. Após isso, exportamos como padrão o 'router'.

**CURIOSIDADE** : Ao exportar com 'default', podemos alterar o nome da variável sendo exportada, enquanto sem 'default', essa flexibilidade não existe.

Importamos isso para o 'index.ts', utilizando o 'useRoutes' (router exportado do arquivo 'user.router.ts', importado como padrão) e passamos pelo uso da função 'Router' do 'express', também informando o endereço, neste caso, '/users'. Importamos novamente para o arquivo 'app.ts'.

A partir deste ponto, já estamos lidando com nossas requisições. Retornamos ao arquivo 'user.routes.ts' e enviamos a resposta para a requisição feita pelo cliente, neste caso, o Insomnia.

```
response.status(200).send({ ok: true });
```

Assim, conseguimos receber uma requisição:

```
const { name, email, password } = request.body
```

E enviar uma resposta para essa requisição:

```
response.status(200).send({ name, email, password });
```

**^ Video 01:18:53 ^**

### Iniciando as validações com YUP:

Iniciando as Validações com YUP:
Para começarmos a validar as requisições, utilizamos a biblioteca YUP. Para instalá-la, utilize o seguinte comando no terminal:

```
npm install yup

#e importamos assim:

import * as Yup from 'yup';
```

Após a instalação da biblioteca, podemos construir o 'Schema.Yup' para validar o que está vindo da requisição antes de entrar no banco de dados.

exemplo:

```
const userBodySchema = Yup.object({
  name: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8)
});
```

Estamos estabelecendo que para os dados serem cadastrados, é necessário seguir algumas regras. No campo 'email', por exemplo, as regras são ser uma string, ser obrigatório ter algo escrito e ser um e-mail (características de e-mail).

Também criamos um bloco Try-Catch para proteger nossa aplicação.

Agora, conseguimos cadastrar um usuário em nosso banco de dados, com uma certa segurança em relação ao que está sendo inserido em nosso DB.

**^ Video finalizado ^**
