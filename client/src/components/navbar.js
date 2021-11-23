import { Nav, NavDropdown, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarRoot() {

const { user, logout } = useAuth0();  


if (!user) {
    var username = "Loading ..."
    var profilepicture = "person.jpg"
} else {
    username = user.name
    profilepicture = user.picture
}

  return (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/dashboard">
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

                <Nav.Link href="/dashboard">
                    Dashboard
                </Nav.Link>

                <NavDropdown title="Clients">
                    <NavDropdown.Item href="/clients">
                        Search Clients
                    </NavDropdown.Item>
                    <NavDropdown.Item  href="/client/new">
                        New client
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/client/modify">
                            Modify Client
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Warehouse">
                    <NavDropdown.Item href="/warehouse">
                        Search
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/warehouse/location">
                        Locations
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Maintenance">
                    <NavDropdown.Item href="/maintenance/dashboard">
                        View All planed
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/maintenance/schedule">
                        Schedule Maintenance Window
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Tools">
                    <NavDropdown.Item href="/email">
                        Email
                    </NavDropdown.Item>
                </NavDropdown>

            </Nav>
            <Nav>
                <NavDropdown title={username}>
                    <NavDropdown.Item href="/profile">
                            Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                            <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                    </NavDropdown.Item>
                </NavDropdown>
                <img
                    src={profilepicture}
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