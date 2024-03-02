import React from 'react'
import { Logo } from './logo'
import { NavigationBar } from './navigation-bar'
import ActionButtons from './action-buttons'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 border-b h-20'>
            <Logo />
            <NavigationBar />
            <ActionButtons />
        </div>
    )
}
