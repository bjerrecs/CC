import { Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarRoot() {

const { logout } = useAuth0();  

  return (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
                src="/radar.svg"
                width="30"
                height="30"
                className="d-inline-block align-top pr-10"
                alt="React Bootstrap logo"
            />
            <b className="color-Onyx sidebar-brand-text">CONTROL<br/>CENTER</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

                <Nav.Link >
                    <div>
                        <Link to="/dashboard" className="navbarA">Dashboard</Link>
                    </div>
                </Nav.Link>
                
                <NavDropdown title="Clients">
                    <NavDropdown.Item >
                        <div>
                            <Link to="/clients" >Search Clients</Link>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                        <div>
                            <Link to="/client/new" className="darkA">New Client</Link>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                        <div>
                            <Link to="/client/modify" className="darkA">Modify Client</Link>
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Warehouse">
                    <NavDropdown.Item >
                        <div>
                            <Link to="/warehouse" className="darkA">Search</Link>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                        <div>
                            <Link to="/warehouse/location" className="darkA">Locations</Link>
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Maintenance">
                    <NavDropdown.Item >
                        <div>
                            <Link to="/maintenance/dashboard" className="darkA">View All planed</Link>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                        <div>
                            <Link to="/maintenance/schedule" className="darkA">Schedule Maintenance Window</Link>
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Tools">
                    <NavDropdown.Item >
                        <div>
                            <Link to="/email" className="darkA">Email</Link>
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>

            </Nav>
            <Nav>
                <NavDropdown title="Simon Bjerre">
                    <NavDropdown.Item >
                        <Nav.Link >
                            <Link to="/profile" className="darkA">Profile</Link>
                        </Nav.Link >
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Nav.Link >
                            <Link to="" className="darkA" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
                        </Nav.Link >
                    </NavDropdown.Item>
                </NavDropdown>
                <img
                    src="/person.jpg"
                    width="30"
                    height="30"
                    className="profileIcon"
                    alt="React Bootstrap logo"
                />
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

    </div>
  );
}

export default NavbarRoot;