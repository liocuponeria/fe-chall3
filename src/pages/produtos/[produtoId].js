export default function Produto({ produto }) {
    return (
      <div>
        <div>
          <h1>{produto.title}</h1>
        </div>
      </div>
    )
  }
  
  export async function getStaticProps({params}) {
    const results = await fetch(`https://fakestoreapi.com/products/${params.produtoId.replace(/\-/g,'+')}`).then(res => res.json());
    return {
      props: {
        produto: results
      }
    }
  }

  export async function getStaticPaths(){
    const produtos = await fetch('https://fakestoreapi.com/products?limit=5').then(res => res.json());
    return {
      paths: produtos.map(produto => {
        const produtoId = produto.title.toLowerCase().replace(/ /g, '-');
        return {
          params: {
            produtoId
          }
        }
      }),
      fallback: false
    }
  }