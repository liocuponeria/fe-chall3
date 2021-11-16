export default function Roupas(){
    return (
        <div>
          <div>
            <h1>{produto.title}</h1>
          </div>
        </div>
      )
} 
  
export async function getStaticProps({params}) {
    const results = await fetch(`https://fakestoreapi.com/products/category/${params.roupas}`).then(res => res.json());
    return {
        props: {
            results
        }
    }
}