import Head from 'next/head'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Category({categoria}) {
	return (
		<>
			<Head>
				<title>Cuponeria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="container">
				<main className="main"> 
					<div className="box">
						<h1 className="title">Sugestões para você</h1>
						<div className="ordenacao">
							<select>
								<option value="Ordenar por">Ordenar por</option>
								<option value="Menor preço">Menor preço</option>
								<option value="a - z">a - z</option>
								<option value="Mais recentes">Mais recentes</option>
							</select>
						</div>
					</div>
					<div className="product">
					Mensagem: {categoria.category}
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}

export async function getStaticPaths(){

	const res = await fetch(`https://fakestoreapi.com/products/categories`);
    const json = await res.json();

	const paths = json.map(item => {
		return { 
			params: { 
				categoria: item
			}
		}
	})

	console.log("Esse é um resultado", paths);

	return {
		paths,
		fallback: true,
	}
}
  
export async function getStaticProps(context) {

	const { categoria } = context.params;

    const res = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
    const json = await res.json();

    return {
        props: {
          categoria: json
        }
    }
}