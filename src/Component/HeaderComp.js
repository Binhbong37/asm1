import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">
                        Ứng dụng quản lý nhân sự V1.0
                    </NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
