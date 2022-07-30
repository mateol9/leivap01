import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () =>{
    return(
        <nav className='nav'>
            <div className='navBrand'>
                <span>E-Commerce</span>
            </div>

            <div className='navFilter'>
                <button>Procesadores</button>
                <button>Tarjetas Graficas</button>
                <button>Motherboards</button>
                <button>Perifericos</button>
            </div>

            <CartWidget />
        </nav>
    );
}

export default Navbar;