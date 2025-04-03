import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add" >Add product </Link>
                                <Link to="/update" > Update product </Link>
                            </>
                            :
                            <>
                                <Link to="/login" > Login </Link>
                                <Link to="/register" > Register </Link>
                            </>
                    }

                </Nav>
                <Nav>
                    <NavDropdown title="User Name">

                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header;