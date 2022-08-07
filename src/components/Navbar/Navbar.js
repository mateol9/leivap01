import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className='nav'>
            <Link to='/' className='navBrand'>E-Commerce</Link>

            <div className='navFilter'>
                <Link to='/category/procesadores' className='navLink'>Procesadores</Link>
                <Link to='/category/graficas' className='navLink'>Tarjetas Graficas</Link>
                <Link to='/category/motherboards' className='navLink'>Motherboards</Link>
                <Link to='/category/perifericos' className='navLink'>Perifericos</Link>
            </div>

            <CartWidget />
        </nav>
    );
}

export default Navbar;