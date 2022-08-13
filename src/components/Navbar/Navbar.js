import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className='nav'>
            <Link to='/' className='navBrand'>E-Commerce</Link>

            <div className='navFilter'>
                <NavLink to='/category/procesadores' className='navLink'>Procesadores</NavLink>
                <NavLink to='/category/graficas' className='navLink'>Tarjetas Graficas</NavLink>
                <NavLink to='/category/motherboards' className='navLink'>Motherboards</NavLink>
                <NavLink to='/category/perifericos' className='navLink'>Perifericos</NavLink>
            </div>

            <CartWidget />
        </nav>
    );
}

export default Navbar;