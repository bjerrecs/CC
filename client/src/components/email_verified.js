import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillStarFill } from "react-icons/bs";
import './email_verified.css'

function EmailVerified() {
    const { user } = useAuth0();

    if (user.email_verified) {
        var email_verified = <BsFillStarFill />
    } else {
        email_verified = "N/A"
    }
    return (
            <>{email_verified}</>
    );
};

export default EmailVerified;
    