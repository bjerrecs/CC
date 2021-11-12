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
            
            <NavDropdown title="Clients" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/clients" >Search Clients</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/client/new" className="darkA">New Client</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/client/modify" className="darkA">Modify Client</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Warehouse" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/warehouse" className="darkA">Dashboard</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/warehouse/location" className="darkA">Manage locations</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/warehouse/items" className="darkA">Manage items</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools" id="collasible-nav-dropdown">
                <Nav.Link ><Link to="/email" className="darkA">Maintenance Email</Link></Nav.Link>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Simon Bjerre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

    </div>
  );
}

export default NavbarRoot;