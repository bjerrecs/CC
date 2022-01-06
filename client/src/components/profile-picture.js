import { useAuth0 } from "@auth0/auth0-react";

function ProfilePicture(props) {
    const { user } = useAuth0(); 

    if (user) {
        var profilepicture = user.picture
    } else {
        profilepicture = "person.jpg"
    }
    if (props.small == 'true') {
    return (
      <>
        <img
            src={profilepicture}
            width="35"
            height="35"
            className="profilePicture"
        >
        </img>
      </>
    );} else {
      return (
        <>
        {user.name}
        <img
            src={profilepicture}
            width="35"
            height="35"
            className="profilePicture"
        >
        </img>
      </>
      )
    }
  }
  
  export default ProfilePicture;
  