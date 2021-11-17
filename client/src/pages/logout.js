import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function Logout() {

    const { logout } = useAuth0();

    return (
      <div>
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </Button>
      </div>
    );
  }
  
  export default Logout;
  