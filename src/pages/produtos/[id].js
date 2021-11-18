import Head from 'next/head'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Link from 'next/link';

export async function getServerSideProps(context){
  	const id = context.query.id;

  	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const json = await res.json();


  return {
    props: {
      id: json
    }
  }
}

export default function Produtos(props) {
	return (
		<>
			<Head>
				<title>Cuponeria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="container">
				<main className="main"> 
					<div className="product__result">
						<div className="product__img--item">
							<img src={props.id.image} alt={props.id.title} />
						</div>
						<div className="product__info__product">
							<h3 className="product__info__product--title">{props.id.title}</h3>
							<span className="product__info__product--price">R${props.id.price}</span>
							<p className="product__info__product--content">{props.id.description}</p>

							<a href="" className="product__info__product--btn">Adicionar ao carrinho</a>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
  