
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/register" >Register Here</Link>
                    <Link to="/LOGIN" >Login Here</Link>
                    <Link to="/searchid" >Search By Transaction ID</Link>
                </Nav>

            </Navbar>
        </div>
    )
}

export default Header