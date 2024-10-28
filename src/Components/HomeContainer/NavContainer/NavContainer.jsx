import React from 'react'
import './NavContainer.css'
import BrandLogo from './BrandLogo/BrandLogo'
import RegisterButton from './RegisterButton/RegisterButton'
import SignInButton from './SignInButton/SignInButton'
function NavContainer() {
    return (
        <>
            <div className="nav-container">
                <BrandLogo />
                <RegisterButton />
                <SignInButton />
            </div>
        </>
    )
}

export default NavContainer