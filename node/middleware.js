//middleware patter

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

// const passo3 = (ctx) => {
//     ctx.valor3 = 'mid3'
//     ctx()
// }

const passo4 = ctx => ctx.valor4 = 'mid4'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}


const ctx = {}

exec(ctx, passo1, passo2, passo4)

console.log(ctx)