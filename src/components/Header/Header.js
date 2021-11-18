import Logo from '../../assets/logo.svg';

import Inicio from '../../assets/inicio.svg';
import Roupas from '../../assets/roupas.svg';
import Eletronico from '../../assets/eletronicos.svg';
import Acessorio from '../../assets/acessorios.svg';

import Link from 'next/link';


export default function Header(){

    return (
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
                        <li><Roupas/><Link href={`/categoria/men's clothing`}>roupas</Link></li>
                        <li><Eletronico/><Link href="/categoria/electronics">eletrônicos</Link></li>
                        <li><Acessorio/><Link href="/categoria/women's clothing">acessórios</Link></li>
                        <li><Inicio/><Link href="/meuCarrinho">meu carrinho</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
