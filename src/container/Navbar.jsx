// import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../context/Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const context = useContext(ShoppingCartContext); 

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/mens-clothing'
                        className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                }>
                        Mens-Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/womens-clothing'
                        className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                }>
                        Womens-Clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3 '>
                <li className='text-black/60'>
                    duvanpalomino@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                }>
                        Sing In
                    </NavLink>
                </li>
                <li className='flex justify-between items-center h-6 w-6'>
                    <ShoppingCartIcon />{context.count}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;