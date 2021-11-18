import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Home({lista}) {
	return (
		<>
			<Head>
				<title>Cuponeria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header categoria={lista} />
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
						{lista.map(item => (
							<div className="product__card">
								<div className="product__card--item">
									<div className="product__card-img"><img src={item.image} alt={item.title} /></div>
									<div className="product__card--title">{item.title}</div>
									<div className="product__card--price">R${item.price}</div>
									<a href={`/produtos/${item.id}`} className="product__card--btn">Ver produto</a>
								</div>
							</div>
						))}
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}

export async function getStaticProps(){
	const res = await fetch('https://fakestoreapi.com/products');
	const json = await res.json();
	
	return {
		props: {
			lista: json
		}
	}
}