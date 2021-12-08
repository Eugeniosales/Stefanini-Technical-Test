<h1 align="center">
Stefanini Technical Test
</h1>

<p align="center">API Node.js que implementa um CRUD para gestão de funcionários. </p>

<hr>

## Execução dos testes unitários com Docker

1. Efetue o download do repositório e e entre na raiz do diretório:
``` bash
$ git clone https://github.com/Eugeniosales/Stefanini-Technical-Test.git

$ cd Stefanini-Technical-Test/
```

2. Construa a imagem docker e inicie os testes:

``` bash
$ sudo docker build -t employee-api .

$ sudo docker run -p 3000:3000 -it employee-api
```

## Utilização da API Employee

### URL Base

```
https://9dn6csmncl.execute-api.us-east-1.amazonaws.com/dev
```

Todas as respostas tem o formaato:

```json
{
    "data": "Conteúdo da resposta",
    "message": "Descrição da resposta"
}
```

As respostas subsequentes irão definir em detalhes o valor do `campo data`.

### Listagem de funcionários

**Definição**

`GET /employees`

**Resposta**

- `200 success.` em caso de sucesso

```json
{
    "data": [
        {
            "id": "22590ea0-57bd-11ec-85c7-3751d5c35a66",
            "age": 25,
            "name": "Gabriel",
            "role": "Analista de marketing"
        },
        {
            "id": "6cb6d680-57bd-11ec-a3ff-b51f63f6a451",
            "age": 24,
            "name": "Lennon",
            "role": "Analista de sistemas"
        }
    ],
    "message": "success."
}
```


### Criação de funcionário

**Definição**

`POST /employee`

**Headers**
- `Content-Type: application/json`

**Body**

- `"age":int` idade do funcionário
- `"name":string` nome do funcionário
- `"role":string` cargo do funcionário

**Resposta**

- `200 success.` em caso de sucesso

```json
{
    "data": {
        "id": "fdb73100-57d3-11ec-8974-a1d547655ef7",
        "age": 40,
        "name": "John Doe",
        "role": "Engineer"
    },
    "message": "success."
}
```

### Encontrar funcionário específico

**Definição**

`GET /employee`

**Params**
- `"id": string` identificador único do funcionário

**Resposta**

- `200 success.` em caso de sucesso
- `404 not found.` em caso do usuário não existir

```json
{
    "data": {
        "id": "458a72e0-57d3-11ec-b3ea-03d123e4dbe8",
        "age": 40,
        "name": "John Doe",
        "role": "Engineer"
    },
    "message": "success."
}
```

### Remoção de funcionário

**Definição**

`DELETE /employee`

**Params**
- `"id": string` identificador único do funcionário

**Resposta**

- `200 success.` em caso de sucesso
- `404 not found.` em caso do usuário não existir

```json
{
    "data": {},
    "message": "success."
}
```

### Atualização de funcionário

**Definição**

`PUT /employee`

**Params**
- `"id":string` identificador único do funcionário

**Headers**
- `Content-Type: application/json`

**Body**

- `"age":int` idade do funcionário
- `"name":string` nome do funcionário
- `"role":string` cargo do funcionário

**Resposta**

- `200 success.` em caso de sucesso

```json
{
    "data": {
        "id": "458a72e0-57d3-11ec-b3ea-03d123e4dbe8",
        "age": 42,
        "name": "John Doe",
        "role": "Engineer"
    },
    "message": "success."
}
```

## Observações

### Clean Architecture

<p align="center">
    <img src="./images/clean_archicteture.png" alt="Logo" width=600>
</p>

A arquitetura da aplicação seguiu o Clean Architecture. De acordo a figura acima, os módulos possuem a seguinte correspondência:

* [domain](./src/domain): Enterprise Business Rules
* [application](./src/application): Application Business Rules
* [interfaces](./src/interfaces): Interface adapters
* [infrastructure](./src/infrastructure): Framework & Drivers

### Infra

* A API foi provisionada em um infraestura serverless com o Lambda e o DynamoDB (NoSQL) na AWS.
* Para o provionamento da infraestrura foi utilizado o Serverless Framework.

## Referências

* [Clean Architecture - jbuget](https://github.com/jbuget/nodejs-clean-architecture-app)
* [Docker](https://docs.docker.com/engine/install/ubuntu/)