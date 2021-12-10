import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { Icon } from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/feather/shoppingCart'
import { auth } from '../config/Config'
import { useHistory } from 'react-router-dom'

// receiving the user and totalproducts from other files
export const Navbar = ({ user, totalProducts }) => {

    const history = useHistory();

    //handles the logout function
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        //Navbar components
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h4>
                        e
                        <small class="text-muted" >Commerce</small>
                    </h4>
                </div>
            </div>
            <div className='rightside'>

                {/* if user not logged in then will only show login and sign up buttons */}
                {!user && <>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' class='btn btn-outline-success' to="login">LOGIN</Link></div>
                </>}
                {/* when user is logged in, they will be able to see cart,logout and their name on account       */}
                {user && <>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="cart">
                            <Icon icon={shoppingCart} size={20} />
                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span>
                    </div>
                    <div className='btn btn-danger btn-md'
                        onClick={handleLogout}>LOGOUT</div>
                </>}

            </div>
        </div>

    )
}
