import { Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarRoot() {
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

                <Nav.Link ><Link to="/dashboard" className="navbarA">Dashboard</Link></Nav.Link>
                
                <NavDropdown title="Clients">
                    <NavDropdown.Item ><Link to="/clients" >Search Clients</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/client/new" className="darkA">New Client</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/client/modify" className="darkA">Modify Client</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Warehouse">
                    <NavDropdown.Item ><Link to="/warehouse" className="darkA">Search</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/warehouse/location" className="darkA">Locations</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Maintenance">
                    <NavDropdown.Item ><Link to="/maintenance/dashboard" className="darkA">View All planed</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/maintenance/schedule" className="darkA">Schedule Maintenance Window</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Tools">
                    <NavDropdown.Item ><Link to="/email" className="darkA">Email</Link></NavDropdown.Item>
                </NavDropdown>

            </Nav>
            <Nav>
                <Nav.Link >
                    <Link className="navbarA" to="/profile">Simon Bjerre</Link>
                </Nav.Link>
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