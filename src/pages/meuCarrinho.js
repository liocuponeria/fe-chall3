import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import React, { useState } from 'react';

export default function Carrinho() {
	const [count, setCount] = useState(0);
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
						<h1 className="title">Meu carrinho</h1>
					</div>
					<div className="cart__product">
						<div className="cart__product--item">
							<div className="cart__product--img">

							</div>
							<div className="cart__product--title">
								<h3 className="title">Boné bordado harry Poter</h3>
								<div className="cart__product--qtd">
									<button className="cart__product--btn" type="button" onClick={() => setCount(count - 1)}>-</button>
									<input type="text" name="qty" className="cart__product--qtd-input" value={count} /> 
									<button className="cart__product--btn" type="button" onClick={() => setCount(count + 1)}>+</button>
								</div>
								<div className="cart__product--qtd-price">R$30,00</div>
								<div className="cart__product--qtd-delete"><a href="" className="cart__product--qtd-btn">x</a></div>
							</div>
						</div>
						<div className="cart__product--price">
							<span>Total: R$30,00</span>
							<a href="#" className="cart__product--price-btn">Continuar</a>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
