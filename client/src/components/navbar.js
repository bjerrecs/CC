import { Nav, NavDropdown, Navbar, Container, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePicture from './profile-picture';

const NavbarRoot = () => {
    const { user, logout } = useAuth0();  


    if (user) {
        var username = user.name
        var profilepicture = user.picture
    } else {
        username = "Loading ..."
        profilepicture = "person.jpg"
    }
  
    if (user) {
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
                        <NavDropdown.Item href="/warehouse/locations">
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
                        <NavDropdown.Item href="/patch">
                            Patch
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Nav>
                    <NavDropdown title={<ProfilePicture />}>
                        <NavDropdown.Item href="/profile">
                                Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                                <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <p>no navbar</p>
        </div>
      );
    }
  };
  
  export default NavbarRoot;