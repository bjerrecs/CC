import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import PageHeader from '../../components/pageheader'
import ChnageProfile from './changeprofile';
import './profile.css'
import EmailVerified from "../../components/email_verified";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
            <Container>
  
              <br />
              <Breadcrumb>
                <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
              </Breadcrumb>   
            
              <PageHeader h1="Profile" h3=""/> 
  
              <div className="profileFlex">
                  <div className="ProfileContainer">
                    <div>
                      <img src={user.picture} alt="asd" width="225" height="225"></img>
                      <h5 className="systemRole">Super Admin</h5>
                    </div>
                      
                      <div className="ProfileContainerInformation">
                          <h3>{user.name}</h3>
                          <h5>Platform Engineer</h5>
                          
                          <hr />
                          <h6><b>Phone:</b> +45 51757001</h6>
                          <h6><b>Mail:</b> {user.email}<span><EmailVerified /></span></h6>
                          <h6><b>SUB:</b> {user.sub}</h6>
                      </div>
                  </div>
                  <div>
  
                  </div>
                  <div>
                      <ChnageProfile />
                  </div>
              </div>
              
            </Container>
    )
  );
};

export default Profile;