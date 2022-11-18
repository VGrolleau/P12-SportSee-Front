import '../../utils/style/SideNav.css';
import iconCycle from '../../assets/icon-cycle.svg';
import iconGym from '../../assets/icon-gym.svg';
import iconStrength from '../../assets/icon-strength.svg';
import iconSwim from '../../assets/icon-swim.svg';
import { Link } from 'react-router-dom';

function SideNav() {
    const actualDate = new Date();

    return (
        <aside className='sidenav'>
            {/* Creating a navigation bar with icon links to future categories. */}
            <nav className='sidenav-nav'>
                <Link to="/"><img src={iconGym} alt="" /></Link>
                <Link to="/"><img src={iconSwim} alt="" /></Link>
                <Link to="/"><img src={iconCycle} alt="" /></Link>
                <Link to="/"><img src={iconStrength} alt="" /></Link>
            </nav>
            <p>Copyright, SportSee {actualDate.getFullYear()}</p>
        </aside>
    )
}

export default SideNav;