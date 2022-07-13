let productsCart = [
    {
        id: 0,
        name: "Leite",
        price: 7.00,
    },
    {
        id: 1,
        name: "Nescau",
        price: 5.00,
    },
    {
        id: 2,
        name: "coca-cola",
        price: 8.00,
    },
    {
        id: 3,
        name: "macarrao",
        price: 4.00,
    },
]
let body = document.querySelector('body')
let main = document.createElement('main')
let productList = document.createElement('ul')
let secaoTotal = document.createElement('section')
let totalCompra = document.createElement('h1')
let buttonEnd = document.createElement('button')

body.appendChild(main)
main.appendChild(productList)
buttonEnd.innerText = 'Finalizar Compra'
secaoTotal.appendChild(totalCompra)
secaoTotal.appendChild(buttonEnd)
main.appendChild(secaoTotal)
totalCompra.innerText = 'Total é igual a: ' + soma(productsCart) + ' R$'
productList.appendChild(listarProdutos(productsCart))





function listarProdutos(listaProdutos) {
    for (let i = 0; i < listaProdutos.length; i++) {


        let produto = listaProdutos[i]

        let cardProduto = criarCardProduto(produto)

        productList.appendChild(cardProduto)

    }

}

function criarCardProduto(produto) {

    let nome = produto.name
    let preco = produto.price

    let tagLi = document.createElement("li")
    let tagNome = document.createElement("h2")
    let tagPreco = document.createElement("p")

    tagNome.innerText = nome
    tagPreco.innerText = `R$ ${preco}`.replace(".", ",")

    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}


function soma(listaDeProdutos) {
    let conta = 0

    for (let i = 0; i < listaDeProdutos.length; i++) {

        let produto = listaDeProdutos[i]
        let preco = produto.price

        conta = conta + preco

    }
    return conta
}
