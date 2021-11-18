import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Carrinho() {
	return (
		<>
			<Head>
				<title>Cuponeria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="container">
				<main className="main"> 
					<div className="cart__title">
						<h1 className="title">Roupas</h1>
					</div>

				</main>
			</div>
			<Footer />
		</>
	)
}
