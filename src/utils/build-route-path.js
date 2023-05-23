export function buildRoutePath(path) {
    //regex para encontrar o parâmetro :id ( dois pontos ':' mais 'palavra'), :name ou etc, fornecido pelo atributo path do objeto em routes.js
    const routeParametersRegex = /:([a-zA-Z]+)/g 

    //faz troca do :id ou :qualquercoisa pela regex. user/:id => VIRA => user/([a-z0-9\-_]+) , /user vira /user
    // rotas que não passarem algum parâmetro voltam como /^\/users/ pois não passaram no teste
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)') 

    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`) // cria uma regex a partir dos resultados de pathWithParams

    return pathRegex //retorna essa regex
}