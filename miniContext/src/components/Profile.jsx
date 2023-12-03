import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="bg-white my-4 py-2 w-1/4 mx-auto rounded">
        Please Login!
      </div>
    );

  return (
    <div className="bg-white my-4 py-2 w-1/4 mx-auto rounded text-orange-500 text-xl">
      Welcome {user.username}!
    </div>
  );
}

export default Profile;
