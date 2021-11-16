import Head from 'next/head'

import Logo from '../assets/logo.svg';
import Facebook from '../assets/face.svg';
import Instagram from '../assets/insta.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';



import Inicio from '../assets/inicio.svg';
import Roupas from '../assets/roupas.svg';
import Eletronico from '../assets/eletronicos.svg';
import Acessorio from '../assets/acessorios.svg';



import Link from 'next/link';

export default function Home({lista}) {
	return (
		<>
			<Head>
				<title>Cuponeria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="header">
				<div className="header__logo">
					<div className="container">
						<div className="logo">
							<a href="/"><Logo /></a>
						</div>
					</div>
				</div>
				<div className="header__menu">
					<div className="container">
						<ul className="header__menu--nav">
							<li><Inicio/><Link href="/">início</Link></li>
							<li><Roupas/><Link href="/roupas">roupas</Link></li>
							<li><Eletronico/><Link href="/eletronico">eletrônico</Link></li>
							<li><Acessorio/><Link href="/acessorio">acessório</Link></li>
							<li><Inicio/><Link href="/meu-carrinho">meu carrinho</Link></li>
						</ul>
					</div>
				</div>
			</header>
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
			<footer className="footer">
				<div className="container">
					<div className="footer__socialMidia">
						<a href="https://www.facebook.com/Cuponeria/" target="_blank"><Facebook /></a>
						<a href="https://www.instagram.com/cuponeria/?hl=pt-br" target="_blank"><Instagram /></a>
						<a href="https://twitter.com/Cuponeria" target="_blank"><Twitter /></a>
						<a href="https://www.youtube.com/channel/UCvdHfsvEleYAGYOhIzPwNGg" target="_blank"><Youtube /></a>
					</div>
				</div>
			</footer>
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