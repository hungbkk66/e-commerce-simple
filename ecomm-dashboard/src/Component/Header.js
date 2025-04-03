import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))

    const navigate = useNavigate();
    function logOut() {
        localStorage.clear()
        navigate("/register");
    }


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/" >Product list </Link>
                                <Link to="/add" >Add product </Link>
                                <Link to="/update" > Update product </Link>
                                <Link to="/search" > Search product </Link>
                            </>
                            :
                            <>
                                <Link to="/login" > Login </Link>
                                <Link to="/register" > Register </Link>
                            </>
                    }

                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}
            </Navbar>
        </>
    )
}

export default Header;