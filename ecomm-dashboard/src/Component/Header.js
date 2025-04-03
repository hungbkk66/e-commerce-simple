import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    <Link to="/add" >Add product </Link>
                    <Link to="/update" > Update product </Link>
                    <Link to="/login" > Login </Link>
                    <Link to="/register" > Register </Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header;