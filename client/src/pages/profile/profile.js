import { Container, Breadcrumb } from "react-bootstrap";
import PageHeader from '../../components/pageheader'
import ChnageProfile from './changeprofile';
import './profile.css'

function Profile() {
    return (
      <div>
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
                    <img src="/person.jpg" alt="asd" width="225" height="225"></img>
                    <h5 className="systemRole">Super Admin</h5>
                  </div>
                    
                    <div className="ProfileContainerInformation">
                        <h3>Simon Bjerre</h3>
                        <h5>Platform Engineer</h5>
                        
                        <hr />
                        <h6><b>Phone:</b> +45 51757001</h6>
                        <h6><b>Mail:</b> sb@lean-on.com</h6>
                        <h6><b>UID:</b> 1h61243xh812gf41jv8</h6>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <ChnageProfile />
                </div>
            </div>
            
          </Container>
      </div>
    );
  }
  
  export default Profile;
  