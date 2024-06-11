import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="navbar py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="nav-logo flex items-center">
                    <img src="" alt="" className="h-8 w-auto mr-2" />
                    <p className="text-xl font-semibold">TeeRex Store</p>
                </div>
                <ul className="flex">
                    <li onClick={() => { setMenu('shop') }} className="mr-4">
                        <Link to='/' className={`hover:text-orange-800 ${menu === 'shop' && 'text-orange-800'}`}>Shop</Link>
                        {menu === 'shop' && <hr className="border-orange-800 mt-1" />}
                    </li>
                    <li onClick={() => { setMenu('men') }} className="mr-4">
                        <Link to='/men' className={`hover:text-orange-800 ${menu === 'men' && 'text-orange-800'}`}>Men</Link>
                        {menu === 'men' && <hr className="border-orange-800 mt-1" />}
                    </li>
                    <li onClick={() => { setMenu('women') }} className="mr-4">
                        <Link to='/women' className={`hover:text-orange-800 ${menu === 'women' && 'text-orange-800'}`}>Women</Link>
                        {menu === 'women' && <hr className="border-orange-800 mt-1" />}
                    </li>
                    <li onClick={() => { setMenu('kids') }} className="mr-4">
                        <Link to='/kids' className={`hover:text-orange-800 ${menu === 'kids' && 'text-orange-800'}`}>Kids</Link>
                        {menu === 'kids' && <hr className="border-orange-800 mt-1" />}
                    </li>
                </ul>
                <div className="nav-login-cart flex items-center">
                    <button className="bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded mr-4">Login</button>
                    <Link to='/cart' className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"  fill="#434343"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>
                        {cartItems.length}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
