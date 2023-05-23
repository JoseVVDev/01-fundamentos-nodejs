## Stream de escrita e transformação
    precisa enviar os dados em forma de buffer

    readable, Writable e Transform

    primeiro parâmetro de um callback é o erro

## Aplicando Streams no módulo HTTP
    Tudo no node são streams
        req = readable stream
        res = writable stream

## Entendendo Buffers no Node
    Buffer é uma maneira mais eficiente/performática de ser ler e escrever algo em memoria conversando de uma maneira binária (baixo nível de computação)

## Persistindo banco de dados
    __dirname e __filename não existem quando se usa o "type": "module" no package.json

## Route e Query parameters
    existem 3 formas de enviar informações para qualquer aplicação que esteja consumindo nossa API e enviar informações para a mesma

    - Query parameters : URL Stateful => filtros, paginação, não obrigatórios
      - http://localhost:3333/users?userId=1&name=jose

    - Route parameters : Identificação de recurso
        - GET http://localhost:3333/users/1 : 'GET' - Método | 'http://localhost:3333/*users*'- Recurso | '/1' - route parameter (parâmetro)
        - DELETE http://localhost:3333/users/1 

    *Como ambos Query e Route parameters ficam na URL não são boa opções para envio de informações sensíveis*
 
    - Request Body : Envio de informações de um formulário (HTTPs)
      - POST http://localhost:3333/users