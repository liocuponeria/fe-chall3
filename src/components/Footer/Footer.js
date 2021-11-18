
import Facebook from '../../assets/face.svg';
import Instagram from '../../assets/insta.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';

export default function Footer(){
    return (
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
    );
}