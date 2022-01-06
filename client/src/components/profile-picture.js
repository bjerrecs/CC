import { useAuth0 } from "@auth0/auth0-react";

function ProfilePicture(props) {
    const { user } = useAuth0(); 

    if (user) {
        var profilepicture = user.picture
    } else {
        profilepicture = "person.jpg"
    }
    if (props.small === 'true') {
    return (
      <>
        <img
            src={profilepicture}
            width="30"
            height="30"
            alt="Profile"
            className="profilePicture"
        >
        </img>
      </>
    );} else {
      return (
        <>
        <img
            src={profilepicture}
            width="30"
            height="30"
            alt="Profile"
            className="profilePicture"
        >
        </img>
        {user.name}
      </>
      )
    }
  }
  
  export default ProfilePicture;
  