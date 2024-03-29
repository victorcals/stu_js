const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'celular', preco: 899, fragil: true },
    { nome: 'ideapad', preco: 499, fragil: true },
    { nome: 'copo de plastico ', preco: 12.49, fragil: false }
]


console.log(produtos.filter(function (p) {
    return p.preco >= 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))