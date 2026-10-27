const produtos = [
  { id: 1, nome: 'Caneta',  preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis',   preco: 1.2 }
]

// EXERCICIO 01

const nomes = produtos.map(p => p.nome)
console.log(nomes)

// EXERCICIO 02

const caros = produtos.filter(p => p.preco > 5)
console.log(caros)

// EXERCICIO 03

const baratos = produtos
  .filter(p => p.preco <= 5)
  .map(p => p.nome)

console.log(baratos)

// EXERCICIO 04

function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtos.find(p => p.id === id))
    }, 300)
  })
}

async function main() {
  console.log('Buscando...')
  const produto = await buscarProduto(2)
  console.log(produto)
}

main()