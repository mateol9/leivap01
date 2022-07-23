import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () =>{
    return(
        <nav className='nav'>
            <div className='navBrand'>
                <span>E-Commerce</span>
            </div>

            <div className='navFilter'>
                <button>Categoria 1</button>
                <button>Categoria 2</button>
                <button>Categoria 3</button>
                <button>Categoria 4</button>
            </div>

            <CartWidget />
        </nav>
    );
}

export default Navbar;