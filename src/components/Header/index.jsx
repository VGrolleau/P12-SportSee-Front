import '../../utils/style/Header.css';
import logo from '../../assets/logo-sportsee.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            {/* Creating a navigation bar with links to the future pages. */}
            <nav className='header-nav'>
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </header>
    )
}

export default Header;